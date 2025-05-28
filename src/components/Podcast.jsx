import {GoBack} from "./GoBack";
import "../css/GoBack.css"
import "../css/Podcast.css"
export function Podcast({ onBack }) {

    return (

        <>
            <div className="aboutPodcastDiv">
                <p>
                    Ardarda is a cozy little corner where you embark on mini explorations of every part of life.
                    From relationships to friendships, series to films, and philosophy to everyday banter, we cover it all in a warm, friendly atmosphere.
                </p>
                  <p>
                      If you’re after fresh perspectives and new angles, just pop in your headphones and join us!
                  </p>
                <p>
                    For a delightful listening experience, don’t forget to follow us on Instagram @matildaeliz and @ardarda_podcast
                    let your voice become part of the conversation too!!
                </p>
            </div>


          <div className={"PodcastTrailer"}>
              <iframe
                  src="https://open.spotify.com/embed/episode/1TodAG2z8b9TMNctH6cLkl?utm_source=generator&theme=0"
                  title={"podcast"}
                  frameBorder="0" allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"></iframe>
          </div>

            <a href="https://open.spotify.com/show/3OEI2hAYNEKrhCpXkVbCRS?si=bb216ad1a2bb4e2b" target="_blank" rel="noopener noreferrer">
                <button className={"podcastButton"}>Listen the Podcast</button>
            </a>
            <GoBack onClick={onBack}/>


        </>

    )

}