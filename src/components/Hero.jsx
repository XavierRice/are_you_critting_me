import partyEmblem from '../assets/MainImage.png'
import logo from '../assets/AMYC_TRANS.png'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />

<div className='hero-content'>
       <img
      className="hero-logo"
      src={logo}
      alt="Are You Critting Me!?"
       />

      <p className="hero-copy">
        Four actors, storytellers and comedians enter the Second Age of
        Calderon. The towers are dimming. Chaos is whispering. Absolutely no
        one is behaving responsibly.
      </p>

      <div className="hero-actions">
        <a className="button primary" href="#listen">
          Coming Soon!
        </a>

        <a className="button secondary" href="#story">
          Enter Calderon
        </a>
      </div>

      <p className="domain">areyoucrittingme.com</p>
      </div>
    </section>
  )
}

export default Hero