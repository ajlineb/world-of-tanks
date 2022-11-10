import flagData from "../utils/flags";

const Tanksearch = () => {
  const divStyle = {
    marginRight: "0px",
  };

  const rating = [
    "overall",
    "armor effectiveness",
    "beginner friendliness",
    "gun handling",
    "speed / mobility",
    "hull-down performance",
    "flexibility",
    "ease of marking",
    "ammunition",
  ];

  return (
    <div>
      <div>
        <div className="group">
          <div className="font-bold flex align-middle justify-between mt-10">
            <div>
              <span className="bg-green-900 text-wg-heading inline-block rounded-t-lg px-4 py-2 mr-4">
                Filter vehicles
              </span>
              {/* this below will need a function */}
              <span className="hidden xl:inline-block"></span>
            </div>
            <div className="flex flex-row">
              <svg
                className="hidden md:inline-block w-6 mr-4 hover:cursor-pointer"
                title="Make the filters Sticky"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m16 12l2 2v2h-5v6l-1 1l-1-1v-6H6v-2l2-2V5H7V3h10v2h-1Zm-7.15 2h6.3L14 12.85V5h-4v7.85ZM12 14Z"
                ></path>
              </svg>
              <span className="bg-wg-altaccent text-wg-crew inline-block rounded-t-lg px-4 py-2 hover:cursor-pointer hover:bg-wg-accent hover:text-wg-heading transition duration-150">
                Reset all filters
              </span>
            </div>
          </div>
          <div className="filters relative text-xs xl:text-base">
            <div className="hidden filter-header xl:flex bg-green-900 justify-between text-wg-heading font-bold capitalize">
              <div className="header-nation pl-4 pr-1 py-2 w-2/12 flex justify-between">
                <span>Nation</span>
                <svg className="w-6 text-wg-text" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                  ></path>
                </svg>
              </div>
              <div className="header-type pl-4 pr-1 py-2 w-2/12 border-l border-wg-crew flex justify-between">
                <span>Type</span>
                <svg className="w-6 text-wg-text" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                  ></path>
                </svg>
              </div>
              <div className="header-tier pl-4 pr-1 py-2 w-2/12 border-l border-wg-crew flex justify-between">
                <span>Tier</span>
                <svg className="w-6 text-wg-text" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                  ></path>
                </svg>
              </div>
              <div className="header-status pl-4 pr-1 py-2 w-2/12 border-l border-wg-crew flex justify-between">
                <span>Status</span>
                <svg className="w-6 text-wg-text" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                  ></path>
                </svg>
              </div>
              <div className="header-rating pl-4 pr-1 py-2 w-2/12 border-l border-wg-crew flex justify-between">
                <span>Rating</span>
                <svg className="w-6 text-wg-text" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="filter-body flex-col xl:flex-row justify-between static w-full bg-wg-crew z-50 py-2 rounded-b-xl shadow-xl flex">
              <div className="body-nation px-4 py-2 xl:w-2/12 flex flex-row xl:flex-col">
                <label for="c00">
                  <span className="capitalize mr-1 xl:mr-2 text-orange-600 font-bold">
                    all
                  </span>
                </label>
                {flagData.map((flag) => {
                  return (
                    <label
                      key={flag.id}
                      className="mr-1 xl:mr-2 flex align-middle mb-2 xl:mb-0"
                      for={`c${flag.id - 1}`}
                    >
                      <span>
                        <img
                          className="mr-2 inline-block"
                          src={flag.src}
                          alt={flag.alt}
                        ></img>
                        <span className="hidden xl:inline-block">
                          {flag.name}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
              <div className="body-type px-4 py-2 xl:w-2/12 border-l border-wg-header flex flex-row xl:flex-col">
                <label for="t00">
                  <span className="capitalize mr-1 xl:mr-2">all</span>
                </label>
                <label className="mr-1 xl:mr-2" for="t0">
                  <em className="ico-vehicle-type w-6 ico-vehicle-type__mediumtank"></em>
                  <span className="capitalize xl:pl-2">
                    <span className="hidden xl:inline-block">medium</span>
                  </span>
                </label>
                <label className="mr-1 xl:mr-2" for="t1">
                  <em className="ico-vehicle-type w-6 ico-vehicle-type__heavytank"></em>
                  <span className="capitalize xl:pl-2">
                    <span className="hidden xl:inline-block">heavy</span>
                  </span>
                </label>
                <label className="mr-1 xl:mr-2" for="t2">
                  <em className="ico-vehicle-type w-6 ico-vehicle-type__lighttank"></em>
                  <span className="capitalize xl:pl-2">
                    <span className="hidden xl:inline-block">light</span>
                  </span>
                </label>
                <label className="mr-1 xl:mr-2" for="t3">
                  <em className="ico-vehicle-type w-6 ico-vehicle-type__at-spg"></em>
                  <span className="capitalize xl:pl-2">
                    <span className="hidden xl:inline-block">
                      tank destroyer
                    </span>
                  </span>
                </label>
                <label className="mr-1 xl:mr-2" for="t4">
                  <em className="ico-vehicle-type w-6 ico-vehicle-type__spg"></em>
                  <span className="capitalize xl:pl-2">
                    <span className="hidden xl:inline-block">SPG</span>
                  </span>
                </label>
              </div>
              <div className="body-tier px-4 py-2 xl:w-2/12 border-l border-wg-header flex flex-row xl:flex-col">
                <label for="tier_all">
                  <span className="capitalize mr-1 xl:mr-2">all</span>
                </label>
                <lable className="mr-1 xl:mr-2" for="tier_5">
                  <span>V</span>
                </lable>
                <lable className="mr-1 xl:mr-2" for="tier_6">
                  <span>VI</span>
                </lable>
                <lable className="mr-1 xl:mr-2" for="tier_7">
                  <span>VII</span>
                </lable>
                <lable className="mr-1 xl:mr-2" for="tier_8">
                  <span>VIII</span>
                </lable>
                <lable className="mr-1 xl:mr-2" for="tier_9">
                  <span>IX</span>
                </lable>
                <lable className="mr-1 xl:mr-2" for="tier_10">
                  <span>X</span>
                </lable>
              </div>
              <div className="body-status px-4 py-2 xl:w-2/12 border-l border-wg-header flex flex-row xl:flex-col">
                <label for="regular">
                  <span className="capitalize">
                    <img
                      className="w-5 mr-1 inline-block"
                      src={require("../Images/Status/regular.PNG")}
                      alt="non premium"
                    ></img>
                    regular
                  </span>
                </label>
                <label for="premium">
                  <span className="capitalize">
                    <img
                      className="w-5 mr-1 inline-block"
                      src={require("../Images/Status/premium.PNG")}
                      alt="premium"
                    ></img>
                    premium
                  </span>
                </label>
                <label for="prefmm">
                  <span className="capitalize">
                    <img
                      className="w-5 mr-1 inline-block"
                      src={require("../Images/Status/prefmm.PNG")}
                      alt="prefmm"
                    ></img>
                    pref. MM
                  </span>
                </label>
                <label for="clanwars">
                  <span className="capitalize">
                    <img
                      className="w-5 mr-1 inline-block"
                      src={require("../Images/Status/clan.PNG")}
                      alt="prefmm"
                    ></img>
                    clan wars
                  </span>
                </label>
              </div>
              <div className="body-rating px-4 py-2 xl:w-2/12 border-l border-wg-header flex flex-row xl:flex-col">
                {rating.map((text, id) => {
                  return (
                    <label key={id} className="flex flex-row">
                      <div className="vue-star-rating">
                        <div className="sr-only">
                          <span>Rated 0 stars out of 5</span>
                        </div>
                        <div className="vue-star-rating">
                          <span
                            className="vue-star-rating-pointer vue-star-rating-star"
                            style={divStyle}
                          >
                            <svg
                              className="vue-star-rating-star"
                              height={16}
                              width={16}
                              viewBox="0 0 16 16"
                              step="100"
                            >
                              <linearGradient
                                id="s4qqsn"
                                x1="0"
                                x2="100%"
                                y1="0"
                                y2="0"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#b8b8a2"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0%"
                                  stopColor="#b8b8a2"
                                  stopOpacity="1"
                                ></stop>
                              </linearGradient>
                              <filter
                                id="m0a7wj"
                                height="130%"
                                width="130%"
                                filterUnits="userSpaceOnUse"
                              >
                                <feGaussianBlur
                                  stdDeviation="0"
                                  result="coloredBlur"
                                ></feGaussianBlur>
                                <feMerge>
                                  <feMergeNode in="coloredBlur"></feMergeNode>
                                </feMerge>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                              </filter>
                              <polygon
                                points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16"
                                fill="url(#s4qqsn)"
                                stroke="#999"
                                strokeWidth="0"
                                strokeLinejoin="miter"
                              ></polygon>
                              <polygon
                                points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16"
                                fill="url(#s4qqsn)"
                              ></polygon>
                            </svg>
                          </span>
                          <span
                            className="vue-star-rating-pointer vue-star-rating-star"
                            style={divStyle}
                          >
                            <svg
                              className="vue-star-rating-star"
                              height={16}
                              width={16}
                              viewBox="0 0 16 16"
                              step="100"
                            >
                              <linearGradient
                                id="s4qqsn"
                                x1="0"
                                x2="100%"
                                y1="0"
                                y2="0"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#b8b8a2"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0%"
                                  stopColor="#b8b8a2"
                                  stopOpacity="1"
                                ></stop>
                              </linearGradient>
                              <filter
                                id="m0a7wj"
                                height="130%"
                                width="130%"
                                filterUnits="userSpaceOnUse"
                              >
                                <feGaussianBlur
                                  stdDeviation="0"
                                  result="coloredBlur"
                                ></feGaussianBlur>
                                <feMerge>
                                  <feMergeNode in="coloredBlur"></feMergeNode>
                                </feMerge>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                              </filter>
                              <polygon
                                points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16"
                                fill="url(#s4qqsn)"
                                stroke="#999"
                                strokeWidth="0"
                                strokeLinejoin="miter"
                              ></polygon>
                              <polygon
                                points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16"
                                fill="url(#s4qqsn)"
                              ></polygon>
                            </svg>
                          </span>
                          <span
                            className="vue-star-rating-pointer vue-star-rating-star"
                            style={divStyle}
                          >
                            <svg
                              className="vue-star-rating-star"
                              height={16}
                              width={16}
                              viewBox="0 0 16 16"
                              step="100"
                            >
                              <linearGradient
                                id="s4qqsn"
                                x1="0"
                                x2="100%"
                                y1="0"
                                y2="0"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#b8b8a2"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0%"
                                  stopColor="#b8b8a2"
                                  stopOpacity="1"
                                ></stop>
                              </linearGradient>
                              <filter
                                id="m0a7wj"
                                height="130%"
                                width="130%"
                                filterUnits="userSpaceOnUse"
                              >
                                <feGaussianBlur
                                  stdDeviation="0"
                                  result="coloredBlur"
                                ></feGaussianBlur>
                                <feMerge>
                                  <feMergeNode in="coloredBlur"></feMergeNode>
                                </feMerge>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                              </filter>
                              <polygon
                                points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16"
                                fill="url(#s4qqsn)"
                                stroke="#999"
                                strokeWidth="0"
                                strokeLinejoin="miter"
                              ></polygon>
                              <polygon
                                points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16"
                                fill="url(#s4qqsn)"
                              ></polygon>
                            </svg>
                          </span>
                          <span
                            className="vue-star-rating-pointer vue-star-rating-star"
                            style={divStyle}
                          >
                            <svg
                              className="vue-star-rating-star"
                              height={16}
                              width={16}
                              viewBox="0 0 16 16"
                              step="100"
                            >
                              <linearGradient
                                id="s4qqsn"
                                x1="0"
                                x2="100%"
                                y1="0"
                                y2="0"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#b8b8a2"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0%"
                                  stopColor="#b8b8a2"
                                  stopOpacity="1"
                                ></stop>
                              </linearGradient>
                              <filter
                                id="m0a7wj"
                                height="130%"
                                width="130%"
                                filterUnits="userSpaceOnUse"
                              >
                                <feGaussianBlur
                                  stdDeviation="0"
                                  result="coloredBlur"
                                ></feGaussianBlur>
                                <feMerge>
                                  <feMergeNode in="coloredBlur"></feMergeNode>
                                </feMerge>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                              </filter>
                              <polygon
                                points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16"
                                fill="url(#s4qqsn)"
                                stroke="#999"
                                strokeWidth="0"
                                strokeLinejoin="miter"
                              ></polygon>
                              <polygon
                                points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16"
                                fill="url(#s4qqsn)"
                              ></polygon>
                            </svg>
                          </span>
                          <span
                            className="vue-star-rating-pointer vue-star-rating-star"
                            style={divStyle}
                          >
                            <svg
                              className="vue-star-rating-star"
                              height={16}
                              width={16}
                              viewBox="0 0 16 16"
                              step="100"
                            >
                              <linearGradient
                                id="s4qqsn"
                                x1="0"
                                x2="100%"
                                y1="0"
                                y2="0"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#b8b8a2"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0%"
                                  stopColor="#b8b8a2"
                                  stopOpacity="1"
                                ></stop>
                              </linearGradient>
                              <filter
                                id="m0a7wj"
                                height="130%"
                                width="130%"
                                filterUnits="userSpaceOnUse"
                              >
                                <feGaussianBlur
                                  stdDeviation="0"
                                  result="coloredBlur"
                                ></feGaussianBlur>
                                <feMerge>
                                  <feMergeNode in="coloredBlur"></feMergeNode>
                                </feMerge>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                              </filter>
                              <polygon
                                points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16"
                                fill="url(#s4qqsn)"
                                stroke="#999"
                                strokeWidth="0"
                                strokeLinejoin="miter"
                              ></polygon>
                              <polygon
                                points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16"
                                fill="url(#s4qqsn)"
                              ></polygon>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <span className="capitalize pl-2">{text}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tanksearch;
