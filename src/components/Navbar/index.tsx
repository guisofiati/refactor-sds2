import './styles.css';
import { ReactComponent as Logo} from '../../assets/images/logo.svg';


function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">DS Deliver</a>
        </nav>
    )
}

export default Navbar;