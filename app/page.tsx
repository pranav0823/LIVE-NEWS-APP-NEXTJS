import React from 'react'
import fetchNews from '../lib/fetchNews'
import { categories } from '../constant'
import NewsList from './NewsList';
import response from "../response.json"


async function Homepage ()  {
  //fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  await new Promise ((resolve) => setTimeout(resolve,3000));

  console.log(news);



  return (
    <div>
      <NewsList news={news} /> 
    </div>
  )
}

export default Homepage