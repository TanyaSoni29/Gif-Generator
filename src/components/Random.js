import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;




function Random() {
   

const{gif, loading, fetchData} = useGif();



  return (
    <div className='w-1/2 rounded-lg border border-black gap-y-5 mt-[15px]  bg-green-500 flex flex-col justify-center items-center'>
    <h1 className=' mt-[15px] font-bold underline text-2xl uppercase'>A Random Gif</h1>
    {loading?(<Spinner />):(<img src={gif} width="450" loading='lazy'/>)}
    
    <button className=' w-10/12 opacity-200 text-lg py-2 bg-white rounded-lg mb-8 ' onClick={() => fetchData()}>
        Generate 
    </button>
      
    </div>
  )
}

export default Random
