import React from 'react'
// Shaxruza
export default function FAQ() {
  return (
    <div>
          <div className="bg-white text-gray-900 font-sans px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Популярные вопросы и ответы на них</h1>

      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">Популярные вопросы -</h2>

        <p className=" font-semibold mb-2 cursor-pointer"> <span className='text-blue-500'>+</span> Почему круглую пиццу ставят в квадратную коробку, а нарезают треугольниками?</p>

        <p className="text-black font-semibold cursor-pointer"><span className='text-blue-500'>-</span> Почему после ремонта дорога опять проваливается?</p>
        <p className="text-sm text-gray-700 mb-2 ml-4">
          Потому что делают ее без соблюдения технологических процессов.
        </p>

        <p className=" font-semibold mb-2 cursor-pointer"><span className='text-blue-500'>+</span>Почему вода мокрая?</p>
        <p className=" font-semibold mb-2 cursor-pointer"><span className='text-blue-500'>+</span>Видят ли микробы друг друга?</p>
        <p className=" font-semibold mb-2 cursor-pointer"><span className='text-blue-500'>+</span>Почему кровь красная, а вены синие?</p>
        <p className=" font-semibold mb-2 cursor-pointer"><span className='text-blue-500'>+</span>Из чего сделана радуга?</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-black cursor-pointer hover:underline">Настройка работы в Signy <span className='text-blue-500'>+</span></h3>
          <p className="text-sm  underline ml-1">Ответов на вопросы 25</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black cursor-pointer hover:underline">Работа с документами <span className='text-blue-500'>+</span></h3>
          <p className="text-sm  underline ml-1">Ответов на вопросы 15</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black cursor-pointer hover:underline">Информация по безопасности <span className='text-blue-500'>+</span></h3>
          <p className="text-sm  underline ml-1">Ответов на вопросы 17</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black cursor-pointer hover:underline">Технические вопросы <span className='text-blue-500'>+</span></h3>
          <p className="text-sm  underline ml-1">Ответов на вопросы 16</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black cursor-pointer hover:underline">Интеграция <span className='text-blue-500'>+</span></h3>
          <p className="text-sm  underline ml-1">Ответов на вопросы 15</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black cursor-pointer hover:underline">Общие вопросы <span className='text-blue-500'>+</span></h3>
          <p className="text-sm  underline ml-1">Ответов на вопросы 57</p>
        </div>
      </div>
    </div>
    </div>
  )
}
