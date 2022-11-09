import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//the setlocation here is getting the data and passing it up to the Header
const Nav = ({ setLocation }) => {
  const tabs = [
    { id: 1, label: "" },
    { id: 2, label: "help" },
    { id: 3, label: "contact" },
  ];
  const [active, setActive] = useState("/");

  //this sends the data to the top setlocation
  useEffect(() => {
    setLocation(active);
  }, [active]);

  //returns the Tabs actual text
  const handleTab = (label) => {
    if (label === "") {
      return "Home";
    }
    if (label === "help") {
      return "Help";
    } else return "Contact";
  };

  //creates an array to pick from easier
  let path = window.location.href.split("/");

  return (
    <div>
      <nav className="flex justify-center tabs-bg-color font-medium p-1 text-lg">
        {tabs.map((tab) => (
          <ul key={tab.id} className="px-8">
            <Link
              to={tab.label}
              key={tab.id}
              onClick={() => {
                setActive(tab.label);
              }}
              className={
                path[3] === tab.label
                  ? "text-orange-600 font-bold"
                  : "p-1 transition hover:text-orange-600 delay-100"
              }
            >
              {handleTab(tab.label)}
            </Link>
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
