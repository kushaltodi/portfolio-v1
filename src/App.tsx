import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className='d-flex flex-column'>
      <Header />
      <Routes>
        <Route path='' element={ <Home />} />
        <Route path='/profile' element={ <Profile />} />
        <Route path='/projects' element={ <Projects />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
    </div>
  )
}

export default App
