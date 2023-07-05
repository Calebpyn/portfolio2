import bg5 from '../assets/imgs/bg5.jpg'
import {FiSend} from 'react-icons/fi'

import {useRef} from 'react'

import emailjs from '@emailjs/browser'


function Contact() {

    const form = useRef<HTMLFormElement>(null);

    const clearForm = () => {
      if (form.current) {
        form.current.reset();
      }
    };
  

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      emailjs.sendForm('service_lb3v6op', 'template_vqyrh4p', form.current!, '6BZ21eRm0ehBurk_p')
        .then(
          (result) => {
            console.log(result.text);
            window.scrollTo({top:0, behavior:'smooth'})
            clearForm()
          },
          (error) => {
            console.log(error.text);
            window.alert('Oops. Something went wrong...')
          }
        );
    };

  

  return (
    <div className='h-screen w-full flex flex-col justify-around items-center md:w-4/5' id='contact'>

        <div className='p-9 w-4/5 bg-cover bg-center rounded-lg shadow-2xl flex flex-col justify-between' style={{backgroundImage: `url(${bg5})`}}>

            <span className='text-white font-black text-4xl'>CONTACT ME.</span>

            <form className='mt-3' ref={form} onSubmit={sendEmail}>

                <div className='flex flex-col justify-between mt-2'>
                    <div className='flex justify-end'>
                        <label htmlFor='1' className='text-white font-extralight'>Name</label>
                    </div>
                    <input id='1' name='form_name' className='backdrop-blur-md bg-transparent px-5 py-2 rounded-full w-full text-white focus:outline-white' placeholder=''/>
                </div>

                <div className='flex flex-col justify-between mt-2'>
                    <div className='flex justify-end'>
                        <label htmlFor='2' className='text-white font-extralight'>Email</label>
                    </div>
                    <input id='2' type='email' required name='form_email' className='backdrop-blur-md bg-transparent px-5 py-2 rounded-full w-full text-white focus:outline-white' placeholder=''/>
                </div>

                <div className='flex flex-col justify-between mt-2'>
                    <div className='flex justify-end'>
                        <label htmlFor='3' className='text-white font-extralight'>Company</label>
                    </div>
                    <input id='3' name='form_company' required className='backdrop-blur-md bg-transparent px-5 py-2 rounded-full w-full text-white focus:outline-white' placeholder=''/>
                </div>

                <div className='flex flex-col justify-between mt-2'>
                    <div className='flex justify-end'>
                        <label htmlFor='4' className='text-white font-extralight'>Message</label>
                    </div>
                    <textarea id='4' name='message' className='backdrop-blur-md bg-transparent px-5 py-2 rounded-lg w-full text-white focus:outline-white' placeholder=''/>
                </div>

                <button className='mt-5 border-2 md:w-1/3 border-white rounded-full py-2 w-full text-white flex justify-around items-center hover:bg-white hover:text-black transitions' value='send' type='submit'>SUBMIT<FiSend/></button>

            </form>

        </div>

    </div>
  )
}

export default Contact