export default function Question() {
    return (
        <section className="pt-[30px] pb-[48px] bg-[#D8F1F0] md:bg-[#DEEEFC] md:pt-[16px] md:pb-[44px] lg:pt-[26px] lg:pb-[42px]">
            <div className="container max-w-[1272px]">
                <div className="md:w-[458px] md:mx-auto lg:w-full lg:mx-0">
                    <h3
                        className="font-IBMPlexSerif text-[20px] font-medium leading-[22px] text-[#061224E5] text-center mb-[30px] md:text-[36px] md:leading-[36px] md:mb-[23px] lg:text-[40px] lg:leading-[48px] lg:mb-[36px]">
                        Популярные вопросы и ответы на них</h3>
                </div>
                <ul className="flex flex-col gap-y-[12px] mx-auto w-[280px] md:w-[511px]">
                    <li className="flex gap-x-[5.1px] md:gap-x-[19.28px]">
                        <p className="text-[#1064E5] font-medium md:text-[18px] translate-y-[-6px]">+</p>
                        <p className="leading-[18.2px] text-[#061224E5] md:text-[16px] md:leading-[22px]">
                            Почему круглую пиццу ставят в квадратную коробку, а нарезают треугольниками?</p>
                    </li>
                    <li className="flex gap-x-[5.1px] md:gap-x-[19.28px]">
                        <p className="text-[#1064E5] font-medium md:text-[18px] translate-y-[-6px]">-</p>
                        <div className="w-[250px] md:w-full">
                            <h3
                                className="leading-[16px] text-[#061224E5] font-semibold mb-[1px] md:mb-[6px] md:text-[16px] md:leading-[33.5px]">
                                Почему после ремонта дорога опять проваливается?</h3>
                            <p
                                className="pl-[8px] leading-[18.2px] text-[#061224E5] md:text-[16px] md:leading-[22px] md:pl-[1.44px]">
                                - Потому что делают ее без соблюдения технологических процессов.</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-x-[5.1px] md:gap-x-[19.28px]">
                        <p className="text-[#1064E5] font-medium md:text-[18px]">+</p>
                        <p className="leading-[18.2px] text-[#061224E5] md:text-[16px] md:leading-[22px]">Почему вода мокрая?
                        </p>
                    </li>
                    <li className="flex items-center gap-x-[5.1px] md:gap-x-[19.28px]">
                        <p className="text-[#1064E5] font-medium md:text-[18px]">+</p>
                        <p className="leading-[18.2px] text-[#061224E5] md:text-[16px] md:leading-[22px]">Видят ли микробы друг
                            друга?</p>
                    </li>
                    <li className="flex items-center gap-x-[5.1px] md:gap-x-[19.28px]">
                        <p className="text-[#1064E5] font-medium md:text-[18px]">+</p>
                        <p className="leading-[18.2px] text-[#061224E5] md:text-[16px] md:leading-[22px]">Почему кровь красная
                            а вены синие?</p>
                    </li>
                    <li className="flex items-center gap-x-[5.1px] md:gap-x-[19.28px]">
                        <p className="text-[#1064E5] font-medium md:text-[18px]">+</p>
                        <p className="leading-[18.2px] text-[#061224E5] md:text-[16px] md:leading-[22px]">Из чего сделана
                            радуга?</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}