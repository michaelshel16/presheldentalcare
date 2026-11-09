
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, CalendarDays, ShieldCheck, ChevronRight } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/aboutpage" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  if (location.pathname.startsWith("/admin")) return null;

  const navClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${isActive ? "text-[#A93400]" : "text-[#51463F] hover:text-[#A93400]"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5D9CE] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="leading-tight">
          <span className="block text-xl font-extrabold tracking-tight text-[#29211D]">Preshel <span className="text-[#A93400]">Dental Care</span></span>
          <span className="mt-1 block text-[9px] font-bold tracking-[0.25em] text-[#76665B]">YOUR SMILE, OUR PRIORITY</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(link => <NavLink key={link.to} to={link.to} className={navClass}>{link.label}</NavLink>)}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <Link to="/adminpage" className="inline-flex items-center gap-2 text-sm font-medium text-[#51463F] hover:text-[#A93400]"><ShieldCheck size={17}/> Admin Login</Link>
          <Link to="/appointment" className="inline-flex items-center gap-2 rounded-xl bg-[#A93400] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[#A93400]/15 transition hover:-translate-y-0.5 hover:bg-[#852A04]"><CalendarDays size={17}/> Book Appointment <ChevronRight size={17}/></Link>
        </div>
        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="rounded-lg border border-[#E5D9CE] p-2 text-[#29211D] md:hidden">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="border-t border-[#E5D9CE] bg-white px-5 py-5 shadow-lg md:hidden">
        <div className="flex flex-col gap-5">{links.map(link => <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={navClass}>{link.label}</NavLink>)}
          <Link to="/adminpage" onClick={() => setOpen(false)} className="font-semibold text-[#51463F]">Admin Login</Link>
          <Link to="/appointment" onClick={() => setOpen(false)} className="rounded-xl bg-[#A93400] px-5 py-3 text-center font-bold text-white">Book Appointment</Link>
        </div>
      </nav>}
    </header>
  );
}

