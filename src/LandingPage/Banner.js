import "./Banner.css";
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <div>
      <div>
        <img
          alt="banner"
          src="https://www.mynzocarbon.com/wp-content/uploads/2023/04/Rectangle-4152944-1.png"
          className="banner-img"
        />
        <div className="banner-cont-container">
          <div className="banner-card">
            <p className="banner-cl">“ CLIMATE CHANGE IS NOT DEBATABLE ”</p>
            <h1 className="banner-hd">
              The only way to Net Zero is through collective action.
            </h1>
            <p className="banner-p">
              The climate crisis is getting worse as our carbon emissions
              continue to heat the planet. And if it gets worse, we will suffer
              greater floods, droughts, fires and food crisis
            </p>
            <Link to="/news"><button className="banner-btn">Get Latest News</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
