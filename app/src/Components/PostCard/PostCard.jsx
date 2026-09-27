import { Link } from "react-router-dom";
export default function PostCard({ post, view }) {
  return (
    <Link
      to={`/blogdetails/${post.slug}`}
      className="block text-decoration-none"
    >
      <div
        className={`${
          view === "grid" ? "flex-col" : "flex-row"
        }  flex overflow-hidden rounded-2xl border border-[#333] bg-[#1c1c1c] mb-4  transition-all duration-300 hover:-translate-y-1 hover:border-[#ea580c] "`}
      >
        <div
          className={`flex flex-col justify-center p-6 text-right ${
            view === "grid" ? "w-full" : "w-1/2"
          }`}
        >
          <span className="mb-3 inline-block w-fit rounded-full bg-[#ea580c] px-3 py-1 text-sm text-white">
            {post.category}
          </span>
          <h5 className="mb-3 text-2xl font-bold text-white">{post.title}</h5>
          <p className="mb-3 text-neutral-400">{post.excerpt}</p>
          <small className="text-neutral-500">
            {post.author.name} · {post.date} · {post.readTime}
          </small>
        </div>
        <div className={view === "grid" ? "w-full h-64" : "w-1/2"}>
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
}
