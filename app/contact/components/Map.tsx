"use client";

export default function Map() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-full h-[400px]">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.2906789884787!2d-73.60809332309651!3d45.564592871075746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91ecc2902cd2d%3A0xa2ea447940461227!2s3399%20Boul%20Cr%C3%A9mazie%20E%2C%20Montr%C3%A9al%2C%20QC%20H1Z%202J1!5e0!3m2!1sen!2sca!4v1746448354819!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Montreal"
          aria-label="Google Map showing our location in Ottawa"
        ></iframe>
      </div>
      <div className="p-4 bg-gray-800 text-center text-sm text-secondary-light">
        <a
          href="https://www.google.com/maps/place/3399+Boul+Cr%C3%A9mazie+E,+Montr%C3%A9al,+QC+H1Z+2J1"
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