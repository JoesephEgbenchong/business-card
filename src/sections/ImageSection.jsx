import React from 'react'
import ProfileImage from "../assets/images/user-img.jpg"

const GraySquare = ({ className }) => {
    return <div className={`w-12 h-12 bg-[#9fbfee] absolute ${className}`}></div>
}

const GrayRectangle = ({ className }) => {
    return <div className={`w-12  h-5 bg-[#9fbfee] absolute ${className}`}></div>
}

const GreenCircle = ({ className, size }) => {
    return (

        <div className={`bg-[#9fbfee] absolute rounded-full ${size === "small" ? "h-14 w-14" : "w-36 h-36"} ${className}`}></div>
    );
}

export default function ImageSection() {
  return (
    <>
        <img className='xl:block hidden absolute object-cover rounded-xl top-8 left-80 w-[340px] h-[550px] z-10'
        src={ProfileImage}
        alt='sharp investor posing for a profile pic'
        />
        <GraySquare className="md:block hidden xl:left-[295px] xl:top-[85px]
        left-[220px] top-[120px] z-20 animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-linear" />

        <GraySquare className="md:block hidden xl:left-[360px] xl:top-[555px]
        left-[38px] top-[170px] z-20 animate-wiggle animate-infinite animate-duration-[2000ms] animate-ease-linear" />

        <GrayRectangle className="md:block hidden xl:left-[640px] left-[183px] top-[50px] z-20" />

        <GreenCircle className="md:block hidden xl:left-[630px] xl:top-[550px] left-[291px] top-[622px]" size="small" />

        <GreenCircle className="md:block hidden right-0 top-0 -translate-y-1/2 translate-x-1/2" size="big"/>
    </>
    
  )
}
