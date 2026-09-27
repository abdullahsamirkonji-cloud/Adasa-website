import { useParams } from "react-router-dom";
import data from "../../Components/Data/posts.json";
import { Link } from "react-router-dom";
import RelatedPosts from './../../Components/RelatedPosts/RealtedPosts';
export default function BlogDetails() {
  const { slug } = useParams();
  const post = data.posts.find((post) => post.slug === slug);
  if (!post) {
    return (
      <div className="container text-center py-5">
        <h2>المقال غير موجود</h2>
        <Link to="/blog" className=" mt-3">
          العودة إلى المدونة
        </Link>
      </div>
    );
  }
  return (
    <div className="-mt-0.5 relative ">
      <div className="absolute right-10 top-6">
        <div className="flex items-center gap-3 rounded-full bg-black/50 px-5 py-2 text-white backdrop-blur-sm ">
          <Link to="/" className="text-white ">
            <i className="fa-solid fa-home hover:text-orange-600"></i>
          </Link>

          <span className="text-neutral-400">.</span>

          <Link to="/blog" className="text-white hover:text-orange-600">
            المدونة
          </Link>
        </div>
      </div>
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="h-162.5 w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white">
          <div className="absolute right-10 top-10 flex items-center gap-3">
            <span className="rounded-full bg-orange-600 px-4 py-2 text-sm">
              {post.category}
            </span>

            <span>{post.date}</span>

            <span>·</span>

            <span>{post.readTime}</span>
          </div>

          <h1 className="w-full text-right text-6xl font-bold leading-tight ">
            {post.title}
          </h1>

          <div className="absolute bottom-10 right-10 flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-14 w-14 rounded-full object-cover"
            />

            <div className="text-right">
              <p className="m-0 text-lg font-semibold">{post.author.name}</p>

              <p className="m-0 text-sm text-neutral-300">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10 bg-black ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <aside className="space-y-6 lg:col-span-1">
            <div className="rounded-2xl border border-[#292929] bg-[#111111] p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">محتويات المقال</h2>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-600 bg-[#24150b] text-orange-500">
                  <i className="fa-solid fa-list"></i>
                </div>
              </div>
              <div className="space-y-5">
                <a
                  href="#why"
                  className="flex items-center justify-between text-sm text-gray-500 transition hover:text-orange-500"
                >
                  <span>لماذا الساعة الذهبية؟</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#222] text-xs">
                    1
                  </span>
                </a>
                <a
                  href="#preparation"
                  className="flex items-center justify-between text-sm text-gray-500 transition hover:text-orange-500"
                >
                  <span>التحضير المسبق</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#222] text-xs">
                    2
                  </span>
                </a>
                <a
                  href="#camera"
                  className="flex items-center justify-between text-sm text-gray-500 transition hover:text-orange-500"
                >
                  <span>إعدادات الكاميرا</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#222] text-xs">
                    3
                  </span>
                </a>
                <a
                  href="#composition"
                  className="flex items-center justify-between text-sm text-gray-500 transition hover:text-orange-500"
                >
                  <span>التكوين الفني</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#222] text-xs">
                    4
                  </span>
                </a>
                <a
                  href="#summary"
                  className="flex items-center justify-between text-sm text-gray-500 transition hover:text-orange-500"
                >
                  <span>الخلاصة</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#222] text-xs">
                    5
                  </span>
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-[#292929] bg-[#111111] p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-[#080808] p-5 text-center">
                  <i className="fa-regular fa-clock mb-3 text-xl text-orange-500"></i>
                  <p className="text-lg font-bold text-white">
                    {post.readTime}
                  </p>
                  <span className="text-xs text-gray-500">وقت القراءة</span>
                </div>
                <div className="rounded-xl bg-[#080808] p-5 text-center">
                  <i className="fa-regular fa-calendar mb-3 text-xl text-orange-500"></i>

                  <p className="text-sm font-bold text-white">{post.date}</p>

                  <span className="text-xs text-gray-500">تاريخ النشر</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-orange-700/60 bg-[#211207] p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#5a2909]">
                <i className="fa-solid fa-envelope text-xl text-orange-500"></i>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                لا تفوت جديدنا
              </h3>
              <p className="mb-5 text-sm text-gray-500">
                اشترك للحصول على أحدث المقالات
              </p>
              <button className="w-full rounded-xl bg-orange-600 py-3 font-bold text-white transition hover:bg-orange-500">
                اشترك الآن
              </button>
            </div>
          </aside>
          <article className="lg:col-span-3">
            <div className="mb-10 rounded-2xl border border-orange-700/50 bg-[#211207] px-8 py-7">
              <p className="text-center text-lg italic leading-8 text-gray-200">
                "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                احترافية حول الإضاءة والتكوين."
              </p>
            </div>
            <div dir="rtl">
              <p className="mb-12 text-lg leading-9 text-gray-300">
                الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك
                الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً
                ودافئاً وساحراً.
              </p>
              <section id="why" className="mb-12">
                <h2 className="mb-6 flex items-center gap-4 text-3xl font-bold text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-600 bg-[#291406] text-orange-500">
                    <i className="fa-solid fa-camera"></i>
                  </span>
                  لماذا الساعة الذهبية؟
                </h2>
                <p className="text-lg leading-9 text-gray-300">
                  الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان
                  دافئة، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب
                  توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.
                </p>
              </section>
              <section id="preparation" className="mb-12">
                <h2 className="mb-6 flex items-center gap-4 text-3xl font-bold text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-600 bg-[#291406] text-orange-500">
                    <i className="fa-solid fa-camera"></i>
                  </span>
                  التحضير المسبق
                </h2>
                <p className="text-lg leading-9 text-gray-300">
                  خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة
                  وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار
                  أفضل زاوية.
                </p>
              </section>
              <section id="camera" className="mb-12">
                <h2 className="mb-6 flex items-center gap-4 text-3xl font-bold text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-600 bg-[#291406] text-orange-500">
                    <i className="fa-solid fa-camera"></i>
                  </span>
                  إعدادات الكاميرا
                </h2>
                <p className="text-lg leading-9 text-gray-300">
                  استخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على
                  ما تريد: f/2.8-f/1.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11
                  للمناظر الطبيعية الحادة.
                </p>
              </section>
              <section id="composition" className="mb-12">
                <h2 className="mb-6 flex items-center gap-4 text-3xl font-bold text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-600 bg-[#291406] text-orange-500">
                    <i className="fa-solid fa-camera"></i>
                  </span>
                  التكوين الفني
                </h2>
                <p className="text-lg leading-9 text-gray-300">
                  جرّب استخدام الخطوط والظلال والعناصر الطبيعية الموجودة حولك
                  لبناء تكوين متوازن وجذاب للصورة.
                </p>
              </section>
              <section id="summary" className="mb-12">
                <h2 className="mb-6 flex items-center gap-4 text-3xl font-bold text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-600 bg-[#291406] text-orange-500">
                    <i className="fa-solid fa-camera"></i>
                  </span>
                  الخلاصة
                </h2>
                <p className="text-lg leading-9 text-gray-300">
                  استغل الساعة الذهبية جيداً، وخطط للتصوير مسبقاً، وجرب إعدادات
                  مختلفة حتى تصل إلى النتيجة التي تناسب أسلوبك في التصوير.
                </p>
              </section>
            </div>
            <RelatedPosts posts={data.posts} currentPostId={post.id} />
          </article>
        </div>
      </div>
    </div>
  );
}
