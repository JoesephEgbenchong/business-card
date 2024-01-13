import React from 'react'
import ProfileImage from "../assets/images/user-img.jpg"

export default function ImageSection() {
  return (
    <img className='absolute object-cover top-8 left-80 w-[340px] h-[550px]'
    src={ProfileImage}
    alt='Joseph Ayuk EGBENCHONG II'
     />
  )
}
