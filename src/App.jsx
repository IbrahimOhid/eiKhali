import Header from './components/Header'
import Hero from './components/Hero'
import Routes from './components/Routes'
import Drivers from './components/Drivers'
import { Features, HowItWorks, Services, Stats} from './components/InfoSections'
import BookingForm from './components/BookingForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-Noto-Serif-Bengali">
      <Header />
      <main>
        <Hero />
        {/* <Routes /> */}
        <Drivers />
        <Features />
        <HowItWorks />
        <Services />
        <Stats />
        {/* <Testimonials /> */}
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <a
        href="tel:01783721411"
        aria-label="হটলাইনে কল করুন"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-green transition hover:scale-105 hover:bg-emerald-600 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.68 2.79a2 2 0 0 1-.45 2.11L8.07 9.93a16 16 0 0 0 6 6l1.31-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.56 2.79.68A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
}
