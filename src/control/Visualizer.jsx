import React from 'react'

const Visualizer = ({ array }) => {


  return (

    <div className="array-container flex justify-center items-end md:h-[450px] h-[375px] mt-3 md:scale-75 scale-50">
      {array.map((item, index) => (
        <div key={index} className='bar mx-1.5 my-1 md:w-9 w-6 bg-blue-400 border rounded-xl shadow-lg shadow-[#b3b3b3] transition-height transition-colors delay-75 duration-200 flex justify-center items-end text-[#060606] text-xl pb-1.5'
          style={{ height: `${item}px` }}>{item}</div>
      ))}
    </div>

  )
}

export default Visualizer
