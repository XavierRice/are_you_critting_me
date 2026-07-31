import partyEmblem from '../assets/MainImage.png'


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />

 <img
    className="hero-emblem"
    src={partyEmblem}
    alt=""
    aria-hidden="true"
/>


<div className='hero-content'>
      <div className="eyebrow">A D&amp;D Catastrophe</div>

      <h1>
        Are You
        <span>Critting Me!?</span>
      </h1>

      <p className="hero-copy">
        Four actors, storytellers and comedians enter the Second Age of
        Calderon. The towers are dimming. Chaos is whispering. Absolutely no
        one is behaving responsibly.
      </p>

      <div className="hero-actions">
        <a className="button primary" href="#listen">
          Roll for listening
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