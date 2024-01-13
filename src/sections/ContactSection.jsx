import React from 'react'
import {MdEmail} from "react-icons/md"
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa6"

const ContactLink =({href, children}) => {
    return (
        <a className='text-gray-300 transition-colors hover:text-white outline-none border focus-visible:border-white border-transparent focus-visible:text-white rounded-md'
        target="_blank"
        rel="noreferrer"
        href={href}>
            {children}
        </a>
    );
}

export default function ContactSection() {

  return (
    <section className='bg-green-700 max-w-xs text-white text-sm flex flex-1 flex-col gap-4 px-8 pt-80 pb-12'>
        <div className='flex flex-col gap-1'>
            <div className='flex gap-2 items-center'>
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

        <hr className='border-8 border-gray-100 -mx-10'/>

        <div className='flex flex-col gap-1'>
            Find me on:
            <div className='flex gap-3'>
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
