import bg4 from '../assets/imgs/bg4.jpg'

import {BsCloudDownload} from 'react-icons/bs'

import fileToDownload from '../../public/Resume_CalebPayan.pdf'

function Resume() {

    const handleDownload = () => {
        window.open(fileToDownload, '_blank')
      }

  return (
    <div className='h-screen w-full flex flex-col justify-around items-center md:w-4/5' id='resume'>
        
        <div className='w-4/5 bg-center b-cover p-9 shadow-2xl rounded-lg' style={{backgroundImage: `url(${bg4})`}}>
            <span className='text-white font-black text-4xl'>RESUME.</span>

            <div className='flex justify-around mt-5'>
                <button className='border-2 md:w-1/2 border-white rounded-full py-5 w-full text-white flex justify-around items-center hover:bg-white hover:text-black transitions' onClick={() => handleDownload()}>DOWNLOAD<BsCloudDownload style={{fontSize: '23px'}}/></button>
            </div>
        </div>

    </div>
  )
}

export default Resume