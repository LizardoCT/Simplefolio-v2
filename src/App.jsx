import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Projects from './components/Projects'
import SingleApp from './components/SingleApp'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return (
    <div className="flex flex-col justify-center items-center mt-20 max-sm:mx-6 max-sm:mt-12">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:name" element={<SingleApp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
