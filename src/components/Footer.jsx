import { ArrowUpRight, Facebook, MapPin, PhoneCall } from 'lucide-react'
import Brand from './Brand'

const footerLinks = [['রুট ও ভাড়া', '#routes'], ['ড্রাইভার খুঁজুন', '#drivers'], ['আমাদের সার্ভিস', '#services'], ['বুকিং করুন', '#contact']]

export default function Footer() {
  return <>
    <section className="bg-gradient-to-r from-emerald-600 to-emerald-500 py-12 text-white"><div className="container-width flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"><div><p className="text-sm text-emerald-100">আপনার যাত্রা শুরু হোক সহজে</p><h2 className="mt-1 text-2xl font-bold sm:text-3xl">এখনই আপনার CNG বুক করুন</h2><p className="mt-2 text-sm text-emerald-50">দ্রুত • নির্ভরযোগ্য • লোকাল সার্ভিস</p></div><a href="tel:01783721411" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-emerald-700 shadow-lg transition hover:-translate-y-0.5"><PhoneCall size={18}/> কল করুন 01783-721411</a></div></section>
    <footer className="bg-slate-950 py-12 text-slate-300"><div className="container-width grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1fr]"><div><Brand light/><p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">ফেনী এলাকার যাত্রীদের সাথে লোকাল সিএনজি, টোটো ও জরুরি পরিবহন সেবাকে সহজে যুক্ত করার একটি উদ্যোগ।</p><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm transition hover:border-emerald-400 hover:text-emerald-300"><Facebook size={16}/> Facebook <ArrowUpRight size={14}/></a></div>
      <div><h3 className="font-bold text-white">দ্রুত লিংক</h3><div className="mt-4 space-y-3">{footerLinks.map(([label, href]) => <a key={href} href={href} className="block text-sm text-slate-400 transition hover:text-emerald-400">{label}</a>)}</div></div>
      <div><h3 className="font-bold text-white">যোগাযোগ</h3><a href="tel:01783721411" className="mt-4 flex items-center gap-3 text-sm text-slate-400 hover:text-emerald-400"><PhoneCall size={17} className="text-emerald-400"/> 01783-721411</a><p className="mt-3 flex items-start gap-3 text-sm leading-6 text-slate-400"><MapPin size={17} className="mt-1 shrink-0 text-emerald-400"/> ছাগলনাইয়া উপজেলা, ফেনী, বাংলাদেশ</p><p className="mt-3 text-xs text-slate-500">সার্ভিস এলাকা ও গাড়ির প্রাপ্যতা ফোনে নিশ্চিত করুন।</p></div>
    </div><div className="container-width mt-10 border-t border-white/10 pt-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} CNGLagbe. সর্বস্বত্ব সংরক্ষিত।</div></footer>
  </>
}
