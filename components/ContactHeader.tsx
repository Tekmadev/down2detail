const ContactHeader = () => {
    return(
        <div className="bg-[#89807a] text-white py-2 md:py-3">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          <div className="flex items-center">
            <div className="w-5 h-5 mr-2 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <a
              href="tel:+14384838175"
              className="text-sm hover:text-white hover:underline transition-colors"
            >
              +1 438 483 8175
            </a>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 mr-2 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <a
              href="mailto:precisioncontractinginfo@gmail.com"
              className="text-sm hover:text-white hover:underline transition-colors"
            >
              down2detail.ca@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center text-white space-x-3 py-1 sm:py-0">
          <a
            href="https://www.instagram.com/down2detail.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3b5998] rounded-full w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <div className="w-4 h-4 relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
    );
};

export default ContactHeader;