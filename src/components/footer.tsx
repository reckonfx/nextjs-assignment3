import Image from "next/image";
export default function Footer() {
  return (
    <>
      <section className="w-[1920px] h-[574px] ml-[1px] py-[140px] px-[220px] bg-[#043873] flex items-center justify-between gap-[200px] text-white border-green-700 border-5">
        <div>
          {/* div1 */}
          <div className="w-[1480px] h-[289px] ml-[1px] flex items-center justify-between">
            <div className="w-[295px] h-[169px] flex  flex-col justify-left gap-[15px] text-wrap">
              <Image
                src={"/Logo.png"}
                alt="Company Logo"
                width={191}
                height={34}
              ></Image>
              <p className=" w-[240px] h-[120px] text-[17px] text-[#F7F7EE] font-normal leading-[30px] tracking-[-2%]">
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
            {/* div2 */}
            <div className="w-[295px] h-[127px] flex  flex-col items-start gap-[15px]">
              <p className="w-[68px] h-[22px] text-[18px] font-bold leading-[21.78px] tracking-[-2%]">
                Product
              </p>
              <p className=" w-[70px] h-[20px] text-[16px] text-[#FFE492] font-normal leading-[20px] tracking-[-2%]">
                Overview
              </p>
              <p className=" w-[50px] h-[20px] text-[16px] text-[#FFFFFF] font-normal leading-[20px] tracking-[-2%]">
                Pricing
              </p>
              <p className=" w-[177px] h-[20px] text-[16px] text-[#FFFFFF] font-normal leading-[20px] tracking-[-2%]">
                Customer stories
              </p>
            </div>
            {/*  div3 */}
            <div className="w-[295px] h-[130px] flex  flex-col items-start gap-[16px]">
              <p className="w-[91px] h-[22px] text-[18px] font-bold leading-[21.78px] tracking-[-2%]">
                Resources
              </p>
              <p className=" w-[33px] h-[20px] text-[16px] text-[#FFFFFF] font-normal leading-[20px] tracking-[-2%]">
                Overview
              </p>
              <p className=" w-[150px] h-[20px] text-[16px] text-[#FFFFFF] font-normal leading-[20px] tracking-[-2%] ">
                Guides & tutorials
              </p>
              <p className=" w-[130px] h-[20px] text-[16px] text-[#FFFFFF] font-normal leading-[20px] tracking-[-2%]">
                Help center
              </p>
            </div>

            {/* div4            */}
            <div className="w-[295px] h-[130px] flex  flex-col items-start gap-[16px]">
              <p className="w-[83px] h-[22px] text-[18px] font-bold leading-[21.78px] tracking-[-2%]">
                Company
              </p>
              <p className=" w-[90px] h-[20px] text-[16px] text-[#FFFFFF] font-normal leading-[20px] tracking-[-2%]">
                About us
              </p>
              <p className=" w-[62px] h-[20px] text-[16px] text-[#FFFFFF] font-normal leading-[20px] tracking-[-2%]">
                Careers
              </p>
              <p className=" w-[99px] h-[20px] text-[16px] text-[#FFFFFF] font-normal leading-[20px] tracking-[-2%]">
                Media kit
              </p>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  );
}
