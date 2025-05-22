import React from "react";
import Headphone from "/public/Headphone.png";
import productJson from "/src/data/product.json";
import { useState } from "react";

export default function Cards() {
  const [data, setData] = useState(productJson);
  console.log(data);
  return (
    <section className="flex items-center justify-around p-[10px]">
      {data.map((value, index) => {
        return (
          <div className="p-[20px]">
            <img src={value.product_img} alt="" className=" mt-[20px]" />
            <p className="text-[14px] mt-[5px]">05.03.2020</p>
            <h3 className="text-[24px] font-bold mt-[15px]">
              Burn Calories Quicker in 30 Min.
            </h3>
            <div className="flex gap-x-[20px] mt-[15px]">
              <button className="w-[120px] bg-[#E5E5E5] rounded-[20px]">
                про продукт
              </button>
              <button className="w-[90px] bg-[#E5E5E5] rounded-[20px]">
                Теги
              </button>
            </div>
            <p className="w-[250px] mt-[15px]">
              Не следует, однако забывать, что дальнейшее развитие различных
              форм деятельности
            </p>
          </div>
        );
      })}
    </section>
  );
}
