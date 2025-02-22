import "./Info.css"
import Header from "../components/Header";

export default function Info() {
    return (
        <>
            <Header page="info" />
            <div className="info">
                <h1>Information</h1>
                <div className="container">
                    <section>
                        <h2>Bakery</h2>
                        <p>
                            Cookie is an in-house Discord bot created to gamify the Cookie House experience.
                            Each user upon joining can start baking Cookies. These cookies are spent in the Shop to obtain
                            backgrounds which are used in the user's profiles.
                        </p>
                        <p>
                            In order to effectively utilise the bakery features, it is important to know a few concepts and
                            commands.
                        </p>
                        <h3>Baking: -bake</h3>
                        <p>
                            Baking allows you to earn Cookies which can be spent in the shop. There is a
                            cooldown of 4 hours. The number of cookies dropped is randomised and is divided into the
                            following
                            tiers.
                        </p>
                        <ul>
                            <li>
                                <p>T0: 1-3 🍪</p>
                            </li>
                            <li>
                                <p>T1: 7-11 🍪</p>
                            </li>
                            <li>
                                <p>T2: 14-18 🍪</p>
                            </li>
                            <li>
                                <p>T3: 21-25 🍪</p>
                            </li>
                        </ul>
                        <p>
                            The tier you get is pseudo-random and there is a pity system involved. You are guaranteed to hit
                            T3
                            once every 20 bakes.
                            The number of cookies you get from within that tier is entirely random.
                            <span style={{ backgroundColor: "#f37fff" }}>Server Boosters</span> have a x1.1 multiplier on the
                            number
                            of Cookies
                            they bake by default.
                        </p>
                        <h3>Spending: -shop</h3>
                        <p>
                            Any cookies you obtain can be spent in the Shop. The shop consists of backgrounds that you can
                            equip
                            on your profiles to show off your bias or your favourite era. There are multiple backgrounds to
                            choose from and more will be added over time.
                        </p>
                        <p>
                            To buy stuff from the shop, click "Buy". This copies a command for you which can be pasted in
                            any
                            text channel. Please be mindful of ongoing conversations. If you are batch buying, we recommend
                            you
                            use the bot channel instead.
                        </p>
                        <h3>Equipping: -mybag / -inventory</h3>
                        <p>
                            To equip any bought items, you can use the mentioned commands. These commands will take you to
                            the
                            webpage where you can see all items you have bought from the shop. To equip an item, click
                            "Equip".
                            This copies a command which can then be pasted in a text channel to equip the desired item.
                        </p>

                    </section>
                    <section>
                        <h2>Still Curious?</h2>
                        <p>
                            This webpage mainly serves as an entry point to the server and a platform to spend cookies.
                            If you have any questions, feel free to reach out any active staff.
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}