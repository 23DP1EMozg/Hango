import searchIcon from '../../../assets/search.png'
import locationIcon from '../../../assets/location.png'
export default function SearchBar() {
  return (
    <div className="
      w-full 
      max-w-3xl 
      bg-[#1E0B44] 
      rounded-xl 
      flex 
      flex-col 
      md:flex-row
      p-4 
      gap-4
    ">
      
      {/* Search Input */}
      <div className="flex items-center gap-4 flex-1 border-b md:border-b-0 md:border-r border-[#E9D5FF] pb-4 md:pb-0 md:pr-4">
        <img src={searchIcon} className="w-5 h-5" />
        <input
          type="text"
          placeholder="Meklē pasākumus"
          className="w-full bg-transparent outline-none placeholder:text-[#E9D5FF] text-[#E9D5FF]"
        />
      </div>

      {/* Location + Button */}
      <div className="flex items-center gap-4 flex-1">
        <img src={locationIcon} className="w-5 h-5" />
        <input
          placeholder="Pilsēta vai indekss"
          className="flex-1 bg-transparent outline-none placeholder:text-[#E9D5FF] text-[#E9D5FF]"
        />
      </div>
        <button className="bg-[#EC4899] px-6 py-2 rounded-lg text-white font-semibold hover:bg-[#F472B6] transition">
          Meklēt
        </button>
    </div>
  );
}