import { Routes, Route } from 'react-router-dom'

import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Projects from './components/Projects'
import SingleApp from './components/SingleApp'

function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 max-sm:mx-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:name" element={<SingleApp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
