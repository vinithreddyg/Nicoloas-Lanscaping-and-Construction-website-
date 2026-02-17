const services = [
  'Landscaping',
  'Remodeling',
  'Patios',
  'Lawn Service',
  'Trimming',
  'Mulch',
  'Cleanups',
  'And More'
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80',
    alt: 'Freshly cut lawn and landscaping edge'
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    alt: 'New patio stone installation'
  },
  {
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
    alt: 'Outdoor yard cleanup and trimming'
  },
  {
    src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    alt: 'Mulch and garden bed refresh'
  }
];

export default function HomePage() {
  return (
    <main>
      <header className="hero" id="home">
        <nav className="nav container">
          <a href="#home" className="brand">Nicolas Landscaping</a>
          <div className="menu">
            <a href="#services">Services</a>
            <a href="#gallery">Our Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content container">
          <p className="license">NJ Lic. #13VH13569800</p>
          <h1>Nicolas Landscaping & Construction LLC</h1>
          <p>Professional • Reliable • Licensed & Insured</p>
          <div className="actions">
            <a href="tel:+17328676659" className="btn primary">Call Now</a>
            <a href="#contact" className="btn secondary">Free Estimate</a>
          </div>
        </div>
      </header>

      <section className="services section" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service} className="service-card">✅ {service}</article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery" id="gallery">
        <div className="container">
          <h2>Recent Work</h2>
          <div className="gallery-row">
            {galleryImages.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about-grid">
          <div>
            <h2>About Us</h2>
            <p>
              Nicolas Landscaping & Construction LLC is a locally owned and operated
              company serving New Jersey with dependable landscaping and construction
              services.
            </p>
            <p>
              Led by Bernardo Nicolas, we focus on high-quality work, honest pricing,
              and customer satisfaction in every project.
            </p>
            <ul>
              <li>Licensed & Insured</li>
              <li>Experienced & Professional Team</li>
              <li>Customer Satisfaction Guaranteed</li>
            </ul>
          </div>
          <aside className="highlight">
            <p>Manager</p>
            <h3>Bernardo Nicolas</h3>
            <p><strong>NJ License</strong></p>
            <p className="license-id">13VH13569800</p>
          </aside>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact-card">
          <h2>Contact</h2>
          <p>Let&apos;s discuss your next landscaping or construction project.</p>
          <a href="tel:+17328676659">📞 732-867-6659</a>
          <a href="mailto:nicolaslandscapingnj@gmail.com">✉️ nicolaslandscapingnj@gmail.com</a>
        </div>
      </section>

      <a className="mobile-call" href="tel:+17328676659" aria-label="Call Nicolas Landscaping">
        📞
      </a>
    </main>
  );
}
