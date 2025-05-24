import React from 'react'
// Shaxruza
export default function Footer() {
  return (
  
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
     
        <div>
          <div className="flex items-center mb-4">
           
            <span className="font-semibold text-lg">Signy</span>
          </div>
          <p className="text-sm text-gray-400">© 2020 Signy</p>
        </div>

     
        <div className="text-sm space-y-2">
          <div className="grid grid-cols-2 gap-x-6">
            <div className="space-y-1">
              <p>Про нас</p>
              <p>Цены</p>
              <p>Вход</p>
              <p>Регистрация</p>
            </div>
            <div className="space-y-1">
              <p>Блог</p>
              <p>Контакты</p>
              <p className="text-gray-500">Договір оферти</p>
              <p className="text-gray-500">Безпека сервісу</p>
            </div>
          </div>
        </div>

      
        <div className="text-sm space-y-1">
          <p>infosmartsign@smarttender.biz</p>
          <p>Facebook</p>
          <p>пр-т Миколи Бажана, 14 А</p>
         
        </div>
     
      </div>
    </footer>


   
  )
}
