export default function InfoCard({ img, title, desc }) {
  return (
    <div className="
      bg-[#280E58] 
      rounded-xl 
      p-8 
      flex 
      flex-col 
      items-center 
      text-center 
      gap-6
      transition 
      duration-300 
      hover:bg-[#1E0B44] 
      group
    ">
      
      <div className="
        bg-[#4C1D95] 
        p-5 
        rounded-xl 
        transition 
        duration-300 
        group-hover:rotate-6 
        group-hover:scale-110
      ">
        <img src={img} className="w-12 h-12" />
      </div>

      <h3 className="text-white font-bold text-xl md:text-2xl">
        {title}
      </h3>

      <p className="text-[#E9D5FF] text-sm md:text-base">
        {desc}
      </p>
    </div>
  )
}