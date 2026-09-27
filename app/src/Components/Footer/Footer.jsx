import data from "../../Components/Data/posts.json";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#0b0b0b] text-[#777]">
      {/* Main Footer */}
      <div className="border-b border-[#292929] px-8 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
          {/* عدسة */}
          <div className="text-right">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff5a00] text-xl font-bold text-white">
                ع
              </div>

              <h2 className="text-2xl font-bold text-white">عدسة</h2>
            </div>

            <p className="mb-2 leading-7">
              مدونة متخصصة في فن التصوير الفوتوغرافي.
            </p>

            <p className="mb-5 leading-7">
              نشارك معكم أسرار المحترفين، ونصائح عملية
              <br />
              لتطوير مهاراتكم.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2">
              <a
                className="flex h-10 w-25 items-center justify-center rounded-xl border-2 border-[#292929] bg-[#171717] text-[#777] transition duration-300 hover:border-[#ff5a00] hover:text-[#ff5a00] text-decoration-none"
                href={data.siteInfo.social.twitter}
              >
                Twitter
              </a>

              <a
                className="flex h-10 w-25 items-center justify-center rounded-xl border-2 border-[#292929] bg-[#171717] text-[#777] transition duration-300 hover:border-[#ff5a00] hover:text-[#ff5a00] text-decoration-none"
                href={data.siteInfo.social.github}
              >
                GitHub
              </a>

              <a
                className="flex h-10 w-25 items-center justify-center rounded-xl border-2 border-[#292929] bg-[#171717] text-[#777] transition duration-300 hover:border-[#ff5a00] hover:text-[#ff5a00] text-decoration-none"
                href={data.siteInfo.social.linkedin}
              >
                LinkedIn
              </a>

              <a
                className="flex h-10 w-25 items-center justify-center rounded-xl border-2 border-[#292929] bg-[#171717] text-[#777] transition duration-300 hover:border-[#ff5a00] hover:text-[#ff5a00] text-decoration-none"
                href={data.siteInfo.social.youtube}
              >
                YouTube
              </a>
            </div>
          </div>

          {/* استكشف */}
          <div className="text-right">
            <div className="mb-6 flex items-center gap-3">
              <h3 className="font-bold text-white">استكشف</h3>

              <span className="h-0.5 w-8 bg-[#ff5a00]"></span>
            </div>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-decoration-none text-[#777] transition hover:text-[#ff5a00]"
                >
                  الرئيسية
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-decoration-none text-[#777] transition hover:text-[#ff5a00]"
                >
                  المدونة
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-decoration-none text-[#777] transition hover:text-[#ff5a00]"
                >
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* التصنيفات */}
          <div className="text-right">
            <div className="mb-6 flex items-center gap-3">
              <h3 className="font-bold text-white">التصنيفات</h3>

              <span className="h-0.5 w-8 bg-[#ff5a00]"></span>
            </div>

            <ul className="space-y-4">
              <li>
                <a href="#" className="transition hover:text-[#ff5a00]">
                  إضاءة
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#ff5a00]">
                  بورتريه
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#ff5a00]">
                  مناظر طبيعية
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#ff5a00]">
                  تقنيات
                </a>
              </li>
            </ul>
          </div>

          {/* اشترك */}
          <div className="text-right">
            <div className="mb-6 flex items-center gap-3">
              <h3 className="font-bold text-white">ابقَ على اطلاع</h3>

              <span className="h-0.5 w-8 bg-[#ff5a00]"></span>
            </div>

            <p className="mb-5 leading-7">
              اشترك للحصول على أحدث المقالات
              <br />
              والتحديثات.
            </p>

            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="mb-3 w-full rounded-xl border border-[#292929] bg-[#171717] px-4 py-3 text-right text-white outline-none placeholder:text-[#555] focus:border-[#ff5a00]"
            />

            <button
              type="button"
              className="w-full rounded-full bg-[#ff5a00] py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ff6a1a]"
            >
              اشترك
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="px-8 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <div className="flex gap-6">
            <a
              href="#"
              className="text-decoration-none text-[#666] transition hover:text-white"
            >
              سياسة الخصوصية
            </a>

            <a
              href="#"
              className="text-decoration-none text-[#666] transition hover:text-white"
            >
              شروط الخدمة
            </a>
          </div>

          <p className="mb-0 text-center">
            © 2026 عدسة. صنع بكل <span className="text-[#ff5a00]">♥</span> جميع
            الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
