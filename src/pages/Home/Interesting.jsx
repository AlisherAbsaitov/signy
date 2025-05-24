export default function Interesting() {
    return (
        <section className="pt-[21px] pb-[31px] bg-D8F1F0 md:pt-[35px] md:pb-[56px] lg:pt-[38px] lg:pb-[44px]">
            <div className="container max-w-[1272px]">
                <h3
                    className="text-[20px] font-medium font-IBMPlexSerif leading-[22px] text-center text-061224E5 mb-[25px] md:text-[36px] md:leading-[48px] md:mb-[42px] lg:mb-[32px]">
                    Интересно пишем про</h3>
                <ul
                    className="flex flex-col items-center gap-y-[12px] md:flex-row md:items-center md:justify-center md:gap-x-[45px] lg:justify-between lg:gap-x-[20px]">
                    <li className="flex flex-col items-start gap-y-[12px] md:gap-y-[14px]">
                        <a href="#">
                            <img className="rounded-[4px] md:w-[324px] md:h-[395px] lg:w-[374px]"
                                src="/public/good write 1.webp" alt="Интересно пишем про" width={280} height={299} />
                        </a>
                        <div className="w-[257px] flex flex-col gap-y-[6px]">
                            <p className="text-[12px] leading-[14px] font-medium md:text-[14px] md:leading-[24px]">
                                28.05.2020</p>
                            <h3
                                className="text-[16px] font-semibold leading-[18px] text-061224E5 md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[26.5px]">
                                Заголовок короткий в две строки</h3>
                        </div>
                    </li>
                    <li className="flex flex-col items-start gap-y-[12px] md:gap-y-[14px]">
                        <a href="#">
                            <img className="rounded-[4px] md:w-[324px] md:h-[395px] lg:w-[374px]"
                                src="/public/good write 2.webp" alt="Интересно пишем про" width={280} height={299} />
                        </a>
                        <div className="w-[257px] flex flex-col gap-y-[6px]">
                            <p className="text-[12px] leading-[14px] font-medium md:text-[14px] md:leading-[24px]">
                                28.05.2020</p>
                            <h3
                                className="text-[16px] font-semibold leading-[18px] text-061224E5 md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[26.5px]">
                                Заголовок короткий в две строки</h3>
                        </div>
                    </li>
                    <li className="hidden flex-col items-start gap-y-[12px] lg:block md:gap-y-[14px]">
                        <a href="#">
                            <img className="rounded-[4px] md:w-[324px] md:h-[395px] lg:w-[374px]"
                                src="/public/good write 1.webp" alt="Интересно пишем про" width={280} height={299} />
                        </a>
                        <div className="w-[257px] flex flex-col gap-y-[6px]">
                            <p className="text-[12px] leading-[14px] font-medium md:text-[14px] md:leading-[24px]">
                                28.05.2020</p>
                            <h3
                                className="text-[16px] font-semibold leading-[18px] text-061224E5 md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[26.5px]">
                                Заголовок короткий в две строки</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}