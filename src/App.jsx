import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Episodes from './components/Episodes'
import Story from './components/Story'
import Party from './components/Party'
import Listen from './components/Listen'
import Footer from './components/Footer'


function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <Hero />
        <Story/>
        <Episodes />
        <Party/>
        <Listen/>
      </main>

      <Footer/>
    </div>
  )
}

export default App