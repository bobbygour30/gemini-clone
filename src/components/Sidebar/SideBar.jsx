import React, { useCallback, useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt , newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const toggleExtended = useCallback(() => {
    setExtended((prev) => !prev);
  }, []);

  return (
    <div
      className={`sidebar min-h-screen flex flex-col justify-between bg-[#f0f4f9] transition-width duration-300   ${
        extended ? "w-64" : "w-20"
      }`}
    >
      <div className="top px-5 py-4">
        <img
          onClick={toggleExtended}
          className="menu w-5 block ml-[10px] cursor-pointer"
          src={assets.menu_icon}
          alt="Menu Icon"
        />
        <div onClick={()=>newChat()} className="new-chat mt-[50px] inline-flex items-center gap-3 px-3 py-4 bg-[#e6eaf1] rounded-full text-lg text-gray-500 cursor-pointer">
          <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
          <span
            className={`whitespace-nowrap transition-opacity duration-300 ${
              extended ? "opacity-100" : "opacity-0"
            } ${extended ? "inline" : "hidden"}`}
          >
            New Chat
          </span>
        </div>
        <div
          className={`recent flex flex-col transition-opacity duration-300 ${
            extended ? "opacity-100" : "opacity-0"
          } ${extended ? "block" : "hidden"}`}
        >
          <p className="recent-title mt-8 mb-5">Recent</p>
          {prevPrompt.map((item, index) => (
            <div
              key={index}
              onClick={() => loadPrompt(item)}
              className="recent-entry flex items-start gap-2 p-3 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]"
            >
              <img
                className="w-5"
                src={assets.message_icon}
                alt="Message Icon"
              />
              <p>{item.slice(0, 18)}...</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom px-5 py-4">
        <div className="bottom-item flex items-center gap-2 p-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-5" src={assets.question_icon} alt="Question Icon" />
          <span
            className={`whitespace-nowrap transition-opacity duration-300 ${
              extended ? "opacity-100" : "opacity-0"
            } ${extended ? "inline" : "hidden"}`}
          >
            Help
          </span>
        </div>
        <div className="bottom-item flex items-center gap-2 p-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-5" src={assets.history_icon} alt="History Icon" />
          <span
            className={`whitespace-nowrap transition-opacity duration-300 ${
              extended ? "opacity-100" : "opacity-0"
            } ${extended ? "inline" : "hidden"}`}
          >
            Activity
          </span>
        </div>
        <div className="bottom-item flex items-center gap-2 p-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-5" src={assets.setting_icon} alt="Settings Icon" />
          <span
            className={`whitespace-nowrap transition-opacity duration-300 ${
              extended ? "opacity-100" : "opacity-0"
            } ${extended ? "inline" : "hidden"}`}
          >
            Settings
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
