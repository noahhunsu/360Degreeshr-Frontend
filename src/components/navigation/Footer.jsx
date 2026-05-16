

export default function Footer(){
  return (
    <section className="w-full flex flex-row justify-between items-center p-6 bg-[#F8F9FA]  ">

        <h1 className="text-[#2B3437] font-semibold">
            360DegreeHR
        </h1>

        <div className="flex gap-5 text-[#586064]">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Help Center</p>
        </div>

        <div className="flex gap-3 text-[#F8F9FA]">
            <p>@2024</p>
            <p>All right reserved</p>
        </div>
        
    </section>
  )
}
