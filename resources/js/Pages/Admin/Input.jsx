

export default function Input(props) {
    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="input" className="text-sm font-semibold uppercase tracking-wider">
                {props.title}
            </label>
            
            <input 
                type="text" 
                id="input"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                className="bg-[#1E0B44] border border-[#4C1D95] rounded px-4 py-2 text-white outline-none focus:border-[#F472B6] transition-colors"
                placeholder={props.placeholder}
            />

            <button 
                onClick={props.onSubmit}
                className="mt-2 bg-[#EC4899] hover:bg-[#F472B6] text-white font-bold py-2 px-6 rounded transition-colors self-start"
            >
                Saglabāt
            </button>
        </div>
    )
}