import Tanksearch from "../Components/Tanksearch.js";

const Main = () => {
  return (
    <div className="px-4 py-8 mx-auto md:max-w-full lg:max-w-screen-2xl md:px-8 lg:px-8 lg:py-10 lg:pb-6">
      <div className="flex flex-col lg:flex-row">
        <div className="order-last lg:order-first w-full lg:w-3/5 lg:pr-10">
          <h1 className="pt-10 lg:pt-0 mb-4 text-xl lg:text-4xl font-bold leading-none wg-heading-color">
            Welcome to <span className="text-orange-600">EroForce's</span> Tank
            Station
          </h1>
          <p className="mb-4">
            This is the perfect place to find tanks that EroForce played with
            and has Youtube recordings for. Just search for your favorite tank
            below and watch the Youtube videos for{" "}
            <span className="italic">V2 equipment</span>,{" "}
            <span className="italic">live recording</span>,{" "}
            <span className="italic">Twitch highlight </span>
            or <span className="italic">best replay</span>! Also, you're getting
            the <span className="font-black">equipment recommendation</span>,{" "}
            <span className="font-black">field modification</span> and{" "}
            <span className="font-black">crew skills</span> for the selected
            vehicle!
          </p>
          <hr className="mb-3 border-wg-header"></hr>
          <div className="flex flex-col xl:flex-row relative z-10">
            <div className="flex mt-2">
              <div className="flex text-center w-full align-middle justify-center mb-4 flex-col xl:flex-row">
                <div className="m-auto">
                  <img
                    className="xl:w-48"
                    src={require("../Images/skillpackage.png")}
                    alt="Skill4ltu Pack"
                  ></img>
                </div>
                <ul className="text-xs my-auto mx-4">
                  <li>
                    <span className="bg-red-700 text-white text-xs px-2 rounded-md">
                      10% TIP INCLUDED
                    </span>
                  </li>
                  <li className="px-2">Style: EroForce, assault</li>
                  <li className="px-2">6xEmblem: Team EroForce</li>
                  <li className="px-2">6xInscription: Team EroForce</li>
                  <li className="px-2">3xDecal: Team EroForce</li>
                  <li className="px-2">EroForce Commander</li>
                </ul>
                <div className="m-auto mx-4 flex-row justify-center">
                  <h3 className="font-bold mb-2">
                    Check the price in your region
                  </h3>
                  <ul className="flex space-x-4 mx-auto justify-center">
                    <li>
                      <a
                        className="bg-realm reu"
                        href="https://eu.wargaming.net/shop/wot/specials/skill4ltu_fight/"
                        target="_EU"
                      >
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className="bg-realm rna"
                        href="https://na.wargaming.net/shop/wot/specials/skill4ltu_fight/"
                        target="_NA"
                      >
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className="bg-realm rasia"
                        href="https://asia.wargaming.net/shop/wot/specials/skill4ltu_fight/"
                        target="_ASIA"
                      >
                        {" "}
                      </a>
                    </li>
                  </ul>
                  <p className="text-sm mt-2 text-orange-600">
                    Please login first!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mb-3 border-wg-header"></hr>
          <h2 className="mb-4 text-xl lg:text-2xl font-bold leading-none wg-heading-color">
            Search for a tank{" "}
            <span className="border-wg-heading border-b-4">by name</span>...
          </h2>
          <input
            className="bg-wg-mutted placeholder-wg-page text-wg-page px-4 py-2 rounded-md w-full focus:bg-wg-heading focus:ring-wg-accent focus:border-wg-accent"
            type="search"
            name="vehicle"
            placeholder="Vehicle name (min 2 characters) in 543 vehicles"
            autoComplete="off"
            value=""
          ></input>
        </div>
        <div className="w-full lg:w-2/5">
          <img
            className="items-end shadow-lg rounded border-4 border-wg-crew2 filter drop-shadow-wg w-full my-image"
            src={require("../Images/mirny.webp")}
            alt="EroForce"
            title="EroForce"
          ></img>
        </div>
      </div>
      <Tanksearch />
    </div>
  );
};

export default Main;
