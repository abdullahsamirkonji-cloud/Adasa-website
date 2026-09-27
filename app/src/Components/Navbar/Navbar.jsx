import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-[#161616] py-3">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-center">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <NavLink
              to="/blog"
              className="flex h-12.5 w-32.5 items-center justify-center rounded-full bg-[#ea580c] px-4 text-white text-decoration-none transition duration-300 hover:-translate-y-0.75"
            >
              ابدأ القراءة
            </NavLink>
            <a
              href="#"
              className="group flex h-10.5 w-10.5 items-center justify-center rounded-lg text-decoration-none transition duration-300 hover:bg-[#333]"
            >
              <i className="fa-solid fa-magnifying-glass text-[#777] transition duration-300 group-hover:text-[#ea580c]"></i>
            </a>
          </div>
          <div className="flex justify-center">
            <div className="flex w-fit rounded-full border-2 border-[#333] p-1">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm text-white text-decoration-none transition duration-300 sm:px-5 ${
                    isActive ? "bg-[#ea580c]" : "hover:bg-[#ea580c]"
                  }`
                }
              >
                المدونة
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm text-white text-decoration-none transition duration-300 sm:px-5 ${
                    isActive ? "bg-[#ea580c]" : "hover:bg-[#ea580c]"
                  }`
                }
              >
                الرئيسية
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/"
            className="flex justify-center text-decoration-none md:justify-end"
          >
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="mb-0 text-2xl font-bold text-[#ddd]">عدسة</p>
                <p className="mb-0 text-xs text-[#ea580c]">
                  عالم التصوير الفوتوغرافي
                </p>
              </div>
              <img
                src="https://adasa-psi.vercel.app/assets/logo-GdqARQRt.png"
                alt=""
                className="h-13.75 w-13.75 rounded-full object-cover hover:scale-105 transition-all"
              />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
