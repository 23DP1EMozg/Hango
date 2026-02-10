import { useState } from 'react'
import logo from '../../../assets/logo.png'

export default function Header(){

    const [auth, setAuth] = useState(false)

    return(
        <header className='w-full h-20 bg-[#1E0B44] flex justify-between pr-10 pl-10'>
            <div className="h-full items-center w-3/10 flex justify-center">
                    <img src={logo} className='h-full'/>
            </div>
            <div className='text-white flex gap-10 w-3/10 place-items-center'>
                <span className='cursor-pointer text-[#E9D5FF] font-semibold hover:text-[#EC4899] transition delay-0 duration-300 ease-in-out' >Skatīt pasākumus</span>
                <span className='cursor-pointer text-[#E9D5FF] font-semibold hover:text-[#EC4899] transition delay-0 duration-300 ease-in-out'>Viedot pasākumu</span>
            </div>
            {!auth ? (
            <div className='flex place-items-center gap-10 text-white'>
                <button className='cursor-pointer hover:text-[#EC4899] transition delay-0 duration-300 ease-in-out'>Pieslēgties</button>
                <button className='bg-[#EC4899] p-2 rounded-xl cursor-pointer transition delay-0 duration-300 ease-in-out hover:scale-110'>Pievienoties</button>
            </div>
            ) : null}
        </header>
    )
}