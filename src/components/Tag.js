
import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';







function Tag() {

  const[tag, setTag] =useState("");
 

const{gif, loading, fetchData} = useGif(tag);



return (
  <div className='w-1/2 rounded-lg border border-black gap-y-5 mt-[15px]  bg-blue-500 flex flex-col justify-center items-center'>
  <h1 className=' mt-[15px] font-bold underline text-2xl uppercase'> Random {tag} Gif</h1>
  {loading?(<Spinner />):(<img src={gif} width="450" loading='lazy'/>)}

  <input className='w-10/12 text-lg py-2 bg-white rounded-lg opacity-200 mb-3 text-center' value={tag} type='text'
  onChange={(event) => setTag(event.target.value)} />
  
  <button className=' w-10/12 opacity-200 text-lg py-2 bg-white rounded-lg mb-8 ' onClick={() => fetchData(tag)}>
      Generate 
  </button>
    
  </div>
)

   
}

export default Tag

