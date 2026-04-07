export default function InfoCard(props) {
    return (
        <div className="flex flex-col bg-[#3A1E6A] w-[30%] h-15 py-3 px-5 rounded-xl items-center justify-center md:h-20 md:w-[25%] lg:w-[15%]">
            <span className="text-[#EC4899] text-2xl font-semibold">{props.count}</span>
            <span className="text-sm text-white font-semibold">{props.title}</span>
        </div>
    )
}
