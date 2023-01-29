import Link from "next/link"

type Props = {
  category: string,
  isActive: boolean,
}

export default function NavLink({category, isActive}: Props) {
  return (
    <Link 
      href={`/news/${category}`}
      // if it is active, force the hover state
      className={`navLink ${isActive && 'underline decoration-cyan-400 underline-offset-4 font-bold text-lg m-1'}`}
    >
      {category}
    </Link>
  )
}
