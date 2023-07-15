import bgWork from '../assets/imgs/bg2.jpg'
import expat from '../assets/imgs/expatex.jpg'
import expo from '../assets/imgs/expo.jpg'
import smart from '../assets/imgs/smartchar.jpg'

import {BsArrowDown} from 'react-icons/bs'

import {useState} from 'react'

function Work() {


    const [open1, setOpen1] = useState<boolean>(false)
    const [open2, setOpen2] = useState<boolean>(false)
    const [open3, setOpen3] = useState<boolean>(false)


  return (
    <div className="h-screen w-full md:w-4/5 flex flex-col justify-around items-center" id='work'>

        <div className="w-4/5 shadow-2xl rounded-lg p-9" style={{backgroundImage: `url(${bgWork})`}}>
            <div className='text-white font-black text-4xl'>
                SOME OF MY WORK.
            </div>
            <div className='mt-9'>

                <div className='backdrop-blur-md p-5 rounded-3xl hover:cursor-pointer' onClick={() => {
                                setOpen1(!open1)
                                if (open2){
                                    setOpen2(false)
                                }
                                if (open3){
                                    setOpen3(false)
                                }
                            }}>
                    <div className='text-white flex flex-col text-lg'>
                        <span className='font-black'>Expat Guardian Web Page</span>
                        <div className='flex mt-2 justify-between items-center'>
                            <span className='font-light'>Expat Guardian</span>
                            <BsArrowDown />
                        </div>
                    </div>
                    <div className={open1? 'w-full transitions h-[40vh] md:h-[45vh] opacity-100 mt-5 text-white flex flex-col justify-between' : 'w-full h-0 opacity-0 transitions text-white flex flex-col justify-between'}>


                        <p className='text-sm text-left'>Refined a website for a law firm by utilizing the Vite framework, showcasing my proficiency in web development and front-end technologies. Collaborated with a team to create a visually appealing website for a law firm.</p>

                        <div className='h-[15vh] md:h-[35vh] w-full bg-cover bg-center rounded-md' style={{backgroundImage: `url(${expat})`}}></div>

                    </div>
                </div>

                <div className='backdrop-blur-md p-5 rounded-3xl my-9 group hover:cursor-pointer' onClick={() => {
                                setOpen2(!open2)
                                if (open1){
                                    setOpen1(false)
                                }
                                if (open3){
                                    setOpen3(false)
                                }
                            }}>
                    <div className='text-white flex flex-col text-lg'>
                        <span className='font-black'>ExpoIngenería 2023 Official Web Page</span>
                        <div className='flex mt-2 justify-between items-center'>
                            <span className='font-light'>CETYS University</span>
                            <BsArrowDown />
                        </div>
                    </div>
                    <div 
                    className={open2? 'w-full transitions h-[40vh] md:h-[49vh] opacity-100 mt-5 text-white flex flex-col justify-between' : 'w-full h-0 opacity-0 transitions text-white flex flex-col justify-between'}>


                        <p className='text-sm text-left'>Led the team of developers in the development of the official website for "CETYS University Annual Engineering Expo #34," which serves as the platform for showcasing and assessing each project by official judges. Managed project timelines, task delegation, and teamwork to ensure successful delivery.</p>

                        <div className='h-[15vh] w-full bg-cover bg-center rounded-md md:h-[35vh]' style={{backgroundImage: `url(${expo})`}}></div>

                    </div>
                </div>

                <div className='backdrop-blur-md p-5 rounded-3xl group hover:cursor-pointer' onClick={() => {
                                setOpen3(!open3)
                                if (open1){
                                    setOpen1(false)
                                }
                                if (open2){
                                    setOpen2(false)
                                }
                            }}>
                    <div className='text-white flex flex-col text-lg'>
                        <span className='font-black'>Smart Charity</span>
                        <div className='flex mt-2 justify-between items-center'>
                            <span className='font-light'>Gear Web 3 Hackathon</span>
                            <BsArrowDown />
                        </div>
                    </div>
                    <div 
                    className={open3? 'w-full transitions h-[40vh] md:h-[49vh] opacity-100 mt-5 text-white flex flex-col justify-between' : 'w-full h-0 opacity-0 transitions text-white flex flex-col justify-between'}>


                        <p className='text-sm text-left'>2nd place in a 24-hour regional Gear Hackathon with web3-based solutions, competing against teams including PhD students. Team representative, delivering a compelling pitch showcasing the value of our web3-powered solution. Demonstrated resilience, collaboration, and passion for emerging technologies in the fast-paced Hackathon.</p>

                        <div className='h-[15vh] w-full bg-cover bg-center rounded-md md:h-[35vh]' style={{backgroundImage: `url(${smart})`}}></div>

                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Work