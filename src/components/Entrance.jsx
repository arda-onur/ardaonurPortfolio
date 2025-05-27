import  '../css/Entrance.css';
import  "./Navigation";
import "./LeftNavigation";
import  "./Mail";

export function Entrance(){
    return (

    <>
       <img className={"ardadrawings"} src={"ardaçizim.png"} alt={"2"}/>
       <div className="text-area">
           <p className="entrance-writings">Arda Onur</p>
           <p className="entrance-title">Software Developer</p>
           <p className={"cite"}>“ The path to success, begins with action.”</p>
       </div>
   </>

    )
}