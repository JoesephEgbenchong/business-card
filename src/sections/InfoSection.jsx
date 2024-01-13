import React from 'react'

export default function InfoSection() {
  return (
    <section className='flex flex-col pl-80 pt-16 flex-1 gap-5'>
        <h1 className='flex flex-col gap-1 text-4xl font-semibold uppercase'>
            <span className='text-green-700 text-3xl'>Joseph AYUK</span>
            EGBENCHONG II
        </h1>

        <div>
            <h2 className="mb-3 font-semibold">Product Designer & Developper &#x2022; Yaoundé</h2>
            <p className='text-sm'>
            Experienced and user-centric Product Designer and Developer 
            with a proven track record in collaborating seamlessly with UX and development teams. 
            Skilled in orchestrating the technical aspects and implementation of functional 
            specifications for websites and applications, ensuring high accomplishment and user satisfaction.
            </p>
        </div>

        <div>
            <h2 className='font-semibold mb-3'>Working with technologies:</h2>
            <ul className='text-sm flex flex-col gap-3 list-disc list-inside pl-1'>
                <li>Javascript</li>
                <li>ReactJs</li>
                <li>Node.js</li>
                <li>GraphQL</li>
            </ul>
        </div>
    </section>
  )
}