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

  const bmc = {
    fontSize: "14px",
    fontWeight: "600",
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
        <div className="flex px-8">
          <a
            className="text-wg-mutted transition-colors duration-300 hover:text-wg-accent w-8"
            href="https://www.patreon.com/skill4ltu"
            rel="noreferrer"
            target="_blank"
            aria-label="Patreon"
            title="skill4ltu Patreon"
          >
            <svg
              className="h6"
              fill="#ff424d"
              aria-aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path d="M13.464 7.206c-1.976 0-3.583 1.598-3.583 3.563c0 1.958 1.607 3.551 3.583 3.551c1.969 0 3.57-1.593 3.57-3.551a3.57 3.57 0 0 0-3.57-3.563m-6.38 9.49v-9.49h1.752v9.49z"></path>
              <path d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"></path>
            </svg>
          </a>
          <a
            className="bmc-button my-auto ml-1"
            target="_blank"
            rel="noreferrer"
            href="https://www.buymeacoffee.com/skill4ltuindex"
            title="Donate a floof"
          >
            <span>
              🦊
              <em style={bmc}>Donate a floof</em>
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
