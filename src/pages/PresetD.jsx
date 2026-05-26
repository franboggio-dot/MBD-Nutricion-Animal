import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight, HeartPulse,
  Leaf, Droplets, Flower2, Check,
  Sparkles, FlaskConical, ArrowRight
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
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Planes', href: '#planes' },
    { label: 'Lunatural', href: '#lunatural' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: '1.25rem', left: '50%', transform: 'translateX(-50%)',
      zIndex: 1000, width: 'calc(100% - 3rem)', maxWidth: '1200px',
      borderRadius: '3rem', padding: '0.65rem 0.65rem 0.65rem 2.25rem',
      background: scrolled ? 'rgba(14, 12, 35, 0.92)' : 'rgba(14,12,35,0.55)',
      backdropFilter: 'blur(24px)',
      border: scrolled ? '1px solid rgba(166,117,163,0.3)' : '1px solid rgba(166,117,163,0.1)',
      transition: 'all 0.45s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src="/logo.png" alt="Logo MB.DÍAZ" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-primary)', boxShadow: '0 0 10px rgba(196,108,184,0.3)' }} />
        <div style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: '1.05rem', color: 'var(--fg-white)', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '2px' }}>
          <span style={{ color: 'var(--color-primary)' }}>MBD</span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>.</span>
          <span>Nutrición Animal</span>
        </div>
      </div>

      <div className="navbar-links" style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={smoothScroll} style={{
            fontFamily: '"Sora", sans-serif', fontSize: '0.875rem', fontWeight: 500,
            color: 'rgba(255,255,255,0.65)', textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
          >{l.label}</a>
        ))}
      </div>

      <a href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="navbar-cta" style={{
        background: 'var(--color-primary)', color: 'var(--fg-white)',
        padding: '0.8rem 1.6rem', borderRadius: '2rem',
        fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '0.85rem',
        textDecoration: 'none', whiteSpace: 'nowrap',
        boxShadow: '0 4px 20px rgba(196,108,184,0.3)',
      }}>Reservar consulta</a>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  const heroRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrada con fade + scale suave
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
      {/* Background gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, var(--color-gradient-start) 0%, var(--bg-mid) 70%, var(--bg-deep) 100%)', zIndex: 0 }} />
      {/* Radial glow */}
      <div style={{ position: 'absolute', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, var(--color-primary-dark) 0%, transparent 60%)', top: '-10%', right: '-10%', opacity: 0.3, filter: 'blur(120px)', zIndex: 1, pointerEvents: 'none' }} />
      {/* Bottom fade-out to merge with cards */}
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
            {/* Botón CTA con shimmer */}
            <a href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="cta-shimmer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              background: 'var(--color-accent)', color: 'var(--fg-white)',
              padding: '1.15rem 2.25rem', borderRadius: '3rem',
              fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '1rem',
              textDecoration: 'none', boxShadow: '0 8px 32px rgba(202,122,41,0.35)',
              position: 'relative', overflow: 'hidden',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(202,122,41,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(202,122,41,0.35)'; }}
            >Quiero mejorar su salud</a>

            {/* Punto CUPOS con pulso */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                <span style={{ position: 'absolute', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', animation: 'pulse-dot 2s ease-out infinite 0.5s' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block', position: 'relative', zIndex: 1 }} />
              </span>
              <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.72rem', color: 'var(--color-support-1)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Atención personalizada
              </span>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '1.5rem', margin: '1rem 0 1rem 0' }}>
          <img
            src="/images/hero.png"
            alt="Hero"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(120,60,140,0.35) 0%, transparent 50%)',
            pointerEvents: 'none',
          }} />
        </div>
      </div>

      {/* Keyframes inline */}
      <style>{`
        @keyframes pulse-dot {
          0% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(196,108,184,0.6); }
          70% { transform: scale(2.2); opacity: 0; box-shadow: 0 0 0 10px rgba(196,108,184,0); }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .cta-shimmer::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transform: skewX(-20deg);
          transition: none;
        }
        .cta-shimmer:hover::after {
          animation: shimmer 0.6s ease-in-out;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-revealed {
          animation: fadeSlideUp 0.65s ease-out forwards;
        }
        .card-hidden {
          opacity: 0;
          transform: translateY(32px);
        }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @media (max-width: 860px) {
          #inicio > div:nth-child(4) {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

// ── SOBRE MÍ ────────────────────────────────────────────────────────────────
function SobreMi() {
  return (
    <section id="sobre-mi" style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '8rem 2rem',
      marginTop: '-6rem',
      background: 'linear-gradient(135deg, #0B0820 0%, #15113A 50%, #22164A 100%)'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          {/* Label superior */}
          <span style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '1.5rem',
            color: '#C96BC0'
          }}>
            PRESENTACIÓN
          </span>

          {/* Título */}
          <h2 style={{
            margin: '0 0 2rem',
            lineHeight: 1.1,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#F1F0F7' }}>
              Sobre
            </span>
            <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#C96BC0' }}>
              mí.
            </span>
          </h2>

          <div style={{ maxWidth: '760px', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            {/* Texto en negrita */}
            <p style={{
              fontFamily: '"Sora", sans-serif',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: '#F1F0F7',
              margin: 0,
              lineHeight: 1.6
            }}>
              Soy María Belén, médica veterinaria y apasionada por la nutrición animal.
            </p>

            {/* Párrafo 1 */}
            <p style={{
              fontFamily: '"Sora", sans-serif',
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'rgba(241, 240, 247, 0.75)',
              margin: 0,
              lineHeight: 1.6
            }}>
              A lo largo de mi camino entendí que la alimentación no solo nutre el cuerpo, sino también la vida que compartimos con nuestros animales.
            </p>

            {/* Párrafo 2 */}
            <p style={{
              fontFamily: '"Sora", sans-serif',
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'rgba(241, 240, 247, 0.75)',
              margin: 0,
              lineHeight: 1.6
            }}>
              Mi misión es ayudarte a que tu compañero viva más años, con más salud y bienestar, a través de herramientas naturales y personalizadas.
            </p>

            {/* Frase destacada */}
            <p style={{
              fontFamily: '"Sora", sans-serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '1.2rem',
              color: '#D98A2B',
              marginTop: '1rem',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              🌱 La salud de tu mascota empieza en su plato.
            </p>

            {/* Badges inferiores */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {[
                { text: 'MÉDICA VETERINARIA' },
                { text: 'NUTRICIÓN ANIMAL' },
                { text: 'CÓRDOBA, AR' }
              ].map((badge, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(241, 240, 247, 0.05)',
                  border: '1px solid rgba(201, 107, 192, 0.2)',
                  borderRadius: '9999px',
                  padding: '0.6rem 1.25rem'
                }}>
                  <Check size={14} color="#C96BC0" />
                  <span style={{
                    fontFamily: '"Sora", sans-serif',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    color: '#F1F0F7',
                    letterSpacing: '0.05em'
                  }}>
                    {badge.text}
                  </span>
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
    <section className="filosofia-section" style={{
      position: 'relative',
      width: '100%',
      backgroundColor: '#18131f',
      padding: '56px 64px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Radial gradient subtil */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '0',
        transform: 'translateY(-50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, #2a1a3a 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1200px' }}>
        {/* Titular superior */}
        <div style={{ marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span style={{
            fontFamily: '"Sora", sans-serif',
            fontWeight: 300,
            fontSize: '13px',
            color: '#a89ab8',
            marginBottom: '16px',
          }}>
            Lo normal es gastar en veterinarios, medicamentos y cirugías.
          </span>
          <h2 style={{
            fontFamily: '"Instrument Serif", serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(32px, 5vw, 54px)',
            color: '#f0eaf8',
            lineHeight: 1.1,
            margin: 0,
            maxWidth: '900px'
          }}>
            Nosotros preguntamos: ¿y si el origen está en lo que <span style={{ color: '#d966a8', fontStyle: 'italic' }}>come?</span>
          </h2>
        </div>

        {/* 4 columnas */}
        <div className="filosofia-grid" style={{
          borderTop: '1px solid #2e2040',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}>
          {[
            { title: 'Nutrición', icon: <HeartPulse size={15} color="#d966a8" strokeWidth={2} />, desc: 'La base de todo. Sin ella, ninguna otra terapia dura.' },
            { title: 'Fitoterapia y Micoterapia', icon: <Leaf size={15} color="#d966a8" strokeWidth={2} />, desc: 'Plantas medicinales y hongos funcionales para regular el metabolismo, modular el sistema inmune y complementar su nutrición.' },
            { title: 'Fitoaromaterapia', icon: <Droplets size={15} color="#d966a8" strokeWidth={2} />, desc: 'Aceites esenciales y compuestos volátiles con acción terapéutica de grado médico.' },
            { title: 'Flores de Bach', icon: <Flower2 size={15} color="#d966a8" strokeWidth={2} />, desc: 'Equilibrio emocional que impacta la salud física.' }
          ].map((item, idx) => (
            <div key={idx} className="filosofia-col" style={{
              padding: '32px',
              borderRight: idx < 3 ? '1px solid #2e2040' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {item.icon}
                <span style={{ color: '#d966a8', fontWeight: 600, fontSize: '13px', fontFamily: '"Sora", sans-serif' }}>{item.title}</span>
              </div>
              <p style={{ margin: 0, color: '#b0a0c4', fontWeight: 300, fontSize: '13px', fontFamily: '"Sora", sans-serif', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .filosofia-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .filosofia-grid .filosofia-col:nth-child(2) {
            border-right: none !important;
          }
          .filosofia-grid .filosofia-col:nth-child(1),
          .filosofia-grid .filosofia-col:nth-child(2) {
            border-bottom: 1px solid #2e2040;
          }
        }
        @media (max-width: 600px) {
          .filosofia-grid {
            grid-template-columns: 1fr !important;
          }
          .filosofia-grid .filosofia-col {
            border-right: none !important;
            border-bottom: 1px solid #2e2040;
          }
          .filosofia-grid .filosofia-col:last-child {
            border-bottom: none;
          }
          .filosofia-grid {
             padding: 0 16px;
          }
        }
      `}</style>
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
    <section id="planes" className="plans-section" style={{ background: 'var(--bg-deep)', padding: '10rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.72rem', color: 'rgba(166,117,163,0.55)', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
            // planes[]
          </span>
          <h2 style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--fg-white)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Inversión en <span style={{ color: 'var(--color-primary)' }}>Longevidad</span>.
          </h2>
          <p style={{ fontFamily: '"Sora", sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.4)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Programas diseñados no como un gasto médico, sino como una inversión directa en años de vida de calidad para tu animal.
          </p>
        </div>

        {/* Cards */}
        <style>{`
          @media (max-width: 960px) {
            .plans-grid { grid-template-columns: 1fr !important; max-width: 480px; margin-left: auto !important; margin-right: auto !important; }
            .plans-grid > div { margin-top: 0 !important; }
          }
          @media (max-width: 640px) {
            .plans-section { padding: 6rem 1.25rem !important; }
          }
          @media (max-width: 768px) {
            .navbar-links { display: none !important; }
            .navbar-cta { padding: 0.65rem 1.1rem !important; font-size: 0.78rem !important; }
            .filosofia-section { padding: 40px 20px !important; }
            .footer-inner { flex-direction: column !important; gap: 2rem !important; }
            .footer-cols { flex-direction: column !important; gap: 2rem !important; }
          }
        `}</style>
        <div className="plans-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
          {plans.map((p) => (
            <div
              key={p.id}
              id={p.id}
              style={{
                background: p.highlight ? 'rgba(28, 42, 35, 0.95)' : 'rgba(18,15,40,0.85)',
                border: p.highlight ? '1px solid rgba(196,108,184,0.25)' : '1px solid rgba(255,255,255,0.07)',
                borderRadius: '1.5rem',
                padding: '2.5rem 2rem',
                position: 'relative',
                marginTop: p.recommended ? '0' : '2rem',
              }}
            >
              {/* Recommended badge */}
              {p.recommended && (
                <div style={{
                  position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--color-accent)', color: '#fff',
                  fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '0.72rem',
                  letterSpacing: '0.1em', padding: '0.45rem 1.25rem', borderRadius: '2rem',
                  whiteSpace: 'nowrap',
                }}>RECOMENDADO</div>
              )}

              {/* Plan name */}
              <h3 style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, fontSize: '1.7rem', color: 'var(--fg-white)', margin: '0 0 0.4rem', letterSpacing: '-0.01em' }}>
                {p.name}
              </h3>
              <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 500, fontSize: '0.85rem', color: 'var(--color-primary)' }}>
                {p.tag}
              </span>

              {/* Price */}
              <div style={{ margin: '1.75rem 0 1.25rem', display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: '3.5rem', color: 'var(--fg-white)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {p.price}
                </span>
                <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 400, fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
                  {p.period}
                </span>
              </div>

              {/* Description */}
              <p style={{ fontFamily: '"Sora", sans-serif', fontWeight: 300, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: '0 0 1.75rem' }}>
                {p.desc}
              </p>

              {/* Features list */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {p.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Check size={16} color={p.highlight ? 'var(--color-primary)' : 'rgba(255,255,255,0.35)'} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 400, fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.45 }}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'block', textAlign: 'center',
                  background: p.highlight ? 'var(--color-accent)' : 'transparent',
                  border: p.highlight ? 'none' : '1px solid rgba(255,255,255,0.15)',
                  color: 'var(--fg-white)',
                  padding: '1.1rem', borderRadius: '3rem',
                  fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: p.highlight ? '0 8px 30px rgba(202,122,41,0.35)' : 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
    <section id="lunatural" style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '8rem 2rem',
      background: 'linear-gradient(135deg, #0B0820 0%, #15113A 50%, #22164A 100%)'
    }}>
      <div style={{ position: 'absolute', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, var(--color-primary-dark) 0%, transparent 60%)', top: '-20%', left: '-10%', opacity: 0.2, filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
        >
          <div>
            <span style={{ fontFamily: '"Fira Code", monospace', fontSize: "0.72rem", color: "rgba(166,117,163,0.55)", letterSpacing: "0.18em", textTransform: "uppercase", display: "block", marginBottom: "1.25rem" }}>
              // lunatural
            </span>
            <h2 style={{ margin: "0 0 1.5rem", lineHeight: 1.1, display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--fg-white)", letterSpacing: "-0.03em" }}>
                Línea{' '}
              </span>
              <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--color-primary)" }}>
                Lunatural
              </span>
              <img
                src="/images/Logo Lunatural.png"
                alt="Lunatural"
                style={{ height: "clamp(3rem, 6vw, 4.5rem)", width: "auto", display: "inline-block" }}
              />
            </h2>
            <p style={{ fontFamily: '"Sora", sans-serif', fontWeight: 300, fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: "0 0 2rem", maxWidth: "540px" }}>
              Una línea premium de preparados fitoaromáticos diseñados para potenciar el bienestar de tu compañero desde la naturaleza. Aromaterapia, ungüentos, pipetas botánicas y aceites esenciales formulados con ingredientes puros y un profundo conocimiento veterinario.
            </p>
            <Link to="/lunatural-productos" style={{
              display: "inline-flex", alignItems: "center", gap: "0.75rem",
              background: "var(--color-accent)", color: "var(--fg-white)",
              padding: "1.15rem 2.25rem", borderRadius: "3rem",
              fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: "1rem",
              textDecoration: "none", boxShadow: "0 8px 32px rgba(202,122,41,0.35)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(202,122,41,0.55)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(202,122,41,0.35)"; }}
            >
              Explorar productos
              <ArrowRight size={20} />
            </Link>
          </div>
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{
              width: "100%", maxWidth: "500px", aspectRatio: "4/3",
              borderRadius: "1.5rem", overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              background: "rgba(18,15,40,0.6)",
            }}>
              <img
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80"
                alt="Línea Lunatural"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={e => { e.currentTarget.style.display = "none" }}
              />
            </div>
            <div style={{ position: "absolute", width: "80%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,108,184,0.15) 0%, transparent 60%)", bottom: "-10%", right: "-10%", filter: `blur(60px)`, zIndex: -1 }} />
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          #lunatural > div > div > div {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          #lunatural { padding: 5rem 1.5rem !important; }
        }
`}</style>
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
      img: '/images/Pipeta.bg.png',
      tagline: 'Protección natural de amplio espectro.',
      benefits: ['Repelente natural de pulgas y garrapatas', 'Aceites esenciales de citronela y neem', 'Apto para cachorros +4 meses'],
    },
    {
      id: 'balsamo',
      name: 'Bálsamo Hidratante',
      badge: 'Cuidado de Piel',
      img: '/images/Balsamo.png',
      tagline: 'Nutrición profunda para piel y almohadillas.',
      benefits: ['Hidratación con manteca de karité y caléndula', 'Hidratación para trufa, almohadillas y callos', 'Sin parabenos ni fragancias sintéticas'],
    },
    {
      id: 'crema',
      name: 'Ungüento Cicatrizante',
      badge: 'Cicatrizante',
      img: '/images/Unguento.png',
      tagline: 'Alivio natural para irritaciones y alergias.',
      benefits: ['Fórmula con avena coloidal y aloe vera', 'Calma dermatitis y picaduras', 'Aplicación diaria no grasosa'],
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
    <section id="lunatural-productos" style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '8rem 2rem',
      background: 'linear-gradient(135deg, #0F0C28 0%, #181344 50%, #2A1D50 100%)'
    }}>
      <div style={{ position: 'absolute', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(202,122,41,0.12) 0%, transparent 60%)', bottom: '-10%', right: '-5%', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.72rem', color: 'rgba(166,117,163,0.55)', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            // productos
          </span>
          <h2 style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--fg-white)', margin: 0 }}>
            Conocé nuestra{' '}
            <span style={{ color: 'var(--color-primary)' }}>línea natural</span>
            <img
              src="/images/Logo Lunatural.png"
              alt="Lunatural"
              style={{ height: 'clamp(3.5rem, 7vw, 5rem)', width: 'auto', display: 'inline-block' }}
            />
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
        }}>
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                borderRadius: '1.75rem',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden', background: 'rgba(18,15,40,0.6)' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'var(--color-primary)',
                  color: 'var(--fg-white)',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '999px',
                  fontFamily: '"Fira Code", monospace',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  {p.badge}
                </span>
              </div>
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '1.2rem', color: 'var(--fg-white)', margin: 0 }}>
                    {p.name}
                  </h3>
                  {p.price && (
                    <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--color-accent)', whiteSpace: 'nowrap' }}>
                      {p.price}
                    </span>
                  )}
                </div>
                <p style={{ fontFamily: '"Sora", sans-serif', fontWeight: 300, fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                  {p.tagline}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', flex: 1 }}>
                  {p.benefits.map((b, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: '"Sora", sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.6rem' }}>
                      <Sparkles size={14} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://api.whatsapp.com/send/?phone=5493517012047&text=Hola%2C+quiero+informaci%C3%B3n+sobre+${encodeURIComponent(p.name)}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    background: 'var(--color-accent)',
                    color: 'var(--fg-white)',
                    padding: '0.85rem 1.5rem',
                    borderRadius: '3rem',
                    fontFamily: '"Sora", sans-serif',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    boxShadow: '0 6px 24px rgba(202,122,41,0.3)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(202,122,41,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(202,122,41,0.3)'; }}
                >
                  Consultar
                  <FlaskConical size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          #lunatural-productos > div > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          #lunatural-productos { padding: 5rem 1.5rem !important; }
          #lunatural-productos > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
// ── CTA ───────────────────────────────────────────────────────────────────────
export function CTA() {
  return (
    <section id="contacto" style={{ background: 'var(--color-gradient-end)', padding: '8rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top, transparent 0%, var(--bg-deep) 100%)' }} />
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--fg-white)', lineHeight: 1.1, marginBottom: '2rem' }}>
          La consulta que marca un <span style={{ color: 'var(--color-primary)' }}>antes y un después.</span>
        </h2>
        <p style={{ fontFamily: '"Sora", sans-serif', fontSize: '1.2rem', color: 'var(--color-support-2)', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
          Los turnos son limitados por la dedicación que requiere cada caso clínico. Escribime por WhatsApp para reservar tu espacio.
        </p>
        <a href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '1rem',
          background: 'var(--color-accent)', color: 'var(--fg-white)',
          padding: '1.5rem 3.5rem', borderRadius: '4rem',
          fontSize: '1.2rem', fontWeight: 800, textDecoration: 'none',
          boxShadow: '0 20px 50px rgba(202,122,41,0.4)',
          fontFamily: '"Sora", sans-serif', transition: 'transform 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
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
    <footer style={{ background: 'var(--bg-deep)', padding: '4rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="footer-inner" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: '1.2rem', color: 'var(--fg-white)', marginBottom: '0.5rem' }}>María Belén Díaz</h3>
          <p style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.7rem', color: 'var(--color-support-1)' }}>NUTRICIÓN ANIMAL INTEGRATIVA</p>
          <p style={{ fontFamily: '"Sora", sans-serif', fontSize: '0.85rem', color: 'var(--fg-muted)', maxWidth: '280px', marginTop: '1.5rem', lineHeight: 1.7 }}>
            Medicina biológica y evolutiva aplicada a pequeños animales.
          </p>
        </div>
        <div className="footer-cols" style={{ display: 'flex', gap: '4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.7rem', color: 'var(--color-primary)', fontWeight: 700 }}>NAVEGACIÓN</span>
            {[['Inicio','#inicio'],['Sobre mí','#sobre-mi'],['Planes','#planes'],['Lunatural','#lunatural']].map(([l,h]) => (
              <a key={h} href={h} onClick={smoothScroll} style={{ color: 'var(--color-support-2)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: '"Sora", sans-serif' }}>{l}</a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.7rem', color: 'var(--color-primary)', fontWeight: 700 }}>REDES</span>
            <a href="https://www.instagram.com/mariabelendiaz_nutricionanimal" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-support-2)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: '"Sora", sans-serif', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-support-2)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: '"Sora", sans-serif', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp
            </a>
            <a href="https://www.tiktok.com/@mariabelendiaznutrionani" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-support-2)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: '"Sora", sans-serif', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.83 1.56V6.79a4.85 4.85 0 01-1.06-.1z"/></svg>
              TikTok
            </a>

          </div>
        </div>
      </div>


      <div style={{ maxWidth: '1200px', margin: '4rem auto 0', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: '"Fira Code", monospace', fontSize: '0.7rem', color: 'var(--fg-faint)' }}>
        <span>© 2025 MARÍA BELÉN DÍAZ. TODOS LOS DERECHOS RESERVADOS.</span>
        <span>SYS_RUNNING</span>
      </div>
    </footer>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
export default function PresetD() {
  return (
    <div style={{ background: 'var(--bg-deep)', color: 'var(--fg-white)', minHeight: '100vh', scrollBehavior: 'smooth' }}>
      <Navbar />
      <Hero />
      <SobreMi />
      <Filosofia />
      <Plans />
      <LunaturalBrand />
      <CTA />
      <Footer />

      {/* Status Badge */}
      <div style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '1.5rem',
        zIndex: 1000,
        background: 'rgba(10, 10, 20, 0.85)',
        backdropFilter: 'blur(8px)',
        borderRadius: '999px',
        padding: '0.6rem 1.2rem',
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      }}>
        <div style={{ position: 'relative', width: '8px', height: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: '#22c55e', animation: 'pulse-green 2s infinite' }} />
          <span style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', background: '#22c55e' }} />
        </div>
        <span style={{ fontFamily: '"Fira Code", monospace', color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 600 }}>
          Consultas disponibles: Activo
        </span>
      </div>
      <style>{`
        @keyframes pulse-green {
          0% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6); }
          70% { transform: scale(2.2); opacity: 0; box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
