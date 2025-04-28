const ContactHeader = () => {
    return(
        <div className="bg-[#b53904] text-white py-2 md:py-3">
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
              href="mailto:down2detail.ca@gmail.com"
              className="text-sm hover:text-white hover:underline transition-colors"
            >
              down2detail.ca@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center text-white space-x-3 py-1 sm:py-0">
          {/* <a
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
            </a> */}
            <a
            href="https://www.instagram.com/down2detail.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <div className="w-4 h-4 relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
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