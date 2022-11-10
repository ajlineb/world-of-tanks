import Nav from "./Nav";
import { useEffect, useState } from "react";

const Header = () => {
  const [location, setLocation] = useState("");

  //fires once to make sure the current page is not or is the correct location
  useEffect(() => {
    setLocation(window.location.href.split("/")[3]);
  }, []);

  const transform = {
    animation: "rotate 1s infinite",
    animationDuration: "15s",
  };

  //the setlocation below is recieving the different data locations everytime it changes tabs
  return (
    <>
      <div className="px-4 filter relative z-50 py-4 header-bg-color">
        <div class="px-4 py-4 mx-auto md:max-w-full lg:px-6 lg:max-w-screen-2xl">
          <div className="relative flex items-center justify-between">
            <a href="/world-of-tanks" className="inline-flex">
              <img
                src="https://yt3.ggpht.com/ytc/AMLnZu-V4A__CO2hzwdI2FSdLZylV0BxZcB_ahuPlNPsQw=s88-c-k-c0x00ffffff-no-rj"
                alt="eroforce's icon"
                className="object-contain rounded-full border-2 border-gray-800 bg-gray-900 p-1 w-16 h-16"
                title="DarkSoul Elitest"
              ></img>
              <span className="ml-3 my-auto wg-heading-color font-bold">
                EroForce Tank Station
              </span>
            </a>
            {location === "" ? (
              <div className=""></div>
            ) : (
              <div className="w-3/5 md:w-2/5 relative">
                <input
                  className="bg-wg-mutted placeholder-wg-page text-wg-page px-4 py-2 rounded-md w-full focus:bg-wg-heading focus:ring-wg-accent focus:border-wg-accent"
                  type="search"
                  name="vehicle"
                  placeholder="Vehicle name (min 2 characters) in 543 vehicles"
                  autoComplete="off"
                  value=""
                ></input>
              </div>
            )}
            <div className="flex">
              <a
                href="https://www.youtube.com/c/ReplaysArchive"
                target="_replaysarchive"
                title="Daily tier 8+ World of Tanks replays curated by ParadoxLector"
              >
                <img
                  className="w-20 mr-6 hidden xl:inline-block"
                  src={require("../Images/Status/replays.PNG")}
                  alt="Daily tier 8+ World of Tanks replays curated by ParadoxLector"
                  style={transform}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Nav setLocation={setLocation} />
    </>
  );
};

export default Header;
