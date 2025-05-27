export function GoBack({ onClick }) {
    return (
        <button className={"go-back-button"} onClick={onClick}>
            <img
                src="/lefthook.png"
                alt="Go Back"
                className="go-back-icon"
            />
        </button>
    );
}