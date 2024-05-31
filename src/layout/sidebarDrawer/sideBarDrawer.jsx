import React, { useEffect, useState } from "react";
import Img from "../../assets/Ellipse3.png";

import Img7 from "../../assets/Settings.png";
import Img8 from "../../assets/Union.png";

import "./style.css";

import { Link, } from "react-router-dom";

import { Outlet } from "react-router-dom";

const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const [selectedLink, setSelectedLink] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handlePageSwitch = (link) => {
    setSelectedLink(link);
    if (link == "virtualoffice") {
      setShowDropdown(!showDropdown);
    }
  };

  return (
    <>
      <div className={`flex h-screen ${drawerOpen ? "overflow-y-scroll" : ""}`}>
        {/* Drawer */}
        <div
          className={`fixed top-0 left-0 h-full shadow-xl overflow-y-scroll  text-white w-64 transition-transform transform ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className=" px-6 pb-3 pt-5 ">
            <div className="flex justify-center items-center gap-2">
              <img src={Img} alt="profile" />
              <div className="">
                <h1 className="text-[14px] text-[#757575]">LRome ipusm</h1>
                <h1 className="text-[14px] font-bold text-black">
                  Melissa peters
                </h1>
              </div>
            </div>
            <h1 className="text-[14px] mb-4 text-[#757575]  mt-4">Main</h1>
            <ul>
              <Link to="/profile">
                <li
                  className={`cursor-pointer ${
                    selectedLink === "profile" ? "font-bold" : ""
                  } ${
                    selectedLink === "profile" ? "text-black" : "text-[#757575]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("profile")}
                >
                  <i
                    class={`fa fa-user mr-3 ${
                      selectedLink === "profile"
                        ? "text-black"
                        : "text-[#757575]"
                    } text-[16px]`}
                    aria-hidden="true"
                  ></i>{" "}
                  Profile
                </li>
              </Link>
              <Link to="/wallet">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "wallet" ? "font-bold" : ""
                  } ${
                    selectedLink === "wallet" ? "text-black" : "text-[#757575]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("wallet")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-credit-card" aria-hidden="true"></i>
                    <h1 className="text-[16px]">Wallet</h1>
                  </div>
                </li>
              </Link>
              <Link to="/adposting">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "adposting" ? "font-bold" : ""
                  } ${
                    selectedLink === "adposting"
                      ? "text-black"
                      : "text-[#757575]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("adposting")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Ad Posting</h1>
                  </div>
                </li>
              </Link>
              <Link to="/chats">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "messages" ? "font-bold" : ""
                  } ${
                    selectedLink === "messages"
                      ? "text-black"
                      : "text-[#757575]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("messages")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Messages</h1>
                  </div>
                </li>
              </Link>
              <Link to="/scheduler">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "schedules" ? "font-bold" : ""
                  } ${
                    selectedLink === "schedules"
                      ? "text-black"
                      : "text-[#757575]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("schedules")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-calendar-o" aria-hidden="true"></i>
                    <h1 className="text-[16px]">Schedules</h1>
                  </div>
                </li>
              </Link>
              <li
                className={`cursor-pointer  ${
                  selectedLink === "subscription" ? "font-bold" : ""
                } ${
                  selectedLink === "subscription"
                    ? "text-black"
                    : "text-[#757575]"
                }  mb-4`}
                onClick={() => handlePageSwitch("subscription")}
              >
                <div className="flex justify-start items-center gap-4">
                  <i class="fa fa-suitcase" aria-hidden="true"></i>
                  <h1 className="text-[#757575] text-[16px]">Subscriptions</h1>
                </div>
              </li>

              <Link to="/notifications">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "notification" ? "font-bold" : ""
                  } ${
                    selectedLink === "notification"
                      ? "text-black"
                      : "text-[#757575]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("notification")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-bell" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Notification</h1>
                  </div>
                </li>
              </Link>
              <Link to="/stories">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "stories" ? "font-bold" : ""
                  } ${
                    selectedLink === "stories" ? "text-black" : "text-[#757575]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("stories")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-pause-circle-o" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Stories</h1>
                  </div>
                </li>
              </Link>
              <Link to="/preview">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "preview" ? "font-bold" : ""
                  } ${
                    selectedLink === "preview" ? "text-black" : "text-[#757575]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("preview")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-eye" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Preview</h1>
                  </div>
                </li>
              </Link>
              <Link to="/featureAd">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "featureAd" ? "font-bold" : ""
                  } ${
                    selectedLink === "featureAd"
                      ? "text-black"
                      : "text-[#757575]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("featureAd")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Feature Ad</h1>
                  </div>
                </li>
              </Link>
              <Link to="/featureAd">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "virtualoffice" ? "font-bold" : ""
                  } ${
                    selectedLink === "virtualoffice"
                      ? "text-black"
                      : "text-[#757575]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("virtualoffice")}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center gap-4">
                      <i class="fa fa-building" aria-hidden="true"></i>
                      <h1 className=" text-[16px]">Virtual Office</h1>
                    </div>
                    {showDropdown ? (
                      <i className="fa fa-angle-up" />
                    ) : (
                      <i className="fa fa-angle-down" />
                    )}
                  </div>
                </li>
              </Link>
              {showDropdown && (
                <>
                  <Link to="/viewvirtualoffice">
                    <li className="cursor-pointer text-[#757575] mb-2">
                      <div className="flex justify-center items-center gap-4">
                        <h1 className="text-[#757575] text-[16px]">
                          View Virtual Office
                        </h1>
                      </div>
                    </li>
                  </Link>
                  <Link to="/createvirtualoffice">
                    <li className="cursor-pointer text-[#757575] mb-2">
                      <div className="flex justify-center items-center gap-4">
                        <h1 className="text-[#757575] text-[16px] ml-3">
                          Create Virtual Office
                        </h1>
                      </div>
                    </li>
                  </Link>
                </>
              )}
              {/* Add more items */}
            </ul>
          </div>
          <div className="px-6">
            <h1 className="text-[14px] mb-2 text-[#757575]">Settings</h1>
            <ul>
              <li className="cursor-pointer text-[#757575] mb-4">
                <div className="flex justify-start items-center gap-4">
                  <img src={Img7} alt="profile" />
                  <h1 className="text-[#757575] text-[16px]">Settings</h1>
                </div>
              </li>
              <li className="cursor-pointer text-[#757575] ">
                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span class="text-[#757575] text-[16px] ml-3">Dark</span>
                </label>
              </li>
              <li className="cursor-pointer text-[#757575] mb-4">
                <div className="flex justify-start items-center gap-4">
                  <img src={Img7} alt="profile" />
                  <h1 className="text-[#757575] text-[16px]">Help</h1>
                </div>
              </li>
              <li className="cursor-pointer text-[#757575] mb-4">
                <div className="flex justify-start items-center gap-4">
                  <img src={Img8} alt="profile" />
                  <h1 className="text-[#D55F5A] text-[16px]">Logout Account</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}

        <div
          className={`flex-1 ${
            drawerOpen ? "ml-64" : ""
          } transition-all duration-300`}
        >
          <button
            className="fixed top-4 p-2 bg-white text-black shadow-xl font-bold rounded-full focus:outline-none"
            style={{ left: drawerOpen ? "15rem" : "2rem" }}
            onClick={handleDrawerToggle}
          >
            {drawerOpen ? "<" : ">"}
          </button>

          {/* page content */}

          <div className="p-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
