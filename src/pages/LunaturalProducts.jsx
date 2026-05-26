import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, FlaskConical } from 'lucide-react';

// ── PRODUCT DATA ──────────────────────────────────────────────────────────────
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

// ── SIMPLE BACK NAV ───────────────────────────────────────────────────────────
function BackNav() {
  return (
    <nav style={{
      position: 'fixed', top: '1.25rem', left: '50%', transform: 'translateX(-50%)',
      zIndex: 1000, width: 'calc(100% - 3rem)', maxWidth: '1200px',
      borderRadius: '3rem', padding: '0.65rem 2.25rem',
      background: 'rgba(14, 12, 35, 0.85)',
      backdropFilter: 'blur(24px)',
      border: '1px solid rgba(166,117,163,0.15)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem',
    }}>
      <Link to="/" style={{
        display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none',
      }}>
        <img src="/logo.png" alt="Logo MB.DÍAZ" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-primary)', boxShadow: '0 0 10px rgba(196,108,184,0.3)' }} />
        <div style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: '1rem', color: 'var(--fg-white)', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '2px' }}>
          <span style={{ color: 'var(--color-primary)' }}>MBD</span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>.</span>
          <span>Nutrición Animal</span>
        </div>
      </Link>

      <Link to="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        fontFamily: '"Sora", sans-serif', fontSize: '0.85rem', fontWeight: 600,
        color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
        padding: '0.5rem 1rem', borderRadius: '2rem',
        background: 'rgba(255,255,255,0.06)',
        transition: 'background 0.2s, color 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
      >
        <ArrowLeft size={16} />
        Volver
      </Link>
    </nav>
  );
}

// ── PRODUCTS SECTION ──────────────────────────────────────────────────────────
function ProductsSection() {
  return (
    <section id="lunatural-productos" style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '8rem 2rem 6rem',
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0F0C28 0%, #181344 50%, #2A1D50 100%)'
    }}>
      <div style={{ position: 'absolute', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(202,122,41,0.12) 0%, transparent 60%)', bottom: '-10%', right: '-5%', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2, width: '100%' }}>
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
// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
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
            <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.65rem', color: 'var(--color-primary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Navegación</span>
            {[['Inicio', '/'], ['Sobre mí', '/#sobre-mi'], ['Planes', '/#planes'], ['Lunatural', '/#lunatural']].map(([l, h]) => (
              <Link key={l} to={h} style={{ fontFamily: '"Sora", sans-serif', fontSize: '0.85rem', color: 'var(--fg-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-muted)'}
              >{l}</Link>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.65rem', color: 'var(--color-primary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Contacto</span>
            <a href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Sora", sans-serif', fontSize: '0.85rem', color: 'var(--fg-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-muted)'}
            >WhatsApp</a>
            <a href="mailto:hola@mariabelendiaz.com" style={{ fontFamily: '"Sora", sans-serif', fontSize: '0.85rem', color: 'var(--fg-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-muted)'}
            >hola@mariabelendiaz.com</a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '4rem auto 0', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.04)', fontFamily: '"Fira Code", monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} María Belén Díaz — Todos los derechos reservados.
      </div>
    </footer>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function LunaturalProducts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100dvh', color: 'var(--fg-white)' }}>
      <BackNav />
      <ProductsSection />
      <Footer />

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
