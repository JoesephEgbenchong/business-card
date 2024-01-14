import React from 'react'
import {MdEmail} from "react-icons/md"
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa6"
import profileImage  from "../assets/images/user-img.jpg";

const ContactLink =({href, children}) => {
    return (
        <a className="text-white/60 text-sm w-fit inline-block transition-colors relative rounded-md outline-none 
        hover:text-white focus-visible:text-white focus-visible:after:opacity-100 focus-visible:after:translate-y-1
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.1em] after:bg-white after:opacity-0 after:transition-all after:duration-300"
        target="_blank"
        rel="noreferrer"
        href={href}>
            {children}
        </a>
    );
}

export default function ContactSection() {

  return (
    <section className='bg-[#0f49ae] xl:w-96 text-white pt-10 md:flex md:flex-col px-10 sm:pb-20 pb-10 md:justify-end
    md:items-stretch grid sm:grid-cols-2  grid-cols-1 sm:items-center md:text-base text-sm justify-items-center sm:justify-start sm:gap-2 gap-4'>

        <div className='overflow-hidden rounded-full md:w-52 md:h-52 sm:w-44 sm:h-44 w-36 h-36 mb-auto xl:hidden'>
            <img src={profileImage} alt='' className='object-cover h-full w-full' />
        </div>

        <div className='sm:hidden md:block flex flex-col gap-2 md:mb-9 sm:col-start-2 sm:row-start-1 sm:mb-20 sm:items-start items-center'>
            <div className='flex gap-2 items-center'>
                <MdEmail className='md:text-2xl text-xl' />
                <span className='text-lg'>Email</span>
            </div>
            <ContactLink href="mailto:egbenchongjosephayuk@gmail.com" >
                egbenchongjosephayuk@gmail.com
            </ContactLink>
        </div>

        <div className='flex flex-col gap-1 md:mt-6 sm:col-start-2 sm:row-start-1 sm:mt-10 sm:items-start items-center'>
            <div className='flex gap-2 items-center'>
                <FaWhatsapp className="md:text-2xl text-xl" />
                <span className='text-lg'>WhatsApp</span>
            </div>
            <ContactLink href="https://wa.me/237670393007" >
                (237) 6 70 39 30 07
            </ContactLink>
        </div>

        <div className='h-5 bg-white -mx-10 mt-3 hidden md:block'/>

        <div className='sm:hidden md:flex flex-col gap-3 font-semibold sm:col-start-2 sm:row-start-1 sm:mt-20 sm:items-start items-center md:mt-6'>
            Find me on:
            <div className='flex gap-5'>
                <ContactLink href="https://github.com/JoesephEgbenchong" >
                    <FaGithub className='text-3xl' />
                </ContactLink>

                <ContactLink href="https://www.linkedin.com/in/joseph-ayuk-egbenchong-ii-717a6a116/" >
                    <FaLinkedin className='text-3xl' />
                </ContactLink>
            </div>
        </div>
    </section>
  )
}
