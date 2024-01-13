import React from 'react'

export default function InfoSection() {

    const fadeIn = "animate-fade-left animate-duration-[500ms] animate-once animate-ease-out animate-fill-forwards opacity-0";

  return (
    <section className='flex flex-col xl:pl-80 pt-20 flex-1 px-10 gap-5'>
        <h1 className={`flex flex-col gap-1 text-5xl font-semibold uppercase animate-delay-[500ms] ${fadeIn}`}>
            <span className='text-green-700 text-3xl'>Joseph AYUK</span>
            EGBENCHONG II
        </h1>

        <div>
            <h2 className={`mb-3 font-semibold space-x-1 animate-delay-[1000ms] ${fadeIn}`}>
            <span>Product Designer & Developer</span>
            <span>&#x2022;</span>
            <span>Yaoundé</span>
            </h2>

            <p className={`animate-delay-[1500ms] ${fadeIn}`}>
            Experienced and user-centric Product Designer and Developer 
            with a proven track record in collaborating seamlessly with UX and development teams. 
            Skilled in orchestrating the technical aspects and implementation of functional 
            specifications for websites and applications, ensuring high accomplishment and user satisfaction.
            </p>
        </div>

        <div>
            <h2 className={`font-semibold mb-3 text-lg ${fadeIn} animate-delay-[2000ms]`}>Working with technologies:</h2>
            <ul className='flex flex-col gap-3 list-disc list-inside pl-1'>
                <li className={`${fadeIn} animate-duration-[400ms] animate-delay-[2500ms]`}>Javascript</li>
                <li className={`${fadeIn} animate-duration-[400ms] animate-delay-[2800ms]`}>ReactJs</li>
                <li className={`${fadeIn} animate-duration-[400ms] animate-delay-[3100ms]`}>Node.js</li>
                <li className={`${fadeIn} animate-duration-[400ms] animate-delay-[3400ms]`}>GraphQL</li>
            </ul>
        </div>
    </section>
  )
}
