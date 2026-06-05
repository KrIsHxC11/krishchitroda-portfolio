import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import artific from "@/assets/artific.jpg";
import barakah from "@/assets/barakah.jpg";
import arcreative from "@/assets/arcreative.jpg";
import rillex from "@/assets/rillex.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Web Development",
    body: "Production-grade websites and web apps built with React, Next.js, and TypeScript. Fast, accessible, and crafted to scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-10 h-10 md:w-12 md:h-12 text-white/80">
        <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Interface Design",
    body: "Pixel-precise interfaces with a strong typographic system. From wireframe to a design system your team can extend.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-10 h-10 md:w-12 md:h-12 text-white/80">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Frontend Engineering",
    body: "Animations, micro-interactions, and performant component architectures. Lighthouse green across the board.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-10 h-10 md:w-12 md:h-12 text-white/80">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "AI Automation",
    body: "AI-powered automation, LLM integrations, and smart workflows that streamline operations and elevate user experiences.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-10 h-10 md:w-12 md:h-12 text-white/80">
        <rect x="5" y="7" width="14" height="12" rx="3" />
        <path d="M12 7V3M9 3h6M9 13h.01M15 13h.01M9 17h6" strokeLinecap="round" />
        <path d="M2 12h3M19 12h3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const works = [
  { title: "Artific Clothing Co.", tag: "Streetwear brand — E-commerce", img: artific, href: "https://wearartific.in/" },
  { title: "Barakah", tag: "Muslim community platform — App + Web", img: barakah, href: "https://barakah.services/" },
  { title: "AR Creative Lab", tag: "Film post-production studio", img: arcreative, href: "https://arcrlab.vercel.app/" },
  { title: "Rillex", tag: "Indian snacks brand — E-commerce", img: rillex, href: "https://rillexfoods.com" },
];

function Index() {
  const [form, setForm] = useState({ name: "", email: "", budget: "₹2L-5L", message: "" });
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function toggleInterest(val: string) {
    setInterests((prev) => prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "efa9342b-e51b-4a26-b9d5-3b54d38c0ab2",
          name: form.name,
          email: form.email,
          budget: form.budget,
          interests: interests.join(", ") || "Not specified",
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", budget: "₹2L-5L", message: "" });
        setInterests([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-14 flex items-center justify-between text-xs font-mono uppercase tracking-widest">
          <a href="#top" className="font-bold tracking-tight">KC<span className="text-white/40">®</span></a>
          <nav className="hidden md:flex gap-10 text-white/60">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#works" className="hover:text-white transition">Works</a>
            
          </nav>
          <a href="#contact" className="border border-white/20 hover:bg-white hover:text-black transition px-4 py-2 rounded-full">
            Contact me
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative px-6 lg:px-10 pt-28 lg:pt-32 pb-10 lg:pb-12 min-h-screen flex flex-col">
        <div className="mx-auto max-w-[1400px] w-full flex-1 flex flex-col">
          {/* Top meta row */}
          <div className="grid grid-cols-12 gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            <p className="col-span-6 md:col-span-3">Personal portfolio<br /><span className="text-white/60">© 2026</span></p>
            <p className="hidden md:block md:col-span-3">Based in<br /><span className="text-white/60">Mumbai, India</span></p>
            <p className="hidden md:block md:col-span-3">Currently<br /><span className="text-white/60">Building a film production studio site</span></p>
            <p className="col-span-6 md:col-span-3 text-right md:text-left">
              <span className="inline-flex items-center gap-2 text-white/60">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                Available for work
              </span>
            </p>
          </div>

          {/* Center statement */}
          <div className="flex-1 flex flex-col justify-center py-16 lg:py-20">
            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 md:col-span-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-6">
                  ( Web Developer / Frontend Engineer )
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl leading-[1.15] tracking-tight text-white/90 max-w-[640px]">
                  Crafting fast, expressive interfaces for ambitious brands and product teams.
                  <span className="text-white/40"> Independent studio of one — based in India, working worldwide.</span>
                </p>
              </div>
              <div className="hidden md:block md:col-span-4 md:col-start-9">
                <ul className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 space-y-2 text-right">
                  <li className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/30">01</span><span>React / Next.js</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/30">02</span><span>Design Systems</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/30">03</span><span>Full-Stack Development</span></li>
                  <li className="flex justify-between"><span className="text-white/30">04</span><span>AI Automation</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Monogram */}
          <div className="relative">
            <h1 className="display text-[40vw] md:text-[28vw] lg:text-[22vw] leading-[0.8] text-right">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">KC</span>
            </h1>
            <div className="absolute left-0 bottom-3 md:bottom-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              <span className="inline-block w-8 h-px bg-white/30" />
              Scroll to explore
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 lg:px-10 py-16 lg:py-24 border-t border-white/10">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="display text-[8vw] lg:text-[5.5vw]">
            HELLO <span className="inline-block align-middle mx-2 lg:mx-4 font-mono text-base tracking-tight">||||||||</span> I'M
            <br />
            WEB-DEVELOPER
            <br />
            KRISH
            <br />
            CHITRODA
          </h2>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 lg:px-10 py-24 lg:py-40 border-t border-white/10">
        <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-8">
          <p className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            (About) — 01
          </p>
          <p className="col-span-12 md:col-span-8 md:col-start-5 text-2xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
            I build captivating and functional interfaces that evoke emotion and establish a real connection{" "}
            <span className="text-white/35">between the brand and the user. Six years shipping product for startups and studios.</span>
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 lg:px-10 py-24 lg:py-32 border-t border-white/10">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap gap-2 mb-12">
            {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Node"].map((t) => (
              <span key={t} className="font-mono text-[10px] uppercase tracking-[0.2em] border border-white/20 rounded-full px-4 py-2 text-white/70">
                {t}
              </span>
            ))}
          </div>
          <h2 className="display text-[20vw] lg:text-[14vw] mb-16">
            SERV<span className="italic font-light">/</span>CES
          </h2>
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-4">
              <p className="text-3xl md:text-4xl tracking-tight mb-8">How can I assist you?</p>
              <div className="text-5xl">↘</div>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-4">
              {services.map((s) => (
                <article
                  key={s.n}
                  className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 hover:bg-white/[0.06] transition"
                >
                  <div className="flex gap-6 items-start">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/15 bg-white/[0.04] shrink-0 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
                        {s.title.toUpperCase()} SERVICES ARE FOCUSED ON CRAFTING DIGITAL PRODUCTS THAT FEEL INEVITABLE.
                      </p>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                  <div className="flex items-end justify-between mt-6">
                    <h3 className="text-3xl md:text-4xl tracking-tight">{s.title}</h3>
                    <span className="font-mono text-sm text-white/40">{s.n}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="px-6 lg:px-10 py-24 lg:py-32 border-t border-white/10">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="display text-center text-[18vw] lg:text-[12vw] mb-12">WORKS</h2>
          <div className="grid grid-cols-12 gap-6">
            {works.map((w, i) => (
              <a
                key={w.title}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-3xl bg-neutral-950 border border-white/10 ${
                  i === 0 || i === 3 ? "col-span-12" : "col-span-12 md:col-span-6"
                }`}
              >
                <img
                  src={w.img}
                  alt={w.title}
                  width={1280}
                  height={832}
                  loading="lazy"
                  className="w-full h-[60vh] object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">{w.tag}</p>
                  <h3 className="display text-3xl md:text-5xl">{w.title}</h3>
                </div>
              </a>
            ))}
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mt-12 max-w-[180px]">
            Each screen is interconnected by a single thread.
          </p>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="px-6 lg:px-10 py-24 lg:py-32 border-t border-white/10">
        <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="display text-[12vw] lg:text-[7vw] mb-8">
              LET'S START
              <br />
              <span className="pl-[10%]">CREATING</span>
              <br />
              TOGETHER
            </h2>
            <div className="text-4xl mb-12">✣</div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 space-y-1">
              <p>Say hi — <a href="mailto:krishchitroda@flash.co" className="hover:text-white">krishchitroda@flash.co</a></p>
              <div className="flex flex-wrap gap-6 pt-6">
                {[
                  { label: "Github ↗", href: "#" },
                  { label: "Dribbble ↗", href: "#" },
                  { label: "LinkedIn ↗", href: "#" },
                  { label: "WhatsApp ↗", href: "https://wa.me/917304481839" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined} className="hover:text-white">{s.label}</a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="col-span-12 lg:col-span-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 space-y-6"
          >
            <fieldset className="space-y-3">
              <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Your data</legend>
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  placeholder="Name*"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-transparent border border-white/15 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-white"
                />
                <input
                  required
                  type="email"
                  placeholder="Email*"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-transparent border border-white/15 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-white"
                />
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">I am interested in</legend>
              <div className="flex flex-wrap gap-2">
                {["Web design", "Web app", "Landing page", "E-commerce", "AI Automation", "Other"].map((c) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => toggleInterest(c)}
                    className={`text-xs rounded-full px-4 py-2 border transition ${
                      interests.includes(c) ? "bg-white text-black border-white" : "border-white/15 hover:border-white"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Budget in INR</legend>
              <div className="flex flex-wrap gap-2">
                {["Under 50k", "₹50k-2L", "₹2L-5L"].map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setForm({ ...form, budget: b })}
                    className={`text-xs rounded-full px-4 py-2 border transition ${
                      form.budget === b ? "bg-white text-black border-white" : "border-white/15 hover:border-white"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </fieldset>

            <textarea
              rows={4}
              placeholder="Project details"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-white resize-none"
            />

            {status === "success" && (
              <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest text-center py-2">
                ✓ Message sent — I'll get back within 24h.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 font-mono text-xs uppercase tracking-widest text-center py-2">
                Something went wrong. Please try again.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full rounded-full bg-white text-black font-medium py-4 hover:bg-white/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending…" : status === "success" ? "Sent ✓" : "Submit message →"}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 lg:px-10 py-6 border-t border-white/10 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 flex flex-wrap items-center justify-between gap-4">
        <span>Personal portfolio © 2026</span>
        <div className="flex gap-6">
          <a href="#about">About me</a>
          
        </div>
        <a href="#contact" className="border border-white/20 hover:bg-white hover:text-black transition px-4 py-2 rounded-full">
          Contact me
        </a>
      </footer>
    </main>
  );
}
