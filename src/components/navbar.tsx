import Image from "next/image";
export default function Navbar(){
return(
  <>
 <nav className="w-[1920px] h-[92px] bg-[#043873] flex items-center justify-between px-[220px] py-4 text-white ">
  <div className="">
    <Image src={"/logo.png"} alt={"Logo Text"} width={191} height={61}></Image>
  </div>
  <div className="flex items-center justify-center ">
    <ul className="w-[549px] flex items-center gap-[32px]">
      <li className=" hover:bg-white hover:text-[#043873] hover:rounded-lg p-3 hover:bottom-2 hover:border">Products</li>
      <li className=" hover:bg-white hover:text-[#043873] hover:rounded-lg p-3 hover:bottom-2 hover:border">Solution</li>
      <li className=" hover:bg-white hover:text-[#043873] hover:rounded-lg p-3 hover:bottom-2 hover:border">Resources</li>
      <li className=" hover:bg-white hover:text-[#043873] hover:rounded-lg p-3 hover:bottom-2 hover:border shadow hover:shadow-2xl">Pricing</li>
    </ul>
    
      <button className="w-[126px] h-10 rounded-lg py-4 px-10 bg-[#FFE492] text-[#043873] font-sans flex items-center justify-center hover:bg-white hover:text-[#043873]">Login</button>
    
  </div>
 </nav>
  </>
)
}