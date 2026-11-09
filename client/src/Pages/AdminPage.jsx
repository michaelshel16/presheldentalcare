import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, LockKeyhole, ArrowLeft } from "lucide-react";

export default function AdminPage() {
  const navigate = useNavigate(); const [show,setShow] = useState(false);
  return <main className="grid min-h-screen place-items-center bg-[#29211D] px-5 py-12 text-[#29211D]">
    <section className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl md:p-10">
      <button onClick={()=>navigate("/")} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#76665B] hover:text-[#A93400]"><ArrowLeft size={16}/> Back to website</button>
      <div className="inline-flex rounded-2xl bg-[#EDE4DC] p-4 text-[#A93400]"><ShieldCheck size={30}/></div>
      <h1 className="mt-6 font-['Playfair_Display'] text-3xl font-bold">Admin access</h1>
      <p className="mt-2 text-sm leading-6 text-[#76665B]">This is a visual sign-in placeholder. Authentication and admin data are not connected.</p>
      <form onSubmit={e=>{e.preventDefault();setShow(true);}} className="mt-8 space-y-5">
        <label className="block text-sm font-semibold">Email<input type="email" required className="field" placeholder="admin@example.com"/></label>
        <label className="block text-sm font-semibold">Password<div className="relative"><input type="password" required className="field pr-16" placeholder="Enter password"/><button type="button" onClick={e=>{const input=e.currentTarget.previousSibling;input.type=input.type==="password"?"text":"password";}} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#A93400]">Show</button></div></label>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#A93400] px-6 py-4 font-bold text-white hover:bg-[#852A04]"><LockKeyhole size={17}/> Sign in</button>
      </form>
      {show && <p className="mt-5 rounded-xl bg-[#EDE4DC] p-4 text-sm text-[#852A04]">Authentication is not configured in this frontend demo.</p>}
    </section>
  </main>;
}
