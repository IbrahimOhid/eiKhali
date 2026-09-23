import { useMemo, useState } from "react";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Search,
  CarFront,
  CalendarDays,
  Ambulance,
  BadgeCheck,
} from "lucide-react";
import { routes } from "../data";

const tabs = ["সিএনজি বুকিং", "দৈনিক / মাসিক রিজার্ভ", "অ্যাম্বুলেন্স"];

export default function Routes() {
  const [tab, setTab] = useState(tabs[0]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const filtered = useMemo(
    () =>
      routes.filter(
        (r) => (!from || r.from.includes(from)) && (!to || r.to.includes(to)),
      ),
    [from, to],
  );
  return (
    <section id="routes" className="section-space bg-slate-50">
      <div className="container-width">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold text-emerald-600">
              সহজে গন্তব্য বেছে নিন
            </p>
            <h2 className="section-title">
              সিএনজি, টোটো ও অ্যাম্বুলেন্স ভাড়ার তালিকা
            </h2>
            <p className="section-subtitle">
              জনপ্রিয় রুটগুলো দেখুন, তারপর বুকিং অনুরোধ পাঠান।
            </p>
          </div>
          <a
            href="#drivers"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 sm:self-auto"
          >
            ড্রাইভার খুঁজুন <ArrowRight size={16} />
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-2 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200/70">
          {tabs.map((item, i) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition ${tab === item ? "bg-emerald-500 text-white shadow-green" : "text-slate-500 hover:bg-slate-50"}`}
            >
              {i === 0 ? (
                <CarFront size={17} />
              ) : i === 1 ? (
                <CalendarDays size={17} />
              ) : (
                <Ambulance size={17} />
              )}{" "}
              {item}
            </button>
          ))}
        </div>
        <div className="mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[1fr_1fr_auto] sm:p-5">
          <label className="relative block">
            <span className="mb-1.5 block text-xs font-semibold text-slate-500">
              কোথা থেকে
            </span>
            <MapPin
              className="absolute left-3 top-[39px] text-slate-400"
              size={17}
            />
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm outline-none focus:border-emerald-400"
            >
              <option value="">সব পিকআপ লোকেশন</option>
              {[...new Set(routes.map((r) => r.from))].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          <label className="relative block">
            <span className="mb-1.5 block text-xs font-semibold text-slate-500">
              কোথায় যাবেন
            </span>
            <MapPin
              className="absolute left-3 top-[39px] text-slate-400"
              size={17}
            />
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm outline-none focus:border-emerald-400"
            >
              <option value="">সব গন্তব্য</option>
              {[...new Set(routes.map((r) => r.to))].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          <button
            onClick={() => {
              setFrom("");
              setTo("");
            }}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 sm:mt-0"
          >
            <Search size={16} /> রিসেট
          </button>
        </div>
        {tab !== tabs[0] && (
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {tab === tabs[1]
              ? "দৈনিক বা মাসিক রিজার্ভের ভাড়া দূরত্ব ও সময় অনুযায়ী নির্ধারিত হয়। বিস্তারিত জানতে কল করুন।"
              : "জরুরি পরিবহনের জন্য সরাসরি হটলাইনে যোগাযোগ করে গাড়ির প্রাপ্যতা নিশ্চিত করুন।"}
          </div>
        )}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(filtered.length ? filtered : routes).map((route, i) => (
            <article
              key={`${route.to}-${i}`}
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-soft"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CarFront size={22} />
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500">
                  আনুমানিক ভাড়া
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <span>{route.from}</span>
                <ArrowRight size={15} className="text-emerald-500" />
                <span>{route.to}</span>
              </div>
              <p className="mt-3 text-2xl font-bold text-emerald-600">
                {route.fare}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                <Clock3 size={14} />
                {route.time} (আনুমানিক)
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <BadgeCheck size={14} /> বুকিংয়ের আগে নিশ্চিত করুন
                </span>
                <a
                  href={`#contact?from=${encodeURIComponent(route.from)}&to=${encodeURIComponent(route.to)}`}
                  className="rounded-lg bg-emerald-50 px-3.5 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-500 hover:text-white"
                >
                  বুক করুন
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs leading-6 text-slate-400">
          * প্রদর্শিত ভাড়া ও সময় উদাহরণ/আনুমানিক। যাত্রার আগে হটলাইনে কল করে
          চূড়ান্ত ভাড়া, গাড়ি ও সময় নিশ্চিত করুন।
        </p>
      </div>
    </section>
  );
}
