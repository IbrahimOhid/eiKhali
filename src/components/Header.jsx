import { useState } from "react";
import { Menu, X, PhoneCall, ChevronRight } from "lucide-react";
import Brand from "./Brand";

const links = [
  ["ড্রাইভার", "#drivers"],
  ["সার্ভিস", "#services"],
  ["আমাদের সম্পর্কে", "#about"],
  ["যোগাযোগ", "#footer"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 text-slate-800 shadow-sm backdrop-blur-xl">
      {/* Navbar */}
      <div className="container-width flex h-[76px] items-center justify-between">
        {/* Logo */}
        <Brand />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-sm font-semibold text-slate-600 transition duration-300 hover:text-sky-600"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop Call Button */}
        <div className="hidden md:block">
          <a
            href="tel:01715541588"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-sky-600/30"
          >
            <PhoneCall size={17} />
            কল করুন
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-xl border border-sky-100 bg-sky-50 text-sky-700 transition duration-300 hover:border-sky-300 hover:bg-sky-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-sky-100 bg-white transition-all duration-300 ease-in-out md:hidden ${
          open
            ? "max-h-[450px] opacity-100"
            : "pointer-events-none max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="container-width py-4">
          {/* Navigation Links */}
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition duration-200 hover:bg-sky-50 hover:text-sky-700"
            >
              {label}

              <ChevronRight
                size={17}
                className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-sky-600"
              />
            </a>
          ))}

          {/* Mobile Call Button */}
          <a
            href="tel:01715541588"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-sky-600/20 transition duration-300 hover:bg-sky-700"
          >
            <PhoneCall size={18} />
            কল করুন
          </a>
        </nav>
      </div>
    </header>
  );
}
