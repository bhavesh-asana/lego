import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductListning from './components/ProductListning'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ProductComponents from './components/ProductComponents'
import LearningCenter from './learn/LearningCenter'
import HelpandFa from './learn/HelpandFaq'
import Howitworks from './learn/Howitworks'
import PodcastWebinars from './learn/PodcastWebinars'
import Cityguides from './learn/Cityguides'
import Blog from './learn/Blog'
import CommercialRental from './about/CommercialRental'
import VocationalRental from './about/VocationalRental'
import HistoricalReturns from './about/HistoricalReturns'
import News from './about/News'
import Stakeholder from './about/Stakeholder'
import Partnerwithus from './about/Partnerwithus'
import Investinus from './about/Investinus'
import All from './filter/All'
import Commercial from './filter/Commercial'
import Recedential from './filter/Recedential'
import Vocational from './filter/Vocational'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home/>} />
          <Route path="/invest" element={<ProductListning/>} />
          <Route path="/Learningcenter" element={<LearningCenter />} />
          <Route path="/heplandfaq" element={<HelpandFa/>} />
          <Route path="/howitworks" element={<Howitworks/>}/>
          <Route path="/prodcastandwebinars" element={<PodcastWebinars/>}/>
          <Route path="/cityguies" element={<Cityguides/>}/>
          <Route path="/blog" element={<Blog/>}/>
          {/* about section */}
          <Route path="/commercialrental" element={<CommercialRental/>}/>
          <Route path="/vocationalrental" element={<VocationalRental/>}/>
          <Route path="/hostorical" element={<HistoricalReturns/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/stakeholder" element={<Stakeholder/>}/>
          <Route path="/partnerwithus" element={<Partnerwithus/>}/>
          <Route path="/investinus" element={<Investinus/>}/>
          
    </Routes>
  </BrowserRouter>
  
    </>
  )
}

export default App
