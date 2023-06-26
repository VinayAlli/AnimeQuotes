import './App.css';
import { useState,useEffect,React } from "react";
import axios from 'axios';
import AOS from 'aos';

AOS.init();
function App() {
  const [name,setName]=useState('');
  const [character,setCharacter]=useState('')
  const [quote,setQuote]=useState('')
  const link="https://animechan.xyz/api/random";
  const Submit=()=>{
    axios.get(link).then((res)=>{
      setName(res.data.anime);
      setCharacter(res.data.character)
      setQuote(res.data.quote)
    });
  }
  useEffect(()=>{
    Submit();
  },[])
  return (
    <div className='quote-container'>
    
    <button className='button' onClick={Submit}>Random Anime Quote</button>
    <div className='anime-name'>{name}</div>
    <div className='character'>{character}</div>
    <div className='quote'>{quote}</div>
    </div>
  );
}

export default App;
