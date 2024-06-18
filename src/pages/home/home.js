import React from "react";
import "./home.css";
import c1r1 from "../../components/images/c1r1_image.svg";
import c2r1 from "../../components/images/c2r1_image.png";
import controller from "../../components/images/game_controller.png";
import c1r2 from "../../components/images/c1r2_image.png";
import saly from "../../components/images/Saly-19.svg";
import c3r1 from "../../components/images/c3r1_image.png";
import c3r2 from "../../components/images/c3r2_image.png";
import megaphone from "../../components/images/megaphone.png";
import woman from "../../components/images/woman.png";


const Home = () => {
    const [email, setEmail] = React.useState("");
    const handlesubmit = () => {
        if (email === "") {
            alert("Please enter your email address");
            setEmail("");
        } else {
            alert("We will notify you soon");
        }
    }
    return (
        <div className="home">
            <div className="c1-c2-c3-container">
                <div className="c1-container">
                    <div className="c1r1-container">
                        <div className="c1r1-image-container">
                            <img src={c1r1} alt="C1R1" />
                        </div>
                        <div className="c1r1-text-container">
                            Your Next <br />Adventure <br />Awaits
                        </div>
                        <div className="c1r1-button-container">
                            <button>Logo</button>
                            <button>Loading sports</button>
                        </div>
                    </div>
                    <div className="c1r2-container">
                        <div className="c1r2-image-container">
                            <img src={c2r1} alt="C1R1" />
                        </div>
                    </div>
                    <div className="c1r3-container">
                        <div className="c1r3-image-container">
                            <img src={controller} alt="C1R1" />
                            <div className="c1r3-text-container1">
                                GAMERS
                            </div>
                            <div className="c1r3-text-container2">
                                ASSEMBLE
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c2-container">
                    <div className="c2r1-container">
                        <div className="c2r1-image-container">
                            <img src={c1r2} alt="C1R1" />
                        </div>
                    </div>
                    <div className="c2r2-container">
                        <div className="c2r2-image-container">
                            <img src={saly} alt="C1R1" />
                        </div>
                        <div className="c2r2-text-container">
                            <h2 className="h2">We’re coming soon!</h2>
                            <h4 className="h4">Get updated with the latest</h4>
                        </div>
                        <div className="c2r2-input-container">
                            <input type="email" placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)} value={email} />
                            <button onClick={() => handlesubmit()}
                            >Update Me!</button>
                        </div>
                    </div>
                </div>
                <div className="c3-container">
                    <div className="c3r1-container">
                        <div className="c3r1-image-container">
                            <img src={c3r1} alt="C1R1" />
                        </div>
                        <div className="c3r1-text-container">Hosting for Thrill-Seekers an
                        </div>
                    </div>
                    <div className="c3r2-container">
                        <div className="c3r2-image-container">
                            <img src={c3r2} alt
                                ="C1R1" />
                        </div>
                        <div className="c3r2-text-container">d Wanderlust Explorers.
                        </div>
                    </div>
                </div>
            </div>
            <div className="c4-container">
                <div className="c4r1-container">
                    <div className="c4r1-text-container">

                    </div>
                    <div className="c4r1-image-container">
                        <img src={megaphone} alt="C1R1" />
                    </div>
                </div>
                <div className="c4r2-container">
                    <div className="c4r2-image-container">
                        <img src={woman} alt="woman" />
                    </div>
                    <div className="c4r2-text-container">
                        Try new things,<br />
                        meet new people
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;