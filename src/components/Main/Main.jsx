import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="nav flex items-center justify-between text-[22px] p-5 text-[#585858]">
        <p>Gemini</p>
        <img
          className="w-12 rounded-full"
          src={assets.user_icon}
          alt="User Icon"
        />
      </div>
      <div className="main-container max-w-[900px] mx-auto">
        {!showResult ? (
          <>
            <div className="greet mx-[50px] my-[0px] text-[56px] text-[#c4c7c5] font-medium p-5 sm:mx-[20px] sm:text-[36px]">
              <p>
                <span className="gradient-text">Hello, User.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
              <div className="h-60 w-full sm:w-52 card p-5 bg-gray-100 cursor-pointer shadow-md rounded-lg relative hover:bg-[#dfe4ea]">
                <p className="mb-4 text-[#585858] text-[17px]">
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <img
                  className="w-[35px] p-1 absolute bottom-3 right-4 bg-white rounded-lg"
                  src={assets.compass_icon}
                  alt="Compass Icon"
                />
              </div>
              <div className="card h-60 w-full sm:w-52 p-5 bg-gray-100 cursor-pointer shadow-md rounded-lg relative hover:bg-[#dfe4ea]">
                <p className="mb-4 text-[#585858] text-[17px]">
                  Briefly summarize the concept: urban planning
                </p>
                <img
                  className="w-[35px] p-1 absolute bottom-3 right-4 bg-white rounded-lg"
                  src={assets.bulb_icon}
                  alt="Bulb Icon"
                />
              </div>
              <div className="card h-60 w-full sm:w-52 p-5 bg-gray-100 cursor-pointer shadow-md rounded-lg relative hover:bg-[#dfe4ea]">
                <p className="mb-4 text-[#585858] text-[17px]">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  className="w-[35px] p-1 absolute bottom-3 right-4 bg-white rounded-lg"
                  src={assets.message_icon}
                  alt="Message Icon"
                />
              </div>
              <div className="card h-60 w-full sm:w-52 p-5 bg-gray-100 cursor-pointer shadow-md rounded-lg relative hover:bg-[#dfe4ea]">
                <p className="mb-4 text-[#585858] text-[17px]">
                  Improve the readability of the following code
                </p>
                <img
                  className="w-[35px] p-1 absolute bottom-3 right-4 bg-white rounded-lg"
                  src={assets.code_icon}
                  alt="Code Icon"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result px-0 py-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="result-title my-0 flex items-center gap-5">
              <img
                className="w-[40px] rounded-full"
                src={assets.user_icon}
                alt=""
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-5 mt-10">
              <img
                className="w-[40px] rounded-full"
                src={assets.gemini_icon}
                alt=""
              />
              {loading ? (
                <div className="loader w-[100%] flex flex-col gap-2">
                  <hr className="rounded-md border-none bg-[#f6f7f8] bg-linear-gradient-to-right bg-[800px] [50px] h-5 animate-loader" />
                  <hr className="rounded-md border-none bg-[#f6f7f8] bg-linear-gradient-to-right bg-[800px] [50px] h-5 animate-loader" />
                  <hr className="rounded-md border-none bg-[#f6f7f8] bg-linear-gradient-to-right bg-[800px] [50px] h-5 animate-loader" />
                </div>
              ) : (
                <p
                  className="text-[17px] font-light leading-[1.8]"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0 w-[100%] max-w-[900px] px-0 py-[20px] m-auto">
          <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] px-[10px] py-[20px] rounded-[50px]">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 bg-transparent border-none outline-none p-2 text-[18px]"
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex items-center gap-4">
              <img
                className="w-6 cursor-pointer"
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className="w-6 cursor-pointer"
                src={assets.mic_icon}
                alt=""
              />
              {input?<img
                onClick={() => onSent()}
                className="w-6 cursor-pointer"
                src={assets.send_icon}
                alt=""
              />:null}
              
            </div>
          </div>
          <div className="bottom-info text-[13px] mx-[15px] my-auto text-center font-light">
            Gemini may display inaccurate info , including about people so
            double-check its responses . Your privacy and Gemini Apps
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
