import { useState } from 'react'
import logo from '../../../assets/logo.png'

export default function Header() {
  const [auth, setAuth] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-[#1E0B44] text-white">
      
      <div className="flex items-center justify-between h-20 px-4 md:px-10">
        
        <div className="flex items-center">
          <img src={logo} className="h-12 md:h-30" />
        </div>

        <div className="hidden md:flex gap-10 items-center">
          <span className="cursor-pointer text-[#E9D5FF] font-semibold hover:text-[#EC4899] transition duration-300">
            Skatīt pasākumus
          </span>
          <span className="cursor-pointer text-[#E9D5FF] font-semibold hover:text-[#EC4899] transition duration-300">
            Veidot pasākumu
          </span>

          {!auth && (
            <>
              <button className="hover:text-[#EC4899] transition duration-300">
                Pieslēgties
              </button>
              <button className="bg-[#EC4899] px-4 py-2 rounded-xl hover:scale-110 transition duration-300">
                Pievienoties
              </button>
            </>
          )}
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 px-4 pb-4 md:hidden">
          <span className="text-[#E9D5FF] font-semibold">
            Skatīt pasākumus
          </span>
          <span className="text-[#E9D5FF] font-semibold">
            Veidot pasākumu
          </span>

          {!auth && (
            <>
              <button>Pieslēgties</button>
              <button className="bg-[#EC4899] p-2 rounded-xl">
                Pievienoties
              </button>
            </>
          )}
        </div>
      )}
    </header>
  )
}