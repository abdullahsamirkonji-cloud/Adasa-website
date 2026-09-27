import data from "../../Components/Data/posts.json";
import PostCard from "../../Components/PostCard/PostCard";
import { Link } from "react-router-dom";

export default function Home() {
  false;
  const featuredPosts = data.posts.filter((post) => post.featured);
  return (
    <div className="container-fluid  ">
      <section className="hero-section text-center bg-black -mt-0.5 pt-22">
        <div className="flex justify-center items-center">
          <p className=" flex w-40 rounded-full bg-[#ea580c] text-white h-12.5 justify-center items-center">
            مرحباً بك في عدسة
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-7xl py-10 text-center">
            اكتشف <span className="text-[#fbbf24]">فن</span>
            <br />
            التصوير الفوتوغرافي
          </p>
          <p className="text-neutral-400 text-2xl w-max text-center">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
        </div>
        <div className=" py-10">
          <Link
            to="/blog"
            className="inline-block text-decoration-none text-white bg-[#ea580c] w-fit rounded-full px-4 py-3 transition duration-300 hover:-translate-y-1"
          >
            استكشف المقالات
          </Link>
        </div>
        <div className="flex justify-center gap-4 pb-12 ">
          <div className="flex h-35 w-35 flex-col items-center justify-center rounded-2xl border-2 border-[#333] bg-[#1c1c1c]  p-4 hover:scale-105 transition-transform duration-300">
            <i className="fa-solid fa-pen mb-3 text-[#ea580c]"></i>
            <p className="mb-1 text-2xl font-bold text-white">6</p>
            <p className="mb-0 text-sm text-neutral-400">كاتب</p>
          </div>
          <div className="flex h-35 w-35 flex-col items-center justify-center rounded-2xl border-2 border-[#333] bg-[#1c1c1c]  p-4 hover:scale-105 transition-transform duration-300">
            <i className="fa-solid fa-folder-open mb-3 text-[#ea580c]"></i>
            <p className="mb-1 text-2xl font-bold text-white">4</p>
            <p className="mb-0 text-sm text-neutral-400">تصنيفات</p>
          </div>
          <div className="flex h-35 w-35 flex-col items-center justify-center rounded-2xl border-2 border-[#333] bg-[#1c1c1c]  p-4 hover:scale-105 transition-transform duration-300">
            <i className="fa-solid fa-users mb-3 text-[#ea580c]"></i>
            <p className="mb-1 text-2xl font-bold text-white">+10ألف</p>
            <p className="mb-0 text-sm text-neutral-400">قارئ</p>
          </div>
          <div className="flex h-35 w-35 flex-col items-center justify-center rounded-2xl border-2 border-[#333] bg-[#1c1c1c]  p-4 hover:scale-105 transition-transform duration-300">
            <i className="fa-solid fa-envelope mb-3 text-[#ea580c]"></i>
            <p className="mb-1 text-2xl font-bold text-white">+50</p>
            <p className="mb-0 text-sm text-neutral-400">مقالة</p>
          </div>
        </div>
      </section>
      <div className="row g-4 py-12 bg-[#111]">
        <div className="col-12">
          <div className="flex items-center justify-between">
            <Link
              to="/blog"
              className="-mb-18 ml-2 inline-block rounded-2xl bg-[#ea580c] px-6 py-2 text-white text-decoration-none transition duration-300 hover:-translate-y-1"
            >
              عرض الكل
            </Link>
            <div className="text-left">
              <p className=" ml-30 mb-3 inline-block rounded-full bg-[#ea580c] px-5 py-2 text-sm text-white">
                مميز
              </p>
              <p className="mb-3 text-6xl font-bold text-white ">مقالات مختارة</p>
              <p className="ml-20  mb-3 text-xl text-neutral-400">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 ">
          {featuredPosts.map((post) => (
            <PostCard
              post={post}
              key={post.id}
            />
          ))}
        </div>
      </div>
      <section className="py-5 flex flex-col items-center bg-linear-to-r from-[#ea580c] via-[#3a1708] to-[#0b0b0b]">
        <p className="mb-3 w-fit rounded-full bg-[#ea580c] px-5 py-2 text-sm text-white">
          التصنيفات
        </p>
        <p className="mb-4 text-center text-4xl font-bold text-white">
          استكشف حسب الموضوع
        </p>
        <p className="mb-5 text-center text-neutral-400">
          اعثر على محتوى مصمم حسب اهتماماتك
        </p>
        <div className="grid grid-cols-4 gap-4 w-full">
          {data.categories.map((category, index) => (
            <div
              key={category.name}
              className={index === 4 ? "col-span-4 flex justify-center" : ""}
            >
              <div className="group w-full max-w-70 rounded-xl border border-[#333] bg-[#1c1c1c] p-5 text-right transition duration-300 hover:-translate-y-1 hover:bg-[#ea580c]">
                <i className="fa-solid fa-sun text-[#ea580c]"></i>
                <h4 className="mt-3 mb-2 text-xl font-bold text-white">
                  {category.name}
                </h4>
                <p className="mb-0 text-neutral-400">{category.count} مقالات</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="latest-section py-5 bg-gray-950">
        <h2 className="text-center mb-4 text-6xl font-bold text-white ">
          أحدث المقالات
        </h2>
        <div className="text-center my-4  ">
          <Link to="/blog" className="text-[#ea580c] ">
            عرض جميع المقالات
          </Link>
        </div>
        <div className="row g-4">
          {data.posts.slice(0, 3).map((post) => (
            <div className="grid grid-col-1 gap-6 md:grid-row-3" key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
        <section className="bg-[#0b0b0b] px-4 py-16" dir="rtl">
          <div className="mx-auto max-w-207.5 rounded-3xl border border-[#2b2b2b] bg-[#171717] px-6 py-16 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff5a00]">
              <i className="fa-regular fa-envelope text-2xl text-white"></i>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              اشترك في <span className="text-[#ff8a00]">نشرتنا الإخبارية</span>
            </h2>
            <p className="mx-auto mb-9 max-w-150 text-base leading-8 text-[#999] md:text-lg">
              احصل على نصائح للتصوير الفوتوغرافي ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
            <form className="mx-auto flex max-w-127.5 flex-col-reverse gap-3 sm:flex-row-reverse">
              <button
                type="submit"
                className="rounded-xl bg-[#ff5a00] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ff6a1a]"
              >
                اشترك الآن
              </button>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="min-w-0 flex-1 rounded-xl border border-[#333] bg-[#0d0d0d] px-5 py-4 text-right text-white outline-none placeholder:text-[#666] focus:border-[#ff5a00]"
              />
            </form>
            <div className="mt-8 flex flex-col items-center justify-center gap-5 text-sm text-[#666] sm:flex-row">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 space-x-reverse">
                  <img
                    src="https://i.pravatar.cc/40?img=12"
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-[#171717]"
                  />
                  <img
                    src="https://i.pravatar.cc/40?img=13"
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-[#171717]"
                  />
                  <img
                    src="https://i.pravatar.cc/40?img=14"
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-[#171717]"
                  />
                </div>
                <span>
                  انضم لـ <strong className="text-white">10,000+</strong> مصور
                </span>
              </div>
              <span className="hidden text-[#444] sm:block">•</span>
              <span>بدون إزعاج</span>
              <span className="hidden text-[#444] sm:block">•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
