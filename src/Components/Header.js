import Nav from "./Nav";
import { useEffect, useState } from "react";

const Header = () => {
  const [location, setLocation] = useState("");

  //fires once to make sure the current page is not or is the correct location
  useEffect(() => {
    setLocation(window.location.href.split("/")[3]);
  }, []);

  //the setlocation below is recieving the different data locations everytime it changes tabs
  return (
    <>
      <div className="px-4 py-4 header-bg-color">
        <div className="flex justify-around mx-auto items-center relative text-xl">
          <a href="#" className="inline-flex">
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
          {location === "" ? <div className=""></div> : <div>searchbar</div>}
          <div className="">03</div>
        </div>
      </div>

      <Nav setLocation={setLocation} />
    </>
  );
};

export default Header;
