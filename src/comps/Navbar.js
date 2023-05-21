import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link to=""><h1>Demo nav</h1></Link>
                <Link to="/"><a>Home</a></Link>
                <Link to=""><a>Contact</a></Link>
                <Link to=""><a>Movie Series</a></Link>
            </div>
        </nav>
     );
}
 
