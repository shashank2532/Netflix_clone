import React,{ useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {


const {id}=useParams();

const navigate=useNavigate();

  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmNiY2FjZmIxM2E1ZmY2Y2E3MDc1NDc1Y2Q4MjMyMSIsIm5iZiI6MTcyODE0Mjc0Ny41NjMzMjYsInN1YiI6IjY3MDE1YzAyMTU5MmVmMWJhOTg1NTk2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LEcdO6BHW5e4V9Ek2IsXurtpEFpo2LhhTDhQUsWcj7s'
    }
  };
  
     useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
     },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0'
       allowFullScreen width='90%' height='90%'></iframe>
       <div className="playerinfo">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
       </div>

    </div>
  )
}

export default Player