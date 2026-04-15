

export default function TextInput(props) {
    return(
        <div className={`flex flex-col w-[90%] h-[${props.type == "normal" ? '10' : props.type == "large" ? '20' : '10'}]`}>
            <label htmlFor="inp" className="text-white">{props.label}</label>
            <input
            id="inp" placeholder={props.placeholder}
            className={`bg-[#2E1065] w-full placeholder:text-white`
            }/>
        </div>
    )
}