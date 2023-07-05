import testProfileImg from '../assets/imgs/profile.jpg'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {useContext} from 'react'
import windowState from '../contexts/windowState';

function Burger() {


    const context = useContext(windowState);

    const isClosed = context?.isClosed;
    const toggleClosed = context?.toggleClosed;

    const handleToggle = () => {
        if(toggleClosed){
            toggleClosed()
        }
    }

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        if(window.innerWidth<768){
            handleToggle()
        }
      };

  return (
    <div className={isClosed ? 'fixed top-0 right-0 w-1/2 h-screen backdrop-blur-xl bg-black/[.5] flex flex-col justify-start translate-x-[100%] md:w-1/5 md:translate-x-0 transitions' : 'fixed top-0 right-0 w-1/2 h-screen backdrop-blur-xl bg-black/[.5] flex flex-col justify-start transitions'}>

        <div className='p-4 pb-0'>
            <AiOutlineCloseCircle className='hover:cursor-pointer hover:scale-105 transitions md:hidden' style={{fontSize: '28px', color: 'white'}} onClick={() => handleToggle()}/>
        </div>

        <div>
            <div className='flex flex-col justify-around items-center pb-10 pt-5'>
                <div className='w-32 h-32 bg-cover bg-center rounded-full' style={{backgroundImage: `url(${testProfileImg})`}}></div>
            </div>
            <div className='flex flex-col items-baseline px-9 h-[40vh] justify-between text-white font-black text-lg'>

                <button className='hover:text-white/50 transitions' onClick={() => scrollToSection('about')}>ABOUT</button>
                <button className='hover:text-white/50 transitions' onClick={() => scrollToSection('work')}>WORK</button>
                <button className='hover:text-white/50 transitions' onClick={() => scrollToSection('resume')}>RESUME</button>
                <button className='hover:text-white/50 transitions' onClick={() => scrollToSection('contact')}>CONTACT</button>
                <a href='https://github.com/Calebpyn' target='_blank'><button className='hover:text-white/50 transitions'>GITHUB</button></a>

            </div>
        </div>

    </div>
  )
}

export default Burger