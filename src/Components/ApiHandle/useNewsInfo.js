import { useEffect, useState } from "react";

export function useNewsInfo(search) {
  const [data, setData] = useState({});
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const URL =`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;
  useEffect(() => {
    if (search) {
      // Only fetch if a search term is provided
      fetch(URL)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log("this is the news data");

          console.log(result);
        })
        .catch((error) => console.error("Error fetching the news:", error));
    }
  }, [search]);
  return data;
}