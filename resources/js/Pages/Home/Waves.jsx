
export default function Waves(props){
    return(
            <svg
                className="block w-full"
                viewBox="0 0 1440 90"
                preserveAspectRatio="none"
            >
                <path
                d="M0,40 C120,80 240,0 360,20 480,40 600,80 720,60 840,40 960,0 1080,20 1200,40 1320,80 1440,60 L1440,0 L0,0 Z"
                fill={props.color}
                />
            </svg>
    )
}