import PartyCard from './PartyCard'
import { party } from '../data/party'

function Party() {
    return (
        <section className="section party" id="party">
            <div className="section-heading">
                <div>
                    <p className="section-kicker">Meet the party</p>
                    <h2>Heroes, allegedly</h2>
                </div>

                <p>
                    Meet the party behind Calderon’s boldest heroes, biggest personalities, and most spectacularly bad decisions.
                </p>
            </div>

            <div className="party-grid">
                {party.map((member) => (
                    <PartyCard
                        key={member.name}
                        actor={member.actor}
                        role={member.role}
                        name={member.name}
                        detail={member.detail}
                        image={member.image}
                    />
                ))}
            </div>
        </section>
    )
}

export default Party