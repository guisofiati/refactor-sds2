import { ReactComponent as LinkedinImage } from '../../assets/images/linkedin.svg';
import { ReactComponent as YoutubeImage } from '../../assets/images/youtube.svg';
import { ReactComponent as InstagramImage } from '../../assets/images/instagram.svg';

import './styles.css';

function Footer() {
    return (
        <footer className="main-footer">
            Siga, curta e acompanhe nossas postagens nas redes sociais!
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/guisofiati/" target="_new">
                    <LinkedinImage />
                </a>
                <a href="https://github.com/guisofiati/" target="_new">
                    <YoutubeImage />
                </a>
                <a href="https://www.instagram.com/s0fiati/" target="_new">
                    <InstagramImage />
                </a>
            </div>
        </footer>
    );
}

export default Footer;