import { useState, useEffect } from "react";

export function useFetch(url) {
  const [newsData, setNewsData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNewsData(data.articles);
        console.log(data);
      } catch (error) {
        setNewsData(error);
      }
    };
    fetchData();
  }, [url]);
  return { newsData, setNewsData };
}

export default useFetch;
