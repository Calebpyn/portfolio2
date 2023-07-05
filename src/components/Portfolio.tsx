import About from "./About"
import Burger from "./Burger"
import BurgerButton from "./BurgerButton"
import Contact from "./Contact"
import Resume from "./Resume"
import Work from "./Work"

function Portfolio() {
  return (
    <div className="overflow-x-hidden">

        <About/>
        <Work/>
        <Resume/>
        <Contact/>
        
        <BurgerButton/>
        <Burger/>

        <div className="w-full p-9 bg-gray-200 flex flex-col justify-between items-start text-gray-400 font-serif">
          <span>Caleb Payán Portfolio 2023</span>
          <span>Photography by e404.jpg</span>
        </div>
    </div>
  )
}

export default Portfolio