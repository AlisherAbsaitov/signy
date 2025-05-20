import React from "react";
import Glasses from "/public/Glasses.png";
// Usmon
export default function Blog() {
  return (
    <section>
      <div>
        <h1>Интересно пишем про</h1>
        <img src={Glasses} alt="" className="w-[731px] h-[422p[px]" />
      </div>
      <div>
        <h4>28.05.2020</h4>
        <h1>Burn Calories Quicker in 30 Min.</h1>
        <div className="gap-x-[20px]">
          <button className="p-[2px] bg-[#E5E5E5] rounded-[20px]">про продукт</button>
          <button className="p-[2px] bg-[#E5E5E5] rounded-[20px]">теги</button>
          <button className="p-[2px] bg-[#E5E5E5] rounded-[20px]">много тегов</button>
        </div>
      </div>
    </section>
  );
}
