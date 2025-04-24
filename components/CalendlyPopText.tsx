"use client";

import { useEffect } from "react";
import Button from "./ui/Button";

const CalendlyPopText = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendly = () => {
    // @ts-ignore
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/down2detail-ca/consultation",
    });
  };

  return (
    <Button onClick={openCalendly} variant="primary" className="ml-4">
      Book Now
    </Button>
  );
};

export default CalendlyPopText;

{
  /*

<!-- Calendly link widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/hamza-ekram786/30min?background_color=d9d9d9'});return false;">Book Now</a>
<!-- Calendly link widget end --></link>

*/
}
