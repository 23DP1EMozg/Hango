import Header from '../../components/Header/Header'
import EventForm from './EventForm'
import TextInput from './TextInput'

export default function CreateEvent() {
    return(
        <div>
            <Header/>
            <section className='w-full flex flex-col items-center bg-gradient-to-b from-[#4C1D95] to-[#1E0B44] py-10'>
                <div className='w-full py-10 flex justify-center items-center text-center'>
                    <span className='text-3xl text-white font-bold'>Izveido savu pasākumu</span>
                </div>
                <EventForm/>    
            </section>
        </div>
    )
}