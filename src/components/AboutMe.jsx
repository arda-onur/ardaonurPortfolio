import "./Mail";
import "./LeftNavigation";
import "../css/AboutMe.css";
import "../css/GoBack.css"
import {GoBack} from "./GoBack";

export function AboutMe({ onBack }) {
    return (
        <>

            <div>
                <div className="aboutmeDiv">
                 <p>
                     <h3>Hello, I'm Arda Onur.</h3> I was born in Istanbul in 2000. I graduated with honors from Özyeğin University, completing a major in Aviation Management and a minor in Computer Engineering, with a GPA of 3.34.
                 </p>

                    <p>
                     I’m currently building my career as a Software Developer, and I truly enjoy what I do. I believe, I bring great value to both the process and the product by combining the management, marketing, and communication skills I gained from social sciences with the technical, analytical thinking and software development expertise I developed in engineering.

                     Beyond work, I’m passionate about reading philosophy and science books, and I’m also actively involved in martial arts and fitness.
                 </p>
                    <p>

                        If you're interested in learning more about my software development experience, feel free to click the Software Development section. For more about my podcast, check out the Podcast section.

                    </p>

                    <p>
                        If you'd like to get in touch, don't hesitate to reach out via email or through my social media channels.
                    </p>
                </div>
                <img  className={"aboutmeFoto"} src={"/aboutmeFoto.png"} alt="aboutmeFoto" />
            </div>
            <GoBack onClick={onBack} />
        </>
    )
}