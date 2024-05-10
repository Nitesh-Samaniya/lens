import React from 'react'
import { FaCheck } from "react-icons/fa";
import Right from '../../../public/whyRight.webp'
import Research from '../../../public/whyResearch.webp'
import Play from '../../../public/whyPlay.webp'
import Support from '../../../public/whySupport.webp'
import WhyCards from './WhyCards';


const check1Box = [
    'State-of-the-art solutions',
    'Fast & Efficient',
    'No extra computation fee',
    'No licensing fee'
]

const check2Box = [
    'Lifetime support & upgrades',
    'Plug-and-Play',
    '24x7 Progress Monitoring',
    'Incremental Updates'
]

const cardsData = [
    {
        color: 'green',
        title: 'Exclusive Rights',
        image: Right,
        text: 'Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.'
    },
    {
        color: 'blue',
        title: 'Research Driven',
        image: Research,
        text: 'We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.'
    },
    {
        color: 'red',
        title: 'Plug-and-Play',
        image: Play,
        text: 'We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs.'
    },
    {
        color: 'orange',
        title: 'Lifetime Support',
        image: Support,
        text: 'hould you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.'
    }
]

const Why = () => {
  return (
    <div className='font-poppins bg-[#fcfbf7] w-[95%] m-auto text-center'>
        <div className='mt-20 text-3xl flex flex-col items-center'>
            <div>WHY CHOOSE LENS</div>
            <div style={{
                width: '85px',
                height: '5px',
                borderRadius: '1000px',
                background: 'var(--gr-4, linear-gradient(54deg, #0091ff 0%, #9cfeff 100%))'
            }}>
            </div>
        </div>

        <div className='mt-10 text-4xl sm:text-6xl md:text-5xl leading-snug'>
            AI-driven solutions backed by science
        </div>

        <div className='mt-5 leading-relaxed text-gray-500 text-xl'>
            Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.
        </div>

        <div className='w-[80%] text-xl text-gray-500 m-auto grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10'>
            <div>
                <ul>
                    {
                        check1Box.map((el, index)=><li className='mb-1' key={index}>
                            <p className='flex items-center gap-3'><span><FaCheck /></span>{el}</p>
                        </li>)
                    }
                </ul>
            </div>

            <div>
                <ul>
                    {
                        check2Box.map((el, index)=><li key={index}>
                            <p className='flex items-center gap-3'><span><FaCheck /></span>{el}</p>
                        </li>)
                    }
                </ul>
            </div>
        </div>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-[85%] sm:w-[85%] lg:w-[100%] xl:w-[100%] m-auto'>
            {
                cardsData.map((el, index)=><WhyCards key={index} color={el.color} title={el.title} image={el.image} text={el.text}/>)
            }
        </div>

    </div>
  )
}

export default Why