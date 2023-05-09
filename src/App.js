import {useState} from 'react'
import './App.css';
import Header from './Header/Header';
import NewsPage from "./NewsPage/NewsPage";
import LandingPage from "./LandingPage/Banner";
import BookMark from './BookMark/Bookmark';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from "react"


function App() {
  const [toggle, setToggle] = useState(false)
  const getLocalStorage = () => {
    const newsData = localStorage.getItem('key')
    if(newsData){
      return JSON.parse(localStorage.getItem('key'))
    }
        else{
          return []
        }
  }

  const removeNews = (url) => {

    let deleteNews =JSON.parse(localStorage.getItem("key"));

    deleteNews = deleteNews.filter((item) => item.url !== url);
    localStorage.setItem("key", JSON.stringify(deleteNews));
    setBookmark(deleteNews)
    if (deleteNews.length === 0) {
      localStorage.removeItem("key");
    }
   
  }
  const [bookmark, setBookmark] = useState(getLocalStorage())

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(bookmark))
  },[bookmark])



  

  const clickHandler = (i) => {
    setToggle(true)
    const newsExist = bookmark.find((news) => news.url === i.url)
    if(newsExist){
      setBookmark(bookmark.map((n) => n.url === i.url?{...newsExist}:n))
    }else{
      setBookmark([...bookmark, i])
    }
    // let isPresent = false
    // bookmark.forEach((mark) => {
    //   if(i.id === mark.id)
    //   isPresent = true
    // }
    // )

    // if(isPresent)
    // return true
  
    // setBookmark([...bookmark, i])
   

  }
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="news" element={<NewsPage clickHandler={clickHandler} toggle={toggle}/>} />
      <Route path="bookmark" element={<BookMark bookmark={bookmark} setBookmark={setBookmark} removeNews={removeNews}/>} />

      
    </Routes>
    
      
    </div>
    </BrowserRouter>
  );
}

export default App;
