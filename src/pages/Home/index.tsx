import { Link } from 'react-router-dom';
import { ReactComponent as MainImage } from '../../assets/images/main.svg';
import Footer from '../../components/Footer';
import './styles.css';

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faça seu pedido <br />
                            que entregamos <br />
                            pra você!!!
                        </h1>
                        <h3 className="home-subtitle">
                            Escolhe seu pedido e em poucos minutos <br />
                            levaremos em sua porta
                        </h3>
                        <Link to="/orders" className="home-btn-order">
                            FAZER PEDIDO
                        </Link>
                    </div>
                    <div className="home-image">
                        <MainImage />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;