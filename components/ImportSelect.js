import React, { useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import axios from "axios";
import Router from "next/router";
import { Link } from "@chakra-ui/layout";

export default function ImportSelect() {
  const [importType, setImportType] = useState("file");
  const [csvFile, setCsvFile] = useState();
  const [csvContent, setCsvContent] = useState();

  function setIdentifier() {
    if (!sessionStorage.getItem("identifierSet")) {
      sessionStorage.setItem("identifierSet", true);
      sessionStorage.setItem(
        "identifierId",
        Math.random().toString(36).substring(2, 20)
      );
    }
  }

  React.useEffect(() => {
    setIdentifier();
  });

  function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("identifier", sessionStorage.getItem("identifierId"));
    formData.append("importType", importType);
    formData.append("csvFile", csvFile);
    formData.append("csvContent", csvContent);

    axios
      .post(process.env.NEXT_PUBLIC_BACKEND_DOMAIN + "/import", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async function (response) {
        sessionStorage.setItem("importComplete", true);
        sessionStorage.setItem("csvPath", response.data.csvPath);

        await Router.push("/certificate");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="overflow-hidden bg-yellow-200">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
              <ProgressBar
                percent={0}
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
                Import participant data
              </h1>
              <p className="max-w-xl mb-4 text-base text-gray-700">
                You can import participant data in CSV / XSLV formats or you can
                optionally copy and paste the data manually into the text area
                provided.
                <br />
                <br />
                Make sure that the participant data contains the{" "}
                <i>name and email </i>
                of all the participants who are expected to receive the
                certificates. <a className="underline"></a>
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
                    How do you wish to import?
                  </h3>
                  <form>
                    <label className="inline-block mb-2 font-medium">
                      Choose your desired import method
                    </label>
                    <select
                      class="w-full h-12 pl-3 text-sm border-gray-100 rounded-lg"
                      id="type"
                      onChange={(e) => setImportType(e.target.value)}
                      name="type"
                    >
                      <option value="file" selected={true}>
                        Import as CSV
                      </option>
                      {/*<option>Import as XLSV</option>*/}
                      <option value="paste">Copy and paste manually</option>
                    </select>
                    <br />
                    <br />

                    {importType === "file" ? (
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
                            Select a file
                          </span>
                          <input
                            type="file"
                            class="hidden"
                            name="csv_file"
                            accept="text/csv"
                            onChange={(e) => setCsvFile(e.target.files[0])}
                          />
                        </label>
                      </div>
                    ) : (
                      <div>
                        <label className="inline-block mb-2 font-medium">
                          Copy and paste the participant info below
                        </label>
                        <textarea
                          class="w-full p-3 text-sm border-gray-200 rounded-lg"
                          placeholder="Example :
                        Guru, guru@mail.com"
                          rows="8"
                          id="message"
                          name="csv_content"
                          onChange={(e) => setCsvContent(e.target.value)}
                        ></textarea>
                      </div>
                    )}
                    <br />
                    <Link href="/certificate">
                      <div className="mt-4 mb-2 sm:mb-4">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                          onClick={handleSubmit}
                        >
                          Continue
                        </button>
                      </div>
                    </Link>
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
