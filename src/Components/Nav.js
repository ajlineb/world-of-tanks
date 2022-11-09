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

  useEffect(() => {
    setLocation(active); //this sends the data to the top setlocation
  }, [active]);

  const handleTab = (label) => {
    if (label === "") {
      return "Home";
    }
    if (label === "help") {
      return "Help";
    } else return "Contact";
  };

  let path = window.location.href.split("/");

  return (
    <div>
      <nav className="flex justify-center bg-stone-800 text-stone-500 font-bold p-1 text-lg">
        {tabs.map((tab) => (
          <ul key={tab.id} className="px-8">
            <Link
              to={tab.label}
              key={tab.id}
              onClick={() => {
                setActive(tab.label);
              }}
              className={path[3] === tab.label ? "text-orange-600" : "p-1"}
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
