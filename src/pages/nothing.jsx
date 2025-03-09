import { Link } from "react-router-dom";
import "./nothing.css";

export default ()=>{
    return(
        <div id="nothing">
            <div className="nothingContainer">
            <h1>the page you are looking for is not avaible!</h1>
            <Link to="/">Go to Home</Link>
            </div>
        </div>
    )
}