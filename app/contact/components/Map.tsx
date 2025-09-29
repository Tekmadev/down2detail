"use client";

export default function Map() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-full h-[400px]">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5589.706164354281!2d-73.64625062246401!3d45.53316197107529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918fdbb7270d3%3A0xd826b0ab46a2bffb!2s8595%20Av.%20Bloomfield%2C%20Montr%C3%A9al%2C%20QC%20H3N%202J4!5e0!3m2!1sen!2sca!4v1759028393084!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Montreal"
          aria-label="Google Map showing our location in Montreal"
        ></iframe>
      </div>
      <div className="p-4 bg-gray-800 text-center text-sm text-secondary-light">
        <a
          href="https://www.google.com/maps/place/8595+Av.+Bloomfield,+Montr%C3%A9al,+QC+H3N+2J4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#d6781c] hover:underline transition-colors font-medium"
        >
          Get Directions →
        </a>
      </div>
    </div>
  );
}