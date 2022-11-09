const NoPage = () => {
  return (
    <>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10 lg:pb-6">
        <div className="flex flex-col lg:flex-row mb-6">
          <div className="order-last lg:order-first w-full lg:w-2/3 lg:pr-20">
            <h1 className="pt-10 lg:pt-0 mb-4 text-4xl font-extrabold leading-none text-wg-headingg">
              <span className="text-orange-600">404 </span>
              Foxes can't be found
            </h1>
            <p className="mb-6">
              The fox hole is deep but this hole just got deeper! We are working
              on digging deeper to make sure we have enough room for every
              enquiry! While we dig for that, we invite you to have a look at
              the{" "}
              <a className="text-orange-600 font-bold" href="/">
                available vehicles{" > "}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;
