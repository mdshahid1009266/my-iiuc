import Header from '../components/header'
import Carousel from '../components/carousel'
import Justin from '../components/justin'
import Welcome from '../components/welcome'
import Messeges from '../components/messeges'
import Events from '../components/events'
import Counter from '../components/counter'
import { Notice } from '../components/notice'
import Activities from "../components/activities"
import Map from '../pages/m-and-d'
import Contact from '../pages/contact'
import Footer from '../components/footer'
import "./home.css"
export default () => {
    return (
        <div>
            <Carousel />
            <Justin />
            <div className="combine container">
                <div className="mainWelcome">
                    <Welcome />
                </div>
                <div className="mainMesseges">
                    <Messeges />
                </div>
            </div>
            <div className="combine container">
                <div className="mainEvents">
                    <Events />
                </div>
                <div className="mainNotice">
                    <Notice />
                </div>
            </div>
            <Counter />
            <Activities />
            <Map />
            <Contact />
            <Footer />
        </div>
    )
}