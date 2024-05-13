
export const Step1 = ({step, title, index, image}) => {
  return (
    <div className="group ease-in duration-300">
        <div className='text-left text-3xl group-hover:text-4xl mb-8 mt-10'>{title}</div>
        <div className='flex justify-between text-left text-sm text-gray-500'>
          <div className="flex justify-center items-center h-12 w-12 rounded-full bg-white shadow-2xl">
             {/* <span className="text-lg font-bold">{index + 1}</span> */}
             <span>{image}</span>
          </div>
          <div className='w-[77%] group-hover:w-[80%] sm:mb-5 '>{step}</div>
        </div>
      </div>
  )
}

export const Step2 = ({step, title, index, image}) => {
    return (
      <div className="group ease-in duration-300">
        <div className='text-left text-3xl mb-8 mt-10 group-hover:text-4xl'>{title}</div>
        <div className='flex justify-between text-left text-sm text-gray-500'>
          <div className='w-[77%] sm:mb-5 group-hover:w-[80%]'>{step}</div>
          <div className="flex justify-center items-center h-12 w-12 rounded-full bg-white shadow-2xl">
             {/* <span className="text-lg font-bold">{index + 1}</span> */}
             <span>{image}</span>
          </div>
        </div>
      </div>
    )
  }