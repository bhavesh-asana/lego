import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiBookshelf } from "react-icons/gi";
import { LuHelpingHand } from "react-icons/lu";
import { MdWork } from "react-icons/md";
import { FaPodcast } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { MdCarRental } from "react-icons/md";
import { MdOutlineCarRental } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { GrStakeholder } from "react-icons/gr";
import { FaHandsHelping } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import logo from "../imaga/logoasklego.png";
import { FaGooglePlus } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";

export default function NavBar() {
  let hide = "hidden";
  const [navbar, setNavbar] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password,setPassword]= useState('')
  const [signInEmail,setSignInEmail] = useState('')
  const [signInPassowrd,setSignInPassowrd] = useState('') 
  const [signup,setSignUp] = useState(false);
  const [pasw,setPasw] = useState(true)
  function show() {
    showAbout ? setShowAbout(!showAbout) : "";
    showUser ? setShowUser(false) : "";
    setShowLearn(!showLearn);
  }
  function show1() {
    setShowAbout(!showAbout);
    showLearn ? setShowLearn(false) : "";
    showUser ? setShowUser(false) : "";
  }
  function show3() {
    showLearn ? setShowLearn(false) : "";
    showAbout ? setShowAbout(false) : "";
    setShowUser(!showUser);
  }

  function handleSubmit1(e) {
    e.preventDefault();
    // You can perform further actions with the email, e.g., send it to a server
    console.log("Submitted email:", email);
    // Reset the email input after submission
    setEmail('')
    setSignUp(!signup)
    setPasw(!pasw)
  }
  function handleSubmit2(e) {
    e.preventDefault();
    // You can perform further actions with the email, e.g., send it to a server
    console.log("Submitted Passwaord:", password);
    // Reset the email input after submission
    setPasw(!pasw)
    setSignUp(!signup)
    setPassword('')
  }
  function handleSubmit3(e){
    e.preventDefault();
  }
 
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <img src={logo} className="h-12"></img>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200 mt-1 md:mt-0">
                <Link to='/invest' className="text-blue-300">
                  Invest
                </Link>
              </li>
              <li className="text-white hover:text-indigo-200 pt-10 md:pt-0">
                <a
                  href="javascript:void(0)"
                  className="text-black transition hover:text-gray-500 duration-500"
                  onClick={show}
                >
                  Learn
                </a>
                <div
                  className={`w-full md:absolute left-0 bg-white md:mt-7 h-40 shadow-md ${
                    showLearn ? "" : hide
                  }`}
                >
                  <ul className="items-center justify-center md:flex md:space-x-20 md:mt-10 md:space-y-0 ">
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500">
                      <GiBookshelf color="black" className="mt-1" />
                      <Link to='/Learningcenter' className="ml-1 text-black">Learning Center</Link>
                    </li>
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500">
                      <LuHelpingHand color="black" className="mt-1" />
                      <Link to='/heplandfaq' className="ml-1 text-black">Help & FAQ</Link>
                    </li>
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500">
                      <MdWork color="black" className="mt-1" />
                      <Link to='/howitworks' className="ml-1 text-black">How it works</Link>
                    </li>
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500">
                      <FaPodcast color="black" className="mt-1" />
                      <Link to='/prodcastandwebinars' className="ml-1 text-black">Podcast & Webinars</Link>
                    </li>
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500">
                      <FaCity color="black" className="mt-1" />
                      <Link to='/cityguies' className="ml-1 text-black">City Guides</Link>
                    </li>
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500">
                      <FaBlog color="black" className="mt-1" />
                      <Link to='/blog' className="ml-1 text-black">Blog</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="text-white hover:text-indigo-200 pt-10 md:pt-0">
                <a
                  href="javascript:void(0)"
                  onClick={show1}
                  className="text-black transition hover:text-gray-500 duration-500"
                >
                  About
                </a>
                <div
                  className={`w-full md:absolute left-0 bg-white md:mt-7 h-64 md:h-40 shadow-md ${
                    showAbout ? "" : hide
                  }`}
                >
                  <ul className="items-center justify-center md:flex md:space-x-20 md:mt-10 md:space-y-0 ">
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500 rounded">
                      <MdCarRental color="black" className="mt-1" />
                      <Link to="/commercialrental" className="ml-1 text-black">Commercial Rental</Link>
                    </li>
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500">
                      <MdOutlineCarRental color="black" className="mt-1" />
                      <Link to="/vocationalrental" className="ml-1 text-black">Vocational Rental</Link>
                    </li>
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500">
                      <FaHistory color="black" className="mt-1" />
                      <Link to="/hostorical" className="ml-1 text-black">Historical Returns</Link>
                    </li>
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500">
                      <FaNewspaper color="black" className="mt-1" />
                      <Link to="/news" className="ml-1 text-black">News</Link>
                    </li>
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500">
                      <GrStakeholder color="black" className="mt-1" />
                      <Link to="/stakeholder" className="ml-1 text-black">stakeholder-commitments</Link>
                    </li>
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500">
                      <FaHandsHelping color="black" className="mt-1" />
                      <Link to="/partnerwithus" className="ml-1 text-black">Partner with us</Link>
                    </li>
                    <li className="flex sm:mt-2 md:mt-0 transition hover:bg-gray-500 duration-500">
                      <FaMoneyBillAlt color="black" className="mt-1" />
                      <Link to="/investinus" className="ml-1 text-black">Invest in us</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="text-white hover:text-indigo-200 pt-10 md:pt-0">
                <a
                  href="javascript:void(0)"
                  className="text-black transition hover:text-gray-500 duration-500"
                  onClick={show3}
                >
                  User
                </a>
                <div
                  className={`w-full md:absolute left-0 bg-white md:mt-7 h-72 shadow-md ${
                    showUser ? "" : hide
                  }`}
                >
                  <div className="md:space-x-20 md:flex justify-center bg-white md:mt-12 justify-center md:space-y-0 justify-evenly">
                  <div className="h-36 bg-white-300 border-solid border-2 border-black rounded w-96">
                  <h1 className="text-center text-black font-bold text-lg bg-gray-500 ronded-t">Sign up</h1>
                      <form onSubmit={handleSubmit1} className={signup ? hide : ''}>
                        <div className="text-center justify-center justify-evenly">
                        <label className="text-black">
                          Email:</label>
                          <input
                            className="border-solid border-2 bg-gray-500 rounded mt-2 m-3"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        
                        <button type="submit" className="transition bg-black text-white rounded mt-2 hover:bg-gray-500 duration-500">
                          <span className="p-2">Submit</span>
                        </button>
                        </div>
                        
                      </form>
                      <form onSubmit={handleSubmit2} className={pasw ? hide : ''}>
                        <div className=" justify-center justify-evenly">
                        <label className="text-black">
                          Passward:</label>
                          <input
                            className="border-solid border-2 bg-gray-500 rounded mt-2 m-3"
                            type="password"
                            placeholder="Pasward"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        
                        <button type="submit" className="transition bg-black text-white rounded mt-2 hover:bg-gray-500 duration-500">
                          <span className="p-2">Submit</span>
                        </button>
                        </div>
                        
                      </form> 
                      <h1 className="text-center text-black">OR</h1>
                      <div>
                        <div className="mt-3 flex items-center justify-center justify-evenly">
                          <FcGoogle/>
                          <ImFacebook2 color="blue" className="m-1"/>
                          <TfiEmail color="black" className="m-1"/>
                        </div>
                      </div>
                    </div>
                    <div className="h-36 w-0.5 bg-black m-10 hidden md:block"></div>
                    <div className="h-36 bg-white-300 border-solid border-2 border-black sm:mt-5 md:mt-0 rounded w-96">
                     <h1 className="text-center bg-gray-500 text-black font-bold text-lg">Sign in</h1>
                      <div className="flex items-center justify-center">
                      <form onSubmit={handleSubmit3}>
                        <div className="text-left">
                        <label className="text-black">
                          Email:</label>
                          <input
                            className="border-solid border-2 bg-gray-500 rounded mt-2"
                            type="email"
                            placeholder="Email"
                            value={signInEmail}
                            onChange={(e) => setSignInEmail(e.target.value)}
                          /><br/>
                        <label className="text-black">
                          Password:</label>
                          <input
                            className="border-solid border-2 bg-gray-500 rounded mt-2"
                            type="password"
                            placeholder="Password"
                            value={signInPassowrd}
                            onChange={(e) => setSignInPassowrd(e.target.value)}
                          /><br/> 
                        </div> 

                       <div className="text-center">
                       <button type="submit" className="text-center transition bg-black text-white rounded mt-2 hover:bg-gray-500 duration-500">
                          <span className="p-2">Submit</span>
                        </button>
                       </div>
                      </form>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [showLearn, setShowLearn] = useState(false);
//   const [showAbout, setShowAbout] = useState(false);

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar);
//   };

//   const show = () => {
//     showAbout ? setShowAbout(!showAbout) : '';
//     setShowLearn(!showLearn);
//   };

//   const show2 = () => {
//     showLearn ? setShowLearn(!showLearn) : '';
//     setShowAbout(!showAbout);
//   };

//   return (
//     <nav className="navbar bg-fef7e5 h-16 relative">
//       <div className="container flex justify-between items-center">
//         <div className="logo">AskLego</div>
//         <div className="menu-icon" onClick={handleShowNavbar}>
//           mennu
//         </div>
//         <div className={`nav-elements ${showNavbar && "active"}`}>
//           <ul className="flex space-x-4">
//             <li>
//               <NavLink className="navitem" to="/">
//                 Invest
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/" onClick={show2}>
//                 Learn
//               </NavLink>
//             </li>
//             <div className={`pro1 ${showAbout && 'proshow1'}`}>
//               <ul>
//                 <li>Learning Center</li>
//                 <li>Help & FAQ</li>
//                 <li>How it works</li>
//                 <li>Podcast & Webinars</li>
//                 <li>City Guides</li>
//                 <li>Blog</li>
//               </ul>
//             </div>
//             <li>
//               <NavLink to="/" onClick={show}>
//                 About
//               </NavLink>
//             </li>
//             <div className={`pro ${showLearn && 'proshow'}`}>
//               <ul>
//                 <li>About Us</li>
//                 <li>Commercial Rental</li>
//                 <li>Vocational Rental</li>
//                 <li>Historical Returns</li>
//                 <li>News</li>
//                 <li>Careers</li>
//                 <li>stakeholder-commitments</li>
//                 <li>Partner with us</li>
//                 <li>Invest in us</li>
//               </ul>
//             </div>
//             <li>
//               <NavLink to="/">User</NavLink>
//             </li>
//             <li>
//               <NavLink to="/">Contact</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
