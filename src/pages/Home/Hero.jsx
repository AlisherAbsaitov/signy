export default function Hero() {
    return (
        <section className="bg-hero-bg bg-cover bg-center bg-no-repeat md:bg-hero-bg-md lg:bg-hero-bg-lg" id="hero">
            <div className="container max-w-[1272px]">
                <div className="py-[151px]">
                    <div className="w-[223px] md:w-[344px] lg:w-[586px]">
                        <h1
                            className="font-IBMPlexSerif text-[25px] font-medium leading-[26px] text-061224E5 mb-[30px] md:text-[36px] md:leading-[45.5px] md:mb-[36px] lg:text-[40px] lg:mb-[14px]">
                            Цифровой
                            документооборот
                            в
                            три этапа:
                        </h1>
                    </div>
                    <div className="flex items-center gap-x-[12px] mb-[12px] md:mb-[6px] lg:mb-[14px]">
                        <p
                            className="text-[18px] font-medium leading-[23.4px] tracking-[1.5px] text-061224E5 md:text-[24px] md:leading-[31.2px]">
                            1</p>
                        <div className="w-[16px] border-[1.5px] border-1064E5"></div>
                        <p
                            className="font-medium leading-[18.2px] tracking-[1.5px] text-061224 opacity-[60%] md:text-[18px] md:leading-[23.4px]">
                            2</p>
                        <div className="w-[16px] border-[1.5px] border-1064E5"></div>
                        <p
                            className="font-medium leading-[18.2px] tracking-[1.5px] text-061224 opacity-[60%] md:text-[18px] md:leading-[23.4px]">
                            3</p>
                    </div>
                    <h2
                        className="text-[18px] font-medium leading-[20px] text-061224E5 mb-[8px] md:text-[24px] md:leading-[31.2px] md:mb-[21px] lg:mb-[14px]">
                        Быстрая регистрация
                    </h2>
                    <div className="w-[205px] mb-[37px] md:w-[324px] lg:w-[454px]">
                        <p className="leading-[18.2px] text-061224E5 md:text-[16px] md:leading-[20.8px]">Мы создали,
                            возможно, самую простую регистрацию.
                            Регистрируйся, получай полный доступ к
                            сервису и 1000 подписей документов в подарок!</p>
                    </div>
                    <button
                        className="w-[238px] py-[15.5px] text-center bg-[#1064E5] text-FFFFFF uppercase rounded-[45px] text-[12px] font-bold leading-[15.6px] tracking-[1.5px] block mx-auto mb-[36px] md:mx-0 duration-[.3s] border-[1.5px] border-[#1064E5] hover:bg-transparent hover:text-[#1064E5] active:border-[#0046B0]  active:text-[#FFFFFF] active:bg-[#0046B0]">
                        Попробовать Бесплатно</button>
                </div>
            </div>
        </section>
    );
}
