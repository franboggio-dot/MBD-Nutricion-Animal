import React, { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight, HeartPulse,
  Leaf, Droplets, Flower2, Check,
  Sparkles, FlaskConical, ArrowRight,
  Menu, X
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const smoothScroll = (e) => {
  e.preventDefault();
  const target = e.currentTarget.getAttribute('href');
  if (target && target.startsWith('#')) {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// ── NAVBAR ────────────────────────────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setMenuClosing(false);
    }, 300);
  }, []);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Planes', href: '#planes' },
    { label: 'Lunatural', href: '#lunatural' },
  ];

  const handleLinkClick = (e) => {
    smoothScroll(e);
    closeMenu();
  };

  const toggleMenu = useCallback(() => {
    if (mobileOpen) {
      closeMenu();
    } else {
      setMobileOpen(true);
    }
  }, [mobileOpen, closeMenu]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-brand">
          <img src="/logo.png" alt="Logo MB.DÍAZ" className="navbar-logo" />
          <div className="font-sora" style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--fg-white)', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '2px' }}>
            <span style={{ color: 'var(--color-primary)' }}>MBD</span>
            <span className="text-white/40">.</span>
            <span>Nutrición Animal</span>
          </div>
        </div>

        <div className="navbar-links hide-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={smoothScroll} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        <a href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="navbar-cta-btn nav-cta-btn hide-mobile">
          Reservar consulta
        </a>

        <button
          onClick={toggleMenu}
          className="navbar-hamburger"
          aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="Menú de navegación">
          <div className="mobile-menu-backdrop" onClick={closeMenu} />
          <div className={`mobile-menu-panel ${menuClosing ? 'closing' : 'open'}`}>
            <div className="flex flex-col gap-1">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={handleLinkClick}
                  className="mobile-menu-link"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="mobile-menu-divider" />
            <a
              href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="nav-cta-btn mobile-menu-cta"
            >
              Reservar consulta
            </a>
          </div>
        </div>
      )}
    </>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  const heroRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, { opacity: 0, scale: 0.98, duration: 0.8, ease: 'power2.out' });
      gsap.from('.hero-anim', { y: 50, opacity: 0, duration: 1.4, stagger: 0.15, ease: 'power4.out', delay: 0.25 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="inicio" ref={heroRef} className="hero-section" style={{
      minHeight: '100dvh', position: 'relative', overflow: 'visible',
      display: 'flex', alignItems: 'center',
      background: 'var(--color-gradient-start)', paddingTop: '6rem',
      paddingBottom: '10rem',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, var(--color-gradient-start) 0%, var(--bg-mid) 70%, var(--bg-deep) 100%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, var(--color-primary-dark) 0%, transparent 60%)', top: '-10%', right: '-10%', opacity: 0.3, filter: 'blur(120px)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '280px', background: 'linear-gradient(to bottom, transparent 0%, var(--bg-deep) 100%)', zIndex: 2, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 3, padding: '0 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '2rem', alignItems: 'stretch', minHeight: 'calc(100dvh - 10rem)' }}>
        <div style={{ maxWidth: '540px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 className="hero-anim" style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: 'var(--fg-white)', lineHeight: 1.1, letterSpacing: '-0.04em' }}>Biología que</span>
            <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(3.5rem, 8vw, 7.5rem)', color: 'var(--color-primary)', lineHeight: 0.9, letterSpacing: '-0.02em', filter: 'drop-shadow(0 0 40px rgba(196,108,184,0.4))' }}>sana desde</span>
            <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: 'var(--fg-white)', lineHeight: 1.1, letterSpacing: '-0.04em' }}>la raíz.</span>
          </h1>

          <p className="hero-anim" style={{ fontFamily: '"Sora", sans-serif', fontWeight: 300, fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--color-support-2)', maxWidth: '540px', lineHeight: 1.8, margin: '2rem 0 3rem' }}>
            Bienestar animal basado en nutrición natural y medicina integrativa
          </p>

          <div className="hero-anim" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Quiero mejorar su salud
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="pulse-dot-wrapper">
                <span className="pulse-dot-outer" />
                <span className="pulse-dot-inner" />
              </span>
              <span className="font-fira" style={{ fontSize: '0.72rem', color: 'var(--color-support-1)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Atención personalizada
              </span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="hero-image"
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
          <div className="hero-image-overlay" />
        </div>
      </div>
    </section>
  );
}

// ── SOBRE MÍ ────────────────────────────────────────────────────────────────
function SobreMi() {
  return (
    <section id="sobre-mi" className="section-sobre-mi">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="sobre-mi-content"
        >
          <span className="section-label sobre-mi-label">PRESENTACIÓN</span>

          <h2 className="sobre-mi-title">
            <span className="font-sora" style={{ fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#F1F0F7' }}>
              Sobre
            </span>
            <span className="font-instrument" style={{ fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#C96BC0' }}>
              mí.
            </span>
          </h2>

          <div className="sobre-mi-text">
            <p className="sobre-mi-bold">
              Soy María Belén, médica veterinaria y apasionada por la nutrición animal.
            </p>
            <p className="sobre-mi-body">
              A lo largo de mi camino entendí que la alimentación no solo nutre el cuerpo, sino también la vida que compartimos con nuestros animales.
            </p>
            <p className="sobre-mi-body">
              Mi misión es ayudarte a que tu compañero viva más años, con más salud y bienestar, a través de herramientas naturales y personalizadas.
            </p>
            <p className="sobre-mi-quote">
              🌱 La salud de tu mascota empieza en su plato.
            </p>

            <div className="badge-row">
              {['MÉDICA VETERINARIA', 'NUTRICIÓN ANIMAL', 'CÓRDOBA, AR'].map((text, idx) => (
                <div key={idx} className="badge">
                  <Check size={14} color="#C96BC0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── FILOSOFÍA / ORIGEN ────────────────────────────────────────────────────────
function Filosofia() {
  return (
    <section className="filosofia-section">
      <div className="filosofia-glow" />
      <div className="container-wide">
        <div className="filosofia-header">
          <span className="font-sora" style={{ fontWeight: 300, fontSize: '13px', color: '#a89ab8', marginBottom: '16px' }}>
            Lo normal es gastar en veterinarios, medicamentos y cirugías.
          </span>
          <h2 className="filosofia-title">
            Nosotros preguntamos: ¿y si el origen está en lo que <span style={{ color: '#d966a8', fontStyle: 'italic' }}>come?</span>
          </h2>
        </div>

        <div className="filosofia-grid">
          {[
            { title: 'Nutrición', icon: <HeartPulse size={15} color="#d966a8" strokeWidth={2} />, desc: 'La base de todo. Sin ella, ninguna otra terapia dura.' },
            { title: 'Fitoterapia y Micoterapia', icon: <Leaf size={15} color="#d966a8" strokeWidth={2} />, desc: 'Plantas medicinales y hongos funcionales para regular el metabolismo, modular el sistema inmune y complementar su nutrición.' },
            { title: 'Fitoaromaterapia', icon: <Droplets size={15} color="#d966a8" strokeWidth={2} />, desc: 'Aceites esenciales y compuestos volátiles con acción terapéutica de grado médico.' },
            { title: 'Flores de Bach', icon: <Flower2 size={15} color="#d966a8" strokeWidth={2} />, desc: 'Equilibrio emocional que impacta la salud física.' }
          ].map((item, idx) => (
            <div key={idx} className="filosofia-col" style={{ borderRight: idx < 3 ? '1px solid #2e2040' : 'none' }}>
              <div className="filosofia-col-header">
                {item.icon}
                <span className="filosofia-col-title">{item.title}</span>
              </div>
              <p className="filosofia-col-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// ── PLANES / PRECIOS ──────────────────────────────────────────────────────────
function Plans() {
  const plans = [
    {
      id: 'plan-basica',
      tag: 'Nutrición natural',
      name: 'Consulta Básica',
      price: '$50',
      period: '/ consulta',
      desc: 'Ideal para iniciar a tu perro o gato en una dieta 100% natural.',
      features: [
        'Evaluación del estado actual',
        'Diseño de dieta personalizada',
        'Guía de transición paso a paso',
      ],
      btnLabel: 'Agendar consulta',
      highlight: false,
      recommended: false,
    },
    {
      id: 'plan-integral',
      tag: 'Nutrición + Terapias completas',
      name: 'Consulta Integral',
      price: '$90',
      period: '/ consulta',
      desc: 'Abordaje multiescala para revertir patologías y potenciar longevidad.',
      features: [
        'Evaluación clínica profunda',
        'Diseño de dieta terapéutica',
        'Protocolo de Fitoterapia',
        'Protocolo de Micoterapia',
        'Soporte continuo por 1 mes',
      ],
      btnLabel: 'Agendar consulta',
      highlight: true,
      recommended: true,
    },
    {
      id: 'plan-botanica',
      tag: 'Fitoterapia y Micoterapia',
      name: 'Sesión Botánica',
      price: '$40',
      period: '/ consulta',
      desc: '✨ Encontrá el acompañamiento natural más adecuado para tu compañero con herramientas botánicas y vibracionales.',
      features: [
        'Evaluación emocional/física',
        'Fitoterapia',
        'Micoterapia',
        'Flores de Bach',
      ],
      btnLabel: 'Agendar consulta',
      highlight: false,
      recommended: false,
    },
  ];

  return (
    <section id="planes" className="plans-section">
      <div className="container-wide">
        <div className="plans-header">
          <span className="section-label">// planes[]</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Inversión en <span className="section-title-accent">Longevidad</span>.
          </h2>
          <p className="section-subtitle">
            Programas diseñados no como un gasto médico, sino como una inversión directa en años de vida de calidad para tu animal.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className={`plan-card ${p.highlight ? 'plan-highlight' : ''}`}
              style={{ marginTop: p.recommended ? '0' : '2rem' }}
            >
              {p.recommended && (
                <div className="plan-recommended-badge">RECOMENDADO</div>
              )}

              <h3 className="plan-name">{p.name}</h3>
              <span className="plan-tag">{p.tag}</span>

              <div className="plan-price">
                <span className="plan-amount">{p.price}</span>
                <span className="plan-period">{p.period}</span>
              </div>

              <p className="plan-desc">{p.desc}</p>

              <ul className="feature-list" style={{ margin: '0 0 2rem' }}>
                {p.features.map((feat, idx) => (
                  <li key={idx} className="feature-item">
                    <Check size={16} color={p.highlight ? 'var(--color-primary)' : 'rgba(255,255,255,0.35)'} style={{ flexShrink: 0, marginTop: '2px' }} />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
                className={`plan-cta ${p.highlight ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {p.btnLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ── LUNATURAL BRAND ──────────────────────────────────────────────────────────
function LunaturalBrand() {
  return (
    <section id="lunatural" className="section-lunatural">
      <div className="lunatural-glow" />
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lunatural-grid"
        >
          <div>
            <span className="section-label">// lunatural</span>
            <h2 className="lunatural-heading">
              <span className="font-sora" style={{ fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--fg-white)', letterSpacing: '-0.03em' }}>
                Línea{' '}
              </span>
              <span className="title-italic">Lunatural</span>
              <img
                src="/images/Logo Lunatural.png"
                alt="Lunatural"
                className="lunatural-logo-inline"
              />
            </h2>
            <p className="lunatural-desc">
              Una línea premium de preparados fitoaromáticos diseñados para potenciar el bienestar de tu compañero desde la naturaleza. Aromaterapia, ungüentos, pipetas botánicas y aceites esenciales formulados con ingredientes puros y un profundo conocimiento veterinario.
            </p>
            <Link to="/lunatural-productos" className="btn-primary">
              Explorar productos
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="lunatural-image-wrap">
            <div className="lunatural-image-frame">
              <img
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80"
                alt="Línea Lunatural"
                className="lunatural-image"
                onError={e => { e.currentTarget.style.display = "none" }}
              />
            </div>
            <div className="lunatural-image-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// ── LUNATURAL DETAIL ──────────────────────────────────────────────────────────
export function LunaturalDetail() {
  const products = [
    {
      id: 'pipeta',
      name: 'Pipeta Natural',
      badge: 'Antiparasitario',
      img: '/images/Pipeta Natural.png',
      tagline: 'Protección natural de amplio espectro.',
      benefits: ['Repelente natural de pulgas y garrapatas', 'Aceites esenciales de citronela y neem', 'Apta para cachorros mayores de 6 meses'],
    },
    {
      id: 'balsamo',
      name: 'Bálsamo Hidratante',
      badge: 'Cuidado de Piel',
      img: '/images/Unguento.png',
      tagline: 'Nutrición profunda para piel y almohadillas.',
      benefits: ['Hidratación con manteca de karité y caléndula', 'Hidratación para trufa, almohadillas y callos', 'Sin parabenos ni fragancias sintéticas'],
    },
    {
      id: 'crema',
      name: 'Ungüento Cicatrizante',
      badge: 'Cicatrizante',
      img: '/images/Balsamo.png',
      tagline: 'Protege la herida y acelera cicatrización.',
      benefits: ['Fórmula con aceites vegetales, aceites esenciales y cera de abejas', 'Protección, nutrición y elasticidad', 'Aplicación diaria no grasosa'],
    },
    {
      id: 'personalizado',
      name: 'Tu Preparado Natural',
      price: 'A medida',
      badge: 'Personalizado',
      img: '/images/Tu Preparado Natural.png',
      tagline: 'Formulado exclusivamente para las necesidades de tu compañero.',
      benefits: ['Fórmula única según lo que necesite tu mascota', 'Ingredientes botánicos 100% naturales', 'Preparado por veterinaria especializada'],
    },
  ];

  return (
    <section id="lunatural-productos" className="section-products">
      <div className="products-glow" />
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="products-header"
        >
          <span className="section-label">// productos</span>
          <h2 className="products-heading">
            Conocé nuestra{' '}
            <span className="section-title-accent">línea natural</span>
            <img
              src="/images/Logo Lunatural.png"
              alt="Lunatural"
              className="products-logo"
            />
          </h2>
        </motion.div>

        <div className="products-grid">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              className="product-card"
            >
              <div className="product-card-image">
                <img
                  src={p.img}
                  alt={p.name}
                  className="product-card-img"
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <span className="badge-product">{p.badge}</span>
              </div>
              <div className="product-card-body">
                <div className="product-card-header">
                  <h3 className="product-card-name">{p.name}</h3>
                  {p.price && (
                    <span className="product-card-price">{p.price}</span>
                  )}
                </div>
                <p className="product-card-tagline">{p.tagline}</p>
                <ul className="product-card-benefits">
                  {p.benefits.map((b, j) => (
                    <li key={j} className="product-card-benefit">
                      <Sparkles size={14} className="product-card-benefit-icon" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://api.whatsapp.com/send/?phone=5493517012047&text=Hola%2C+quiero+informaci%C3%B3n+sobre+${encodeURIComponent(p.name)}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary product-card-cta"
                >
                  Consultar
                  <FlaskConical size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// ── CTA ───────────────────────────────────────────────────────────────────────
export function CTA() {
  return (
    <section id="contacto" className="cta-section section-pad">
      <div className="container-wide">
        <h2 className="cta-title">
          La consulta que marca un <span style={{ color: 'var(--color-primary)' }}>antes y un después.</span>
        </h2>
        <p className="cta-sub">
          Los turnos son limitados por la dedicación que requiere cada caso clínico. Escribime por WhatsApp para reservar tu espacio.
        </p>
        <a href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="btn-primary cta-btn">
          <span>Ir a WhatsApp</span>
          <ArrowUpRight size={24} />
        </a>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h3 className="footer-brand-title">María Belén Díaz</h3>
          <p className="footer-brand-sub">NUTRICIÓN ANIMAL INTEGRATIVA</p>
          <p className="footer-brand-desc">
            Medicina biológica y evolutiva aplicada a pequeños animales.
          </p>
        </div>
        <div className="footer-cols">
          <div className="footer-col" style={{ gap: '1rem' }}>
            <span className="footer-col-title">NAVEGACIÓN</span>
            {[['Inicio','#inicio'],['Sobre mí','#sobre-mi'],['Planes','#planes'],['Lunatural','#lunatural']].map(([l,h]) => (
              <a key={h} href={h} onClick={smoothScroll} className="footer-link">{l}</a>
            ))}
          </div>
          <div className="footer-col" style={{ gap: '1rem' }}>
            <span className="footer-col-title">REDES</span>
            <a href="https://www.instagram.com/mariabelendiaz_nutricionanimal" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp
            </a>
            <a href="https://www.tiktok.com/@mariabelendiaznutrionani" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.83 1.56V6.79a4.85 4.85 0 01-1.06-.1z"/></svg>
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 MARÍA BELÉN DÍAZ. TODOS LOS DERECHOS RESERVADOS.</span>
        <span>SYS_RUNNING</span>
      </div>
    </footer>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
export default function PresetD() {
  return (
    <div className="presetd-root">
      <Navbar />
      <Hero />
      <SobreMi />
      <Filosofia />
      <Plans />
      <LunaturalBrand />
      <CTA />
      <Footer />

      <div className="status-badge">
        <div className="status-dot-wrap">
          <span className="status-dot-pulse" />
          <span className="status-dot-core" />
        </div>
        <span className="status-text">Consultas disponibles: Activo</span>
      </div>
    </div>
  );
}
