import { Link } from "react-router-dom";
import style from './Landing.module.css'

const LandingPage = () => {
    return (
        <div className={style.landing}>
            <h1 className={style.title}>Welcome to the page of <br />Rick and Morty</h1>
            <Link to='/home'>
                <button></button>
            </Link>
        </div >
    )
}

export default LandingPage;