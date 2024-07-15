const Button=({onClick,label,color}: {onClick: () => void,label: string; color?: string}) => {
    return <button className={` border-solid border-2 text-gray-300 active:text-brown active:bg-yellow border-brown p-2 rounded-lg bg-red font-semibold mt-4 text-sm ${color}`} onClick={onClick}>
        {label}
    </button>;
}

export default Button;