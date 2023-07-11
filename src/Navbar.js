import  {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Pokemon Directory</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/list">Show All</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;
