import React from 'react';
import delivary from "../assets/DELIVARY.png"
import quality from "../assets/quality.png"
import support from "../assets/support.png"
const Bestoption: React.FC = () => {
    return (
        <div className='max-w-[1240px] lg:px-0 px-4 md:scale-100 scale-90 mx-auto lg:mt-[37px] md:mt-32'>
            <div className='flex justify-center flex-col items-center '>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#25AAE1] bold md:text-[64px] md:w-[791px] flex justify-center items-center md:leading-[64px] text-center text-[28px] leading-[32px]'>WHY WE ARE THE BEST OPTION FOR YOU</h1>
                <p className='regular mt-[16px] font-[600] text-[20px] text-[#D9D9D9] leading-[25.6px]'>There are numbers of video editing agencies out there but we stand out for a reason. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[80px] lg:gap-[112px] md:gap-[60px] gap-[40px] '>
                <div className='w-[338px] optioncard transition-colors duration-300 h-[322px] pt-[40px] pb-[40px] flex group flex-col items-center rounded-[10px] justify-center md:gap-6 gap-2'>
                    <img src={delivary} alt="" />
                    <div className='p-5'>
                        <h1 className='md:text-[36px] semibold text-white group-hover:text-[#03070D] lg:text-left text-center text-[24px]'>Fast Delivery </h1>
                        <p className='regular font-[600] md:text-[20px] group-hover:text-[#03070D] text-[#D9D9D9] md:leading-[25.6px] text-center lg:text-left text-[14px] leading-[18px] mt-2 md:mt-0'>There are numbers of video editing agencies out there but we stand out for a reason.</p>
                    </div>

                </div>
                <div className='w-[338px] optioncard transition-colors duration-300 h-[322px] pt-[40px] pb-[40px] flex group flex-col items-center rounded-[10px] justify-center md:gap-6 gap-2'>
                    <img src={quality} alt="" />
                    <div className='p-5'>
                        <h1 className='md:text-[36px] semibold text-white group-hover:text-[#03070D] lg:text-left text-center text-[24px]'>High Quality </h1>
                        <p className='regular font-[600] md:text-[20px] group-hover:text-[#03070D] text-[#D9D9D9] md:leading-[25.6px] text-center lg:text-left text-[14px] leading-[18px] mt-2 md:mt-0'>There are numbers of video editing agencies out there but we stand out for a reason.</p>
                    </div>

                </div>
                <div className='w-[338px] optioncard transition-colors duration-300 h-[322px] pt-[40px] pb-[40px] flex group flex-col items-center rounded-[10px] justify-center md:gap-6 gap-2'>
                    <img src={support} alt="" />
                    <div className='p-5'>
                        <h1 className='md:text-[36px] semibold text-white group-hover:text-[#03070D] lg:text-left text-center text-[24px]'>24/7 Support </h1>
                        <p className='regular font-[600] md:text-[20px] group-hover:text-[#03070D] text-[#D9D9D9] md:leading-[25.6px] text-center lg:text-left text-[14px] leading-[18px] mt-2 md:mt-0'>There are numbers of video editing agencies out there but we stand out for a reason.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Bestoption;