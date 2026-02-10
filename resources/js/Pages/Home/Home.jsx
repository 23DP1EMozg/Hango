import EventCard from "../../components/EventCard";
import Header from "../../components/Header/Header";
import Hero from "./Hero";

export default function Home(){
    return(
        <div>
            <Header/>
            <Hero/>
            <section className="w-full h-170 bg-[#2E1065] flex justify-end flex-col">
                <div className="w-full text-center flex flex-col">
                    <span className="text-5xl font-semibold text-white">Kā strādā Hango?</span>
                    <span className="text-[#E9D5FF] font-semibold">Atrodi, savienojies un izbaudi 3 vienkāršos soļos</span>
                </div>
                <div>
                    
                </div>
            </section>
        </div>
    )
}