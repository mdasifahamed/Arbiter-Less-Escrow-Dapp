import React from 'react'
import chart from "./images/diagram-export-11-30-2023-6_16_06-PM.png"

const About = () => {
  return (
    <>
      <div className="mt-8 pt-4 pb-2 w-full flex flex-row items-start justify-between gap-8">

        <div className="w-full mt-5 flex flex-col items-center gap-4">
          <div><h1 className="text-4xl font-bold">How The Dapp Work</h1></div>
          <div>
            <img className="w-4/5 h-2/5" src={chart} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About