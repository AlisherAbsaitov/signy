import React from 'react'

export default function Verify() {
  return (
    <section className='p-[40px] bg-[#D8F1F0]'>
        <h1 className='text-[40px] text-center mb-[20px]'>Подпишись на наши новости!</h1>
        <p className='text-[18px] text-center mb-[20px]'>Введи свой электронный адрес и будь в курсе всех обновлений</p>
        <form className='flex gap-x-[20px] ml-[380px] mb-[20px]'>
            <input type="email" className='w-[399px] h-[50px] rounded-[37px] border-2 border-[#1064E5] bg-[#ffff]'/>
            <button type='submit' className='w-[178px] h-[50px] rounded-[37px] bg-[#1064E5] text-[#ffff]'>Отправить</button>
        </form>
    </section>
  )
}
