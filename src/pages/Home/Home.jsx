import "./Home.scss";
import heroImage from "../../assets/images/hero-image.svg";
import { Link } from "react-router-dom";

function Home() {

    return (
        <section className="hero">
            <div className="hero__description">
                <h1 className="hero__description--title">Start your AI jourey with us</h1>
                <h2 className="hero__description--subtitle">Learn all about AI with this personalized playground.</h2>
                <Link to="/playground">
                    <button className="hero__description--button">LET'S GO</button>
                </Link>
            </div>
            <div className="hero__image">
                <img src={heroImage} alt="hero image" />
            </div>
        </section>
    )
}

export default Home;
