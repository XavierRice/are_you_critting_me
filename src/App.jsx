import { BrowserRouter, Routes, Route} from 'react-router-dom'


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WatchAndSupport from './pages/WatchAndSupport' 



function App() {
  return (
    <BrowserRouter>
     <div className="site-shell">
        <Navbar />

        <Routes>
          <Route
          path="/" 
          element={<Home />} />
          <Route
            path="/watch-and-support"
            element={<WatchAndSupport />}
          />
        </Routes>

        <Footer />
      </div>
     
    
    </BrowserRouter>
   
  )
}

export default App