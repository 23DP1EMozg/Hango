

import logo from '../../../assets/logo.png'
import person from '../../../assets/person.png'
import email from '../../../assets/email.png'
import password from '../../../assets/password.png'

import { useForm } from '@inertiajs/react'
import { ToastContainer, toast } from 'react-toastify'
import { useAuth } from '../../providers/AuthProvider'

export default function Login(){

    const {user, setUser} = useAuth()

    const {data, setData, post, errors, processing} = useForm({
        email: "",
        password: ""
    })


    const submit = (e) => {
        e.preventDefault()
        post('/login', {
            onError: (err) => {
                const message = err.email || err.password || "Login failed";
                toast.error(message);
                setData('email', "")
                setData('password', "")
            },

            onSuccess: () => {
                setUser()
            }
        })
    }


    return(
        <div className='w-full h-screen bg-[#1E0B44] flex flex-col items-center justify-center py-10 gap-10'>
            <ToastContainer/>
            <div className='w-full flex flex-col items-center text-center gap-2'>
                <img src={logo} className='w-[70%] max-w-40'/>
                <span className='text-white font-bold text-2xl'>Pieslēdzies</span>
                <span className='text-white'>Atklāj un apmeklē labākos pasākumus savā apkārtnē</span>
            </div>
            <form method='POST' onSubmit={submit} className='flex flex-col bg-[#2E1065] px-3 w-[80%] max-w-120 py-10 gap-3 rounded-2xl lg:px-6'>


                <div className='flex flex-col gap-1'>
                <span className='text-white'>Ēpasts</span>
                <div className='flex w-full rounded-xl min-h-10 bg-[#1E0B44]'>
                    <div className='w-[15%] h-full flex justify-center items-center'>
                        <img src={email} className='w-[80%] max-w-6'/>
                    </div>
                    <input name='email' value={data.email} onChange={(e) => setData("email", e.target.value)} className='w-[85%] h-full rounded-r-xl placeholder:text-gray-500 text-white' placeholder='Ievadi savu ēpastu'/>
                </div>
                </div>
                <div className='flex flex-col gap-1'>
                <span className='text-white'>Parole</span>
                <div className='flex w-full rounded-xl min-h-10 bg-[#1E0B44]'>
                    <div className='w-[15%] h-full flex justify-center items-center'>
                        <img src={password} className='w-[80%] max-w-6'/>
                    </div>
                    <input name='password' value={data.password} onChange={(e) => setData('password', e.target.value)} className='w-[85%] h-full rounded-r-xl placeholder:text-gray-500 text-white' placeholder='Ievadi parole'/>
                </div>
                </div>
                <button type='submit' className='w-full text-white h-15 rounded-2xl text-xl cursor-pointer bg-[#EC4899]'>Pieslēdzies</button>
            </form>

            <span className='text-white'>Nav konta? <a className='text-[#EC4899]'>Reģistrējies</a></span>
        </div>
    )
}