import React from 'react'
import ContactSection from '../sections/ContactSection'
import ImageSection from '../sections/ImageSection'
import InfoSection from '../sections/InfoSection'

export default function Home() {

  return (
    <>
        <div className='bg-green-200 min-h-screen flex items-center justify-center'>
          <main className='flex bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden relative'>
            <ImageSection />
            <ContactSection />
            <InfoSection />
          </main>
        </div>
    </>
  )
}
