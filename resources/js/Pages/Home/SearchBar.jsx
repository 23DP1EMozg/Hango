import searchIcon from '../../../assets/search.png'
import locationIcon from '../../../assets/location.png'

export default function SearchBar(){

    
    return(
        <div className="w-2xl h-20 bg-[#1E0B44] rounded-xl flex">
            <div className='w-1/2 h-full flex items-center p-3 gap-7'>
                <img src={searchIcon} className='w-2/25'/>
                <input type="text" placeholder='Meklē pasākumus' className='h-full w-23/25 border-r outline-[#E9D5FF] focus: outline-none placeholder:text-[#E9D5FF] text-[#E9D5FF]'/>
            </div>
            <div className='flex w-1/2 items-center p-3 pl-0 justify-between'>
                <img src={locationIcon} className='w-1/10'/>
                <input placeholder='Pilsēta vai indekss' className='placeholder:text-[#E9D5FF] w-5/10 h-full text-[#E9D5FF] focus:outline-none'/>
                <button className='w-3/10 bg-[#EC4899] h-full rounded-lg text-white font-semibold cursor-pointer hover:bg-[#F472B6]'>Meklēt</button>
            </div>
        </div>
    )
}