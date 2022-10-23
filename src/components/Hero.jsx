import React from 'react'

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl font-bold md:text-7xl sm:text-6xl md:py-6">
          Grow with data.
        </h1>
        <div>
          <p className="py-4 text-xl font-bold md:text-5xl sm:text-4xl">
            Fast, flexible financing for
          </p>
        </div>
        <p className="text-xl font-bold text-gray-500 md:text-2xl">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-black">
          Get started
        </button>
      </div>
    </div>
  )
}

export default Hero