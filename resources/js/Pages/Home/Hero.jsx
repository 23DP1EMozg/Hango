import SearchBar from "./SearchBar";
import Waves from "./Waves";

export default function Hero(){
    return(
<div className="w-full bg-[#6D2596]">
  <div className="w-full bg-[#4C1D95] flex flex-col items-center text-center gap-10 py-16 px-4 md:py-24">
    
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
        Notikumi, <span className="text-[#EC4899] italic">kas savieno</span>
      </h1>

      <p className="font-semibold text-white max-w-2xl text-sm md:text-base">
        Pievienojies tūkstošiem cilvēku, kuri ik dienu rada neaizmirstamas atmiņas.
        Atrodi savu kopienu un nākamo iecienītāko pieredzi.
      </p>
    </div>

    <SearchBar />

  </div>

  <Waves color="#4C1D95" />
</div>
    )
}