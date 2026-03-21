import {Link} from "react-router-dom";
import "../css/AboutUs.css";

function AboutUs() {
    return (
        <section className="aboutus-container">
            <h3 className="aboutus-heading">About Us</h3>
            <p className="aboutus-text">
                Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.
            </p>
        <Link to="/about" className="aboutus-btn">Our Team...</Link>
        </section>
    )
}

export default AboutUs;