import { CarFront } from 'lucide-react'

export default function Brand({ light = false }) {
  return <a href="#home" className={`inline-flex items-center gap-2.5 font-bold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
    <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500 text-white shadow-green"><CarFront size={23} strokeWidth={2.4} /></span>
    <span className="text-xl leading-none">CNG<span className="text-emerald-500">Lagbe</span><small className={`mt-1 block text-[10px] font-medium tracking-wide ${light ? 'text-slate-400' : 'text-slate-500'}`}>ON-TIME RIDE SERVICE</small></span>
  </a>
}
