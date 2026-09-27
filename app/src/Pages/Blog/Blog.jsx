import { useState } from "react";
import data from "../../Components/Data/posts.json";
import PostCard from "../../Components/PostCard/PostCard";
import BlogGridCard from "../../Components/BlogGridCard/BlogGridCard";
export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const filteredPosts = data.posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || post.category === category),
  );

  const postsPerPage = 6;

  const startIndex = (currentPage - 1) * postsPerPage;

  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );
  return (
    <div className="container py-5  -mt-0.5 bg-black">
      <div className="flex justify-center items-center mt-18">
        <p className=" flex w-40 rounded-full bg-[#ea580c] text-white h-12.5 justify-center items-center">
          مدونتنا
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-white text-7xl py-10 text-center">
          استكشف<span className="text-[#fbbf24]"> مقالاتنا</span>
        </p>
        <p className="text-neutral-400 text-2xl w-max text-center">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>
      <div className="row my-10">
        <div className="flex flex-wrap items-center gap-3 border-b border-[#333] pb-5">
          <button
            className={`ml-3 h-9.5 px-4 rounded-xl border text-[13px] font-medium transition-all ${
              category === ""
                ? "bg-[#ff5a00] border-[#ff5a00] text-white"
                : "bg-[#222] border-[#777] text-[#777] hover:text-white"
            }`}
            onClick={() => {
              setCategory("");
              setCurrentPage(1);
            }}
          >
            جميع المقالات
          </button>

          <button
            className={`h-9.5 px-4 rounded-xl border text-[13px] font-medium transition-all ${
              category === "إضاءة"
                ? "bg-[#ff5a00] border-[#ff5a00] text-white"
                : "bg-[#222] border-[#777] text-[#777] hover:text-white"
            }`}
            onClick={() => {
              setCategory("إضاءة");
              setCurrentPage(1);
            }}
          >
            إضاءة
          </button>

          <button
            className={`h-9.5 px-4 rounded-xl border text-[13px] font-medium transition-all ${
              category === "بورتريه"
                ? "bg-[#ff5a00] border-[#ff5a00] text-white"
                : "bg-[#222] border-[#777] text-[#777] hover:text-white"
            }`}
            onClick={() => {
              setCategory("بورتريه");
              setCurrentPage(1);
            }}
          >
            بورتريه
          </button>

          <button
            className={`h-9.5 px-4 rounded-xl border text-[13px] font-medium transition-all ${
              category === "مناظر طبيعية"
                ? "bg-[#ff5a00] border-[#ff5a00] text-white"
                : "bg-[#222] border-[#777] text-[#777] hover:text-white"
            }`}
            onClick={() => {
              setCategory("مناظر طبيعية");
              setCurrentPage(1);
            }}
          >
            مناظر طبيعية
          </button>

          <button
            className={`h-9.5 px-4 rounded-xl border text-[13px] font-medium transition-all ${
              category === "تقنيات"
                ? "bg-[#ff5a00] border-[#ff5a00] text-white"
                : "bg-[#222] border-[#777] text-[#777] hover:text-white"
            }`}
            onClick={() => {
              setCategory("تقنيات");
              setCurrentPage(1);
            }}
          >
            تقنيات
          </button>
          <button
            className={`h-9.5 px-4 rounded-xl border text-[13px] font-medium transition-all  ${
              category === "معدات"
                ? "bg-[#ff5a00] border-[#ff5a00] text-white"
                : "bg-[#222] border-[#777] text-[#777] hover:text-white"
            }`}
            onClick={() => {
              setCategory("معدات");
              setCurrentPage(1);
            }}
          >
            معدات
          </button>
          <div className="flex flex-1 min-w-62.5 justify-end mr-2">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="ابحث عن مقال"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-xl border border-[#333] bg-[#1c1c1c] py-3 pr-12 pl-4 text-white outline-none placeholder:text-neutral-500 focus:border-[#ea580c]"
              />
              <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"></i>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between my-5 ml-3">
          <p className="text-neutral-400 m-0">
            عرض {filteredPosts.length} مقال
          </p>
          <div className="m-3 flex rounded-full border border-[#333] bg-[#1c1c1c] p-1">
            <button
              onClick={() => setView("list")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition duration-300 ${
                view === "list"
                  ? "bg-[#ea580c] text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              List
            </button>

            <button
              onClick={() => setView("grid")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition duration-300 ${
                view === "grid"
                  ? "bg-[#ea580c] text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Grid
            </button>
          </div>
        </div>

        {view === "grid" ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((post) => (
              <BlogGridCard post={post} key={post.id} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {currentPosts.map((post) => (
              <PostCard post={post} view="list" key={post.id} />
            ))}
          </div>
        )}
        <div className="flex justify-center gap-3 py-8 -mb-14">
          {Array.from(
            { length: Math.ceil(filteredPosts.length / postsPerPage) },
            (num, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full text-white ${
                  currentPage === index + 1
                    ? "bg-[#ff5a00]"
                    : "bg-[#333] hover:bg-[#ff5a00]"
                }`}
              >
                {index + 1}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
