import Image from "next/image"
export default function Sponsors(){
    return(
        <>
        <section className="w-[1920px] h-[538px] ml-[1px] py-[140px] px-[220px] bg-white broder-2 border-red-500  border-2 flex  flex-col items-center gap-[100px] text-black">

            <h1 className="w-[1482px] h-[87px] text-7xl font-bold leading-[87.14px] tracking-[-2%] text-center" >Our sponsors</h1>
            <div className="w-[1482px] h-[71px] flex items-center justify-between gap-4px">
                <Image width={55.47} height={68} src={"/Apple.png"} alt="Apple logo " ></Image>
                <Image width={287} height={62} src={"/microsoft.png"} alt="MicroSoft Logo"></Image>
                <Image width={280} height={71} src={"/Slack_Technologies_Logo 1.png"} alt="Slack Logo"></Image>
                <Image width={211} height={69.8} src={"/google.png"} alt="Google Logo"></Image>
                
            </div>
        </section>
        </>
    )
}