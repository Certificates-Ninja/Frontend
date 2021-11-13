import Tilt from "react-parallax-tilt";
import "@fontsource/poppins/800.css";
import TextLoop from "react-text-loop";

export const Hero = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-xl lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <TextLoop interval="4000">
              <h1
                className="max-w-xl mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
                style={{ fontFamily: "Poppins", lineHeight: "1.5" }}
              >
                Immutable and tamper resistant <br /> certificates improving
                authenticity.
              </h1>
              <h1
                className="max-w-xl mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
                style={{ fontFamily: "Poppins", lineHeight: "1.5" }}
              >
                Blockchain and Non Fungible Tokens <br /> for the next gen
                certificates.
              </h1>
              <h1
                className="max-w-xl mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
                style={{ fontFamily: "Poppins", lineHeight: "1.5" }}
              >
                Send certificates to upto 10,000 users
                <br /> seamlessly in just a single click.
              </h1>
            </TextLoop>
            <p className="text-base text-gray-700 md:text-lg">
              Are you hosting an event and do you wish to present certificates
              to your participants? With Certificates Ninja, you can seamlessly
              send immutable certificates and event badges powered by
              blockchain.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a href="#_" class="relative mt-5">
              <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded"></span>
              <span class="relative inline-block w-full h-full px-8 py-3 text-base font-bold bg-white border-2 border-black rounded hover:bg-yellow-400 xl:text-xl fold-bold">
                Create Certificates
              </span>
            </a>
          </div>
          <br />
          <br />
          <svg
            width="217"
            height="59"
            viewBox="0 0 217 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M156 35.2656H151.597V17.5564H162.426V21.1743H156V24.595H162.426V28.2129H156V35.2656Z"
              fill="black"
            />
            <path
              d="M168.851 31.6336H173.014V21.1742H168.851V31.6336ZM166.589 35.2656V33.4918H164.447V19.316H166.589V17.5563H175.276V19.316H177.418V33.4918H175.276V35.2656H166.589ZM164.567 17.6126H166.589V19.316H164.567V17.6126ZM175.276 17.5563H177.418V19.3159H175.276V17.5563ZM175.276 33.4918H177.418V35.2092H175.276V33.4918ZM164.447 33.4918H166.589V35.2655H164.447V33.4918Z"
              fill="black"
            />
            <path
              d="M190.269 35.2655H179.44V31.6336H188.007V28.2128H181.582V26.4531H179.44V19.3159H181.582V17.5563H192.411V21.1741H183.843V24.5949H190.269V26.3546H192.411V33.4918H190.269V35.2655ZM179.56 17.6126H181.582V19.3159H179.56V17.6126ZM179.44 26.4531H181.582V28.2128H179.44V26.4531ZM190.269 24.5949H192.411V26.3546H190.269V24.5949ZM190.269 33.4918H192.411V35.2092H190.269V33.4918Z"
              fill="black"
            />
            <path
              d="M205.262 35.2655H194.433V31.6336H203V28.2128H196.574V26.4531H194.433V19.3159H196.574V17.5563H207.403V21.1741H198.836V24.5949H205.262V26.3546H207.403V33.4918H205.262V35.2655ZM194.552 17.6126H196.574V19.3159H194.552V17.6126ZM194.433 26.4531H196.574V28.2128H194.433V26.4531ZM205.262 24.5949H207.403V26.3546H205.262V24.5949ZM205.262 33.4918H207.403V35.2092H205.262V33.4918Z"
              fill="black"
            />
            <path
              d="M153.143 51.4437V50.1598H151.595V38.6245H154.778V48.8147H157.787V38.6245H160.969V50.1598H159.421V51.4437H153.143ZM151.595 50.1598H153.143V51.4437H151.595V50.1598ZM159.421 50.1598H160.969V51.403H159.421V50.1598Z"
              fill="black"
            />
            <path
              d="M165.613 51.4437H162.43V38.6245H171.804V51.4437H168.622V41.2434H165.613V51.4437Z"
              fill="black"
            />
            <path
              d="M176.447 51.4437H173.265V38.6245H176.447V51.4437Z"
              fill="black"
            />
            <path
              d="M184.187 51.4437H181.004V41.2434H177.909V38.6245H187.282V41.2434H184.187V51.4437Z"
              fill="black"
            />
            <path
              d="M196.569 51.4437H188.744V38.6245H196.569V41.2434H191.926V43.7196H196.569V46.3385H191.926V48.8147H196.569V51.4437Z"
              fill="black"
            />
            <path
              d="M201.213 48.8147H204.222V41.2434H201.213V48.8147ZM198.031 51.4437V38.6245H205.857V39.8983H207.404V50.1598H205.857V51.4437H198.031Z"
              fill="black"
            />
            <path
              d="M215 12H144V57H215V12Z"
              stroke="black"
              stroke-width="3.99999"
            />
            <path
              d="M17.1263 22.11C18.4063 22.41 19.3963 23.03 20.0963 23.97C20.8163 24.89 21.1763 25.96 21.1763 27.18C21.1763 29.04 20.5563 30.48 19.3163 31.5C18.0963 32.5 16.3363 33 14.0363 33H2.90625V11.76H13.7363C15.8963 11.76 17.5963 12.23 18.8363 13.17C20.0763 14.11 20.6963 15.48 20.6963 17.28C20.6963 18.52 20.3663 19.57 19.7063 20.43C19.0663 21.27 18.2063 21.83 17.1263 22.11ZM9.56625 20.04H12.1463C12.7463 20.04 13.1863 19.92 13.4663 19.68C13.7663 19.44 13.9163 19.07 13.9163 18.57C13.9163 18.05 13.7663 17.67 13.4663 17.43C13.1863 17.17 12.7463 17.04 12.1463 17.04H9.56625V20.04ZM12.5963 27.66C13.1963 27.66 13.6363 27.55 13.9163 27.33C14.2163 27.09 14.3663 26.71 14.3663 26.19C14.3663 25.17 13.7763 24.66 12.5963 24.66H9.56625V27.66H12.5963ZM29.9241 11.76V23.73C29.9241 24.71 30.1341 25.49 30.5541 26.07C30.9941 26.63 31.6941 26.91 32.6541 26.91C33.6141 26.91 34.3241 26.63 34.7841 26.07C35.2441 25.49 35.4741 24.71 35.4741 23.73V11.76H42.1041V23.73C42.1041 25.75 41.6841 27.48 40.8441 28.92C40.0041 30.34 38.8541 31.41 37.3941 32.13C35.9341 32.85 34.3041 33.21 32.5041 33.21C30.7041 33.21 29.1041 32.85 27.7041 32.13C26.3241 31.41 25.2441 30.34 24.4641 28.92C23.6841 27.5 23.2941 25.77 23.2941 23.73V11.76H29.9241ZM51.6366 11.76V33H44.9766V11.76H51.6366ZM61.3045 27.96H67.7245V33H54.6445V11.76H61.3045V27.96ZM86.5003 11.76V17.04H80.8603V33H74.2003V17.04H68.6203V11.76H86.5003ZM107.024 29.79H99.9443L98.8943 33H91.9043L99.6743 11.76H107.354L115.094 33H108.074L107.024 29.79ZM105.404 24.78L103.484 18.87L101.564 24.78H105.404ZM133.287 11.76V17.04H127.647V33H120.987V17.04H115.407V11.76H133.287ZM10.8313 45.672V48.488H6.38325V50.056H9.58325V52.728H6.38325V57H2.83125V45.672H10.8313ZM17.5544 57.112C16.4877 57.112 15.5064 56.8613 14.6104 56.36C13.725 55.8587 13.021 55.1653 12.4984 54.28C11.9757 53.3947 11.7144 52.3973 11.7144 51.288C11.7144 50.1787 11.9757 49.1813 12.4984 48.296C13.021 47.4107 13.725 46.7227 14.6104 46.232C15.5064 45.7307 16.4877 45.48 17.5544 45.48C18.621 45.48 19.597 45.7307 20.4824 46.232C21.3677 46.7227 22.0664 47.4107 22.5784 48.296C23.101 49.1813 23.3624 50.1787 23.3624 51.288C23.3624 52.3973 23.101 53.3947 22.5784 54.28C22.0664 55.1653 21.3624 55.8587 20.4664 56.36C19.581 56.8613 18.6104 57.112 17.5544 57.112ZM17.5544 53.8C18.2584 53.8 18.8024 53.576 19.1864 53.128C19.5704 52.6693 19.7624 52.056 19.7624 51.288C19.7624 50.5093 19.5704 49.896 19.1864 49.448C18.8024 48.9893 18.2584 48.76 17.5544 48.76C16.8397 48.76 16.2904 48.9893 15.9064 49.448C15.5224 49.896 15.3304 50.5093 15.3304 51.288C15.3304 52.056 15.5224 52.6693 15.9064 53.128C16.2904 53.576 16.8397 53.8 17.5544 53.8ZM29.0758 57.112C27.7211 57.112 26.6011 56.7973 25.7158 56.168C24.8411 55.528 24.3664 54.5947 24.2918 53.368H28.0677C28.1211 54.0187 28.4091 54.344 28.9318 54.344C29.1238 54.344 29.2838 54.3013 29.4118 54.216C29.5504 54.12 29.6198 53.976 29.6198 53.784C29.6198 53.5173 29.4758 53.304 29.1878 53.144C28.8998 52.9733 28.4518 52.7813 27.8438 52.568C27.1184 52.312 26.5158 52.0613 26.0358 51.816C25.5664 51.5707 25.1611 51.2133 24.8198 50.744C24.4784 50.2747 24.3131 49.672 24.3238 48.936C24.3238 48.2 24.5104 47.576 24.8838 47.064C25.2678 46.5413 25.7851 46.1467 26.4358 45.88C27.0971 45.6133 27.8384 45.48 28.6598 45.48C30.0464 45.48 31.1451 45.8 31.9558 46.44C32.7771 47.08 33.2091 47.9813 33.2517 49.144H29.4278C29.4171 48.824 29.3371 48.5947 29.1878 48.456C29.0384 48.3173 28.8571 48.248 28.6438 48.248C28.4944 48.248 28.3718 48.3013 28.2758 48.408C28.1798 48.504 28.1318 48.6427 28.1318 48.824C28.1318 49.08 28.2704 49.2933 28.5477 49.464C28.8358 49.624 29.2891 49.8213 29.9078 50.056C30.6224 50.3227 31.2091 50.5787 31.6678 50.824C32.1371 51.0693 32.5424 51.4107 32.8837 51.848C33.2251 52.2853 33.3958 52.8347 33.3958 53.496C33.3958 54.1893 33.2251 54.8133 32.8837 55.368C32.5424 55.912 32.0464 56.3387 31.3958 56.648C30.7451 56.9573 29.9718 57.112 29.0758 57.112ZM39.0758 57.112C37.7211 57.112 36.6011 56.7973 35.7158 56.168C34.8411 55.528 34.3664 54.5947 34.2918 53.368H38.0677C38.1211 54.0187 38.4091 54.344 38.9318 54.344C39.1238 54.344 39.2838 54.3013 39.4118 54.216C39.5504 54.12 39.6198 53.976 39.6198 53.784C39.6198 53.5173 39.4758 53.304 39.1878 53.144C38.8998 52.9733 38.4518 52.7813 37.8438 52.568C37.1184 52.312 36.5158 52.0613 36.0358 51.816C35.5664 51.5707 35.1611 51.2133 34.8198 50.744C34.4784 50.2747 34.3131 49.672 34.3238 48.936C34.3238 48.2 34.5104 47.576 34.8838 47.064C35.2678 46.5413 35.7851 46.1467 36.4358 45.88C37.0971 45.6133 37.8384 45.48 38.6598 45.48C40.0464 45.48 41.1451 45.8 41.9558 46.44C42.7771 47.08 43.2091 47.9813 43.2517 49.144H39.4278C39.4171 48.824 39.3371 48.5947 39.1878 48.456C39.0384 48.3173 38.8571 48.248 38.6438 48.248C38.4944 48.248 38.3718 48.3013 38.2758 48.408C38.1798 48.504 38.1318 48.6427 38.1318 48.824C38.1318 49.08 38.2704 49.2933 38.5477 49.464C38.8358 49.624 39.2891 49.8213 39.9078 50.056C40.6224 50.3227 41.2091 50.5787 41.6678 50.824C42.1371 51.0693 42.5424 51.4107 42.8837 51.848C43.2251 52.2853 43.3958 52.8347 43.3958 53.496C43.3958 54.1893 43.2251 54.8133 42.8837 55.368C42.5424 55.912 42.0464 56.3387 41.3958 56.648C40.7451 56.9573 39.9718 57.112 39.0758 57.112ZM57.8425 45.672V57H54.2905V52.584H50.9145V57H47.3625V45.672H50.9145V49.752H54.2905V45.672H57.8425ZM66.7046 55.288H62.9286L62.3686 57H58.6406L62.7846 45.672H66.8806L71.0086 57H67.2646L66.7046 55.288ZM65.8406 52.616L64.8166 49.464L63.7926 52.616H65.8406ZM71.4956 51.32C71.4956 50.2 71.7196 49.2027 72.1676 48.328C72.6263 47.4533 73.277 46.776 74.1196 46.296C74.9623 45.8053 75.9543 45.56 77.0956 45.56C78.077 45.56 78.9516 45.7467 79.7196 46.12C80.4983 46.4827 81.1276 47 81.6076 47.672C82.0983 48.344 82.4236 49.128 82.5836 50.024H78.8396C78.669 49.6507 78.4236 49.3627 78.1036 49.16C77.7943 48.9467 77.437 48.84 77.0316 48.84C76.4343 48.84 75.9596 49.064 75.6076 49.512C75.2663 49.96 75.0956 50.5627 75.0956 51.32C75.0956 52.0773 75.2663 52.68 75.6076 53.128C75.9596 53.576 76.4343 53.8 77.0316 53.8C77.437 53.8 77.7943 53.6987 78.1036 53.496C78.4236 53.2827 78.669 52.9893 78.8396 52.616H82.5836C82.4236 53.512 82.0983 54.296 81.6076 54.968C81.1276 55.64 80.4983 56.1627 79.7196 56.536C78.9516 56.8987 78.077 57.08 77.0956 57.08C75.9543 57.08 74.9623 56.84 74.1196 56.36C73.277 55.8693 72.6263 55.1867 72.1676 54.312C71.7196 53.4373 71.4956 52.44 71.4956 51.32ZM90.7105 57L87.4145 52.088V57H83.8625V45.672H87.4145V50.44L90.6625 45.672H94.6785L90.7745 51.096L94.9345 57H90.7105ZM98.3074 54.168C99.7367 53.1013 100.867 52.136 101.699 51.272C102.531 50.3973 102.947 49.5813 102.947 48.824C102.947 48.568 102.889 48.3707 102.771 48.232C102.665 48.0933 102.521 48.024 102.339 48.024C102.126 48.024 101.955 48.136 101.827 48.36C101.71 48.5733 101.667 48.904 101.699 49.352H98.2594C98.2914 48.36 98.5047 47.544 98.8994 46.904C99.3047 46.264 99.8274 45.7947 100.467 45.496C101.107 45.1973 101.811 45.048 102.579 45.048C103.945 45.048 104.942 45.3787 105.571 46.04C106.211 46.6907 106.531 47.528 106.531 48.552C106.531 49.6293 106.185 50.6427 105.491 51.592C104.809 52.5307 103.95 53.3253 102.915 53.976H106.579V56.84H98.3074V54.168ZM107.434 50.984C107.434 49.1387 107.823 47.688 108.602 46.632C109.391 45.576 110.602 45.048 112.234 45.048C113.855 45.048 115.061 45.5813 115.85 46.648C116.639 47.704 117.034 49.1493 117.034 50.984C117.034 52.8293 116.639 54.2853 115.85 55.352C115.061 56.408 113.855 56.936 112.234 56.936C110.602 56.936 109.391 56.408 108.602 55.352C107.823 54.2853 107.434 52.8293 107.434 50.984ZM113.53 50.984C113.53 50.1307 113.445 49.4907 113.274 49.064C113.103 48.6267 112.757 48.408 112.234 48.408C111.701 48.408 111.349 48.6267 111.178 49.064C111.007 49.4907 110.922 50.1307 110.922 50.984C110.922 51.848 111.007 52.4987 111.178 52.936C111.349 53.3627 111.701 53.576 112.234 53.576C112.757 53.576 113.103 53.3627 113.274 52.936C113.445 52.4987 113.53 51.848 113.53 50.984ZM117.964 54.168C119.393 53.1013 120.524 52.136 121.356 51.272C122.188 50.3973 122.604 49.5813 122.604 48.824C122.604 48.568 122.545 48.3707 122.428 48.232C122.321 48.0933 122.177 48.024 121.996 48.024C121.782 48.024 121.612 48.136 121.484 48.36C121.366 48.5733 121.324 48.904 121.356 49.352H117.916C117.948 48.36 118.161 47.544 118.556 46.904C118.961 46.264 119.484 45.7947 120.124 45.496C120.764 45.1973 121.468 45.048 122.236 45.048C123.601 45.048 124.598 45.3787 125.228 46.04C125.868 46.6907 126.188 47.528 126.188 48.552C126.188 49.6293 125.841 50.6427 125.148 51.592C124.465 52.5307 123.606 53.3253 122.572 53.976H126.236V56.84H117.964V54.168ZM126.738 48.632V45.304H132.162V57H128.434V48.632H126.738Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="relative lg:w-1/2 pl-20 ">
          <Tilt>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96 border-2 border-black"
              src="assets/demo.png"
              alt=""
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};
