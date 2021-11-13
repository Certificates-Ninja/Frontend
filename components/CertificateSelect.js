import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

export default function CertificateSelect() {
  return (
    <div>
      <div className="overflow-hidden bg-yellow-200">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
              <ProgressBar
                percent={35}
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
                Select Certificate
              </h1>
              <p className="max-w-xl mb-4 text-base text-gray-700">
                You can choose from a list of available templates / upload your
                custom template (in HTML format) / create your own template with
                our inbuilt template creator tool.
                <br />
                <br />
                We not only have templates for certificates but also event
                badges and much more. All the templates are customizable.
                <br />
                <br />
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
                    Select certificate
                  </h3>
                  <form>
                    <label className="inline-block mb-2 font-medium">
                      How do you want to create your certificate
                    </label>
                    <select
                      class="w-full h-12 pl-3 text-sm border-gray-100 rounded-lg"
                      id="type"
                    >
                      <option>Choose an existing certificate template</option>
                      <option>
                        Upload a custom certificate template (HTML)
                      </option>
                      <option>
                        Create your own certificate template with our tool
                      </option>
                    </select>
                    <br />
                    <br />
                    <br />
                    <div class="flex items-center justify-center bg-grey-lighter">
                      <label class="w-screen flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:text-yellow-400">
                        <svg
                          class="w-8 h-8"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span class="mt-2 text-base leading-normal">
                          Select a template (html)
                        </span>
                        <input type="file" class="hidden" />
                      </label>
                    </div>
                    <br />
                    <br />
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                      >
                        Browse Templates
                      </button>
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                      >
                        Continue to creator tool
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
