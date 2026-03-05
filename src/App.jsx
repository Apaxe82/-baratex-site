import React, { useState, useEffect, useRef } from "react";
import {
  Bug, SprayCan, Wind, Leaf, MapPin, Phone, Mail,
  Instagram, Linkedin, Menu, ShieldCheck, CheckCircle, X,
  ChevronDown, Flower2, TreePine, Scissors
} from "lucide-react";

const content = {
  contacts: {
    location: "Luanda, Angola",
    phone: "929 251 620",
    email: "baratexangola@gmail.com",
    whatsapp: "244929251620"
  },
  nav: [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "about" },
    { label: "Serviços", id: "services" },
    { label: "Modelo IFM", id: "ifm" },
    { label: "Contacto", id: "contact" }
  ],
  services: [
    {
      id: "ipc",
      title: "Controlo de Pragas",
      icon: Bug,
      tag: "IPC",
      desc: "Soluções definitivas contra pragas em residências e empresas, com produtos certificados e segurança garantida.",
      items: ["Desinfestação", "Desratização", "Controlo Preventivo"],
      color: "from-amber-50 to-orange-50",
      accent: "#d97706"
    },
    {
      id: "cleaning",
      title: "Limpeza Especializada",
      icon: SprayCan,
      tag: "HIGIENE",
      desc: "Higiene profunda para escritórios, clínicas e indústrias, com equipamentos de última geração.",
      items: ["Limpeza Pós-Obra", "Sanitização", "Fachadas"],
      color: "from-blue-50 to-cyan-50",
      accent: "#0284c7"
    },
    {
      id: "ac",
      title: "Climatização AVAC",
      icon: Wind,
      tag: "AVAC",
      desc: "Instalação e manutenção técnica de sistemas de Ar Condicionado para máximo conforto e eficiência.",
      items: ["Manutenção Preventiva", "Carga de Gás", "Reparação"],
      color: "from-slate-50 to-zinc-50",
      accent: "#475569"
    },
    {
      id: "landscaping",
      title: "Paisagismo & Jardinagem",
      icon: Leaf,
      tag: "VERDE",
      desc: "Criamos e mantemos espaços verdes que transformam ambientes corporativos e residenciais em refúgios naturais.",
      items: ["Jardins Corporativos", "Poda & Manutenção", "Projecto Paisagístico"],
      color: "from-green-50 to-emerald-50",
      accent: "#2d5a27",
      featured: true
    }
  ],
  ifm: {
    title: "MODELO IFM",
    description: "Gestão Integrada de Instalações: Eficiência operacional para o seu negócio.",
    benefits: [
      { label: "Redução de Custos", icon: "💰" },
      { label: "Manutenção 24/7", icon: "🕐" },
      { label: "Conformidade SHEQ", icon: "✅" },
      { label: "Equipa Técnica", icon: "👷" },
      { label: "Rigor Operacional", icon: "⚙️" }
    ]
  },
  stats: [
    { value: "10+", label: "Anos de Experiência" },
    { value: "5000+", label: "Clientes Satisfeitos" },
    { value: "4", label: "Serviços Integrados" },
    { value: "24/7", label: "Suporte Disponível" }
  ]
};

/* ── Animated Counter ── */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num = parseInt(target);
        if (isNaN(num)) { setCount(target); return; }
        let start = 0;
        const step = Math.ceil(num / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= num) { setCount(num); clearInterval(timer); }
          else setCount(start);
        }, 40);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{typeof count === "number" ? count : count}{suffix}</span>;
}

/* ── Scroll-reveal hook ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    setMobileMenu(false);
  };

  const [heroRef, heroVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();
  const [servicesRef, servicesVisible] = useReveal();
  const [ifmRef, ifmVisible] = useReveal();

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideRight {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .reveal { opacity: 0; }
        .reveal.visible { animation: fadeUp 0.7s ease forwards; }
        .reveal-delay-1 { animation-delay: 0.1s !important; }
        .reveal-delay-2 { animation-delay: 0.2s !important; }
        .reveal-delay-3 { animation-delay: 0.3s !important; }
        .reveal-delay-4 { animation-delay: 0.4s !important; }
        .service-card { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .service-card:hover { transform: translateY(-8px) scale(1.01); }
        .featured-glow { box-shadow: 0 0 0 2px #2d5a27, 0 20px 60px rgba(45,90,39,0.15); }
        .whatsapp-pulse::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: #25D366;
          animation: pulse-ring 1.5s ease-out infinite;
        }
        .hero-text-reveal {
          animation: fadeUp 1s cubic-bezier(0.22,1,0.36,1) both;
        }
        .nav-link::after {
          content: '';
          display: block;
          height: 2px;
          background: #2d5a27;
          transform: scaleX(0);
          transition: transform 0.3s;
          transform-origin: left;
        }
        .nav-link:hover::after { transform: scaleX(1); }
        .stat-border { border-right: 1px solid rgba(255,255,255,0.15); }
        .stat-border:last-child { border-right: none; }
        .green-leaf-bg {
          background-image: radial-gradient(circle at 20% 50%, rgba(45,90,39,0.08) 0%, transparent 60%),
                            radial-gradient(circle at 80% 20%, rgba(74,160,44,0.06) 0%, transparent 50%);
        }
      `}</style>

      {/* ── Navigation ── */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 group">
            <img
              src="/logo-baratex.png"
              alt="Baratex"
              className={`h-10 w-auto transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"}`}
            />
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {content.nav.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className={`nav-link text-sm font-bold tracking-wide transition-colors pb-0.5 ${isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white/90 hover:text-white"}`}>
                {item.label}
              </button>
            ))}
            <a href={`https://wa.me/${content.contacts.whatsapp}`}
              className="ml-2 bg-[#2d5a27] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#3a7533] transition-all hover:shadow-lg hover:shadow-green-900/20 flex items-center gap-2">
              <Phone size={14} fill="currentColor" />
              ORÇAMENTO
            </a>
          </div>

          <button onClick={() => setMobileMenu(true)} className={`lg:hidden p-2 rounded-lg ${isScrolled ? "text-slate-900" : "text-white"}`}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col" style={{ animation: "fadeIn 0.25s ease" }}>
          <div className="flex justify-between items-center p-6 border-b border-slate-100">
            <span className="font-extrabold text-xl text-[#2d5a27]">BARATEX LDA</span>
            <button onClick={() => setMobileMenu(false)} className="p-2 rounded-full hover:bg-slate-100"><X size={24} /></button>
          </div>
          <div className="flex flex-col p-6 gap-1 flex-1">
            {content.nav.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="text-left text-2xl font-extrabold text-slate-800 py-4 px-4 rounded-2xl hover:bg-green-50 hover:text-[#2d5a27] transition-all">
                {item.label}
              </button>
            ))}
          </div>
          <div className="p-6">
            <a href={`https://wa.me/${content.contacts.whatsapp}`}
              className="block bg-[#2d5a27] text-white py-4 rounded-2xl font-bold text-center text-lg">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0f1f0d]">
        {/* Background layers */}
        <div className="absolute inset-0">
          <img
            src="/foto-empresa.jpg"
            className="w-full h-full object-cover opacity-30"
            alt="Baratex Angola"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f0d]/95 via-[#0f1f0d]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f0d]/80 via-transparent to-transparent" />
        </div>

        {/* Decorative green orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2d5a27]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-green-400/10 rounded-full blur-2xl pointer-events-none" />

        <div ref={heroRef} className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="hero-text-reveal" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-green-300 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-green-500/30 mb-8">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" style={{ animation: "pulse-ring 1.5s ease-out infinite" }} />
                Luanda, Angola
              </span>
            </div>

            <h1 className="hero-text-reveal text-white font-extrabold leading-[0.95] mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", animationDelay: "0.2s" }}>
              BARATEX<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}>LDA</span>
            </h1>

            <p className="hero-text-reveal text-green-400 font-bold uppercase tracking-[0.25em] text-sm mb-4" style={{ animationDelay: "0.35s" }}>
              Soluções Integradas de Gestão de Instalações
            </p>
            <p className="hero-text-reveal text-white/60 text-lg max-w-lg leading-relaxed mb-10" style={{ animationDelay: "0.45s" }}>
              Do controlo de pragas ao paisagismo, da climatização à higiene — um parceiro único para todos os seus espaços.
            </p>

            <div className="hero-text-reveal flex flex-wrap gap-4" style={{ animationDelay: "0.55s" }}>
              <button onClick={() => scrollTo('services')}
                className="bg-[#2d5a27] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3a7533] transition-all hover:shadow-2xl hover:shadow-green-900/40 hover:-translate-y-0.5">
                Ver Serviços
              </button>
              <a href={`https://wa.me/${content.contacts.whatsapp}`}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                <Phone size={16} fill="currentColor" />
                Falar Connosco
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button onClick={() => scrollTo('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors"
          style={{ animation: "float 2s ease-in-out infinite" }}>
          <ChevronDown size={32} />
        </button>
      </section>

      {/* ── Stats Bar ── */}
      <div ref={statsRef} className="bg-[#2d5a27] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {content.stats.map((s, i) => (
              <div key={i} className={`stat-border text-center py-4 px-6 ${statsVisible ? "visible" : ""}`}>
                <div className="text-3xl md:text-4xl font-extrabold text-white">
                  {statsVisible && <Counter target={s.value} />}
                </div>
                <div className="text-green-300 text-xs font-bold uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── About ── */}
      <section id="about" className="py-24 green-leaf-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2d5a27] text-xs font-extrabold uppercase tracking-[0.25em] mb-4 block">Sobre Nós</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                A empresa que cuida<br />
                <span className="text-[#2d5a27]">do seu espaço.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                A Baratex, Lda é uma empresa angolana especializada em soluções integradas de Gestão de Instalações. Com mais de uma década de experiência, oferecemos serviços de excelência no controlo de pragas, limpeza, climatização e paisagismo.
              </p>
              <div className="space-y-3">
                {["Equipa certificada e experiente", "Produtos e equipamentos de última geração", "Cobertura em toda a cidade de Luanda", "Soluções personalizadas para cada cliente"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-[#2d5a27]" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual grid */}
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600" alt="Serviços" className="rounded-2xl object-cover h-48 w-full col-span-2" />
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=400" alt="Jardim" className="rounded-2xl object-cover h-44 w-full" />
              <div className="rounded-2xl bg-[#2d5a27] p-6 flex flex-col justify-center">
                <div className="text-4xl font-extrabold text-white">4</div>
                <div className="text-green-300 text-sm font-bold mt-1">Serviços integrados numa só empresa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={servicesRef} className="mb-16">
            <span className="text-[#2d5a27] text-xs font-extrabold uppercase tracking-[0.25em] mb-4 block">O Que Fazemos</span>
            <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Expertise<br />Profissional
              </h2>
              <p className="text-slate-500 max-w-sm">Soluções abrangentes para manter o seu espaço seguro, limpo, confortável e belo.</p>
            </div>
            <div className="h-1 w-16 bg-[#2d5a27] mt-6 rounded-full" />
          </div>

          {/* 2+2 grid with featured landscape card */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.slice(0, 3).map((s, i) => (
              <div key={s.id}
                className={`service-card bg-gradient-to-br ${s.color} p-8 rounded-3xl border border-white cursor-pointer ${activeService === s.id ? "ring-2 ring-[#2d5a27]" : ""}`}
                onClick={() => setActiveService(activeService === s.id ? null : s.id)}>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: s.accent + "20" }}>
                    <s.icon size={24} style={{ color: s.accent }} />
                  </div>
                  <span className="text-[10px] font-extrabold tracking-[0.2em] px-3 py-1 rounded-full" style={{ background: s.accent + "15", color: s.accent }}>
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="space-y-2">
                  {s.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <CheckCircle size={13} style={{ color: s.accent }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Featured Landscaping Card — spans full width on its row */}
            <div className="lg:col-span-3">
              <div
                className="service-card featured-glow bg-gradient-to-br from-[#1a3d15] to-[#2d5a27] p-8 md:p-10 rounded-3xl cursor-pointer relative overflow-hidden"
                onClick={() => setActiveService(activeService === 'landscaping' ? null : 'landscaping')}>

                {/* Decorative leaf pattern */}
                <div className="absolute -right-8 -top-8 opacity-10">
                  <Leaf size={200} className="text-white" />
                </div>
                <div className="absolute right-1/4 bottom-0 opacity-5">
                  <Leaf size={120} className="text-white" style={{ transform: "rotate(-30deg)" }} />
                </div>

                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Leaf size={28} className="text-green-300" />
                      </div>
                      <span className="text-[10px] font-extrabold tracking-[0.2em] bg-green-400/20 text-green-300 px-3 py-1.5 rounded-full border border-green-400/30">
                        ✦ NOVO SERVIÇO
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Paisagismo &<br />Jardinagem</h3>
                    <p className="text-green-200/80 leading-relaxed">
                      Transformamos espaços exteriores em ambientes verdes e harmoniosos. Do projecto paisagístico à manutenção regular, criamos jardins que valorizam o seu imóvel e bem-estar.
                    </p>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { icon: Scissors, label: "Poda Profissional" },
                        { icon: Flower2, label: "Plantação & Design" },
                        { icon: TreePine, label: "Jardins Corporativos" },
                      ].map((item, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10 hover:bg-white/20 transition-all">
                          <item.icon size={24} className="text-green-300 mx-auto mb-2" />
                          <span className="text-white/80 text-xs font-bold">{item.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {content.services[3].items.map((item, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm font-semibold text-green-100">
                          <CheckCircle size={14} className="text-green-400" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Landscaping Visual Showcase ── */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 rounded-3xl overflow-hidden h-72">
            <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=600" alt="Jardim 1" className="object-cover w-full h-full col-span-1" />
            <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?auto=format&fit=crop&q=80&w=800" alt="Jardim 2" className="object-cover w-full h-full col-span-1" />
            <div className="relative col-span-1">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600" alt="Jardim 3" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-[#2d5a27]/80 flex flex-col items-center justify-center text-white">
                <Leaf size={36} className="mb-3 text-green-300" />
                <div className="text-xl font-extrabold text-center px-4">Espaços Verdes para Angola</div>
                <a href={`https://wa.me/${content.contacts.whatsapp}`}
                  className="mt-4 bg-white text-[#2d5a27] text-sm font-bold px-5 py-2 rounded-full hover:scale-105 transition-transform">
                  Pedir Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IFM Section ── */}
      <section id="ifm" ref={ifmRef} className="py-24 bg-[#0f1f0d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-500/20 text-green-400 text-xs font-extrabold tracking-[0.3em] uppercase px-4 py-2 rounded-full border border-green-500/30 mb-6">
              {content.ifm.title}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto mb-6">
              "{content.ifm.description}"
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Oferecemos uma solução completa de gestão das suas instalações, combinando todos os nossos serviços num único contrato integrado.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {content.ifm.benefits.map((b, i) => (
              <div key={i}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="text-xl">{b.icon}</span>
                <span className="text-white font-bold text-sm">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-4">
            {[
              { title: "Gestão Centralizada", desc: "Um único contrato, uma equipa dedicada, todos os serviços integrados." },
              { title: "Relatórios & Transparência", desc: "Relatórios mensais de todas as intervenções e métricas de performance." },
              { title: "Resposta Rápida", desc: "Equipa de emergência disponível 24 horas por dia, 7 dias por semana." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="w-8 h-1 bg-green-400 rounded mb-4" />
                <h4 className="text-white font-extrabold mb-2">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={`https://wa.me/${content.contacts.whatsapp}`}
              className="inline-flex items-center gap-3 bg-[#2d5a27] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#3a7533] transition-all hover:shadow-2xl hover:shadow-green-900/50">
              <Phone size={18} fill="currentColor" />
              Solicitar Proposta IFM
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer / Contact ── */}
      <footer id="contact" className="bg-slate-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2d5a27] flex items-center justify-center">
                  <Leaf size={18} className="text-white" />
                </div>
                <span className="text-xl font-extrabold">BARATEX, LDA</span>
              </div>
              <p className="text-slate-400 italic text-sm leading-relaxed max-w-xs mb-6">
                "Valorizando espaços. Protegendo ativos. Entregando excelência."
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-extrabold text-sm uppercase tracking-wider text-slate-300 mb-5">Serviços</h5>
              <div className="space-y-3">
                {["Controlo de Pragas", "Limpeza Especializada", "Climatização AVAC", "Paisagismo & Jardinagem"].map((s, i) => (
                  <button key={i} onClick={() => scrollTo('services')} className="block text-slate-400 text-sm hover:text-green-400 transition-colors">{s}</button>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-extrabold text-sm uppercase tracking-wider text-slate-300 mb-5">Contacto</h5>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">{content.contacts.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-green-500 flex-shrink-0" />
                  <a href={`tel:${content.contacts.phone}`} className="text-slate-400 text-sm hover:text-white transition-colors">{content.contacts.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-green-500 flex-shrink-0" />
                  <a href={`mailto:${content.contacts.email}`} className="text-slate-400 text-sm hover:text-white transition-colors">{content.contacts.email}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">© {new Date().getFullYear()} BARATEX, LDA. Todos os direitos reservados.</p>
            <p className="text-slate-600 text-xs">Luanda · Angola</p>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp ── */}
      <a href={`https://wa.me/${content.contacts.whatsapp}`}
        className="whatsapp-pulse fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform relative"
        title="Falar no WhatsApp">
        <Phone size={26} fill="currentColor" />
      </a>
    </div>
  );
}
