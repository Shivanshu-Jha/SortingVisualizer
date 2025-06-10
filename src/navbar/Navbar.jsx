import React from 'react'



const Navbar = ({ generate, handleSorting, userInputArr, setUserInputArr, setSpeed, isSorting, reSet, selectedSorting }) => {
    return (
        <div className='md:flex justify-around items-center mt-12 md:text-lg  text-xs font-semibold'>

            <span className='font-bold text-sm border rounded-lg animate-pulse bg-black font-mono text-[beige] p-1'>SORTING VISUALIZER</span>

            {/* input option for entering array */}
            <input value={userInputArr} onChange={(e) => { setUserInputArr(e.target.value) }} type="text" className='border rounded-xl p-2 ml-4 shadow-gray-800 shadow-lg hover:scale-110 transition delay-100 duration-300 ease-in-out focus:border-b-blue-500 inset-shadow-sm inset-shadow-fuchsia-500/50 placeholder:text-slate-500 text-lg' placeholder='Enter Array (in CSV)' />


            {/* button for generating new array */}
            <button onClick={generate} className='border rounded-xl p-2 ml-4 bg-gray-700 text-[beige] shadow-gray-800 shadow-lg hover:scale-110 transition delay-100 duration-300 ease-in-out'>Generate New Array</button>


            {/* button for reseting the data */}
            <button className='border rounded-xl mt-2 ml-4 px-6 py-2 bg-gray-700 shadow-gray-800 text-[beige] shadow-lg hover:scale-110 transition delay-100 duration-300 ease-in-out' onClick={reSet}>Reset</button>


            {/* option for selecting sorting methods */}
            <select value={selectedSorting} className='border rounded-xl p-2 bg-gray-700 text-[beige] shadow-gray-800 shadow-lg focus:scale-110 transition delay-100 duration-300 ease-in-out relative' onChange={handleSorting}>
                <option value="">Select Sorting</option>
                <option value="Bubble Sort">Bubble Sort</option>
                <option value="Merge Sort">Merge Sort</option>
                <option value="Quick Sort">Quick Sort</option>
                <option value="Selection Sort">Selection Sort</option>
                <option value="Insertion Sort">Insertion Sort</option>
                <option value="Heap Sort">Heap Sort</option>
            </select>


            {/* slider for controling the speed of animation */}
            <label className='space-x-4 mt-3 ml-4 md:flex justify-center items-center'>
                <span className='text-lg font-serif underline'>Speed:</span>
                <input className='border rounded-xl p-2 shadow-blue-800 shadow-lg hover:scale-110 transition delay-100 duration-300 ease-in-out' type="range" min="10" max="200" onChange={(e) => setSpeed(200 - e.target.value)} name="speed" id="" />
            </label>

        </div>
    )
}

export default Navbar
