import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data";

export default function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section id="faq" className="section-space bg-slate-50">
      <div className="container-width grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="mb-2 text-sm font-semibold text-sky-600">
            আপনার প্রশ্নের উত্তর
          </p>
          <h2 className="section-title">সাধারণ জিজ্ঞাসা</h2>
          <p className="section-subtitle leading-7">
            বুকিং, ভাড়া ও সার্ভিস নিয়ে সাধারণ প্রশ্নগুলোর উত্তর এখানে দেখুন।
            আরও জানতে আমাদের সাথে যোগাযোগ করুন।
          </p>
          <a
            href="tel:01715541588"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            আরও জানতে কল করুন
          </a>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <article
              key={faq.q}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => setActive(active === i ? -1 : i)}
                aria-expanded={active === i}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-800"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-emerald-600 transition ${active === i ? "rotate-180" : ""}`}
                />
              </button>
              {active === i && (
                <p className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-500">
                  {faq.a}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
