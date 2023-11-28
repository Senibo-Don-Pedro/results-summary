import React from "react"
import {
  MemoryIcon,
  ReactionIcon,
  VerbalIcon,
  VisualIcon,
} from "../assets/images/images"
import Cards from "./Cards"

const App = () => {
  const cardobj = [
    {
      icon: ReactionIcon,
      name: "Reaction",
      value: "80",
      textcolor: "text-Light_red",
      bgcolor: "bg-Light_red bg-opacity-10",
    },
    {
      icon: MemoryIcon,
      name: "Memory",
      value: "92",
      textcolor: "text-Orangey_yellow",
      bgcolor: "bg-Orangey_yellow bg-opacity-10",
    },
    {
      icon: VerbalIcon,
      name: "Verbal",
      value: "61",
      textcolor: "text-Green_teal",
      bgcolor: "bg-Green_teal bg-opacity-10",
    },
    {
      icon: VisualIcon,
      name: "Visual",
      value: "72",
      textcolor: "text-Cobalt_blue",
      bgcolor: "bg-Cobalt_blue bg-opacity-10",
    },
  ]

  return (
    <div className=" flex min-h-screen flex-col items-center justify-center bg-Pale_blue font-display">
      <div className="bg-White sm:w-[430px]  rounded-3xl flex shadow-2xl shadow-Cobalt_blue ">
        <aside className="bg-gradient-to-b from-Light_slate_blue_background to-Light_royal_blue_background py-6 w-1/2 rounded-3xl flex flex-col justify-center items-center gap-3 px-6 text-center  text-Pale_blue">
          <p>Your Result</p>
          <div className="bg-gradient-to-b from-Violet_blue_circle to-Persian_blue_circle w-32 h-32 rounded-full flex flex-col justify-center items-center gap-0.5 text-4xl font-extrabold ">
            76 <span className="text-xs font-medium">of 100</span>
          </div>
          <p className="text-xl">Great</p>
          <p className="text-center text-xs">
            You scored higher than 65% of the people who have taken these tests
          </p>
        </aside>
        <div className="px-4 py-6 flex flex-col gap-4">
          <h1>Summary</h1>
          <Cards cardobj={cardobj} />
          <button className=" px-16 py-2 rounded-full bg-Dark_gray_blue text-White text-sm hover:bg-gradient-to-r from-Light_slate_blue_background to-Light_royal_blue_background">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
