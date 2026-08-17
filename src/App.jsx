import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import Home from './pages/Home'
import WatchAndSupport from './pages/WatchAndSupport'
import Contact from './pages/Contact'
import Apothecary from './pages/Apothecary'
import NotFound from './pages/NotFound'
import CalderonGeneratorPage from './pages/CalderonGeneratorPage'
import NpcSuccess from './pages/NpcSuccess'

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/watch-and-support"
            element={<WatchAndSupport />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/apothecary"
            element={<Apothecary />}
          />

       <Route
         path="/calderon-generator"
         element={<CalderonGeneratorPage />}
       />

       <Route
         path="/npc-generator/success"
         element={<NpcSuccess />}
       />

    
        <Route
            path="*"
            element={<NotFound />}
        />

        </Routes>

        <Footer />
        <MobileCTA />
      </div>
    </BrowserRouter>
  )
}

export default App