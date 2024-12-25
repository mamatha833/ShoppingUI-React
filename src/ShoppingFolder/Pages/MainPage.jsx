import React,{useState} from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'

import {Gents,Ladies} from '../data'
import WomenCollection from '../Components/WomenCollection'


const MainPage = () => {

  const [getsFashion,setGentsFashion] = useState(Gents);
  const [ladiesFashion,setLadiesFashion] = useState(Ladies);
  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion = {getsFashion}/>
        <WomenCollection ladiesFashion={ladiesFashion} />
        <Footer />
      
    </div>
  )
}

export default MainPage
