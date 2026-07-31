import Hero from "../components/Hero";
import Episodes from "../components/Episodes";
import Story from "../components/Story";
import Party from "../components/Party";
import Listen from "../components/Listen";

function Home() {

  return (
    <main>
      <Hero />
      <Story />
      <Episodes />
      <Party />
      <Listen/>
    </main>
  )
}

export default Home