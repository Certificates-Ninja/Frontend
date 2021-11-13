export const Footer = () => {
  return (
    <div className="bg-yellow-400">
      <div className=" p-10 text-center items-center flex-col justify-between pt-5 pb-10 sm:flex-row">
        <p className="text-lg  text-black" style={{ fontFamily: "Poppins" }}>
          Made with ❤️ and ☕ at{" "}
          <a className="underline" href="fossunited.org">
            FOSS Hack 2021.
          </a>
        </p>
      </div>
    </div>
  );
};
