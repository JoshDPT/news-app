import { notFound } from "next/navigation";

type Props = {
  searchParams?: Article;
}

export default function ArticlePage({ searchParams }: Props) {

  if( (searchParams && Object.entries(searchParams).length === 0) || 
      !searchParams
    ) { 
      return notFound();
  }

  const article: Article = searchParams;

  return (
    <article>
      <section>
        {article.image && (
          <img 
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
          />

        )}
        <div>
            
        </div>
      </section>
    </article>
  );
}