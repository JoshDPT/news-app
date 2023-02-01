import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

export default async function fetchNews (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean, 
) {
  // GraphQL Query
  const query = gql`
    query myQuery (
      $access_key: String!
      $categories: String!
      $keywords: String
    ){
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
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `
  // fetch function with next js 13 fetching
  const res = await fetch ('https://adamantina.stepzen.net/api/hissing-cat/__graphql', {
    method: 'POST',
    cache: isDynamic ? 'no-cache' : 'default',
    next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
    headers: {
      "content-type" : "application/json",
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_API_KEY,
        categories: category,
        keywords: keywords,
      }
    })
  })
  console.log(
    'loading new data from API for category >>>',
    category,
    keywords
  )
  const newsResponse = await res.json();
  
  // sort images by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery);
  
  // return result
  return news;
}

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=36d37c800399dfe4debdb1b466846987&sources=bbc&categories=business"