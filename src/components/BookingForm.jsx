import { useState } from 'react'
import { CalendarClock, CheckCircle2, MapPin, Phone, UserRound } from 'lucide-react'

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', phone: '', pickup: '', drop: '', datetime: '', details: '' })
  const [sent, setSent] = useState(false)
  const update = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); setSent(true) }
  return <section id="contact" className="section-space bg-slate-950">
    <div className="container-width grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
      <div className="text-white"><span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300"><Phone size={14}/> বুকিং সহায়তা</span><h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">আপনার পরবর্তী যাত্রা<br/><span className="text-emerald-400">এখনই বুক করুন</span></h2><p className="mt-4 max-w-md leading-7 text-slate-400">ফর্মটি পূরণ করুন। আপনার বুকিংয়ের তথ্য নিয়ে আমাদের টিম যোগাযোগ করবে। দ্রুত সহায়তার জন্য সরাসরি হটলাইনে কল করতে পারেন।</p><a href="tel:01783721411" className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-4 transition hover:bg-white/10"><span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500"><Phone size={19}/></span><span><small className="block text-xs text-slate-400">সিএনজি বুকিং হটলাইন</small><strong className="text-lg">01783 721411</strong></span></a><div className="mt-7 flex items-center gap-2 text-sm text-slate-400"><CheckCircle2 size={17} className="text-emerald-400"/> অনুরোধ পাঠানোর পর ফোনে বুকিং নিশ্চিত করুন</div></div>
      <form onSubmit={submit} className="rounded-3xl bg-white p-5 shadow-2xl sm:p-8">
        <h3 className="text-xl font-bold text-slate-900">রাইডের তথ্য দিন</h3><p className="mt-1 text-sm text-slate-500">সব আবশ্যক তথ্য পূরণ করুন</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold text-slate-600">আপনার নাম<div className="relative mt-1.5"><UserRound className="absolute left-3 top-3.5 text-slate-400" size={17}/><input required name="name" value={form.name} onChange={update} placeholder="নাম লিখুন" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 outline-none focus:border-emerald-400"/></div></label>
          <label className="text-sm font-semibold text-slate-600">মোবাইল নম্বর<div className="relative mt-1.5"><Phone className="absolute left-3 top-3.5 text-slate-400" size={17}/><input required name="phone" type="tel" pattern="[0-9+ -]{9,16}" value={form.phone} onChange={update} placeholder="01XXXXXXXXX" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 outline-none focus:border-emerald-400"/></div></label>
          <label className="text-sm font-semibold text-slate-600">পিকআপ লোকেশন<div className="relative mt-1.5"><MapPin className="absolute left-3 top-3.5 text-slate-400" size={17}/><input required name="pickup" value={form.pickup} onChange={update} placeholder="কোথা থেকে উঠবেন?" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 outline-none focus:border-emerald-400"/></div></label>
          <label className="text-sm font-semibold text-slate-600">গন্তব্য<div className="relative mt-1.5"><MapPin className="absolute left-3 top-3.5 text-slate-400" size={17}/><input required name="drop" value={form.drop} onChange={update} placeholder="কোথায় যাবেন?" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 outline-none focus:border-emerald-400"/></div></label>
          <label className="text-sm font-semibold text-slate-600 sm:col-span-2">তারিখ ও সময়<div className="relative mt-1.5"><CalendarClock className="absolute left-3 top-3.5 text-slate-400" size={17}/><input required name="datetime" type="datetime-local" value={form.datetime} onChange={update} className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-slate-600 outline-none focus:border-emerald-400"/></div></label>
          <label className="text-sm font-semibold text-slate-600 sm:col-span-2">অতিরিক্ত তথ্য (ঐচ্ছিক)<textarea name="details" value={form.details} onChange={update} rows="2" placeholder="যাত্রীর সংখ্যা বা বিশেষ কোনো অনুরোধ..." className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 p-3 outline-none focus:border-emerald-400"/></label>
        </div>
        <button type="submit" className="mt-5 w-full rounded-xl bg-emerald-500 py-3.5 font-bold text-white shadow-green transition hover:bg-emerald-600">বুকিং অনুরোধ পাঠান</button>
        {sent && <div role="status" className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800"><strong className="flex items-center gap-2"><CheckCircle2 size={18}/> ফর্মটি প্রস্তুত হয়েছে!</strong> এটি এখনো সার্ভারে পাঠানো হয়নি। বুকিং নিশ্চিত করতে <a className="font-bold underline" href="tel:01783721411">01783 721411</a> নম্বরে কল করুন।</div>}
        <p className="mt-3 text-center text-xs text-slate-400">এই ডেমো ফর্মে তথ্য সংরক্ষণ বা সার্ভারে পাঠানো হয় না।</p>
      </form>
    </div>
  </section>
}
