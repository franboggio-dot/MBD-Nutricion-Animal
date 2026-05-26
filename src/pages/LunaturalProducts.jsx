import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, FlaskConical } from 'lucide-react';

const products = [
  {
    id: 'pipeta', name: 'Pipeta Natural', badge: 'Antiparasitario',
    img: '/images/Pipeta.bg.png', tagline: 'Protección natural de amplio espectro.',
    benefits: ['Repelente natural de pulgas y garrapatas', 'Aceites esenciales de citronela y neem', 'Apto para cachorros +4 meses'],
  },
  {
    id: 'balsamo', name: 'Bálsamo Hidratante', badge: 'Cuidado de Piel',
    img: '/images/Balsamo.png', tagline: 'Nutrición profunda para piel y almohadillas.',
    benefits: ['Hidratación con manteca de karité y caléndula', 'Hidratación para trufa, almohadillas y callos', 'Sin parabenos ni fragancias sintéticas'],
  },
  {
    id: 'crema', name: 'Ungüento Cicatrizante', badge: 'Cicatrizante',
    img: '/images/Unguento.png', tagline: 'Alivio natural para irritaciones y alergias.',
    benefits: ['Fórmula con avena coloidal y aloe vera', 'Calma dermatitis y picaduras', 'Aplicación diaria no grasosa'],
  },
  {
    id: 'personalizado', name: 'Tu Preparado Natural', price: 'A medida', badge: 'Personalizado',
    img: '/images/Tu Preparado Natural.png', tagline: 'Formulado exclusivamente para las necesidades de tu compañero.',
    benefits: ['Fórmula única según lo que necesite tu mascota', 'Ingredientes botánicos 100% naturales', 'Preparado por veterinaria especializada'],
  },
];

function BackNav() {
  return (
    <nav className="lunatural-backnav">
      <Link to="/" className="lunatural-backnav-brand">
        <img src="/logo.png" alt="Logo MB.DÍAZ" className="lunatural-backnav-logo" />
        <div className="font-sora" style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--fg-white)', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '2px' }}>
          <span style={{ color: 'var(--color-primary)' }}>MBD</span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>.</span>
          <span>Nutrición Animal</span>
        </div>
      </Link>
      <Link to="/" className="lunatural-backnav-back">
        <ArrowLeft size={16} />
        Volver
      </Link>
    </nav>
  );
}

function ProductsSection() {
  return (
    <section id="lunatural-productos" className="section-products" style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', padding: '8rem 2rem 6rem' }}>
      <div className="products-glow" />
      <div className="container-wide" style={{ width: '100%' }}>
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
            <img src="/images/Logo Lunatural.png" alt="Lunatural" className="products-logo" />
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
                <img src={p.img} alt={p.name} className="product-card-img" onError={e => { e.currentTarget.style.display = 'none' }} />
                <span className="badge-product">{p.badge}</span>
              </div>
              <div className="product-card-body">
                <div className="product-card-header">
                  <h3 className="product-card-name">{p.name}</h3>
                  {p.price && <span className="product-card-price">{p.price}</span>}
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
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary product-card-cta"
                >
                  Consultar <FlaskConical size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h3 className="footer-brand-title">María Belén Díaz</h3>
          <p className="footer-brand-sub">NUTRICIÓN ANIMAL INTEGRATIVA</p>
          <p className="footer-brand-desc">Medicina biológica y evolutiva aplicada a pequeños animales.</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col" style={{ gap: '1rem' }}>
            <span className="footer-col-title">Navegación</span>
            {[['Inicio', '/'], ['Sobre mí', '/#sobre-mi'], ['Planes', '/#planes'], ['Lunatural', '/#lunatural']].map(([l, h]) => (
              <Link key={l} to={h} className="footer-link">{l}</Link>
            ))}
          </div>
          <div className="footer-col" style={{ gap: '1rem' }}>
            <span className="footer-col-title">Contacto</span>
            <a href="https://api.whatsapp.com/send/?phone=5493517012047&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
            <a href="mailto:hola@mariabelendiaz.com" className="footer-link">hola@mariabelendiaz.com</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{ justifyContent: 'center' }}>
        &copy; {new Date().getFullYear()} María Belén Díaz — Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default function LunaturalProducts() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="presetd-root">
      <BackNav />
      <ProductsSection />
      <Footer />
    </div>
  );
}
