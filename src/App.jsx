import './App.css';
import {Entrance} from "./components/Entrance";
import {useState} from "react";
import {Navigation} from "./components/Navigation";
import {AboutMe} from "./components/AboutMe";
import {LeftNavigation} from "./components/LeftNavigation";
import {Mail} from "./components/Mail";
import {Podcast} from "./components/Podcast";
import {SoftwareDevelopment} from "./components/SoftwareDevelopment";




function App() {
    const [page, setPage] = useState("entrance");
  return (
    <>
        <Navigation onNavigate={setPage} />
        <LeftNavigation />
        <Mail/>
        <div className="page-container">
            {page === "entrance" && <Entrance />}
            {page === "about" &&  <AboutMe onBack={() => setPage("entrance")} />}
            {page === "development" &&  <SoftwareDevelopment onBack={() => setPage("entrance")} />}
            {page === "podcast" &&  <Podcast onBack={() => setPage("entrance")} />}

        </div>
    </>
  );
}

export default App;
