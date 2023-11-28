import React from "react"

const Cards = ({ cardobj }) => {
  const card = cardobj.map((item) => (
    <li
      key={item.value}
      className={`py-1 ${item.bgcolor} rounded-md flex justify-between w-full`}
    >
      <div className="flex justify-center items-center pl-2 gap-1">
        <img src={item.icon} alt="icon" width={15} />
        <p className={`text-sm ${item.textcolor} font-bold`}>{item.name}</p>
      </div>
      <p className="text-sm font-extrabold">
        {item.value} <span className="text-Dark_gray_blue pr-3">/ 100</span>
      </p>
    </li>
  ))

  return <ul className="flex flex-col gap-3 mb-4">{card}</ul>
}

export default Cards
