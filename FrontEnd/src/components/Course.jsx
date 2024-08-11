import React from 'react'
import Cards from "./Cards"
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 item-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here! :)</span></h1>
        <p className='mt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque. Asperiores quia vel fugiat quibusdam amet quasi saepe recusandae cum, perferendis libero atque accusantium, distinctio vitae minus quod quis veritatis non beatae ab natus sint odit? Eaque, neque cum, expedita, in deleniti nisi eius ullam tenetur porro voluptatum accusamus recusandae?</p>
        <Link to="/">
        <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid grid-cols-4'>
           {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
           }
      </div>
    </div>
    </>
  )
}

export default Course
