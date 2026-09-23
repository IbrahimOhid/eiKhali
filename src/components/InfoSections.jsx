import {
  Banknote,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MapPin,
  Navigation,
  PhoneCall,
  Route as RouteIcon,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

/* ---------------------------------------
   Features
--------------------------------------- */

const features = [
  {
    icon: ShieldCheck,
    title: "নিরাপদ ও বিশ্বস্ত চালক",
    description:
      "কক্সবাজারের লোকাল ড্রাইভার নেটওয়ার্কের মাধ্যমে চালকদের সঙ্গে সরাসরি যোগাযোগের সুবিধা।",
  },
  {
    icon: Banknote,
    title: "ভাড়া আগে নিশ্চিত",
    description:
      "যাত্রা শুরুর আগে চালকের সঙ্গে ভাড়া ও অন্যান্য শর্তাবলি জেনে নিন।",
  },
  {
    icon: Clock3,
    title: "দ্রুত লোকাল সার্ভিস",
    description:
      "আপনার অবস্থান ও গন্তব্য অনুযায়ী কাছাকাছি গাড়ির খোঁজ নিতে সরাসরি যোগাযোগ করুন।",
  },
];

/* ---------------------------------------
   How It Works
--------------------------------------- */

const steps = [
  {
    icon: MapPin,
    title: "রুট ও গন্তব্য নির্বাচন",
    description:
      "কোথা থেকে যাত্রা শুরু করবেন এবং কোথায় যেতে চান তা নির্ধারণ করুন।",
  },
  {
    icon: PhoneCall,
    title: "চালক ও ভাড়া নিশ্চিত করুন",
    description:
      "চালকের সঙ্গে কথা বলে ভাড়া, পিকআপের সময় ও যাত্রার বিস্তারিত জেনে নিন।",
  },
  {
    icon: Navigation,
    title: "গন্তব্যের উদ্দেশ্যে যাত্রা",
    description: "সবকিছু নিশ্চিত করে নির্ধারিত স্থান থেকে যাত্রা শুরু করুন।",
  },
];

/* ---------------------------------------
   Services
--------------------------------------- */

const services = [
  {
    icon: RouteIcon,
    title: "পয়েন্ট-টু-পয়েন্ট রাইড",
    description:
      "কক্সবাজার শহরের ভেতরে দৈনন্দিন যাতায়াত ও স্বল্প দূরত্বের রাইড।",
  },
  {
    icon: CalendarCheck,
    title: "দৈনিক ও মাসিক রিজার্ভ",
    description:
      "ব্যক্তিগত, পারিবারিক বা নিয়মিত যাতায়াতের জন্য গাড়ি রিজার্ভের সুবিধা।",
  },
  {
    icon: HeartPulse,
    title: "জরুরি মেডিকেল পরিবহন",
    description:
      "হাসপাতাল বা জরুরি প্রয়োজনে পরিবহনের জন্য চালকের সঙ্গে যোগাযোগ করুন।",
  },
  {
    icon: MapPin,
    title: "উপজেলা ও দূরপাল্লার রাইড",
    description:
      "কক্সবাজার সদরসহ আশেপাশের উপজেলা ও নির্ধারিত দূরপাল্লার গন্তব্যে যাতায়াত।",
  },
];

/* ---------------------------------------
   Statistics
   Replace demo values with real data
--------------------------------------- */

const metrics = [
  {
    value: "১,০০০+",
    label: "রাইড সম্পন্ন",
  },
  {
    value: "১০০+",
    label: "ড্রাইভার নেটওয়ার্ক",
  },
  {
    value: "৯৯%",
    label: "ইতিবাচক অভিজ্ঞতার লক্ষ্য",
  },
];

/* ---------------------------------------
   Testimonials
   Replace sample content with real reviews
--------------------------------------- */

// const testimonials = [
//   {
//     quote:
//       "“দ্রুত গাড়ির খোঁজ নিতে পেরেছি। চালকের সঙ্গে যোগাযোগ করাও সহজ ছিল।”",
//     name: "যাত্রীর নাম",
//     location: "কক্সবাজার সদর",
//   },
//   {
//     quote:
//       "“যাত্রার আগে ভাড়া সম্পর্কে কথা বলে নিতে পেরেছি, তাই পরিকল্পনা করা সহজ হয়েছে।”",
//     name: "যাত্রীর নাম",
//     location: "কলাতলী, কক্সবাজার",
//   },
//   {
//     quote:
//       "“লোকাল গাড়ির তথ্য এক জায়গায় পাওয়ায় যোগাযোগ করতে সুবিধা হয়েছে।”",
//     name: "যাত্রীর নাম",
//     location: "সুগন্ধা পয়েন্ট, কক্সবাজার",
//   },
// ];

/* ---------------------------------------
   Reusable Section Heading
--------------------------------------- */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-2 text-sm font-bold tracking-wide text-sky-600">
        {eyebrow}
      </p>

      <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------------
   Feature Card
--------------------------------------- */

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="group h-full rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg sm:p-7">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100 text-sky-600 transition duration-300 group-hover:bg-sky-500 group-hover:text-white">
        <Icon size={23} strokeWidth={2} />
      </span>

      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

/* ---------------------------------------
   Features Section
--------------------------------------- */

export function Features() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="container-width">
        <SectionHeading
          eyebrow="কেন eiKhali?"
          title="আপনার যাত্রায় নির্ভরতার সঙ্গী"
          description="কক্সবাজারে আপনার দৈনন্দিন যাতায়াতকে সহজ করতে প্রয়োজনীয় গাড়ির তথ্য ও যোগাযোগের সুবিধা এক জায়গায়।"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------
   How It Works Section
--------------------------------------- */

export function HowItWorks() {
  return (
    <section className="bg-sky-50/70 py-16 sm:py-20 lg:py-24">
      <div className="container-width">
        <SectionHeading
          eyebrow="সহজ তিনটি ধাপ"
          title="কীভাবে ব্যবহার করবেন"
          description="সহজ কয়েকটি ধাপ অনুসরণ করে আপনার প্রয়োজন অনুযায়ী গাড়ির চালকের সঙ্গে যোগাযোগ করুন।"
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="relative text-center">
                <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-sky-100 bg-white text-sky-600 shadow-sm">
                  <Icon size={26} strokeWidth={2} />

                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-sky-500 text-xs font-bold text-white shadow-sm">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------
   Services Section
--------------------------------------- */

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="container-width">
        <SectionHeading
          eyebrow="আপনার প্রয়োজন অনুযায়ী"
          title="আমাদের সার্ভিসসমূহ"
          description="কক্সবাজারের স্থানীয় ও নির্ধারিত রুটে যাতায়াতের জন্য বিভিন্ন ধরনের পরিবহন সেবার তথ্য খুঁজে নিন।"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group h-full rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
              >
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-sky-100 text-sky-600 transition duration-300 group-hover:bg-sky-500 group-hover:text-white">
                  <Icon size={23} strokeWidth={2} />
                </span>

                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------
   Statistics Section
--------------------------------------- */

export function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-20 -z-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="container-width">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold text-sky-300 sm:text-sm">
            <Zap size={15} />
            আমাদের নেটওয়ার্ক
          </span>

          <h2 className="mt-5 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            কক্সবাজারের যাতায়াতকে আরও সহজ করতে
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            স্থানীয় চালক ও যাত্রীদের মধ্যে যোগাযোগ সহজ করার একটি উদ্যোগ।
            প্রয়োজন অনুযায়ী গাড়ির তথ্য খুঁজে নিন এবং সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition duration-300 hover:border-sky-400/30 hover:bg-white/[0.07]"
            >
              <p className="text-3xl font-extrabold text-sky-400 sm:text-4xl">
                {metric.value}
              </p>

              <p className="mt-3 text-sm font-medium text-slate-300">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs leading-6 text-slate-400">
          * প্রদর্শিত পরিসংখ্যান নমুনা কনটেন্ট। প্রকাশের আগে প্রকৃত ও যাচাইকৃত
          তথ্য দিয়ে আপডেট করুন।
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------
   Testimonials Section
--------------------------------------- */

// export function Testimonials() {
//   return (
//     <section className="bg-white py-16 sm:py-20 lg:py-24">
//       <div className="container-width">
//         <SectionHeading
//           eyebrow="যাত্রীদের অভিজ্ঞতা"
//           title="আপনার মতামত আমাদের কাছে গুরুত্বপূর্ণ"
//           description="সেবার মান উন্নত করতে যাত্রীদের প্রকৃত অভিজ্ঞতা ও মতামত গুরুত্বপূর্ণ ভূমিকা রাখে।"
//         />

//         <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mt-12">
//           {testimonials.map((testimonial) => (
//             <article
//               key={`${testimonial.location}-${testimonial.quote}`}
//               className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
//             >
//               <div
//                 className="flex gap-1 text-amber-400"
//                 aria-label="নমুনা পাঁচ তারকা রেটিং"
//               >
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star
//                     key={star}
//                     size={16}
//                     fill="currentColor"
//                     strokeWidth={1.5}
//                   />
//                 ))}
//               </div>

//               <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
//                 {testimonial.quote}
//               </p>

//               <div className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4">
//                 <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-600">
//                   <CheckCircle2 size={20} />
//                 </span>

//                 <div className="min-w-0">
//                   <h3 className="truncate text-sm font-bold text-slate-900">
//                     {testimonial.name}
//                   </h3>

//                   <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
//                     <MapPin size={12} />
//                     {testimonial.location}
//                   </p>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         <p className="mt-5 text-center text-xs leading-6 text-slate-400">
//           * এখানে প্রদর্শিত মতামতগুলো নমুনা কনটেন্ট। প্রকাশের আগে প্রকৃত
//           গ্রাহকের মতামত ও অনুমতি নিয়ে ব্যবহার করুন।
//         </p>
//       </div>
//     </section>
//   );
// }
