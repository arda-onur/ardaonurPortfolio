import '../css/Navigation.css'

export function Navigation({ onNavigate }){
    return (    <div className="navigation">
            <button onClick={() => onNavigate("about")}>About me</button>
            <button onClick={() => onNavigate("development")}>Software Development</button>
            <button onClick={() => onNavigate("podcast")}>Podcast</button>
            </div>
    )
}