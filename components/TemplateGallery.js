export const TemplateGallery = ({ submitData }) => {
  return (
    <div
      id="templates"
      className="px-4 py-12 mx-auto lg:max-w-screen-xl  lg:px-8 lg:py-20"
    >
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-yellow-400 rounded">
          <a aria-label="Article" onClick={() => submitData("sample")}>
            <img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              className="object-cover w-full h-70 rounded"
              alt=""
            />
          </a>
          <div className="py-5 px-5">
            <a
              onClick={() => submitData("sample")}
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Template 1</p>
            </a>
            <p className=" text-gray-700">
              A free certificate template which can be used for various multiple
              purposes. This template can be customized using the creator tool.
            </p>
          </div>
        </div>

        <div className="overflow-hidden transition-shadow duration-300 bg-yellow-400 rounded">
          <a onClick={() => submitData("sample")} aria-label="Article">
            <img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              className="object-cover w-full h-70 rounded"
              alt=""
            />
          </a>
          <div className="py-5 px-5">
            <a
              onClick={() => submitData("sample")}
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Template 2</p>
            </a>
            <p className=" text-gray-700">
              A free certificate template which can be used for various multiple
              purposes. This template can be customized using the creator tool.
            </p>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-yellow-400 rounded">
          <a onClick={() => submitData("sample")} aria-label="Article">
            <img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              className="object-cover w-full h-70 rounded"
              alt=""
            />
          </a>
          <div className="py-5 px-5">
            <a
              onClick={() => submitData("sample")}
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Template 3</p>
            </a>
            <p className=" text-gray-700">
              A free certificate template which can be used for various multiple
              purposes. This template can be customized using the creator tool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
