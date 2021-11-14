import React from "react";
var ScrollAnim = require("rc-scroll-anim");

export default function Features() {
  var ScrollParallax = ScrollAnim.Parallax;
  return (
    <div className="flex-col">
      <div class="relative w-full px-8 bg-yellow-400 sm:py-32 md:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative" style={{ fontFamily: "Poppins" }}>
                What makes us unique?
              </span>
            </span>
          </h2>
        </div>
        <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
          <div className="p-5 duration-300 transform border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>

              <p className="text-lg ml-3 font-bold leading-5">
                Powered by Blockchain and Web3
              </p>
            </div>
            <p className="text-sm text-gray-900">
              The certificates are stored in Inter Planetry File System (IPFS)
              which is decentralized and immutable storage system.
            </p>
          </div>
          <div className="p-5 duration-300 transform border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              <p className="text-lg ml-3 font-bold leading-5">
                Tamper Proof and Authentic{" "}
              </p>
            </div>
            <p className="text-sm text-gray-900">
              As no centralized storage services are used, your certificates can
              not be tampered and will alaways remain on the decentralized
              internet.
            </p>
          </div>
          <div className="p-5 duration-300 transform border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="text-lg ml-3 font-bold leading-5">
                Free and open source
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Send certificates for upto 10,000 participants seamlessly in just
              one click. You can opt to use the Free version with your own SMTP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
