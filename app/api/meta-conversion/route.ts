import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

interface ConversionData {
  event_name: string;
  event_time?: number;
  user_data: {
    em?: string[];
    ph?: string[];
    fn?: string[];
    ln?: string[];
    ct?: string[];
    st?: string[];
    zp?: string[];
    country?: string[];
    lead_id?: number;
  };
  custom_data?: {
    event_source: string;
    lead_event_source: string;
    [key: string]: any;
  };
  action_source: string;
}

interface MetaConversionRequest {
  eventName: string;
  userData: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  customData?: {
    [key: string]: any;
  };
  eventTime?: number;
}

// Hash function for PII data
function hashData(data: string): string {
  return crypto
    .createHash("sha256")
    .update(data.toLowerCase().trim())
    .digest("hex");
}

// Normalize phone number (remove non-digits and add country code if needed)
function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  // If it's a North American number without country code, add +1
  if (digits.length === 10) {
    return `1${digits}`;
  }
  return digits;
}

export async function POST(request: NextRequest) {
  try {
    const body: MetaConversionRequest = await request.json();

    // Validate required environment variables
    const pixelId = process.env.META_PIXEL_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      console.error("Missing Meta Pixel ID or Access Token");
      return NextResponse.json(
        { error: "Meta Conversion API not configured" },
        { status: 500 }
      );
    }

    // Prepare user data with hashed PII
    const userData: ConversionData["user_data"] = {};

    if (body.userData.email) {
      userData.em = [hashData(body.userData.email)];
    }

    if (body.userData.phone) {
      const normalizedPhone = normalizePhone(body.userData.phone);
      userData.ph = [hashData(normalizedPhone)];
    }

    if (body.userData.firstName) {
      userData.fn = [hashData(body.userData.firstName)];
    }

    if (body.userData.lastName) {
      userData.ln = [hashData(body.userData.lastName)];
    }

    if (body.userData.city) {
      userData.ct = [hashData(body.userData.city)];
    }

    if (body.userData.state) {
      userData.st = [hashData(body.userData.state)];
    }

    if (body.userData.zipCode) {
      userData.zp = [hashData(body.userData.zipCode)];
    }

    if (body.userData.country) {
      userData.country = [hashData(body.userData.country)];
    }

    // Generate a unique lead ID based on timestamp and email
    const leadId = body.userData.email
      ? parseInt(
          crypto
            .createHash("md5")
            .update(body.userData.email + Date.now())
            .digest("hex")
            .substring(0, 15),
          16
        )
      : Math.floor(Math.random() * 9999999999999999);

    userData.lead_id = leadId;

    // Prepare conversion data
    const conversionData: ConversionData = {
      event_name: body.eventName,
      event_time: body.eventTime || Math.floor(Date.now() / 1000),
      user_data: userData,
      custom_data: {
        event_source: "crm",
        lead_event_source: "Down2Detail Website",
        ...body.customData,
      },
      action_source: "system_generated",
    };

    // Prepare the payload for Meta Conversion API
    const payload = {
      data: [conversionData],
    };

    // Send to Meta Conversion API
    const metaResponse = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const metaResult = await metaResponse.json();

    if (!metaResponse.ok) {
      console.error("Meta Conversion API Error:", metaResult);
      return NextResponse.json(
        { error: "Failed to send conversion event", details: metaResult },
        { status: 500 }
      );
    }

    console.log("Meta Conversion API Success:", metaResult);

    return NextResponse.json({
      success: true,
      message: "Conversion event sent successfully",
      leadId: leadId,
      eventsReceived: metaResult.events_received,
      fbtrace_id: metaResult.fbtrace_id,
    });
  } catch (error) {
    console.error("Meta Conversion API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
