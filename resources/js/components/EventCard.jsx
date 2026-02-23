
export default function EventCard(props){
    return(
        <div className="w-70 h-100 bg-white rounded-2xl transition-all duration-600 ease-in-out group overflow-hidden hover:shadow-[0_10px_40px_rgba(147,51,234,0.4),0_0_60px_rgba(168,85,247,0.3)]">
            <div className="w-full h-1/2 rounded-t-2xl p-5 bg-center bg-cover transition-transform duration-600 ease-in-out group-hover:scale-110" style={{backgroundImage: `URL(${props.image})`}}>
                <div className="w-15 h-7 bg-[#3C214D] rounded-lg flex justify-center place-items-center text-[#F472B6] font-semibold text-sm">
                    <span>{props.category}</span>
                </div>
            </div>
            <div className='w-full h-1/2 rounded-b-2xl bg-[#2E1065] flex flex-col place-items-center'> 
                <div className="flex flex-col w-8/10 h-6/10 gap-2 justify-center">
                    <span className="text-[#EC4899] font-bold text-sm">{props.date} • {props.time}</span>
                    <span className="text-white text-2xl font-bold">{props.title}</span>
                    <span className="text-[#E9D5FF]">{props.location}</span>
                </div>
                <div className="w-full h-4/10 rounded-b-2xl flex justify-center place-items-center pb-3">
                    <button className="w-8/10 h-12 bg-[#EC4899] rounded-2xl text-white font-bold cursor-pointer transition-transform duration-450 ease-in-out hover:bg-[#F472B6]">Pievienoties</button>
                </div>
            </div>
        </div>
    )
}