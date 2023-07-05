import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col fixed items-center w-full h-screen justify-around">

        <div className="flex flex-col text-white items-center">

            <span className="font-black text-5xl md:text-7xl">Hey,<br/>I'm Caleb.</span>
            <span className='mt-2 font-light md:text-xl'>I'm a web Developer</span>

            <button className="mt-10 flex justify-around items-center border-2 p-3 rounded-full w-1/2 hover:bg-white hover:text-black transitions" onClick={() => {
              navigate('/portfolio')
            }}>
                Work
                <BsFillArrowRightCircleFill style={{fontSize: '22px'}}/>
            </button>

        </div>

    </div>
  )
}

export default Home