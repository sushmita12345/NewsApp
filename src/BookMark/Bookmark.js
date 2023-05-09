
import "./BookMark.css"
import {BsXCircleFill} from "react-icons/bs";

const BookMark = ({bookmark, setBookmark, removeNews}) => {   
   console.log(bookmark)
    return (
        <div className="news-wrapper">
           
            {
                bookmark && bookmark.map((mark, index) => {
                    return (
                        <div key={mark.url}>
                        <div className="news-container">
                            <img src={mark.urlToImage} alt={mark.urlToImage} className="news-card-img"/>
                            <h2>{mark.title}</h2>
                            <p>{mark.description}</p>
                            <h4>{mark.publishedAt}</h4>
                            <a href={mark.url} target="_blank" rel="noreferrer">Read More</a>
                            <span onClick={() => removeNews(mark.url)} className="remove-bookmark"><BsXCircleFill /></span>
                        </div>
                       
                        
                       
                </div>
                    )
                })
            
            }
        </div>
    )
}

export default BookMark