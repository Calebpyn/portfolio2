import {HashRouter, Route, Routes} from 'react-router-dom'
import Bg from './components/Bg'
import Portfolio from './components/Portfolio'
import { useState } from 'react'
import windowState from './contexts/windowState'

function App() {

  const [isClosed, setIsClosed] = useState<boolean>(true)

  const toggleClosed = () => {
    setIsClosed((prevClosed: boolean) => !prevClosed)
  }


  const contextValue = {
    isClosed,
    toggleClosed
  }



  return (

    <div>

      <windowState.Provider value={contextValue}>

        <HashRouter>
          <Routes>
            <Route path='/' element={<Bg/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
          </Routes>
        </HashRouter>

      </windowState.Provider>

    </div>

  )
}

export default App
