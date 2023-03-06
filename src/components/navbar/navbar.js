import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar =()=>{
    const demo=(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">about Us</Link></li>
            <li><Link to="/images">Images</Link></li>
            
        </ul>
    );
    return demo;
}
export default Navbar;