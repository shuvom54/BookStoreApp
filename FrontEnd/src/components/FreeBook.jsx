import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";

// import list from "../../public/list.json"
import Cards from './Cards';

function FreeBook() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
       try {
        const res=await axios.get("http://localhost:4001/book");
        const data=res.data.filter((data) => data.catagory=="Free")
        console.log(data)
        setBook(data)
       } catch (error) {
        console.log(error);
       }
    }
    getBook();
  },[]
  )
    // const filterData=list.filter((data) => data.catagory=="Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
   <div>
   <h1 className='font-semibold text-xl pb-2'>Free offered courses</h1>
   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae possimus eligendi libero corporis ullam nobis unde explicabo. Alias natus quasi laudantium eum molestiae tempora impedit.  </p>
   </div>

 
  <div>
        <Slider {...settings}>
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div> */}
        {book.map((item)=> (
          <Cards item={item} key={item.id}/>

        ))}
      </Slider>
  
    </div>
  </div>
  </>

  );
}

export default FreeBook
