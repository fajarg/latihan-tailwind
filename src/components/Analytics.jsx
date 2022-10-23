import React from 'react'

function Analytics() {
  return (
    <div className="w-full px-4 py-16 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[600px] mx-auto my-4"
          src="/laptop.jpeg"
          alt="laptop"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl">
            Manage Data Analytics centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            consectetur quas ad sunt placeat ut, est tempore illum, error
            aliquam, numquam qui molestiae esse impedit ab nesciunt vitae? Modi,
            ipsam.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 text-[#00df9a]">
            Get started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
