import {
  ArrowUpRight,
  Facebook,
  MapPin,
  PhoneCall,
  MoveRight,
} from "lucide-react";

import Brand from "./Brand";

const footerLinks = [
  ["ড্রাইভার খুঁজুন", "#drivers"],
  ["আমাদের সার্ভিস", "#services"],
  ["আমাদের সম্পর্কে", "#about"],
  ["সাধারণ জিজ্ঞাসা", "#faq"],
];

export default function Footer() {
  return (
    <div id="footer">
      {/* --------------------------------
          Call To Action Section
      --------------------------------- */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 py-12 text-white sm:py-16">
        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"
        />

        <div className="container-width relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-sky-100">
              আপনার যাত্রা শুরু হোক সহজে
            </p>

            <h2 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
              এখনই আপনার CNG বুক করুন
            </h2>

            <p className="mt-3 text-sm leading-6 text-sky-50 sm:text-base">
              দ্রুত • সহজ • লোকাল পরিবহন সেবা
            </p>
          </div>

          <a
            href="tel:01715541588"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-sky-700 shadow-lg shadow-sky-900/10 transition duration-300 hover:-translate-y-1 hover:bg-sky-50 hover:shadow-xl"
          >
            <PhoneCall size={18} />
            কল করুন: 01715-541588
            <MoveRight size={16} />
          </a>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-600 text-white">
        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"
        />

        <div className="container-width relative grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16 lg:py-16">
          {/* Brand & Description */}
          <div>
            <Brand light />

            <p className="mt-5 max-w-sm text-sm leading-7 text-sky-50/90">
              <span className="font-semibold text-white">eiKhali</span>{" "}
              কক্সবাজার এলাকার যাত্রীদের সঙ্গে লোকাল CNG, টোটো ও অন্যান্য পরিবহন
              চালকদের যোগাযোগ সহজ করার একটি উদ্যোগ। আপনার প্রয়োজন অনুযায়ী
              গাড়ির তথ্য খুঁজে নিন এবং চালকের সঙ্গে সরাসরি যোগাযোগ করুন।
            </p>

            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/iCoxtechnologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="iCox Technologies Facebook পেজ"
              className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
            >
              <Facebook size={18} />
              Facebook
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white">দ্রুত লিংক</h3>

            <div className="mt-5 h-1 w-10 rounded-full bg-cyan-200" />

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col items-start gap-4"
            >
              {footerLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="group inline-flex items-center gap-2.5 text-sm text-sky-50/80 transition duration-200 hover:translate-x-1 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 transition-transform duration-200 group-hover:scale-125" />
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base font-bold text-white">যোগাযোগ</h3>

            <div className="mt-5 h-1 w-10 rounded-full bg-cyan-200" />

            {/* Phone */}
            <a
              href="tel:01715541588"
              className="group mt-6 flex w-fit items-center gap-3.5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/20 bg-white/10 text-white transition duration-300 group-hover:bg-white/20">
                <PhoneCall size={19} />
              </span>

              <span>
                <span className="block text-xs text-sky-100/70">
                  হটলাইন নম্বর
                </span>

                <span className="mt-1 block text-sm font-semibold text-white transition group-hover:text-cyan-100">
                  01715-541588
                </span>
              </span>
            </a>

            {/* Location */}
            <div className="mt-5 flex items-center gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/20 bg-white/10 text-white">
                <MapPin size={19} />
              </span>

              <span>
                <span className="block text-xs text-sky-100/70">
                  আমাদের সার্ভিস এলাকা
                </span>

                <span className="mt-1 block text-sm font-semibold text-white">
                  কক্সবাজার, বাংলাদেশ
                </span>
              </span>
            </div>

            <p className="mt-5 max-w-xs text-xs leading-6 text-sky-100/70">
              সার্ভিস এলাকা, ভাড়া ও গাড়ির প্রাপ্যতা ফোনে নিশ্চিত করুন।
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative border-t border-white/20 bg-sky-950/15">
          <div className="container-width flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-xs leading-6 text-sky-50/75">
              © {new Date().getFullYear()} eiKhali. সর্বস্বত্ব সংরক্ষিত।
            </p>

            <p className="text-xs leading-6 text-sky-50/75">
              Developed &amp; Maintained by{" "}
              <a
                href="https://www.facebook.com/iCoxtechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline-offset-4 transition hover:text-cyan-200 hover:underline"
              >
                iCox Technologies
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
