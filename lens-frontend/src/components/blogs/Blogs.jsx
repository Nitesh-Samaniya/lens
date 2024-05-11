import React from 'react'
import BlogCard from './BlogCard'
import { FaArrowRight } from "react-icons/fa";
import Button from '../Button';

const card1Section = [
    {
        date: 'NEW!',
        title: 'Generative AI',
        text: 'In today data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape....',
        color: 'yellow'
    },
    {
        date: 'April 25, 2024',
        title: 'The Evolution of AI in Games',
        text: 'The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...',
        color: 'blue'
    }
]

const card2Section = [
    {
        date: 'April 18, 2024',
        title: 'Unmasking the Misconceptions of Artificial Intelligence in the Workplace',
        text: 'The rise of Artificial Intelligence (AI) has sparked both excitement and apprehension. Many professionals are unsure how AI impacts their work....',
        color: 'orange'
    }
]

const Blogs = () => {
  return (
    <div>
        <div className='mt-20 text-2xl flex flex-col items-center'>
            <div>OUR BLOGS</div>
            <div style={{
                width: '85px',
                height: '5px',
                borderRadius: '1000px',
                background: 'var(--gr-4, linear-gradient(54deg, #0091ff 0%, #9cfeff 100%))'
            }}>
            </div>
        </div>

        <div className='mt-10 text-4xl sm:text-6xl text-center'>Inhouse Mindscape</div>

        <div className='w-[90%] m-auto flex flex-col gap-10 sm:flex-row justify-between items-center mt-10'>
            {
                card1Section.map((el,index)=>
                <BlogCard key={index} date={el.date} title={el.title} text={el.text} color={el.color}/>)
            }
        </div>

        <div className='w-[90%] m-auto flex flex-col gap-10 mt-10'>
            {
                card2Section.map((el,index)=>
                <BlogCard key={index} date={el.date} title={el.title} text={el.text} color={el.color}/>)
            }
        </div>

        <div className='mt-10 group flex justify-center'>
            {/* <button className='group flex items-center gap-2 border-solid border border-black px-10 py-3 font-semibold rounded-lg hover:bg-black hover:text-white'>
                Explore More
                <span className='hidden group-hover:flex items-center'>
                    <FaArrowRight color='white' />
                </span>
            </button> */}
            <Button text={'Explore More'}/>
        </div>
    </div>
  )
}

export default Blogs