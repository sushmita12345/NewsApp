import "./Header.css";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <img
        src="https://www.mynzocarbon.com/wp-content/uploads/2023/05/Blue_2x_-1.png"
        alt="logo"
        className="header-img"
      />
      <div className="home">
      <Link to="/"><p className="header-home">Home</p></Link>
      <Link to="news"><p className="header-home">News</p></Link>
      <Link to="bookmark"><p className="header-home">Bookmark</p></Link>
      </div>
    </div>
  );
};

export default Header;
