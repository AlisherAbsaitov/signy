export default function Facilities() {
    return (
        <section className="py-[44.5px] md:pt-[38px] md:pb-[55px] lg:pt-[54px] lg:pb-[75px]">
            <div className="container max-w-[1272px]">
                <ol className="flex flex-col gap-y-[36px] md:flex-row md:justify-center md:gap-x-[21px]">
                    <li
                        className="flex items-center gap-x-[33px] mx-auto md:mx-0 md:gap-x-[15px] md:items-start lg:gap-x-[20px] lg:items-center">
                        <img className="lg:w-[60px] lg:h-[60px]" src="/public/service1.webp" alt="Моментально" width={42}
                            height={42} />
                            <div className="md:w-[141px] lg:w-[202px]">
                                <h2
                                    className="font-medium text-[20px] leading-[22px] text-061224E5 mb-[6px] md:mb-[5px] lg:mb-[20px] lg:text-[24px] lg:leading-[65px]">
                                    Моментально</h2>
                                <p
                                    className="leading-[18.2px] text-061224E5 lg:text-[16px] lg:leading-[20.8px] tracking-[1.5px]">
                                    Никаких задержек.
                                    <span className="block">1 секунда на подписание</span>
                                </p>
                            </div>
                    </li>
                    <li
                        className="flex items-center gap-x-[33px] mx-auto md:mx-0 md:gap-x-[15px] md:items-start lg:gap-x-[20px] lg:items-center">
                        <img className="lg:w-[60px] lg:h-[60px]" src="/public/service2.webp" alt="Глобально" width={42}
                            height={42} />
                            <div className="md:w-[141px] lg:w-[202px]">
                                <h2
                                    className="font-medium text-[20px] leading-[22px] text-061224E5 mb-[6px] md:mb-[5px] lg:mb-[20px] lg:text-[24px] lg:leading-[65px]">
                                    Глобально</h2>
                                <p
                                    className="leading-[18.2px] text-061224E5 lg:text-[16px] lg:leading-[20.8px] tracking-[1.5px]">
                                    Сервис доступен 24\7 со всех устройств</p>
                            </div>
                    </li>
                    <li
                        className="flex items-center gap-x-[33px] mx-auto md:mx-0 md:gap-x-[15px] md:items-start lg:gap-x-[20px] lg:items-center">
                        <img className="lg:w-[60px] lg:h-[60px]" src="/public/service3.webp" alt="Экономно" width={42}
                            height={42} />
                            <div className="md:w-[141px] lg:w-[202px]">
                                <h2
                                    className="font-medium text-[20px] leading-[22px] text-061224E5 mb-[6px] md:mb-[5px] lg:mb-[20px] lg:text-[24px] lg:leading-[65px]">
                                    Экономно</h2>
                                <p
                                    className="leading-[18.2px] text-061224E5 lg:text-[16px] lg:leading-[20.8px] tracking-[1.5px]">
                                    В 30 раз дешевле чем почта и курьеры</p>
                            </div>
                    </li>
                </ol>
            </div>
        </section>
    )
}