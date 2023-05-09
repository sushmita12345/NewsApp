import { useFetch } from "./useFetch";
import './NewsPage.css';
import { BsBookmark,BsBookmarkFill } from "react-icons/bs";


const NewsPage = ({clickHandler}) => {

  
  const { newsData, setNewsData, toggle } = useFetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=aa3e750794b84e2fbcdd80c68c091194"
  );

  return (
    <div>
      <div>
        <div className="news-wrapper">
           
          {newsData && newsData.map((news, index) => {
                return <div key={index}>
                    <div className="news-container">
                        <img src={news.urlToImage} alt={news.urlToImage} className="news-card-img"/>
                        <h2>{news.title}</h2>
                        <p>{news.description}</p>
                        <h4>{news.publishedAt}</h4>
                        <div className="news-bookmark">
                        <a href={news.url} target="_blank" rel="noreferrer">Read More</a>
                        <span onClick={() => clickHandler(news)} className="news-add">{toggle?<BsBookmarkFill />: <BsBookmark />}</span>
                     
                        </div>
                        
                    </div>
                </div>;
              })
            }
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

// Array.isArray(newsData)
//             ?
