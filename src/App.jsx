import React, { useState, useEffect } from "react";
import {
  Home, Building, Leaf, Bug, SprayCan, MapPin, Phone, Mail, 
  Facebook, Instagram, Linkedin, Menu, ArrowUp, ShieldCheck, 
  Zap, Wind, Factory, Stethoscope, Briefcase, CheckCircle, X
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
      desc: "Soluções definitivas contra pragas em residências e empresas.",
      items: ["Desinfestação", "Desratização", "Controlo Preventivo"]
    },
    {
      id: "cleaning",
      title: "Limpeza Especializada",
      icon: SprayCan,
      desc: "Higiene profunda para escritórios, clínicas e indústrias.",
      items: ["Limpeza Pós-Obra", "Sanitização", "Fachadas"]
    },
    {
      id: "ac",
      title: "Climatização (AVAC)",
      icon: Wind,
      desc: "Instalação e manutenção técnica de sistemas de Ar Condicionado.",
      items: ["Manutenção", "Carga de Gás", "Reparação"]
    }
  ],
  ifm: {
    title: "MODELO IFM",
    description: "Gestão Integrada de Instalações: Eficiência operacional para o seu negócio.",
    benefits: ["Redução de Custos", "Manutenção 24/7", "Conformidade SHEQ", "Equipa Técnica", "Rigor Operacional"]
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
    setMobileMenu(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-green-100">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className={`transition-all duration-300 ${isScrolled ? "w-10" : "w-14"}`}>
               {/* Certifique-se de ter logo-baratex.png na pasta public/ */}
               <img src="/logo-baratex.png" alt="Baratex" className={`w-full h-auto ${!isScrolled ? "brightness-0 invert" : ""}`} />
            </div>
            <span className={`font-black text-2xl tracking-tighter ${isScrolled ? "text-[#2d5a27]" : "text-white"}`}>BARATEX</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {content.nav.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={`text-sm font-bold uppercase tracking-widest hover:text-green-500 transition-colors ${isScrolled ? "text-slate-600" : "text-white"}`}>
                {item.label}
              </button>
            ))}
            <a href={`https://wa.me/${content.contacts.whatsapp}`} className="bg-[#2d5a27] text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">ORÇAMENTO</a>
          </div>

          <button onClick={() => setMobileMenu(true)} className={`lg:hidden ${isScrolled ? "text-slate-900" : "text-white"}`}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-white z-[100] p-8 flex flex-col animate-in fade-in duration-300">
          <div className="flex justify-end"><button onClick={() => setMobileMenu(false)}><X size={32} /></button></div>
          <div className="flex flex-col gap-8 mt-12">
            {content.nav.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-3xl font-black text-[#2d5a27] text-left">{item.label}</button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40" alt="Office Background" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none">BARATEX, LDA</h1>
          <p className="text-xl md:text-3xl text-green-400 font-bold mb-8 uppercase tracking-widest">Soluções Integradas em Angola</p>
          <button onClick={() => scrollTo('services')} className="bg-[#2d5a27] text-white px-12 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-green-700 transition-all">NOSSOS SERVIÇOS</button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900">Expertise Profissional</h2>
            <div className="h-2 w-24 bg-[#2d5a27] mx-auto mt-4"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {content.services.map((s) => (
              <div key={s.id} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <s.icon size={48} className="text-[#2d5a27] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-4">{s.title}</h3>
                <p className="text-slate-500 mb-8">{s.desc}</p>
                <div className="space-y-2">
                  {s.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle size={14} className="text-green-600" /> {item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IFM Section */}
      <section id="ifm" className="py-24 bg-[#2d5a27] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xs font-black tracking-[0.3em] text-green-300 mb-6">{content.ifm.title}</h2>
          <p className="text-3xl md:text-5xl font-black max-w-4xl mx-auto mb-16 leading-tight italic">"{content.ifm.description}"</p>
          <div className="flex flex-wrap justify-center gap-4">
            {content.ifm.benefits.map((b, i) => (
              <span key={i} className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 font-bold">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h4 className="text-2xl font-black mb-6">BARATEX</h4>
              <p className="text-slate-400 italic">"Valorizando espaços. Protegendo ativos. Entregando excelência."</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><MapPin className="text-green-500" /> {content.contacts.location}</div>
              <div className="flex items-center gap-3"><Phone className="text-green-500" /> {content.contacts.phone}</div>
              <div className="flex items-center gap-3"><Mail className="text-green-500" /> {content.contacts.email}</div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"><Instagram /></div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"><Linkedin /></div>
            </div>
          </div>
          <div className="text-center border-t border-white/10 pt-10 text-slate-500 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} BARATEX, LDA. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={`https://wa.me/${content.contacts.whatsapp}`} className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform animate-bounce">
        <Phone size={30} fill="currentColor" />
      </a>
    </div>
  );
}
