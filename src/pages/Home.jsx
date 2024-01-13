import React from 'react'
import ContactSection from '../sections/ContactSection'
import ImageSection from '../sections/ImageSection'
import InfoSection from '../sections/InfoSection'

export default function Home() {

  return (
    <>
        <div className='bg-green-200 min-h-screen flex items-center justify-center'>
          <main className='flex md:flex-row flex-col bg-white md:mx-10 w-full max-w-6xl md:h-[667px] md:rounded-3xl md:min-h-0 min-h-screen shadow-2xl overflow-hidden relative
          animate-fade-up animate-once animate-duration-500 animate-ease-in animate-fill-forwards md:pb-0 mb-10'>
            <ImageSection />
            <ContactSection />
            <InfoSection />
          </main>
        </div>
    </>
  )
}
