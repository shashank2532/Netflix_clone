import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png' 
import play_icon from '../../assets/play_icon.png' 
import info_icon from '../../assets/info_icon.png' 
import Titlecards from '../../components/TitleCards/Titlecards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='bannerimg' />
        <div className="herocaption">
          <img src={hero_title} alt="" className='captionimg'/>
          <p>Discovering his ties to a secret ancient order, a young
            man living in modern Istanbul embarks omn a quest to save the
            city from an immortal enemy.
          </p>
          <div className="herobtns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn darkbtn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <Titlecards/>
        </div>
      </div>
      <div className="morecards">
        <Titlecards title={"Blockbuster Movies"} category={"top_rated"}/>
        <Titlecards title={"Only on Netflix"} category={"popular"}/>
        <Titlecards title={"Upcoming"} category={"upcoming"}/>
        <Titlecards title={"Top Picks for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home