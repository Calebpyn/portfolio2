import bgImage from '../assets/imgs/bg3.jpg'
function About() {
  return (
    <div className="h-screen w-full md:w-4/5 flex flex-col justify-around items-center md:flex-row md:justify-around" id='about'>

        <div className='w-4/5 shadow-2xl rounded-lg flex flex-col justify-around items-center p-9 bg-center bg-cover' style={{backgroundImage: `url(${bgImage})`}}>

            <span className='text-white font-black text-4xl mb-6'>About Me.</span>

            <p className="text-white font-light text-center text-lg">
                Hey, I am Caleb Payán. <br/>
                I am a self-motivated individual with a strong sense of organization and focus. When confronted with a challenge, I approach it with a multidimensional perspective, seeking to understand it fully before devising a solution. In addition, I am committed to continual learning and personal development and strive to apply the lessons learned from each challenge to future endeavors. During my leisure time, I indulge in photography, art, and music, nurturing my creativity and enriching my perspectives.
            </p>

        </div>


    </div>
  )
}

export default About