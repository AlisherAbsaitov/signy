export default function Friends() {
    return (
        <section className="pt-[20px] pb-[22px] md:pt-[43px] md:pb-[52px] lg:pt-[47px] lg:pb-[58px]">
            <div className="container max-w-[1272px]">
                <h3
                    className="font-IBMPlexSerif text-[20px] leading-[22px] font-medium text-061224E5 text-center mb-[25px] md:text-[36px] md:leading-[48px] md:mb-[44px] lg:text-[40px] lg:mb-[46px]">
                    Друзья Signy</h3>
                <ul
                    className="flex justify-center items-center flex-col gap-y-[25px] gap-x-[30px] mb-[25px] md:flex-row lg:gap-x-[95px]">
                    <li className="w-[222px] flex justify-between items-center md:w-[336.5px] lg:w-[487px]">
                        <a href="#">
                            <img className="md:w-[134px] md:h-[80px] lg:w-[176px] lg:h-[106px]" src="/public/friend1.webp"
                                alt="Друзья Signy" width={78} height={48} />
                        </a>
                        <a href="#">
                            <img className="md:w-[172.5px] md:h-[70px] lg:w-[207px] lg:h-[84px]" src="/public/friend2.webp"
                                alt="Друзья Signy" width={99} height={40} />
                        </a>
                    </li>
                    <li className="w-[215px] flex justify-between items-center md:w-[283.5px] lg:w-[455px]">
                        <a href="#">
                            <img className="md:w-[157.5px] md:h-[70px] lg:w-[189px] lg:h-[84px]" src="/public/friend3.webp"
                                alt="Друзья Signy" width={83} height={43} />
                        </a>
                        <a href="#">
                            <img className="md:w-[96px] md:h-[88px] lg:w-[128px] lg:h-[118px]" src="/public/friend4.webp"
                                alt="Друзья Signy" width={62} height={56} />
                        </a>
                    </li>
                </ul>
                <ul className="flex justify-center items-center gap-x-[25px]">
                    <li className="w-[10px] bg-[#1064E5] py-[5px] rounded-[50%] cursor-pointer"></li>
                    <li className="w-[10px] border-[#1064E5] border-[2px] py-[3.4px] rounded-[50%] cursor-pointer"></li>
                    <li className="w-[10px] border-[#1064E5] border-[2px] py-[3.4px] rounded-[50%] cursor-pointer"></li>
                </ul>
            </div>
        </section>
    )
}