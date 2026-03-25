import logo from '../../../assets/logo.png'
import person from '../../../assets/person.png'
import email from '../../../assets/email.png'
import password from '../../../assets/password.png'

import { useForm } from '@inertiajs/react'
import { ToastContainer, toast } from 'react-toastify';

export default function Register(){



    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    

    const submit = (e) => {
        e.preventDefault()
        post('/register', {
            onError: (err) => {
                toast.error(err.name ? err.name : err.email ? err.email : err.password ? err.password : null)
            }
        })

    }

    return(
        <div className='w-full h-screen bg-[#1E0B44] flex flex-col items-center justify-center py-10 gap-10'>
            <ToastContainer/>
            <div className='w-full flex flex-col items-center text-center gap-2'>
                <img src={logo} className='w-[70%] max-w-40'/>
                <span className='text-white font-bold text-2xl'>Izveido savu kontu</span>
                <span className='text-white'>Atklāj un apmeklē labākos pasākumus savā apkārtnē</span>
            </div>
            <form onSubmit={submit} className='flex flex-col bg-[#2E1065] px-3 w-[80%] max-w-120 py-10 gap-3 rounded-2xl lg:px-6'>

                <div className='flex flex-col gap-1'>
                <span className='text-white'>Vārds</span>
                <div className='flex w-full rounded-xl min-h-10 bg-[#1E0B44]'>
                    <div className='w-[15%] h-full flex justify-center items-center'>
                        <img src={person} className='w-[80%] max-w-6'/>
                    </div>
                    <input value={data.name} onChange={(e) => setData('name', e.target.value)} className='w-[85%] h-full rounded-r-xl placeholder:text-gray-500 text-white' name='name' placeholder='Ievadi savu vārdu'/>
                </div>
                </div>
                <div className='flex flex-col gap-1'>
                <span className='text-white'>Ēpasts</span>
                <div className='flex w-full rounded-xl min-h-10 bg-[#1E0B44]'>
                    <div className='w-[15%] h-full flex justify-center items-center'>
                        <img src={email} className='w-[80%] max-w-6'/>
                    </div>
                    <input value={data.email} onChange={(e) => setData('email', e.target.value)} className='w-[85%] h-full rounded-r-xl placeholder:text-gray-500 text-white' name='email' placeholder='Ievadi savu ēpastu'/>
                </div>
                </div>
                <div className='flex flex-col gap-1'>
                <span className='text-white'>Parole</span>
                <div className='flex w-full rounded-xl min-h-10 bg-[#1E0B44]'>
                    <div className='w-[15%] h-full flex justify-center items-center'>
                        <img src={password} className='w-[80%] max-w-6'/>
                    </div>
                    <input value={data.password} onChange={(e) => setData('password', e.target.value)} className='w-[85%] h-full rounded-r-xl placeholder:text-gray-500 text-white' name='password' placeholder='Ievadi parole'/>
                </div>
                </div>
                <div className='flex flex-col gap-1'>
                <span className='text-white'>Parole atkārtoti</span>
                <div className='flex w-full rounded-xl min-h-10 bg-[#1E0B44]'>
                    <div className='w-[15%] h-full flex justify-center items-center'>
                        <img src={password} className='w-[80%] max-w-6'/>
                    </div>
                    <input value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} className='w-[85%] h-full rounded-r-xl placeholder:text-gray-500 text-white' name='password_confirmation' placeholder='Ievadi savu paroli vēlreiz'/>
                </div>
                </div>
                <button type='submit' disabled={processing} className='w-full text-white h-15 rounded-2xl text-xl cursor-pointer bg-[#EC4899]'>Izveidot kontu</button>
            </form>

            <span className='text-white'>Vai jums jau ir konts? <a className='text-[#EC4899]'>Pieslēdzies</a></span>
        </div>
    )
}