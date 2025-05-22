import React from "react";
import Glasses from "/public/Glasses.png";
import Cards from "./Cards";
// Usmon
export default function Blog() {
  return (
    <section>
      <div className="flex items-center justify-around p-[20px]">
        <div>
          <h1 className="text-[50px] font-light">Интересно пишем про</h1>
          <img src={Glasses} alt="" className="w-[731px] h-[422p[px]" />
        </div>
        <div>
          <h4 className="mt-[20px]">28.05.2020</h4>
          <h1 className="text-[30px] font-bold mt-[20px]">
            Burn Calories Quicker in 30 Min.
          </h1>
          <div className="flex gap-x-[20px] mt-[20px]">
            <button className="p-[10px] bg-[#E5E5E5] rounded-[20px]">
              про продукт
            </button>
            <button className="p-[10px] bg-[#E5E5E5] rounded-[20px]">
              теги
            </button>
            <button className="p-[10px] bg-[#E5E5E5] rounded-[20px]">
              много тегов
            </button>
          </div>
          <p className="text-[17px] mt-[20px]">
            Идейные соображения высшего порядка, а также укрепление и <br />
            структуры играет важную роль в формировании существенных финансовых
            и <br />
            административных условий. Не следует, однако забывать, что
            дальнейшее <br />
            развитие различных форм деятельности способствует подготовки и{" "}
            <br />
            реализации форм развития.
          </p>
          <button className="font-black mt-[20px]">ЧИТАТЬ</button>
        </div>
      </div>
      <div>
        <Cards/>
      </div>
    </section>
  );
}
