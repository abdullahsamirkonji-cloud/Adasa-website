import { Link } from "react-router-dom";

export default function BlogGridCard({ post }) {
  return (
    <Link
      to={`/blogdetails/${post.slug}`}
      className="block h-full text-decoration-none"
    >
      <div className="h-full overflow-hidden rounded-2xl border border-[#333] bg-[#1c1c1c]">
        <div className="h-72 w-full">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 text-right">
          <span className="mb-4 inline-block rounded-full bg-[#ea580c] px-3 py-1 text-sm text-white">
            {post.category}
          </span>

          <h2 className="mb-3 text-2xl font-bold text-white">{post.title}</h2>

          <p className="mb-4 leading-7 text-neutral-400">{post.excerpt}</p>

          <p className="text-sm text-neutral-500">
            {post.author.name} · {post.date} · {post.readTime}
          </p>
        </div>
      </div>
    </Link>
  );
}
