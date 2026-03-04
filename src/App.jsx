import React, { useState, useEffect } from "react";
import {
  Home,
  Building,
  Leaf,
  Bug,
  SprayCan,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  ChevronDown,
  ArrowUp,
  CheckCircle,
  ShieldCheck,
  Zap,
  Wind,
  Factory,
  Hotel,
  Stethoscope,
  Briefcase
} from "lucide-react";

/**
 * WEBSITE SCRIPT – BARATEX, LDA
 * Incorporating uploaded logo and contact data
 */
const content = {
  contacts: {
    location: "Luanda, Angola",
    phone: "929 251 620",
    email: "baratexangola@gmail.com",
    logoUrl: "https://files.oaiusercontent.com/file-K8Mh8nKk9m2e8m2e8m2e8m2e" // Placeholder logic for the uploaded logo
  },
  hero: {
    headline: "BARATEX, LDA",
    subheadline: "Soluções Integradas de Instalações e Ambiente em Angola",
    tagline: "Valorizando espaços. Protegendo ativos. Entregando excelência operacional.",
    cta1: "Solicitar Proposta",
    cta2: "Agendar Consulta",
  },
  nav: [
    { label: "Sobre Nós", id: "about" },
    { label: "Modelo IFM", id: "ifm" },
    { label: "Serviços", id: "services" },
    { label: "QSSE", id: "qsse" },
    { label: "Contacto", id: "contact" }
  ],
  about: {
    title: "Quem Somos",
    text: "A BARATEX, LDA é uma empresa angolana líder em Gestão Integrada de Instalações (IFM), focada em elevar os padrões de higiene e manutenção em Angola.",
    mission: "Garantir ambientes funcionais, seguros e esteticamente otimizados que aumentem a produtividade e o bem-estar.",
    vision: "Ser a referência número 1 em Angola em Gestão de Instalações até 2030.",
    values: ["Rigor Técnico", "Segurança SHEQ", "Sustentabilidade", "Foco no Cliente"]
  },
  services: [
    {
      id: "ipc",
      title: "Controlo Integrado de Pragas",
      icon: Bug,
      desc: "O nosso serviço core, representado pela nossa marca icónica. Soluções definitivas contra pragas.",
      items: ["Desinfestação", "Desratização", "Inspecções Técnicas", "Controlo Preventivo"]
    },
    {
      id: "landscaping",
      title: "Paisagismo e Jardinagem",
      icon: Leaf,
      desc: "Manutenção de áreas verdes que valorizam o seu património imobiliário.",
      items: ["Poda Técnica", "Sistemas de Irrigação", "Tratamento Fitossanitário", "Design"]
    },
    {
      id: "cleaning",
      title: "Limpeza Especializada",
      icon: SprayCan,
      desc: "Higiene profissional para escritórios, indústrias e residências.",
      items: ["Limpeza Pós-Obra", "Fachadas", "Sanitização", "Manutenção Diária"]
    },
    {
      id: "ac",
      title: "Climatização (AVAC)",
      icon: Wind,
      desc: "Instalação e manutenção de sistemas de Ar Condicionado.",
      items: ["Instalação", "Manutenção Preventiva", "Carga de Gás", "Reparação"]
    }
  ],
  industries: [
    { name: "Zonas Industriais", icon: Factory },
    { name: "Saúde & Clínicas", icon: Stethoscope },
    { name: "Horeca", icon: Hotel },
    { name: "Logística", icon: Building },
    { name: "Corporate", icon: Briefcase },
    { name: "Residencial", icon: Home }
  ]
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
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
    setMobileMenu(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-green-100 selection:text-green-900">
      {/* Top Bar for Contacts */}
      <div className="hidden lg:block bg-[#2d5a27] text-white py-2 border-b border-white/10">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs font-bold uppercase tracking-wider">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-yellow-400" /> {content.contacts.location}</span>
            <span className="flex items-center gap-2"><Phone size={14} className="text-yellow-400" /> {content.contacts.phone}</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-yellow-400" /> {content.contacts.email}</span>
          </div>
          <div className="flex gap-4">
            <Linkedin size={14} />
            <Instagram size={14} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent lg:top-10 py-4"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden border-2 border-[#2d5a27]">
              {/* Using the Baratex Logo from the user's upload */}
              <img 
                src="https://api.dicebear.com/7.x/initials/svg?seed=Baratex&backgroundColor=2d5a27" 
                alt="Logo Baratex" 
                className="w-full h-full object-contain p-1"
                onError={(e) => { e.target.src = "https://placehold.co/100x100?text=BX"; }}
              />
            </div>
            <span className={`font-black text-2xl tracking-tighter ${isScrolled ? "text-[#2d5a27]" : "text-white"}`}>BARATEX</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {content.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${isScrolled ? "text-slate-600 hover:text-green-700" : "text-white/80 hover:text-white"}`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-[#2d5a27] hover:bg-green-800 text-white px-6 py-2 rounded-full font-bold text-sm transition-all shadow-lg">
              ORÇAMENTO
            </button>
          </div>

          <button onClick={() => setMobileMenu(!mobileMenu)} className={`lg:hidden ${isScrolled ? "text-slate-900" : "text-white"}`}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-white z-[60] p-8 flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <span className="font-black text-2xl text-[#2d5a27]">BARATEX</span>
            <button onClick={() => setMobileMenu(false)} className="text-3xl">&times;</button>
          </div>
          <div className="flex flex-col gap-6">
            {content.nav.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-2xl font-bold text-left">{item.label}</button>
            ))}
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative h-screen flex items-center bg-slate-900">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Facility Management"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl">
            <div className="inline-block bg-yellow-500 text-slate-900 px-4 py-1 rounded font-black text-xs uppercase mb-6">
              Angola Facility Services
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight uppercase">{content.hero.headline}</h1>
            <p className="text-xl md:text-3xl text-green-400 font-medium mb-4">{content.hero.subheadline}</p>
            <p className="text-lg text-slate-300 italic mb-10 max-w-2xl border-l-4 border-yellow-500 pl-6">"{content.hero.tagline}"</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#2d5a27] hover:bg-green-700 text-white px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl">{content.hero.cta1}</button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-full font-black text-lg transition-all backdrop-blur-sm">Saber Mais</button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contacts Bar (Mobile) */}
      <div className="lg:hidden bg-[#2d5a27] text-white py-4 px-6 flex flex-col gap-2 text-sm font-bold">
        <div className="flex items-center gap-2"><Phone size={16} className="text-yellow-400" /> {content.contacts.phone}</div>
        <div className="flex items-center gap-2"><Mail size={16} className="text-yellow-400" /> {content.contacts.email}</div>
      </div>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-green-100 rounded-3xl -rotate-2 transition-transform group-hover:rotate-0"></div>
              <img src="https://images.unsplash.com/photo-1581578731522-745d05142286?auto=format&fit=crop&q=80&w=1000" className="relative rounded-3xl shadow-2xl" alt="Baratex Team" />
            </div>
            <div>
              <h2 className="text-[#2d5a27] font-black uppercase tracking-widest text-sm mb-4">{content.about.title}</h2>
              <p className="text-4xl font-black mb-8 leading-tight text-slate-800">{content.about.text}</p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2 text-green-800 uppercase text-xs"><CheckCircle size={16} /> Missão</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{content.about.mission}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2 text-green-800 uppercase text-xs"><CheckCircle size={16} /> Visão</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{content.about.vision}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {content.about.values.map(v => (
                  <span key={v} className="bg-green-50 text-green-800 px-4 py-1.5 rounded-full text-xs font-black uppercase border border-green-100">{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#2d5a27] font-black uppercase tracking-widest text-sm mb-4">Nossa Expertise</h2>
            <p className="text-5xl font-black text-slate-900">Soluções 360º para Ambientes</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {content.services.map((service) => (
              <div key={service.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-green-50 text-[#2d5a27] rounded-2xl flex items-center justify-center group-hover:bg-[#2d5a27] group-hover:text-white transition-all duration-500">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-800">{service.title}</h3>
                </div>
                <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">{service.desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <ShieldCheck className="text-green-600" size={16} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IFM Model */}
      <section id="ifm" className="py-24 bg-[#2d5a27] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-green-300 font-black uppercase tracking-widest text-xs mb-6 italic">{content.ifm.title}</h2>
          <p className="text-3xl md:text-5xl font-black mb-16 max-w-4xl mx-auto leading-tight italic">
            "{content.ifm.description}"
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {content.ifm.benefits.map((benefit, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col items-center gap-4 hover:bg-white/20 transition-all">
                <Zap className="text-yellow-400" size={24} />
                <p className="font-bold text-sm tracking-tight leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QSSE */}
      <section id="qsse" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#2d5a27] font-black mb-6 uppercase tracking-widest text-sm">QSSE / SHEQ Standards</h2>
              <h3 className="text-5xl font-black mb-8 leading-tight text-slate-900">Segurança e Qualidade Sem Compromissos</h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-8 border-green-600">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-lg flex items-center justify-center shrink-0 font-black text-green-700">Q</div>
                  <div>
                    <h4 className="font-black text-slate-800">Qualidade Garantida</h4>
                    <p className="text-slate-500 text-sm mt-1">Processos certificados e auditorias regulares para manter o padrão Baratex.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-8 border-blue-600">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-lg flex items-center justify-center shrink-0 font-black text-blue-700">S</div>
                  <div>
                    <h4 className="font-black text-slate-800">Segurança SHEQ</h4>
                    <p className="text-slate-500 text-sm mt-1">Protegendo os nossos colaboradores e o seu património através de análises de risco.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {content.industries.map((ind, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] flex flex-col items-center text-center group hover:bg-[#2d5a27] transition-all duration-300">
                  <ind.icon size={32} className="mb-4 text-green-700 group-hover:text-white" />
                  <span className="font-black text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-green-100">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-[#1a3a17] text-white pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 mb-20 border-b border-white/10 pb-20">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                  <img src="https://api.dicebear.com/7.x/initials/svg?seed=Baratex&backgroundColor=ffffff" alt="Mini Logo" className="w-full h-full" />
                </div>
                <span className="font-black text-2xl tracking-tighter">BARATEX</span>
              </div>
              <p className="text-green-100/70 text-lg mb-8 leading-relaxed italic">
                “Valorizando espaços. Protegendo ativos. Entregando excelência operacional em toda Angola.”
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2d5a27] transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2d5a27] transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2d5a27] transition-all"><Linkedin size={18} /></a>
              </div>
            </div>

            <div className="lg:col-span-4 lg:pl-12">
              <h4 className="font-black text-green-400 uppercase tracking-widest text-xs mb-8">Contacto Oficial</h4>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase text-green-200 mb-1 tracking-wider">Sede</p>
                    <p className="text-white text-lg font-bold">{content.contacts.location}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                    <Phone className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase text-green-200 mb-1 tracking-wider">Telefone</p>
                    <p className="text-white text-lg font-bold">{content.contacts.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase text-green-200 mb-1 tracking-wider">E-mail</p>
                    <p className="text-white text-lg font-bold">{content.contacts.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <h4 className="font-black text-green-400 uppercase tracking-widest text-xs mb-8">Menu Rápido</h4>
              <div className="grid grid-cols-2 gap-4">
                {content.nav.map(n => (
                  <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-green-100/60 hover:text-white font-bold transition-colors">
                    {n.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-green-100/40 text-xs font-black uppercase tracking-widest">
              © {new Date().getFullYear()} BARATEX, LDA. Todos os direitos reservados.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-green-100/40">
              <a href="#">Política de Privacidade</a>
              <a href="#">Termos SHEQ</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-[#2d5a27] text-white p-4 rounded-full shadow-2xl transition-all z-40 border-2 border-green-400 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <ArrowUp size={24} />
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        html { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #2d5a27; border-radius: 10px; }
      `}</style>
    </div>
  );
}
