import React, { useState, useEffect } from "react";
import "./product.css";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { ImLocation2 } from "react-icons/im";
import { GoDotFill } from "react-icons/go";
import { TbInfoTriangle } from "react-icons/tb";
import { BsTrophy } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx'
import All from "../filter/All";
import { Link} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Commercial from "../filter/Commercial";
import Recedential from "../filter/Recedential";
import Vocational from "../filter/Vocational";
import { VscListFilter } from "react-icons/vsc";
import { FaRegWindowClose } from "react-icons/fa";
import Select from "react-dropdown-select"

const ProductComponents = () => {

  let intervalId;
  let hidden="hidden"
  const products = useSelector((state) => state.allProducts.products);
  const [item,setItem] =useState([]);
  console.log("item",item)
  console.log("item2",products)
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredImage, setHoveredImage] = useState([]);
  const [imagenum,setImagenum]= useState(0)
  // const [imagedata,setImagedata]= useState()
  const cardsPerPage = 5;
  const maxVisibleButtons = 3;
  const [isInteracting, setIsInteracting] = useState(false); 
  const [filterbox,setFilterbox] = useState(false)
  const [location,setLocation] = useState([])
  const [filtermultipel,setFiltermultipel]= useState([])

console.log('locations',location)
  //options for select bar for sleect locations in filter
  const options = [
    {
      id:0,
      lable: 'Angular',
    },
    {
      id: 1,
      lable: 'Bootstrap',
    },
    {
      id: 2,
      lable: 'React.js',
    },
    {
      id: 3,
      lable: 'Vue.js',
    },
    {
      id: 4,
      lable: 'pune',
    },
    {
      id: 5,
      lable: 'mumbai',
    },
  ]

  //used for when we filter that time we not directly update the original array so we update using state
  useEffect(() => {
    setItem(products); // Set item state with the products
  }, [products]); 

  //when hover on card that ytime this function is call
  const handleImageHover = (index) => {
    setImagenum(0)
    setHoveredImage(index);
    setIsInteracting(true);
    console.log("my hover",index)
  };
  
  

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

  //Filtering categories here
  function filterItem(cat){
    setStartIndex(0)
    const updatedItems=products.filter((val)=>{return val.category === cat})
    setItem(updatedItems)
  }

  function filterMultipel(cat){
    const isCategoryPresent = filtermultipel.includes(cat);

  // If the category is present, remove it; otherwise, add it
  setFiltermultipel((prevstate) =>
    isCategoryPresent
      ? prevstate.filter((val) => val !== cat)
      : [...prevstate, cat]
  );
  };
  console.log("filtering",filtermultipel)

  function Show()
  {
    let filteredItems=item
    if(filtermultipel.includes("Apple"))
    {
       const ne=products.filter((val)=>{return val.brand === "Apple"})
       setItem(ne)
    }
    if(filtermultipel.includes("Huawei P30"))
    {
      const ne=products.filter((val)=>{return val.title === "Huawei P30"})
      setItem(ne)
    }
    if(filtermultipel.includes("1499"))
    {
      const ne=products.filter((val)=>{return val.price === 1499})
      setItem(ne)
    }
    if (["Apple", "Huawei P30"].every(value => filtermultipel.includes(value))) {
      console.log("Both Apple and Huwae are present in filtermultipel");
      // If neither "Apple" nor "Huawei P30" is present, filter based on other values
      const ne=item.filter((val)=>{return val.brand === "Apple" || val.title === "Huawei P30"})
      
      setItem(ne)
    }
    
  }

  function showfilter(){
    setFilterbox(!filterbox)
  }

  
  useEffect(()=>{
    if(isInteracting)
    {
      intervalId = setInterval(()=>{
        setImagenum((prevNum) => prevNum < hoveredImage.length-1 ? prevNum+1:0)
      },2000)
    }
    
    return () => clearInterval(intervalId); 
    
  },[isInteracting,handleImageHover])

  console.log('phto list',hoveredImage)
  useEffect(() => {
    setStartIndex((currentPage - 1) * cardsPerPage);
  }, [currentPage]);
  const totalPages = Math.ceil(products.length / cardsPerPage);
  const renderList = item
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
   
    <div className="h-[100%] w-[95%] m-auto mt-5 bg-white mb-4 rounded-md">
    <div className="flex flex-wrap ml-3 pt-1">
      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-2" onClick={()=>setItem(products)}>All</span></button>
      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-3" onClick={()=>filterItem('laptops')}>Comertial</span></button>
      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-3" onClick={()=>filterItem('fragrances')}>Recedential</span></button>
      <button className="bg-gray-500 mx-3 my-2 rounded"><span className="m-3" onClick={()=>filterItem('groceries')}>Vocational</span></button>
      <div className="flex ml-auto mr-4 bg-gray-500 w-20 h-8 rounded" onClick={showfilter}>
      <VscListFilter className="mt-2 ml-4"/>
        <p className="mt-1">filter</p>
      </div>  
    </div>
    <div className={filterbox ? `bloack fixed transition bg-blur bottom-11 left-[40%] z-[100] h-[92vh] w-[60%] bg-white rounded`: hidden}>
                  <div className="mr-[20px] mt-3">
                  <FaRegWindowClose onClick={showfilter} className="ml-auto"/>
                  </div>
                  <div className="border-dotted border-b-2 border-black mx-10">
                    <p className="font-bold mx-3">Type</p>
                    
                    <div className="flex flex-wrap ml-3 pt-1">
                      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-2" onClick={()=>setItem(products)}>All</span></button>
                      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-3" onClick={()=>filterItem('laptops')}>Comertial</span></button>
                      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-3" onClick={()=>filterItem('fragrances')}>Recedential</span></button>
                      <button className="bg-gray-500 mx-3 my-2 rounded"><span className="m-3" onClick={()=>filterItem('groceries')}>Vocational</span></button>
                    </div>
                    
                  </div>
                  <div className="border-dotted border-b-2 border-black mt-5 mx-10">
                    <p className="font-bold mx-3">Availability</p>
                    
                    <div className="flex flex-wrap ml-3 pt-1">
                      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-2" onClick={()=>setItem(products)}>All</span></button>
                      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-3" onClick={()=>filterItem('laptops')}>For sale</span></button>
                      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-3" onClick={()=>filterItem('fragrances')}>Fully Funded</span></button>
                      <button className="bg-gray-500 mx-3 my-2 rounded"><span className="m-3" onClick={()=>filterMultipel('1499')}>Comming soon</span></button>
                    </div>
                  </div>
                  <div className="mt-5 mx-10">
                    <p className="font-bold mx-3">select</p>
                    <Select name="select"
                    options={options}
                    labelField="lable"
                    valueField="id"
                    multi
                    onChange={(values) => setLocation(values)}>
                    </Select>
                  </div>
                  <div className="border-dotted border-b-2 border-black mt-4 mx-10">
                    <p className="font-bold mx-3">Rent Status</p>
                    <div className="flex flex-wrap ml-3 pt-1">
                      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-2" onClick={()=>setItem(products)}>All</span></button>
                      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-3" onClick={()=>filterMultipel('Apple')}>Rented</span></button>
                      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-3" onClick={()=>filterMultipel('Huawei P30')}>Seeking Tenant</span></button>
                    </div>
                  </div>
                  <div className="border-dotted border-b-2 border-black mt-4 mx-10">
                    <p className="font-bold mx-3">Current Levrage</p>
                    <div className="flex flex-wrap ml-3 pt-1">
                      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-2" onClick={()=>setItem(products)}>All</span></button>
                      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-3" onClick={()=>filterItem('laptops')}>None</span></button>
                      <button className="bg-gray-500 mx-2 my-2 rounded"><span className="m-3" onClick={()=>filterItem('fragrances')}>Leveraged</span></button>
                    </div>
                  </div>
                  <div className="text-center block justify-center m-auto w-full mt-4 mx-24 h-28 bg-gray-500">
                   <button className=" w-full">CLEAR FILTER</button>
                   <button className="bg-gray-500 mx-2 my-2 rounded w-[60%] bg-black text-white" onClick={Show}>SHOW {item.length} result</button>
                  </div>
                </div>
    <div className="flex flex-wrap justify-between m-auto">{renderList ? renderList : 'nodata'}</div>
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
      </div>    

    </>
  );
};

export default ProductComponents;



// const data = [
//   { id: 1, name: 'John', age: 25 },
//   { id: 2, name: 'Jane', age: 30 },
//   { id: 3, name: 'Doe', age: 25 },
// ];

// // Filtering based on multiple
// // properties using a for loop
// const filteredData = [];
// for (let i = 0; i < data.length; i++) {
//   if (data[i].age === 25 && data[i].name === 'John') {
//       filteredData.push(data[i]);
//   }
// }
// console.log(filteredData);