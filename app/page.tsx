import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

export default async function HomePage() {
  // fetch the news data 
  const news: NewsResponse = await fetchNews(categories.join(','));
  return (
    <div>
      {/* NewsList news */}
    </div>
  )
}