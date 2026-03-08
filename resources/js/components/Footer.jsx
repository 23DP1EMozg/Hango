import logo from '../../assets/logo.png'

export default function Footer(){
    return(
        <footer className="w-full bg-[#1E0B44] py-15 flex flex-col gap-15">
            <div className='flex flex-col gap-5 border-y border-[#2E1065] py-5 lg:flex-row'>
                <div className='flex flex-col px-[5%] max-w-120'>
                    <img src={logo} width={60}/>
                    <span className='text-[#E9D5FF]'>Iegremdējošs veids, kā atrast un veidot sociālos pasākumus. Radīsim kopīgas atmiņas dzīvīgā kopienā.</span>
                </div>
                <div className='flex flex-col gap-5 px-[5%] lg:flex-row lg:justify-evenly w-full'>
                    <div className='flex flex-col gap-3'>
                        <span className='text-[#EC4899] text-xl'>Produkts</span>
                        <ul className='text-[#E9D5FF] flex flex-col'>
                            <a>Meklēt pasākumus</a>
                            <a>Veidot pasākumu</a>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='text-[#EC4899] text-xl'>Uzņēmums</span>
                        <ul className='text-[#E9D5FF] flex flex-col'>
                            <a>Par mums</a>
                            <a>Kontaki</a>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='text-[#EC4899] text-xl'>Legalitātes</span>
                        <ul className='text-[#E9D5FF] flex flex-col'>
                            <a>Privātum politika</a>
                            <a>Lietošanas noteikumi</a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <span className='text-[#E9D5FF]'>© 2024 Hango Inc. All rights reserved.</span>
            </div>
        </footer>
    )
}