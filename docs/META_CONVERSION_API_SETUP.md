# Meta Conversion API Setup Guide

## Overview

This guide explains how to set up and configure the Meta Conversion API for your Down2Detail website to track lead conversions from various forms and interactions.

## Prerequisites

1. **Meta Business Account**: You need a Meta Business account with access to Facebook Business Manager
2. **Meta Pixel**: A Meta Pixel must be created and installed on your website
3. **System User Access Token**: Required for server-side API calls

## Environment Variables

Add these environment variables to your `.env.local` file:

```env
# Meta Conversion API Configuration
META_PIXEL_ID=your_meta_pixel_id_here
META_ACCESS_TOKEN=your_meta_access_token_here

# Optional: Enable/disable tracking in development
NEXT_PUBLIC_ENABLE_META_TRACKING=false
```

### How to Get Your Meta Pixel ID

1. Go to [Facebook Business Manager](https://business.facebook.com)
2. Navigate to **Events Manager**
3. Select your Pixel
4. Your Pixel ID will be displayed at the top (15-17 digit number)

### How to Get Your Access Token

1. In Facebook Business Manager, go to **Business Settings**
2. Navigate to **System Users** under the Users section
3. Create a new System User or select an existing one
4. Generate an Access Token with the following permissions:
   - `ads_management`
   - `business_management`
5. Copy the generated token

## What Events Are Tracked

The implementation automatically tracks these conversion events:

### 1. Contact Form Submissions

- **Event Name**: `Lead`
- **Triggered**: When someone submits the contact form
- **Data Collected**: Name, email, phone, location
- **Custom Data**: Message length, form source

### 2. Newsletter Signups

- **Event Name**: `Lead`
- **Triggered**: When someone subscribes to newsletter (footer)
- **Data Collected**: Email address
- **Custom Data**: Signup source, page URL

### 3. Coming Soon Email Collection

- **Event Name**: `Lead`
- **Triggered**: When someone signs up for early access
- **Data Collected**: Email address
- **Custom Data**: Signup source

### 4. Service Inquiries

- **Event Name**: `Lead`
- **Triggered**: When someone inquires about specific services
- **Data Collected**: Contact information
- **Custom Data**: Service type, inquiry source

## Data Privacy & Security

### PII Hashing

All personally identifiable information (PII) is automatically hashed using SHA-256 before being sent to Meta:

- Email addresses
- Phone numbers
- Names
- Location data

### User Data Processing

The system:

- Normalizes phone numbers (adds country code if missing)
- Splits full names into first/last name components
- Generates unique lead IDs for tracking
- Includes location data (Montreal, Quebec, Canada by default)

## Testing

### Development Mode

- Set `NEXT_PUBLIC_ENABLE_META_TRACKING=false` to disable tracking in development
- Events will be logged to console but not sent to Meta

### Production Mode

- Set `NEXT_PUBLIC_ENABLE_META_TRACKING=true` or remove the variable
- All events will be sent to Meta Conversion API

### Verification

1. Check the **Events Manager** in Facebook Business Manager
2. Look for incoming conversion events
3. Use the **Test Events** tool to verify data quality

## API Endpoint

The Meta Conversion API integration uses:

- **Endpoint**: `/api/meta-conversion`
- **Method**: `POST`
- **Purpose**: Server-side conversion tracking

## Example Conversion Data

Here's what gets sent to Meta for a contact form submission:

```json
{
  "data": [
    {
      "action_source": "system_generated",
      "custom_data": {
        "event_source": "crm",
        "lead_event_source": "Down2Detail Website",
        "message_length": 150,
        "form_source": "Contact Page"
      },
      "event_name": "Lead",
      "event_time": 1673035686,
      "user_data": {
        "em": [
          "7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"
        ],
        "lead_id": 1234567890123456,
        "ph": [
          "6069d14bf122fdfd931dc7beb58e5dfbba395b1faf05bdcd42d12358d63d8599"
        ],
        "fn": ["hashed_first_name"],
        "ln": ["hashed_last_name"],
        "ct": ["hashed_city"],
        "st": ["hashed_state"],
        "country": ["hashed_country"]
      }
    }
  ]
}
```

## Troubleshooting

### Common Issues

1. **Events not showing in Events Manager**

   - Verify your Pixel ID and Access Token
   - Check that `NEXT_PUBLIC_ENABLE_META_TRACKING` is not set to `false`
   - Look for error messages in browser console

2. **Invalid Access Token**

   - Regenerate the token in Business Manager
   - Ensure the System User has correct permissions
   - Check token expiration

3. **Pixel ID not found**
   - Verify the Pixel ID is correct (15-17 digits)
   - Ensure the Pixel belongs to your Business Manager

### Debug Logs

Check the browser console and server logs for:

- `Meta conversion tracked successfully` (success)
- `Meta tracking failed` (errors)
- `Meta tracking is disabled in development mode` (when disabled)

## Support

For additional help:

1. Check Meta's [Conversion API documentation](https://developers.facebook.com/docs/marketing-api/conversions-api)
2. Use Facebook's [Events Manager Test Events tool](https://www.facebook.com/events_manager)
3. Review the implementation in `/lib/meta-tracking.ts` and `/app/api/meta-conversion/route.ts`
