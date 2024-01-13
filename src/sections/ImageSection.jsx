import React from 'react'
import ProfileImage from "../assets/images/user-img.jpg"

const GraySquare = ({ className }) => {
    return <div className={`w-12 h-12 bg-gray-200 absolute ${className}`}></div>
}

const GrayRectangle = ({ className }) => {
    return <div className={`w-12  h-5 bg-gray-200 absolute ${className}`}></div>
}

const GreenCircle = ({ className, size }) => {
    return (

        <div className={`bg-green-700 absolute rounded-full ${size === "small" ? "h-14 w-14" : "w-36 h-36"} ${className}`}></div>
    );
}

export default function ImageSection() {
  return (
    <>
        <img className='absolute object-cover top-8 left-80 w-[340px] h-[550px] z-10'
        src={ProfileImage}
        alt='Joseph Ayuk EGBENCHONG II'
        />
        <GraySquare className="left-[300px] top-[85px] z-20 animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-linear" />
        <GraySquare className="left-[360px] top-[555px] z-20 animate-wiggle animate-infinite animate-duration-[2000ms] animate-ease-linear" />
        <GrayRectangle className="left-[640px] top-[50px] z-20" />
        <GreenCircle className="left-[630px] top-[550px]" size="small" />
        <GreenCircle className="right-0 top-0 -translate-y-1/2 translate-x-1/2" size="big"/>
    </>
    
  )
}
