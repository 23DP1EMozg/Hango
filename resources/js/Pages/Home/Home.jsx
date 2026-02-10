import Header from "../../components/Header/Header";
import Hero from "./Hero";
import InfoCard from "./InfoCard";
import earthIcon from '../../../assets/earth.png'
import communityIcon from '../../../assets/community.png'
import starsIcon from '../../../assets/stars.png'

export default function Home(){
    return(
        <div>
            <Header/>
            <Hero/>
            <section className="w-full h-170 bg-[#2E1065] flex justify-end flex-col gap-20 pb-15">
                <div className="w-full text-center flex flex-col gap-5">
                    <span className="text-5xl font-semibold text-white">Kā strādā Hango?</span>
                    <span className="text-[#E9D5FF] font-semibold">Atrodi, savienojies un izbaudi 3 vienkāršos soļos</span>
                </div>
                <div className="w-full flex gap-20 justify-center">
                    <InfoCard img={earthIcon} title="Atrodi" desc="Atrodi pasākumus, kuri sakrīt ar tavām interesēm. Sākot ar mierīgiem filmmu vakariem un beidzot ar lielām ballītēm"/>
                    <InfoCard img={starsIcon} title="Pievienojies" desc="Nodrošini savu vietu ar vienu klikšķi. Esi daļa no notikuma un piedzīvo īstus mirkļus kopā ar citiem."/>
                    <InfoCard img={communityIcon} title="Satiecies" desc="Show up and connect with your community. Turn digital invites into meaningful real-life memories."/>
                </div>
            </section>
        </div>
    )
}