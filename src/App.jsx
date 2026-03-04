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
  ArrowUp,
  ShieldCheck,
  Zap,
  Wind,
  Factory,
  Hotel,
  Stethoscope,
  Briefcase,
  CheckCircle
} from "lucide-react";

const content = {
  contacts: {
    location: "Luanda, Angola",
    phone: "929 251 620",
    email: "baratexangola@gmail.com",
  },
  hero: {
    headline: "BARATEX, LDA",
    subheadline: "Soluções Integradas de Instalações e Ambiente em Angola",
    tagline: "Valorizando espaços. Protegendo ativos. Entregando excelência operacional.",
    cta1: "Solicitar Proposta",
  },
  nav: [
    { label: "Sobre Nós", id: "about" },
    { label: "Modelo IFM", id: "ifm" },
    { label: "Serviços", id: "services" },
    { label: "Contacto", id: "contact" }
  ],
  about: {
    title: "Quem Somos",
    text: "A BARATEX, LDA é uma empresa angolana líder em Gestão Integrada de Instalações (IFM).",
    mission: "Garantir ambientes funcionais, seguros e esteticamente otimizados.",
    vision: "Ser a referência número 1 em Angola em Gestão de Instalações até 2030.",
    values: ["Rigor Técnico", "Segurança SHEQ", "Sustentabilidade"]
  },
  ifm: {
    title: "MODELO IFM",
    description: "Gestão Integrada de Instalações para máxima eficiência.",
    benefits: ["Redução de Custos", "Manutenção Preventiva", "Conformidade Legal", "Operação 24/7", "Equipa Especializada"]
  },
  services: [
    {
      id: "ipc",
      title: "Controlo de Pragas",
      icon: Bug,
      desc: "Soluções definitivas contra pragas domésticas e industriais.",
      items: ["Desinfestação", "Desratização", "Controlo Preventivo"]
    },
    {
      id: "cleaning",
      title: "Limpeza Especializada",
      icon: SprayCan,
      desc: "Higiene profissional para escritórios e indústrias.",
      items: ["Limpeza Pós-Obra", "Sanitização", "Fachadas"]
    }
  ],
  industries: [
    { name: "Zonas Industriais", icon: Factory },
    { name: "Saúde & Clínicas", icon: Stethoscope },
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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white lg:bg-transparent py-4"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className={`font-black text-2xl tracking-tighter ${isScrolled ? "text-[#2d5a27]" : "text-[#2d5a27] lg:text-white"}`}>BARATEX</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {content.nav.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={`text-sm font-bold uppercase ${isScrolled ? "text-slate-600 hover:text-green-700" : "text-white/80 hover:text-white"}`}>
                {item.label}
              </button>
            ))}
          </div>

          <button onClick={() => setMobileMenu(!mobileMenu)} className={`lg:hidden ${isScrolled ? "text-slate-900" : "text-[#2d5a27]"}`}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center bg-slate-900">
        <div className="absolute inset-0 opacity-40 bg-black z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase">{content.hero.headline}</h1>
            <p className="text-xl md:text-2xl text-green-400 font-medium mb-8">{content.hero.subheadline}</p>
            <button onClick={() => scrollTo('contact')} className="bg-[#2d5a27] hover:bg-green-700 text-white px-10 py-4 rounded-full font-black text-lg transition-all">
              {content.hero.cta1}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section (Example of map fix) */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 text-[#2d5a27]">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.services.map((service) => (
              <div key={service.id} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <service.icon className="text-[#2d5a27] mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, i) => (
                    <span key={i} className="text-xs font-bold bg-white px-3 py-1 rounded-full border border-slate-200">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IFM Section (The one that was crashing) */}
      <section id="ifm" className="py-24 bg-[#2d5a27] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-green-300 font-black uppercase text-xs mb-4">{content.ifm.title}</h2>
          <p className="text-3xl font-black mb-12">{content.ifm.description}</p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {content.ifm.benefits.map((benefit, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-xl border border-white/20">
                <Zap className="text-yellow-400 mx-auto mb-2" size={20} />
                <p className="text-sm font-bold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4 font-bold">{content.contacts.location}</p>
          <p className="mb-4 text-green-400 font-bold">{content.contacts.phone}</p>
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} BARATEX, LDA.</p>
        </div>
      </footer>
    </div>
  );
}
