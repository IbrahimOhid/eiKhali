import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-sky-50 text-slate-900"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-sky-100 via-sky-50 to-white" />

      {/* Decorative Background Elements */}
      <div className="absolute -right-24 top-10 -z-10 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />

      <div className="absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      {/* Hero Content */}
      <div className="container-width grid items-center gap-12 py-16 md:min-h-[590px] md:grid-cols-[1.12fr_.88fr] md:py-20">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-500" />
            লোকাল রাইড সার্ভিস
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-2xl font-bold leading-[1.60] tracking-tight text-slate-900 sm:text-5xl lg:text-[2.92rem]">
            কক্সবাজারে <span className="text-sky-500">অন-টাইম</span>
            <br />
            লোকাল রাইড বুকিং সার্ভিস<span className="text-sky-500"> !</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            দ্রুত পিকআপ, ভাড়ার স্বচ্ছতা এবং নির্ভরযোগ্য লোকাল ড্রাইভার
            নেটওয়ার্ক—আপনার প্রতিদিনের যাতায়াত এখন আরও সহজ।
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-sky-600/30"
            >
              বুকিং অনুরোধ
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#routes"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white/80 px-6 py-3.5 font-semibold text-sky-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-50"
            >
              রুট ও ভাড়া দেখুন
              <ArrowDown size={17} />
            </a>
          </div>

          {/* Features */}
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-sky-600" />
              নিরাপদ ও নির্ভরযোগ্য
            </span>

            <span className="flex items-center gap-2">
              <Clock3 size={17} className="text-sky-600" />
              দ্রুত পিকআপ
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-sky-600" />
              ভাড়া আগে নিশ্চিত
            </span>
          </div>
        </div>

        {/* Right Contact Card */}
        <div className="mx-auto w-full max-w-[420px]">
          <div className="rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-2xl shadow-sky-900/10 backdrop-blur-xl sm:p-7">
            {/* Card Header */}
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-slate-700">
                বুকিং হটলাইন
              </span>

              <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                সরাসরি যোগাযোগ
              </span>
            </div>

            {/* Phone Number Box */}
            <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-5 text-center">
              {/* Phone Icon */}
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-600/20">
                <PhoneCall size={23} />
              </div>

              <p className="text-sm font-medium text-slate-500">
                এখনই কল করে বুক করুন
              </p>

              {/* Phone Number */}
              <a
                href="tel:01715541588"
                className="mt-2 block text-3xl font-bold tracking-wide text-sky-700 transition hover:text-sky-800"
              >
                01715-541588
              </a>

              <p className="mt-2 text-xs text-slate-500">
                কক্সবাজার ও আশেপাশের এলাকার জন্য
              </p>
            </div>

            {/* Call Button */}
            <a
              href="tel:01715541588"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 py-3.5 font-semibold text-white shadow-lg shadow-sky-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-700"
            >
              <PhoneCall size={18} />
              হটলাইনে কল করুন
            </a>

            {/* Location */}
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
              <MapPin size={14} className="text-sky-600" />
              কক্সবাজার, বাংলাদেশ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
