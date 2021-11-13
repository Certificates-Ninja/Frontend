import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

export default function SetupForm() {
  return (
    <div>
      <div className="overflow-hidden bg-yellow-200">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
              <ProgressBar
                percent={68}
                filledBackground="linear-gradient(to right, #000000, #000000)"
              >
                <Step transition="scale">
                  {({ accomplished }) => (
                    <img
                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                      width="30"
                      src="assets/s1.png"
                    />
                  )}
                </Step>
                <Step transition="scale">
                  {({ accomplished }) => (
                    <img
                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                      width="30"
                      src="assets/s2.png"
                    />
                  )}
                </Step>
                <Step transition="scale">
                  {({ accomplished }) => (
                    <img
                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                      width="30"
                      src="assets/s3.png"
                    />
                  )}
                </Step>
                <Step transition="scale">
                  {({ accomplished }) => (
                    <img
                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                      width="30"
                      src="assets/s5.png"
                    />
                  )}
                </Step>
              </ProgressBar>
              <br />
              <br />
              <br />
              <h1
                className="max-w-xl mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
                style={{ fontFamily: "Poppins", lineHeight: "1.5" }}
              >
                Setup your mailing
              </h1>
              <p className="max-w-xl mb-4 text-base text-gray-700">
                In order to be able to send emails, you are required to setup
                this tool using your custom SMTP credentials.{" "}
                <a className="underline">
                  Learn more about how to get your own SMTP credentials.
                </a>
                <br />
                <br />
                If you don't have an SMTP, you can opt to use our SMTP by
                checking the box in the end of the form. However, this is only
                intended for testing purposes.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="relative">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                >
                  <defs>
                    <pattern
                      id="766323e1-e594-4ffd-a688-e7275079d540"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                    width="52"
                    height="24"
                  />
                </svg>
                <div className="relative bg-yellow-400 rounded shadow-2xl p-7 sm:p-10">
                  <h3
                    style={{ fontFamily: "Poppins" }}
                    className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl"
                  >
                    Setup Your SMTP
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label className="inline-block mb-1 font-medium">
                        Host{" "}
                      </label>
                      <input
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        Port
                      </label>
                      <input
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        Username
                      </label>
                      <input
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        Password
                      </label>
                      <input
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        From email
                      </label>
                      <input
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        From name
                      </label>
                      <input
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <br />
                    <label class="flex items-center text-sm">
                      <input
                        type="checkbox"
                        class="w-6 h-6 border border-gray-200 rounded-md"
                      />
                      <span class="ml-3 font-medium">
                        I don't have an SMTP. Use a free SMTP (for testing
                        purposes only).{" "}
                      </span>
                    </label>
                    <br />
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                      >
                        Continue
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      We respect your privacy. We do not store your credentials.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
