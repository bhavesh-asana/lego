import React from 'react'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { ImLocation2 } from "react-icons/im";
import { GoDotFill } from "react-icons/go";
import { TbInfoTriangle } from "react-icons/tb";
import { BsTrophy } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx'

const Vocational = () => {
    let intervalId;
  
    const [startIndex, setStartIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [hoveredImage, setHoveredImage] = useState([]);
    const [imagenum,setImagenum]= useState(0)
    const [imagedata,setImagedata]= useState()
    const cardsPerPage = 5;
    const maxVisibleButtons = 3;
    const [isInteracting, setIsInteracting] = useState(false); 
  
    const handleImageHover = (index) => {
      setImagenum(0)
      setHoveredImage(index);
      setIsInteracting(true);
      console.log("my hover",index)
    };
    
    const products = useSelector((state) => state.allProducts.products);
  
    function prevImage(data){
      // const isFirst=imagenum === 0;
      // const nextindex=isFirst ? hoveredImage.length-1 : imagenum-1
      // const final= hoveredImage[nextImage] ? 0 : nextindex;
      // setImagenum(nextindex)
      setIsInteracting(false)
      setImagenum((prevNum) => (prevNum - 1 + hoveredImage.length-1) % hoveredImage.length-1);
    
    }
    function nextImage(data){
    setIsInteracting(false)
      setImagenum((prevNum) => (prevNum + 1) % hoveredImage.length-1);
      
    }
  
    
    useEffect(()=>{
      if(isInteracting)
      {
        intervalId = setInterval(()=>{
          setImagenum((prevNum) => prevNum < hoveredImage.length-1 ? prevNum+1:0)
        },2000)
      }
      // intervalId = setInterval(()=>{
      //   setImagenum((prevNum) => prevNum < hoveredImage.length-1 ? prevNum+1:0)
      // },4000)
      return () => clearInterval(intervalId); 
      
    },[isInteracting,handleImageHover])
  
    console.log('phto list',hoveredImage)
    useEffect(() => {
      setStartIndex((currentPage - 1) * cardsPerPage);
    }, [currentPage]);
    const totalPages = Math.ceil(products.length / cardsPerPage);
    let Top=cardsPerPage-1
    const renderList = products.filter((product) => product.category === 'smartphones')
      .slice(startIndex, startIndex + cardsPerPage)
      .map((product,index) => {
        const {
          id,
          brand,
          thumbnail,
          title,
          description,
          stock,
          discountPercentage,
          image,
          rating,
          price,
          category,
          images
        } = product;
  
        return (
          <div
            className="mx-auto w-80 m-5 rounded-lg border-solid border-2 border-gray justify-center items-center justify-center overflow-hidden group"
            key={id}
            onMouseEnter={() => handleImageHover(images)} onMouseLeave={() => stopInterval()} >
            <div className="bg-red-500 h=full w-full block group-hover:hidden"
                >
            <img
                src={thumbnail}
                className="block group-hover:hidden h-40 w-full pt-1 hover:scale-110 transition-transform duration-500 cursor-pointer"
                alt={title}
                
              />
  
            </div>
            <div className="hidden group-hover:block bg-green-500 transition-all duration-500 ease-in-out h-40 w-full">
            <img
                  src={hoveredImage[imagenum]}
                  className="h-40 w-full z-[-1] pt-1 hover:scale-110 transform transition-transform duration-500 delay-150 cursor-pointer ease-out cursor-pointer"
                  alt={title}
                />
                {/* <div className={`flex relative w-72 z-[100] bottom-24 text-white`}>
                  <BsChevronCompactLeft color="white" size={20} onClick={()=>prevImage(images)}  className="ml-7 bg-gray-300 rounded-md"/>
                <BsChevronCompactRight color="white" size={20} onClick={()=>nextImage(images)} className="ml-[223px] bg-gray-300 rounded"/>
                </div> */}
                <div className="flex justify-center top-2 py-2 h-[50px]">
                  {hoveredImage.map((src,index)=>{
                    return(
                      <div>
                      <RxDotFilled color={imagenum === index ? 'blue' :'black'}/>
                    </div>
                    )
                  })}
                </div>
            </div>
  
            <div className="mt-2 w-full justify-center h-full rounded-b-lg">
              {/* <p className="title text-white">{title}</p> */}
              <div className="flex w-full">
                <p className="m-1 mr-auto mt-2 text-2xl">
                  {title.substring(0, 5)}
                </p>
                <p className="m-1 mt-2 font-bold text-2xl">
                  {brand.substring(0, 5)}
                </p>
                <div className="ml-auto flex">
                  <p className="m-1 mt-3 pl-auto">
                    {title.substring(0, 5)},{brand.substring(0, 5)}
                  </p>
                  <ImLocation2 size="40" className="ml-auto" />
                </div>
              </div>
              <div className="w-full w-full">
                <p className="m-1 mr-auto flex">
                  {category}
                  <GoDotFill className="mt-auto"/>
                  {category}
                </p>
              </div>
              <div className="bg-gray-500 w-64 my-4 h-px m-auto"></div>
              <div className="flex w-full justify-center items-center my-10 text-center justify-evenly bg-green">
                <div className="">
                  <TbInfoTriangle size="45" color="#1d4ed8" className="m-auto" />
                  <p className="text-xs">Medium Risk</p>
                </div>
                <div className="">
                  <BsTrophy size="45" color="#1d4ed8" className="m-auto" />
                  <p className="text-xs">AYY 15%</p>
                </div>
                <div className="">
                  <GiSandsOfTime size="45" color="#1d4ed8" className="m-auto" />
                  <p className="text-xs">Long tern Investment</p>
                </div>
              </div>
              <div className="bg-[#312e81] my-10 mx-2 my-4 rounded justify-center items-center">
                <div className="flex justify-center items-center my-1 justify-evenly">
                  <div className="mt-1">
                    <div>
                      <p className="text-white">{price}</p>
                    </div>
                    <div>
                      <p className="text-black relative bottom-1 text-xs">
                        Investor
                      </p>
                    </div>
                  </div>
                  <div className="mt-1">
                    <p className="text-2xl text-white font-thin mx-3">
                      See Helix Dusk
                    </p>
                  </div>
                  <div className="mt-1">
                    <p className="text-white">{Math.round(discountPercentage) * 5}%</p>
                    <p className="text-white text-xs relative bottom-1">Funded</p>
                  </div>
                </div>
                <div class="pb-3">
                  <div className="overflow-hidden h-2 mx-2 text-xs flex bg-white">
                    <div
                      style={{ width: `${Math.round(discountPercentage) * 5}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#14532d]"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      });
      
  
    const next = () => {
      setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
    };
  
    const prev = () => {
      setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
    };
  
    const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const generatePageButtons = () => {
      const buttons = [];
      const maxButtonsToShow = Math.min(totalPages, maxVisibleButtons);
  
      if (currentPage <= Math.floor(maxButtonsToShow / 2) + 1) {
        // Show the first 'maxButtonsToShow' buttons
        for (let i = 1; i <= maxButtonsToShow; i++) {
          buttons.push(
            <button
              key={i}
              onClick={() => handlePageClick(i)}
              className={`text-white bg-gray-800 py-2 m-3 px-4 rounded ${
                i === currentPage ? "active" : ""
              }`}
            >
              {i}
            </button>
          );
        }
      } else if (currentPage >= totalPages - Math.floor(maxButtonsToShow / 2)) {
        // Show the last 'maxButtonsToShow' buttons
        for (let i = totalPages - maxButtonsToShow + 1; i <= totalPages; i++) {
          buttons.push(
            <button
              key={i}
              onClick={() => handlePageClick(i)}
              className={`text-white bg-gray-800 py-2 m-3 px-4 rounded ${
                i === currentPage ? "active" : ""
              }`}
            >
              {i}
            </button>
          );
        }
      } else {
        // Show a range of buttons around the current page
        const start = currentPage - Math.floor(maxButtonsToShow / 2);
        const end = start + maxButtonsToShow - 1;
        for (let i = start; i <= end; i++) {
          buttons.push(
            <button
              key={i}
              onClick={() => handlePageClick(i)}
              className={`text-white bg-gray-800 py-2 m-3 px-4 rounded ${
                i === currentPage ? "active" : ""
              }`}
            >
              {i}
            </button>
          );
        }
      }
  
      return buttons;
    };
  
    return (
      <>
        
          <div className="flex flex-wrap justify-between m-auto">{renderList}</div>
          <div className="caro">
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className="text-white bg-gray-800 py-2 px-4 rounded"
            >
              Prev
            </button>
            {generatePageButtons()}
            <button
              onClick={next}
              disabled={startIndex + cardsPerPage >= products.length}
              className="text-white bg-gray-800 py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
       
      </>
    );
}

export default Vocational