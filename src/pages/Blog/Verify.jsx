import React from 'react'

export default function Verify() {
  return (
    <section>
        <h1 className='text-[40px]'>Подпишись на наши новости!</h1>
        <p>Введи свой электронный адрес и будь в курсе всех обновлений</p>
        <form>
            <input type="email" />
            <button type='submit'>Отправить</button>
        </form>
    </section>
  )
}
