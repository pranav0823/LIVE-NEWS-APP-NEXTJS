import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";


// Inside fetchNews.ts

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
  ) => {
    // GraphQL query
    const query = gql`
      query myQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
      ) {
        myQuery(
          access_key: $access_key
          categories: $categories
          countries: "gb"
          sort: "published_desc"
          keywords: $keywords
        ) {
          data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
          },
          pagination {
            count
            limit
            offset
            total
          }
        }
      }
    `;
  
    const requestOptions: RequestInit = {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    };
  
    const res = await fetch(
      "https://itaquitinga.stepzen.net/api/funky-molly/__graphql",{
        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? {revalidate: 0} : {revalidate:30},
        headers: {
          "Content-Type": "application/json",
          Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
          query,
          variables:{
            access_key: process.env.MEDIASTACK_API_KEY,
            categories: category,
            keywords: keywords
          }
        })

      },
      
    );

  
    if (category && keywords) {
      console.log("Loading NEW DATA FROM API FOR CATEGORY>>>", category, keywords);
    } else {
      console.log("category and/or keywords are undefined.");
    }
  
    const NewsResponse= await res.json();

    const news = sortNewsByImage(NewsResponse.data.myQuery);

    return news;
  };
  
  export default fetchNews;
  
  //