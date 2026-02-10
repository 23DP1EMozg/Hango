import SearchBar from "./SearchBar";
import Waves from "./Waves";

export default function Hero(){
    return(
        <div className="w-full h-170 bg-[#6D2596]">
            <div className="w-full h-17/20 bg-[#4C1D95] flex justify-center flex-col gap-20">
                <div className="w-full text-center flex flex-col">
                    <span className="text-6xl font-bold text-white">Notikumi, <span className="text-[#EC4899] italic">kas savieno</span></span>
                    <br/>
                    <span className="font-semibold text-white">Pievienojies tūkstošiem cilvēku, kuri ik dienu rada neaizmirstamas atmiņas.<br/> Atrodi savu kopienu un nākamo iecienītāko pieredzi.</span>
                </div>
                <div className="w-full flex justify-center">
                    <SearchBar/>
                </div>
            </div>
            <Waves color="#4C1D95"/>
        </div>
    )
}