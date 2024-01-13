import React from 'react'
import ProfileImage from "../assets/images/user-img.jpg"

export default function ImageSection() {
  return (
    <img className='absolute object-cover top-8 left-72 w-[300px] h-[475px]'
    src={ProfileImage}
    alt='Joseph Ayuk EGBENCHONG II'
     />
  )
}
