import React from 'react'
import {MdEmail} from "react-icons/md"
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa6"

const ContactLink =({href, children}) => {
    return (
        <a className="text-white/60 w-fit inline-block transition-colors relative rounded-md outline-none 
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
    <section className='bg-green-700 w-96 text-white flex flex-col px-10 pb-20 justify-end'>

        <div className='flex flex-col gap-2 mb-9'>
            <div className='flex gap-1 items-center'>
                <MdEmail className='text-2xl' />
                <span className='text-lg'>Email</span>
            </div>
            <ContactLink href="mailto:egbenchongjosephayuk@gmail.com" >
                egbenchongjosephayuk@gmail.com
            </ContactLink>
        </div>

        <div className='flex flex-col gap-1'>
            <div className='flex gap-2 items-center'>
                <FaWhatsapp className="text-2xl" />
                <span className='text-lg'>WhatsApp</span>
            </div>
            <ContactLink href="https://wa.me/237670393007" >
                (237) 6 70 39 30 07
            </ContactLink>
        </div>

        <div className='h-5 bg-gray-200 -mx-10 mt-3'/>

        <div className='flex flex-col gap-3 font-semibold mt-6'>
            Find me on:
            <div className='flex gap-4'>
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
