import { Link } from "react-router-dom";
export default function RelatedPosts({ posts, currentPostId }) {
  const relatedPosts = posts
    .filter((post) => post.id !== currentPostId)
    .slice(0, 3);
  return (
    <section className="mt-20 border-t border-[#333] pt-10">
      <div className="mb-8 text-right">
        <p className="mb-2 text-sm text-[#ea580c]">قد يعجبك أيضًا</p>
        <h2 className="text-3xl font-bold text-white"> مقالات ذات صلة </h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blogdetails/${post.slug}`}
            className="group block w-full overflow-hidden rounded-2xl border border-[#333] bg-[#1c1c1c] no-underline transition duration-300 hover:-translate-y-1 hover:border-[#ea580c]"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="p-5 text-right">
              <span className="text-sm text-[#ea580c]">{post.category}</span>
              <h3 className="mt-2 line-clamp-2 text-xl font-bold text-white">
                {post.title}
              </h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#777]">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-sm text-[#777]">
                <span>{post.readTime}</span> <span>{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
