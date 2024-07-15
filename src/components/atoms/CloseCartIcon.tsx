
import {MdOutlineCancel} from "react-icons/md";


const CloseCartIcon=({onClick}: {onClick: () => void}) => {
    return (<button onClick={onClick} className=" p-4">
        <MdOutlineCancel className="text-brown h-8 w-8" />
    </button>);
}

export default CloseCartIcon;