import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";
import { categories } from "../../../constants";

type Props = {
  params: { category: Category };
};

export default async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category)
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category)=> ({
    // needs to be same as folder wildcard aka [category]
    category: category,
  }))
}


// localhost:3000/news/business
// localhost:3000/news/general