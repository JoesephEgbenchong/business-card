import React from 'react'
import ContactSection from '../sections/ContactSection'
import ImageSection from '../sections/ImageSection'
import InfoSection from '../sections/InfoSection'

export default function Home() {

  return (
    <>
        <div className='bg-green-200 min-h-screen flex items-center justify-center'>
          <main className='flex bg-white w-full max-w-6xl h-[667px] rounded-3xl shadow-2xl overflow-hidden relative
          animate-fade-up animate-once animate-duration-500 animate-ease-in animate-fill-forwards'>
            <ImageSection />
            <ContactSection />
            <InfoSection />
          </main>
        </div>
    </>
  )
}
