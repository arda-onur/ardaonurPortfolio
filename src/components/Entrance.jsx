import {Entrancecss} from '../css/Entrance.css';
import {Navigation} from "./Navigation";
import {LeftNavigation} from "./LeftNavigation";
import {Mail} from "./Mail";

export function Entrance(){
    return (

    <>
       <img className={"ardadrawings"} src={"ardaçizim.png"}/>
       <div className="text-area">
           <p className="entrance-writings">Arda Onur</p>
           <p className="entrance-title">Software Developer</p>
           <p className={"cite"}>“ The path to success, begins with action.”</p>
       </div>
   </>

    )
}