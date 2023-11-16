"use client"
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [image,setimage] = useState([]);
  const getImage = async () => {
   try { 
    const response = await axios.get('https://picsum.photos/v2/list');
    // console.log(response);
    const data = response.data;
    // console.log(data);
    setimage(data);
    // console.log(image);
     } catch (error){
    console.error("Error getting image");

   }
  }
  return(
    <div>
      <h1>Hello India</h1>
      <button onClick={getImage} className='px-2 py-2 bg-green-400 rounded'>Get New Img</button>
      <div className='p-10'>
        
       {image.map((img,i) => {
        return <img src = {img.download_url} width={200} height={200} className= 'mt-10'/>
       })}
      </div>
    </div>
  )
}

export default page;