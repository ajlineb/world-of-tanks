import Nav from "./Nav";
import { useEffect, useState } from "react";

const Header = () => {
  const [location, setLocation] = useState("");

  //the setlocation below is recieving the different data locations everytime it changes tabs
  return (
    <>
      <h1 className="text-blue-400 ">Header</h1>
      {location === "help" ? (
        <div>Hello this is only on the help page</div>
      ) : (
        <></>
      )}
      <Nav setLocation={setLocation} />
    </>
  );
};

export default Header;
