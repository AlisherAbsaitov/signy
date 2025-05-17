import liveImg from "/public/live.webp"

export default function Live() {
    return (
        <section className="py-[20px] md:py-[50px] lg:pt-[49px] lg:pb-[63px]">
            <div className="container max-w-[1272px]">
                <h3
                    className="font-IBMPlexSerif text-[20px] font-medium leading-[22px] text-center text-[#061224E5] mb-[20px] md:text-[36px] md:leading-[48px] md:mb-[40px] lg:text-[40px] lg:mb-[20px]">
                    Познакомимся в живую?</h3>
                <div className="bg-cover bg-center bg-no-repeat py-[117px] w-[280px] mx-auto rounded-[4px] md:m-0 md:w-full md:py-[160.5px] lg:w-[734px] lg:mx-auto lg:py-[175px]"
                    style={{ backgroundImage: `url(${liveImg})` }}>
                    <div
                        className="w-[54px] py-[16.98px] text-center bg-[#FFFFFF] rounded-[50%] mx-auto md:w-[104px] md:py-[32px]">
                        <i className="fa-solid fa-play text-[#1064E5] text-[21px] text-center cursor-pointer md:text-[33px]"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}