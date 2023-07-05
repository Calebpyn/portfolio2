import bgImage from '../assets/imgs/bg.jpg'
import Home from './Home'

function bg() {
  return (
    <div className="w-full h-screen bg-cover bg-center" style={{backgroundImage: `url(${bgImage})`}}>
        <Home/>
    </div>
  )
}

export default bg