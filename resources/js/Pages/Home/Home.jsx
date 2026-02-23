import Header from "../../components/Header/Header";
import Hero from "./Hero";
import InfoCard from "./InfoCard";
import earthIcon from '../../../assets/earth.png'
import communityIcon from '../../../assets/community.png'
import starsIcon from '../../../assets/stars.png'
import EventCard from "../../components/EventCard";
import festivalImage from '../../../assets/festival.png'

export default function Home(){
    return(
        <div>
            <Header/>
            <Hero/>
            <section className="w-full bg-[#2E1065] py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col gap-16">
                
                <div className="text-center flex flex-col gap-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                    Kā strādā Hango?
                </h2>
                <p className="text-[#E9D5FF] font-semibold text-sm md:text-base">
                    Atrodi, savienojies un izbaudi 3 vienkāršos soļos
                </p>
                </div>

                <div className="
                grid 
                grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3 
                gap-8
                ">
                    <InfoCard img={earthIcon} title="Atrodi" desc="Atrodi pasākumus, kuri sakrīt ar tavām interesēm. Sākot ar mierīgiem filmmu vakariem un beidzot ar lielām ballītēm"/>
                    <InfoCard img={starsIcon} title="Pievienojies" desc="Nodrošini savu vietu ar vienu klikšķi. Esi daļa no notikuma un piedzīvo īstus mirkļus kopā ar citiem."/> 
                    <InfoCard img={communityIcon} title="Satiecies" desc="Show up and connect with your community. Turn digital invites into meaningful real-life memories."/>
                </div>

            </div>
            </section>
            
            <section className="w-full bg-[#4C1D95] flex flex-col">

            {/* Top Wave */}
            <div className="w-full h-24">
                <svg
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
                className="w-full h-full fill-[#2E1065]"
                >
                <polygon points="0,0 1000,0 0,70" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col gap-12">

                <div className="flex flex-col gap-4 font-semibold">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
                    Populārs tavā apkārtnē
                </h2>
                <p className="text-[#E9D5FF] text-sm md:text-base">
                    Šonedēļas tev ieteiktie pasākumi
                </p>
                </div>

                <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-4 
                gap-8
                ">
                    <EventCard category="Music" image={festivalImage} date="PIEKT, 14 JUN" time="20:00" title="Mūzikas Festivāls" location="Mežaparks"/> 
                    <EventCard category="Music" image={festivalImage} date="PIEKT, 14 JUN" time="20:00" title="Mūzikas Festivāls" location="Mežaparks"/> <EventCard category="Music" image={festivalImage} date="PIEKT, 14 JUN" time="20:00" title="Mūzikas Festivāls" location="Mežaparks"/> 
                    <EventCard category="Music" image={festivalImage} date="PIEKT, 14 JUN" time="20:00" title="Mūzikas Festivāls" location="Mežaparks"/>
                </div>

            </div>
            </section>
            
        </div>
    )
}