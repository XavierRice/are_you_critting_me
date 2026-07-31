function VideoSection()
 {
  return (
    <section className="video-section" id="watch">
      <div className="section-heading">
        {/* <p className="section-kicker">Enter Calderon</p> */}
        <h2>Watch and Bear Witness</h2>

        <p>
        Enter Calderon and witness four deeply questionable heroes confront ancient
        danger, fading towers, and the consequences of their own decisions.
        </p>
      </div>

      <div className="video-frame">
        <iframe
          src="https://www.youtube.com/embed/VKye0TUuVOU?si=RyQOSn5YiGCsPA0U"
          title="Dancing Dragon Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}

export default VideoSection