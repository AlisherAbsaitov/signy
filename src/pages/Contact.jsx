import React from 'react'
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
// Akbar
export default function Contact() {
  return (
    <div className='container mx-auto'>
      <div>
        <h1 className='text-[40px] mb-[20px]'>Наши контакты</h1>
        <p className='text-[18px] w-[490px] mb-[10px  ]'>Мы всегда рады ответить на ваши вопросы и развивать эффективное сотрудничество по всем вопросам, связанным с электронным документооборотом.</p>
        <div>
          <div className='flex items-center gap-x-[10px]'><FaPhoneFlip className='text-[#1064e5] text-[19px]' /><p>0 800 750 643</p></div>
          <div className='mx-[25px]'>
            <p>+3 044 334 56 43</p>
            <p>+3 044 338 86 43</p>
          </div>
        </div>
        <div className='flex items-center gap-x-[10px]'><MdEmail className='text-[#1064e5] text-[19px]' /> <p>infosmartsign@smarttender.biz</p></div>
        <div className='flex items-center gap-x-[10px]'><IoLocationSharp className='text-[#1064e5] text-[19px]' /> <p>пр-т Бажана, 14 АКиев, 02072</p></div>
        <div>
          <h1 className='text-[40px]'>...или напишите нам:</h1>

          <label>Имя*:
            <br />
            <input type="text" placeholder='Иван' className='border-2 rounded-3xl px-[25px] py-[5px]' />
          </label>
            <br />
          <label>Электронная почта*:
            <br />
            <input type="text" placeholder='ivan@mail.com' className='border-2 rounded-3xl px-[25px] py-[5px]' />
          </label>
<br />
          <label>Телефон*:
            <br />
            <input type="text" placeholder='+38 000 000 00 00' className='border-2 rounded-3xl px-[25px] py-[5px]' />
          </label>
<br />
          <label>Сообщение:
            <br />
            <textarea type="text" placeholder='введите тут' className='border-2 rounded-2xl px-[25px] py-[25px]' ></textarea>
          </label>
        </div>
      </div>
    </div>
  )
}
