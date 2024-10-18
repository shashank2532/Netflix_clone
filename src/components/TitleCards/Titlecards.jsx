import React , {useEffect, useRef, useState} from 'react'
import './Titlecards.css'
import { Link } from 'react-router-dom'
import cards_data from '../../assets/cards/Cards_data'




const Titlecards = ({title,category}) => {

  const [apiData,setApiData]=useState([]);
  const cardsRef=useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmNiY2FjZmIxM2E1ZmY2Y2E3MDc1NDc1Y2Q4MjMyMSIsIm5iZiI6MTcyODE0Mjc0Ny41NjMzMjYsInN1YiI6IjY3MDE1YzAyMTU5MmVmMWJhOTg1NTk2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LEcdO6BHW5e4V9Ek2IsXurtpEFpo2LhhTDhQUsWcj7s'
    }
  };
  


const handleWheel=(e)=>{

  e.preventDefault();
  cardsRef.current.scrollLeft+=e.deltaY;
}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel' ,handleWheel);
},[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="cardlist" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards