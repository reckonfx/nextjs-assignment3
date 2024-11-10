import Image from "next/image";
export default function Hero() {
  return (
    <>
      <section className="w-[1920px] h-[829px] ml-[1px] py-[140px] px-[220px] bg-[#043873] flex items-center text-white">
        <div className="w-[656px] h-[361px] gap-10 flex flex-col">
          <div className=" flex flex-col flex-nowrap items-center w-[656px] h-[238px] gap-6">
            <h2 className=" w-[656px] h-154px] text-[61px] font-bold leading-[77.45px] tracking-[-0.2%]">
              Get More Done with whitepace
            </h2>
            <p className="w-[656px] h-[60px] font-normal leading-[30px] tracking-[-2%]">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
          </div>
          <div>
            <button className="w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] gap-[10px] text-[18px] font-medium leading-[23px] tracking-[-2%] hover:bg-[#043873] hover:text-[#4F9CF9] hover:border-white hover:border-2">
              Try Whitepace free
            </button>
          </div>
        </div>

        {/* box div */}
        <div className=" w-[824px] h-[549px] gap-1 bg-[#C4DEFD]"></div>
      </section>

      {/* Project Management Section */} 
      <section className="w-[1920px] h-[829px] ml-[1px] py-[140px] px-[220px] bg-white flex items-center text-black">
        <div className="w-[672px] h-[411px] gap-10 flex flex-col justify-between">
          <div className=" flex flex-col flex-nowrap items-center w-[656px] h-[238px] gap-6">
            <h2 className=" w-[672px] h-174px] text-[72px] font-bold leading-[87.14px] tracking-[-2%]">
              Project  Management
            </h2>
            <p className="w-[672px] h-[90px] font-normal leading-[30px] tracking-[-2%]">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
          </div>
          <div className="w-[201px] h-[63px] rounded-md py-5 px-10 bg-[#4F9CF9]  flex items-center justify-centergap-[10px] gap-[10px] hover:bg-[#043873] hover:text-[#4F9CF9] hover:border-white hover:border-2 ">
            <button className="text-[18px] font-medium leading-[23px] tracking-[-2%] text-white ">
            Get Started
            </button>
          </div>
        </div>

        {/* box div */}
        <div className=" w-[748px] h-[547px] gap-1 bg-[#C4DEFD]"></div>
      </section>

      {/* work together section */}

      <section className="w-[1920px] h-[829px] flex items-center justify-center bg-white ">
        <div className="w-[1480px] h-[661px] flex items-center gap-[100px]">
        <div className="flex-1 bg-white">
          <Image src={"/Work Together Image.png"} alt="Work together image" width={710} height={661}></Image>
        </div>

        <div className="flex-1 w-[670px] h-[661px] flex flex-col items-start justify-center gap-6">
          <div className="w-[670px] h-[171px]">
            <h1 className="w-[670] h-[87px] text-7xl font-bold leading-[87.1px] tracking-[-2%]">Work together</h1>
            <p className="w-[670px] h-10 text-lg font-normal leading-[30px] tracking-[-2%]">With whitepace, share your notes with your colleagues and collaborate on them.
                You can also publish a note to the internet and share the URL with others.</p>
          </div>
          <div className="w-[186px] h-[63px] rounded-md py-5 px-10 bg-[#4F9CF9] hover:bg-[#043873] hover:text-[#4F9CF9] hover:border-white hover:border-2">
            <button className="w-[82px] h-[23px] text-lg font-medium leading-6 tracking-[-2%] flex items-center justify-center text-white text-nowrap">Try it now</button>
          </div>
        </div>
        </div>
      
      
      </section>
      {/* Extension section */}
      <section className="w-[1920px] h-[829px] ml-[1px] py-[140px] px-[220px] bg-[#043873] flex items-center gap-10 text-white">
        <div className="w-[656px] h-[361px] gap-10 flex flex-col">
          <div className=" flex flex-col flex-nowrap items-center w-[656px] h-[238px] gap-6">
            <h2 className=" w-[656px] h-154px] text-[61px] font-bold leading-[77.45px] tracking-[-0.2%]">
            Use as Extension
            </h2>
            <p className="w-[656px] h-[60px] font-normal leading-[30px] tracking-[-2%]">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

            </p>
          </div>
          <div>
            <button className="w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] gap-[10px] text-[18px] font-medium leading-[23px] tracking-[-2%] hover:bg-[#043873] hover:text-[#4F9CF9] hover:border-white hover:border-2">
            Let’s Go
            </button>
          </div>
        </div>

        {/* box div */}
        <div className=" w-[824px] h-[549px] gap-1 bg-[#C4DEFD]"></div>
      </section>

      {/* customize section */}
      <section className="w-[1920px] h-[812px] ml-[1px] py-[140px] px-[220px] flex  flex-row-reverse items-center gap-10 text-black">
        <div className="w-[656px] h-[361px] gap-10 flex flex-col">
          <div className=" flex flex-col flex-nowrap items-center w-[656px] h-[238px] gap-6">
            <h2 className=" w-[669px] h-174px] text-[72px] font-bold leading-[87.14px] tracking-[-2%]">
            Customise it to your needs
            </h2>
            <p className="w-[656px] h-[60px] font-normal leading-[30px] tracking-[-2%]">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.

            </p>
          </div>
          <div>
            <button className="w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] gap-[10px] text-[18px] font-medium leading-[23px] tracking-[-2%] text-white hover:bg-[#043873] hover:text-[#4F9CF9] hover:border-white hover:border-2">
            Let’s Go
            </button>
          </div>
        </div>

        {/* box div */}
        <div className=" w-[824px] h-[549px] gap-1 bg-[#C4DEFD]"></div>
      </section>


    </>
  );
}
