import { useState } from "react";
import Header from "../../components/Header/Header";
import Hero from '../Home/Hero'
import SearchBar from "../Home/SearchBar";

const dateAndTime = [
    "Tonight",
    "This Weekend",
    "Next Week",
    "Pick a Date"
]

const categories = [
    "PARTY",
    "MUSIC",
    'DINNER',
    'OUTDOORS',
    'TECH'
]

const priceRange = [
    'FREE',
    '$',
    '$$',
    '$$$'
]

const ageRestrictions = [
    'All Ages',
    '16+',
    '18+'
]

const inputBase =
  "w-full bg-[#1e1050] text-[#e2d9f3] placeholder-[#6b5a9e] rounded-full px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500 transition";

export default function BrowseEvents({ events }) {
    const [selectedDate, setSelectedDate] = useState(null)

    return(
        <div className="bg-gradient-to-b from-[#4C1D95] to-[#1E0B44] min-h-screen">
            <Header/>
            <div className="w-full">
                <div className="w-full flex flex-col items-center text-center gap-10 py-16 px-4 md:py-24">
                
                <div className="flex flex-col gap-6">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                    Atrodi Savu <span className="text-[#EC4899] italic">Pasākumu</span>
                    </h1>
                </div>
                    <SearchBar />
                </div>    
            </div>
            <div className="w-full flex flex-col px-5">
                <div className="flex flex-col w-full gap-5">
                    <div className="w-full py-5 px-5 flex flex-col gap-2 bg-[#310E68] rounded-2xl">
                        <span className="text-[#EC4899] font-semibold">Datums un Laiks</span>
                        {dateAndTime.map((date, i) => (
                            <div
                            className={`w-full h-10 ${selectedDate == date ? 'border border-pink-400/30' : ''} rounded-full bg-[#EC4899]/${selectedDate == date ? '20' : '100'} flex items-center px-3`}
                            key={i}
                            onClick={() => setSelectedDate(date)}>
                                <span className={`text-[${selectedDate === date ? "#EC4899" : "#E9D5FF"}]`}>{date}</span>
                            </div>
                        ))}
                        {selectedDate == dateAndTime[dateAndTime.length - 1] ? (
                        <input
                        type="date"
                        className={`${inputBase} flex-1 [color-scheme:dark]`}
                        />
                        ) : null}
                    </div>

                    <div className="w-full py-5 px-5 grid grid-cols-4 bg-[#310E68] rounded-2xl">
                        <span className="text-[#EC4899] font-semibold">Kategorijas</span>
                        {categories.map((category, i) => (
                            <div>
                                <span>{category}</span>
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    )
}