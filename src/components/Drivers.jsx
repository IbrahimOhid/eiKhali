import { useMemo, useState } from "react";
import { Ambulance, Bike, CarFront, MapPin, Phone, Search } from "lucide-react";

import { drivers } from "../data";

const types = ["সব", "সিএনজি", "টোটো", "প্রাইভেট কার", "চাঁদের গাড়ি"];

const vehicleIcons = {
  সিএনজি: "/img/cng.webp",
  টোটো: "/img/toto.webp",
  "প্রাইভেট কার": "/img/private_car.webp",
  "চাঁদের গাড়ি": "/img/ChanderGari.webp",
};

// বাংলা অঙ্ককে ইংরেজি অঙ্কে রূপান্তর
const normalizeDigits = (value = "") =>
  String(value).replace(/[০-৯]/g, (digit) =>
    "০১২৩৪৫৬৭৮৯".indexOf(digit).toString(),
  );

// Search text normalize
const normalizeText = (value = "") =>
  normalizeDigits(value).trim().toLowerCase();

function DriverCard({ driver }) {
  const Icon = vehicleIcons[driver.type] || CarFront;
  const isImage = typeof Icon === "string";

  const phone = normalizeDigits(driver.phone).replace(/[^\d+]/g, "");

  return (
    <article className="group flex h-full items-center gap-4 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-900/5 sm:p-5">
      {/* Vehicle icon */}
      <div className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-full border border-sky-100  shadow-sm">
        {isImage ? (
          <img
            src={Icon}
            alt={`${driver.type} গাড়ি`}
            className="size-9 object-contain"
            loading="lazy"
          />
        ) : (
          <Icon
            aria-hidden="true"
            className="size-6 text-sky-600"
            strokeWidth={1.8}
          />
        )}
      </div>

      {/* Driver information */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-bold text-slate-900">{driver.name}</h3>

        <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
          <MapPin
            aria-hidden="true"
            className="size-3.5 shrink-0 text-sky-600"
          />
          <span className="truncate">{driver.stand}</span>
        </p>

        <p className="mt-2 truncate text-sm font-semibold tracking-wide text-slate-700">
          {driver.phone || "ফোন নম্বর দেওয়া হয়নি"}
        </p>

        <span className="mt-2 inline-flex rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700">
          {driver.type}
        </span>
      </div>

      {/* Call button */}
      {phone && (
        <a
          href={`tel:${phone}`}
          aria-label={`${driver.name} কে কল করুন`}
          className="grid size-10 shrink-0 place-items-center rounded-full bg-sky-600 text-white shadow-sm shadow-sky-600/20 transition-all duration-300 hover:scale-105 hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
        >
          <Phone aria-hidden="true" className="size-[18px]" />
        </a>
      )}
    </article>
  );
}

export default function Drivers() {
  const [filter, setFilter] = useState("সব");
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const searchTerm = normalizeText(query);

    return drivers.filter((driver) => {
      // Type filter
      const matchesType = filter === "সব" || driver.type === filter;

      // Search by name, phone, stand, or vehicle type
      const searchableText = normalizeText(
        `${driver.name} ${driver.phone} ${driver.stand} ${driver.type}`,
      );

      const matchesSearch = searchableText.includes(searchTerm);

      return matchesType && matchesSearch;
    });
  }, [filter, query]);

  return (
    <section
      id="drivers"
      aria-labelledby="drivers-heading"
      className="section-space bg-sky-50/60"
    >
      <div className="container-width">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
            <span className="size-2 rounded-full bg-sky-500" />
            আপনার এলাকার চালক
          </span>

          <h2
            id="drivers-heading"
            className="section-title mt-5 text-slate-900"
          >
            ড্রাইভার খুঁজুন ও{" "}
            <span className="text-sky-500">সরাসরি যোগাযোগ করুন</span>
          </h2>

          <p className="section-subtitle mx-auto mt-4 max-w-3xl text-slate-600">
            এলাকা, নাম অথবা গাড়ির ধরন দিয়ে পছন্দের চালক খুঁজুন এবং সরাসরি ফোন
            করে যোগাযোগ করুন।
          </p>
        </div>

        {/* Search and filters */}
        <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-sky-100 bg-white p-4 shadow-sm sm:p-6">
          <label htmlFor="driver-search" className="sr-only">
            চালকের নাম, ফোন নম্বর বা এলাকা দিয়ে খুঁজুন
          </label>

          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-sky-500"
            />

            <input
              id="driver-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="চালকের নাম, ফোন নম্বর বা এলাকা দিয়ে খুঁজুন..."
              className="h-12 w-full rounded-xl border border-sky-100 bg-sky-50/50 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
            />
          </div>

          {/* Vehicle type filters */}
          <div className="mt-5">
            <p className="mb-3 text-sm font-semibold text-slate-700">
              গাড়ির ধরন নির্বাচন করুন
            </p>

            <div className="flex flex-wrap gap-2">
              {types.map((type) => {
                const isActive = filter === type;

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFilter(type)}
                    aria-pressed={isActive}
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 ${
                      isActive
                        ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                        : "border border-sky-100 bg-white text-slate-600 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-bold text-slate-800">চালকের তালিকা</h3>

          <span className="rounded-full border border-sky-100 bg-white px-3 py-1.5 text-xs font-semibold text-sky-700">
            {shown.length} জন চালক পাওয়া গেছে
          </span>
        </div>

        {/* Driver grid */}
        <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((driver, index) => (
            <DriverCard
              key={`${driver.phone}-${driver.name}-${index}`}
              driver={driver}
            />
          ))}

          {/* Empty state */}
          {!shown.length && (
            <div className="col-span-full rounded-2xl border border-dashed border-sky-200 bg-white px-5 py-12 text-center">
              <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-sky-50 text-sky-600">
                <Search aria-hidden="true" className="size-6" />
              </div>

              <h3 className="mt-4 font-bold text-slate-800">
                কোনো চালক পাওয়া যায়নি
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                অন্য নাম, এলাকা বা গাড়ির ধরন দিয়ে আবার খুঁজে দেখুন।
              </p>

              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFilter("সব");
                }}
                className="mt-5 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
              >
                সব চালক দেখুন
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
