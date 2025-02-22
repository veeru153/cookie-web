import './Home.css'
import sign from '../assets/sign.svg'
import yuqi from '../assets/yuqi.png'
import cookie from '../assets/cookie.svg'
import Header from "../components/Header"

export default function Home() {
    return (
        <>
            <Header page="home" />
            <div className="home">
                <div className="intro">
                    <div className="img-wrapper">
                        <img src={cookie} alt="Cookie" />
                    </div>
                    <div className="text">
                        <p>Welcome to Yuqi's Cookie House 🍪!</p>
                        <p>We are a Discord server dedicated to Yuqi from (G)I-DLE.</p>
                        <p>This webpage is primarily used to spend cookies that earned by being active on the Discord
                            server.
                            More information can be found in the <a href="/info">Info</a> tab.</p>
                        <p>Hope you have great time!</p>
                    </div>
                </div>
                <h1>Who is Yuqi?</h1>
                <div className="facts">
                    <div className="img-wrapper">
                        <img src={yuqi} alt="Yuqi" />
                    </div>
                    <div className="content">
                        <img src={sign} alt="Signature" />
                        <p><b>Song Yuqi - 宋雨琦 - 송우기</b></p>
                        <p><b>Position</b><br />Lead Vocalist, Lead Dancer</p>
                        <p><b>Birthday</b><br />September 23, 1999</p>
                        <p><b>Nationality</b><br />Chinese</p>
                        <p><b>Zodiac</b><br />Rabbit / Libra</p>
                        <p><b>Height</b><br />162cm</p>
                        <p><b>Member Introduction</b><br /><a href="https://youtu.be/MkkbLKWx_GY" target="_blank">YouTube</a></p>
                        <p>
                            <b>Socials</b>
                            <br />
                            <a href="https://www.instagram.com/yuqisong.923" target="_blank">Instagram</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}