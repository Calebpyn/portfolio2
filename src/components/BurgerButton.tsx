import windowState from "../contexts/windowState";
import { useContext } from "react";

function BurgerButton() {

    const context = useContext(windowState);

    const toggleClosed = context?.toggleClosed;

    const handleToggle = () => {
        if(toggleClosed){
            toggleClosed()
        }
    }



  return (
    <div className="fixed top-4 right-4 flex flex-col h-6 justify-between hover:opacity-80 hover:cursor-pointer transitions" onClick={() => handleToggle()}>

        <div className="w-10 bg-gray-700 h-[3px]"></div>
        <div className="w-10 bg-gray-700 h-[3px]"></div>
        <div className="w-10 bg-gray-700 h-[3px]"></div>

    </div>
  )
}

export default BurgerButton