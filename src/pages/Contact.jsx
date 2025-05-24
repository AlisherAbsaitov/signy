import React from 'react'
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import image2 from "/public/image2.png"
import { useForm } from 'react-hook-form';
// Akbar
export default function Contact() {
  const notify = () => toast('Malumot qoshildi');

  const { register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()


  const Submit = async (payload) => {
    const res = await axios.post("https://67f9ff6b094de2fe6ea2dc6e.mockapi.io/users", payload)
  }
  return (
    <div className='container mx-auto justify-between px-[100px]'>
      <div>
        <h1 className='text-[40px] mb-[20px]'>{t("Bizning kontaktlarimiz")}</h1>
        <div className='flex items-center'>
          <div>
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
          </div>

          <div>
            <iframe src="https://yandex.uz/map-widget/v1/?ll=69.247936%2C41.328718&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozNDUzOTc0MzI1Eh1Pyrt6YmVraXN0b24sIFRvc2hrZW50LCBHYW5nYSIKDfF-ikIVnFAlQg%2C%2C&z=13.67" width="560" height="250" ></iframe>
          </div>
        </div>
        <div>
          <h1 className='text-[40px]'>...или напишите нам:</h1>

          <label>Имя*:
            <br />
            <input {...register("name", { required: "Ismingizni kiriting..." })} type="text" placeholder='Иван' className='border-2 rounded-3xl px-[25px] py-[5px] w-[380px]' />
          </label>
          <br />
          <label>Электронная почта*:
            <br />
            <input {...register("email", { required: "Email kiriting..." })} type="text" placeholder='ivan@mail.com' className='border-2 rounded-3xl px-[25px] py-[5px] w-[380px]' />
          </label>
          <br />
          <label>Телефон*:
            <br />
            <input {...register("phonenumber", { required: "Telefon kiriting..." })} type="text" placeholder='+38 000 000 00 00' className='border-2 rounded-3xl px-[25px] py-[5px] w-[380px]' />
          </label>
          <br />
          <label>Сообщение:
            <br />
            <textarea type="text" placeholder='введите тут' className='border-2 rounded-2xl px-[25px] py-[25px] w-[380px]' ></textarea>
          </label>
          <div><button onClick={notify} className='bg-[#4988e5] w-[150px] mx-auto rounded-3xl mt-[15px] p-[8px] text-white'>Отправить</button></div>
        </div>
      </div>


    </div>
  )
}
