import React from "react";
import { useState } from "react";
import img1 from "../imaga/1img.png";
import img2 from "../imaga/2img.webp";
import img3 from "../imaga/3img.webp";
import img4 from "../imaga/4img.webp";
import { RxDotFilled } from "react-icons/rx";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import watch from "../imaga/watch.png";
import { FaCirclePlay } from "react-icons/fa6";
import Slider from "./Slider";
import aft1 from "../imaga/1aft.webp";
import befo1 from "../imaga/1befo.webp";
import befo2 from "../imaga/2befo.jpg";
import aft2 from "../imaga/2aft.jpg";
import befo3 from "../imaga/3befo.webp";
import aft3 from "../imaga/3aft.webp";
import befo4 from "../imaga/4befo.webp";
import aft4 from "../imaga/4aft.jpeg";
const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(1);
  const List = [
    {
      img: img1,
      Title: "The Modern way of investing in Real Estate",
      para: "Access unique real estate investment opporutnities and start building a positive real estate portfolio today!",
      btn: "Get Started",
    },
    {
      img: img2,
      Title: "For Real Estate Developers & General Contractors",
      para: "AskLego offers a new way for developers and General Contractors to partner up on real estate deals, raise funds, and manage projects.",
      btn: "Get Funded",
    },
    {
      img: img3,
      Title: "For Real Estate Agents & Brokers",
      para: "AskLego is a Tech Platform that enables crowd investment. View our deal criteria and submit a deal for our consideration.",
      btn: "Submit a Deal",
    },
    {
      img: img4,
      Title: "Leverage investment Opportunities",
      para: "Access unique well evaluated real estate investment opporutnities. Diversify your investment, derisk your asset investment and stay liquid always.",
      btn: "Invest",
    },
  ];
  function prev() {
    const isFirst = startIndex === 0;
    const iSecond = endIndex === 1;
    const nextindex = isFirst ? List.length - 1 : startIndex - 1;
    const nextindex2 = iSecond ? List.length : endIndex - 1;
    setEndIndex(nextindex2);
    setStartIndex(nextindex);
  }
  function next() {
    const isFirst = startIndex === List.length - 1;
    const iSecond = endIndex === List.length;
    const nextindex = isFirst ? 0 : startIndex + 1;
    const nextindex2 = iSecond ? 1 : endIndex + 1;
    setEndIndex(nextindex2);
    setStartIndex(nextindex);
  }
  function dott(idex) {
    if (idex === 0) {
      setStartIndex(0);
      setEndIndex(1);
    } else if (idex === 1) {
      setStartIndex(1);
      setEndIndex(2);
    } else if (idex === 2) {
      setStartIndex(2);
      setEndIndex(3);
    } else if (idex === 3) {
      setStartIndex(3);
      setEndIndex(4);
    }
  }
  let ren = List.slice(startIndex, endIndex).map((val) => {
    return (
      <>
        <div className="group">
          <div className="md:flex">
            <div className="w-[50%] h-[50%] justify-center item-center text-center">
              <img
                className={
                  List[0].img === val.img
                    ? "w-[87%] my-5 m-auto rounded"
                    : "w-[80%] my-5 m-auto rounded"
                }
                src={val.img}
              ></img>
            </div>
            <div className="w-[40%] my-5">
              <h1 className="font-semibold text-6xl">{val.Title}</h1>
              <p className="font-semibold text-[28px] mt-3">{val.para}</p>
              <button className="bg-blue-500 h-11 w-28 rounded mt-3">
                <span className="">{val.btn}</span>
              </button>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              {List.map((dot, index) => {
                return (
                  <>
                    <RxDotFilled
                      className="cursor-pointer"
                      onClick={() => dott(index)}
                      color={startIndex === index ? "blue" : "green"}
                    />
                  </>
                );
              })}
            </div>
          </div>
          <div className="absolute bottom-96 hidden w-full group-hover:block">
            <div className="flex w-full">
              <FaChevronLeft
                className="cursor-pointer "
                color="green"
                size={30}
                onClick={prev}
              />
              <div className="flex-grow"></div>
              <FaChevronRight
                className="cursor-pointer "
                color="green"
                size={30}
                onClick={next}
              />
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div>{ren}</div>
      <div className="m-auto text-center shadow-2xl h-[300px] w-[80%] mb-20">
        <h1 className="m-5 font-semibold text-4xl">
          AskLego Investment’s Performance
        </h1>
        <p>
          Since being founded in 2022, AskLego has acquired over 25 deals. As of
          January 1, 2024, 44 of those offerings
        </p>
        <div className="flex justify-center items-center">
          <div className="flex">
            <p>have been completed.</p>
            <a href="#" className="text-blue-500">
              Invest now
            </a>
            <FaChevronRight className="mt-1" color="blue" />
          </div>
        </div>
        <div className=" flex m-auto w-[85%] bg-black justify-center rounded justify-evenly text-white">
          <div className="justify-center m-3">
            <h1 className="font-bold text-6xl">28.7%</h1>
            <p className="text-xl">Avg. Annual Return</p>
          </div>
          <div className="justify-center m-3">
            <h1 className="font-bold text-6xl">+9.5K</h1>
            <p className="text-xl">Registered Investors</p>
          </div>
          <div className="justify-center m-3">
            <h1 className="font-bold text-6xl">$11.2M</h1>
            <p className="text-xl">Property Value invested</p>
          </div>
        </div>
      </div>
      <div className=" my-10">
        <div className="bg-gray-300 md:flex  w-[96%] m-auto">
          <div className="w-[90%] m-3">
            <div className="flex">
              <FaCirclePlay size={20} color="blue" />
              <h1 className="text-black font-bold mx-10 text-xl">
                What's AskLego ?
              </h1>
            </div>
            <h1 className="font-bold text-6xl">
              Easily invest in Short term or Long term opportunities
            </h1>
            <p className="font-semibold text-xl mt-8">
              Maximize your wealth — unlock the benefits of real estate
              investing with rental income and appreciation.
            </p>
          </div>
          <div className="block sm:flex">
            <div>
              <div className="bg-white w-[90%] h-28 rounded mt-8 md:ml-8 flex">
                <div className="w-28">
                  <img src={watch} className="h-10"></img>
                </div>
                <div>
                  <h1 className="font-bold text-xl mb-2">Easy Investment</h1>
                  <p>
                    Your content goes here. Edit or remove this text inline or
                    in the module Content settings.
                  </p>
                </div>
              </div>
              <div className="bg-white w-[90%] h-28 rounded mt-8 md:ml-8 flex">
                <div className="w-28">
                  <img src={watch} className="h-10"></img>
                </div>
                <div>
                  <h1 className="font-bold text-xl mb-2">
                    Owner at Top Location
                  </h1>
                  <p>
                    Your content goes here. Edit or remove this text inline or
                    in the module Content settings.
                  </p>
                </div>
              </div>
            </div>
            <div className="item-center justify-center ">
              <div className="bg-white w-[90%] h-28 rounded mt-8 md:ml-4 flex">
                <div className="w-28">
                  <img src={watch} className="h-10"></img>
                </div>
                <div>
                  <h1 className="font-bold text-xl mb-2">DeRisk-Diversify</h1>
                  <p>
                    Your content goes here. Edit or remove this text inline or
                    in the module Content settings.
                  </p>
                </div>
              </div>
              <div className="bg-white w-[90%] h-28  mt-8  md:ml-4 rounded flex">
                <div className="w-28">
                  <img src={watch} className="h-10"></img>
                </div>
                <div>
                  <h1 className="font-bold text-xl mb-2">Easy Investment</h1>
                  <p>
                    Your content goes here. Edit or remove this text inline or
                    in the module Content settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center justify-center m-auto w-[80%]">
        <h1 className="text-6xl font-semibold">
          Short & Long-Term Investment Options
        </h1>
        <p className="text-gray-500">
          AskLego excels in swift, secure asset returns. Specializing in compact
          projects, we focus on quick, low-risk initiatives, rapidly enhancing
          economic value. Benefit from low minimum investments to diversify
          efficiently.
        </p>
      </div>
      <div>
        <div>
          <div className="md:flex bg-red-400">
            <div className="flex flex-wrap w-full">
              <div className="w-[40%] h-[350px] md:ml-auto bg-blue-200 rounded">
                <div className="rounded-t-lg bg-black text-center">
                  <h1 className="text-xl font-semibold text-white">
                    House Flip
                  </h1>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Slider befo1={befo1} aft1={aft1} />
                </div>
              </div>
              <div className="w-[40%] h-[350px] mx-5 bg-blue-300">
                <div className="rounded-t-lg bg-black text-center">
                  <h1 className="text-xl font-semibold text-white">
                    New Development
                  </h1>
                </div> 
                <div className="flex items-center justify-center text-white">
                  <div>
                  <p>Opportunistic</p>
                  <ul className="list-disc list-inside">
                    <li>Single & Multi-family</li>
                    <li>18-24 months</li>
                    <li>Build-to-sell</li>
                  </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Slider befo1={befo2} aft1={aft2} />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-full">
              <div className="w-[40%] h-[350px] item-center rounded justify-center bg-black">
                <div className="rounded-t-lg bg-black text-center rounded-t-lg">
                  <h1 className="text-xl font-semibold text-white">
                    New Development
                  </h1>
                </div>
                <div className="flex items-center justify-center bg-black text-white">
                  <div className=" text-white">
                    <p className="">Renovation + Rental</p>
                    <ul className="list-disc list-inside">
                      <li>Multi-family</li>
                      <li>3-5 years</li>
                      <li>Fix-and-rent (tax benefits)</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Slider befo1={befo3} aft1={aft3} />
                </div>
              </div>
              <div className="w-[40%] h-[350px] mx-5 bg-blue-300">
                <div className="rounded-t-lg bg-black text-center">
                  <h1 className="text-xl font-semibold text-white">
                    New Development
                  </h1>
                </div>
                <div className="flex items-center justify-center bg-black text-white">
                  <div>
                    <p>Development + Rental</p>
                    <ul className="list-disc list-inside">
                      <li>Residential & Commercial</li>
                      <li>3-4 years</li>
                      <li>Build-to-rent (tax benefits)</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Slider befo1={befo4} aft1={aft4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
