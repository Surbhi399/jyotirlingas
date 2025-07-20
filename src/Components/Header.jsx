
import globeIcon from "public/images/globe.png"; // 👈 import the image
export default function Header(){
    return (
        <header>
            <img src={globeIcon} alt="globe icon" />
            <h1>Jyotirlingas in India.</h1>
        </header>
    )
}
