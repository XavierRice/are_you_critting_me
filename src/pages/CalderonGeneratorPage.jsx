import NpcGenerator from "../components/NpcGenerator";
import ItemGenerator from "../components/ItemGenerator";
import SignupSection from "../components/SignupSection";

function CalderonGeneratorPage() {
  return (
    <main id="main-content">
      <section className="generator-hub section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Enter Calderon</p>
            <h1>Leave Your Mark on the Second Age</h1>
          </div>

          <p>
            Create a citizen, forge a questionable artifact, or both.
            Your creation may someday find its way into the world of Calderon.
          </p>
        </div>

        <div className="generator-experience">
          <NpcGenerator />
        </div>

        <div
          className="generator-divider"
          aria-hidden="true"
        >
          <span>OR TEMPT FATE AGAIN</span>
        </div>

        <div className="generator-experience">
          <ItemGenerator />
        </div>
      </section>
      <SignupSection/>
    </main>
  );
}

export default CalderonGeneratorPage;