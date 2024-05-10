import React from 'react'
import Card from './Card'

const cardsData = [
    {
        color: 'green',
        title: 'Biometric',
        text: 'Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.'
    },
    {
        color: 'blue',
        title: 'Image Analysis',
        text: 'Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.'
    },
    {
        color: 'red',
        title: 'Cross-Media Translation',
        text: 'Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.'
    },
    {
        color: 'orange',
        title: '3D Modelling and Design.',
        text: "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video."
    }
]

const Service = () => {
  return (
      <div className='font-poppins bg-[#fcfbf7] w-[90%] m-auto text-center'>
          <div className='mt-20 text-3xl flex flex-col items-center'>
              <div>Services</div>
              <div style={{
                  width: '85px',
                  height: '5px',
                  borderRadius: '1000px',
                  background: 'var(--gr-4, linear-gradient(54deg, #0091ff 0%, #9cfeff 100%))'
              }}>
              </div>
          </div>

          <div className='mt-10 text-4xl sm:text-6xl md:text-5xl leading-snug'>We provide Artificial Intelligence Services</div>

        <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:w-[60%] lg:w-[80%] xl:w-[70%] m-auto'>
            {
                cardsData.map((el, index)=><Card key={index} number={index} color={el.color} title={el.title} text={el.text}/>)
            }
        </div>

          
      </div>
  )
}

export default Service