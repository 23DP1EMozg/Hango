
export default function InfoCard(props){
    return(
        <div className="w-80 h-80 bg-[#280E58] rounded-xl transition delay-0 duration-300 ease-in-out hover:bg-[#1E0B44] group">
            <div className="w-full h-7/10 flex flex-col place-items-center justify-evenly">
                <div className='bg-[#4C1D95] w-fit p-5 rounded-xl group-hover:rotate-6 transition delay-0 duration-300 ease-in-out group-hover:scale-110'>
                    <img src={props.img} width={50} height={50}/>
                </div>
                <span className="text-white font-bold text-3xl ">{props.title}</span>
            </div>
            <div className="w-full h-3/10 text-center px-5">
                <span className="text-[#E9D5FF]">{props.desc}</span>
            </div>
        </div>
    )
}