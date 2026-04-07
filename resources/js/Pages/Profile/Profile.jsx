import { useAuth } from "../../providers/AuthProvider"
import { router } from "@inertiajs/react"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import Header from "../../components/Header/Header"
import profile_picture from '../../../assets/person.png'
import Interest from "./Interest"
import InfoCard from "./InfoCard"
import EventCard from "../../components/EventCard"
import festivalImage from '../../../assets/festival.png'
import Footer from "../../components/Footer"

export default function Profile() {

    const { user } = useAuth()
    const [eventOption, setEventOption] = useState("created")

    useEffect(() => {
        console.log(user?.id)
    }, [user])

    return(
        <div>
            <Header/>
            <section className="w-full flex flex-col items-center py-10 bg-gradient-to-b from-[#4C1D95] to-[#1E0B44]">
                <div className="w-full flex flex-col md:flex-row lg:gap-10">
                    <div className="w-full flex flex-col items-center gap-10 lg:w-[30%] lg:items-end">
                        <img src={profile_picture} className=" h-45 rounded-full border-4 border-[#EC4899] shadow-[0_0_20px_#EC4899] p-2 "/>
                    </div>

                    <div>
                        <div className="w-full flex flex-col items-center pt-2 gap-3 md:flex-row">
                            <span className="text-4xl text-white font-bold">{user?.username}</span>
                            <button className="rounded-xl border-solid border-2 border-gray-500 text-white p-1 px-4 font-semibold cursor-pointer">Rediģēt</button>
                        </div>
                        <div className="w-full text-center text-white pt-5 px-1 md:text-left wrap-break-word text-wrap lg:w-100 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis mollitia quod aliquam odio veritatis doloremque, quas dolorem, accusamus, esse praesentium placeat cupiditate non autem voluptates blanditiis fugit harum. Praesentium.
                        </div>
                        <div className="w-full pt-5 grid grid-cols-3 place-items-center gap-2 md:grid-cols-5">
                            <Interest text="Festivals"/>
                            <Interest text="Festivals"/>
                            <Interest text="Festivals"/>
                            <Interest text="Festivals"/>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-evenly w-full pt-5 lg:justify-center lg:gap-20 ">
                    <InfoCard count={12} title="Taisītas"/>     
                    <InfoCard count={24} title="Pievienotas"/>                                   
                </div>
                <div className="flex w-full px-1">
                    <div className={`border-b-3 border-solid border-[${eventOption === "created" ? "#EC4899" : "#2E1065"}] pt-5 w-[50%] text-center text-sm py-3 font-semibold cursor-pointer`} onClick={() => setEventOption("created")}>
                        <span className={`text-${eventOption === "created" ? "[#EC4899]" : "white"}`}>Taisītie pasākumi</span>
                    </div>
                    <div className={`border-b-3 border-solid border-[${eventOption === "joined" ? "#EC4899" : "#2E1065"}] pt-5 w-[50%] text-center text-sm py-3 font-semibold cursor-pointer`} onClick={() => setEventOption('joined')}>
                        <span className={`text-${eventOption === "joined" ? "[#EC4899]" : "white"}`}>Pievienotie pasākumi</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2 lg:grid-cols-3">
                    <EventCard category="Music" image={festivalImage} date="PIEKT, 14 JUN" time="20:00" title="Mūzikas Festivāls" location="Mežaparks"/> 
                    <EventCard category="Music" image={festivalImage} date="PIEKT, 14 JUN" time="20:00" title="Mūzikas Festivāls" location="Mežaparks"/> 
                    <EventCard category="Music" image={festivalImage} date="PIEKT, 14 JUN" time="20:00" title="Mūzikas Festivāls" location="Mežaparks"/> 
                    <EventCard category="Music" image={festivalImage} date="PIEKT, 14 JUN" time="20:00" title="Mūzikas Festivāls" location="Mežaparks"/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
