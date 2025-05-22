import image from "/public/header logo.webp"
import { HiChevronDown } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next"

function Header() {
  const { t, i18n } = useTranslation()
  const changeLanguagefn = (e) => {
    i18n.changeLanguage(e.target.value)
  }
  return (
    <>
      <div className='bg-[#DEEEFC]'>
        <div className="container flex mx-auto gap-x-[150px]">
          <Link to={"/"}>
            <img className='w-[150px]' src={image} alt="" />
          </Link>
          <div className='flex items-center gap-x-[50px]'>
            <div className="flex items-center">
              <h1>ПРО НАС</h1>
              <HiChevronDown />
            </div>
            <div>
              <p>{t("ЦЕНЫ")}</p>
            </div>
            <div>
              <Link to={"/blog"}>Блог</Link>
            </div>
            <div>
              <Link to={"/blogpost"}>Блог пост</Link>
            </div>
            <div>
              <Link to={"/video"}>Видео инструкции</Link>
            </div>
            <div>
              <Link to={"/contact"}>КОНТАКТЫ</Link>
            </div>
            <div>
              <Link to={"/faq"}>Faq</Link>
            </div>
            <select onChange={changeLanguagefn}>
              <option value="ru">RU</option>
              <option value="uz">UZ</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

