"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ExternalLink,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Star,
  X
} from "lucide-react";

const initialGallery = [
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlqiUesZDteLlxQee8ZI1SzXQHdZwCaexaHCe4z65NIYI8sEmfqpT4SF0uzX6g-40JZUODIXJbvT1ePEJhzmq6jDfzdN7SdTuS8xdbJrIN49NtxkMDBCXj6LwAF9XOMpW_X1cpnLg=w900-h1200-k-no",
  "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=QwjufOyaAFDz9l6oogXXng&cb_client=maps_sv.tactile.gps&w=900&h=1200&yaw=112.415054&pitch=0&thumbfov=100"
];

const services = [
  { title: "Strzyżenie", text: "Precyzyjne cięcie dopasowane do stylu i rodzaju włosów." },
  { title: "Modelowanie", text: "Wykończenie fryzury z dbałością o kształt i trwałość." },
  { title: "Stylizacja", text: "Fryzura na co dzień, ważne wyjście lub specjalną okazję." },
  { title: "Konsultacja", text: "Rozmowa o zmianie, pielęgnacji i kierunku stylizacji." }
];

const reviews = [
  {
    name: "Theo Skoczynski",
    text: "Wspaniałe miejsce. Cudowna obsługa. Pełen profesjonalizm.",
    date: "6 miesięcy temu"
  },
  {
    name: "Angelika Szmigielska",
    text: "Polecam Pawła Piekuta, najlepszy fryzjer w mieście!",
    date: "11 miesięcy temu"
  },
  {
    name: "Ela Kaproń",
    text: "Profesjonalizm, precyzja i dbałość o każdy detal sprawiają, że chętnie tu wracam.",
    date: "rok temu"
  }
];

export default function Home() {
  const [gallery, setGallery] = useState(initialGallery);
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [newImage, setNewImage] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("unique-gallery");
    if (saved) setGallery(JSON.parse(saved));
  }, []);

  const saveGallery = (next: string[]) => {
    setGallery(next);
    window.localStorage.setItem("unique-gallery", JSON.stringify(next));
    setNotice("Galeria została zapisana w tej przeglądarce.");
    setTimeout(() => setNotice(""), 2500);
  };

  const hours = useMemo(
    () => [
      ["Poniedziałek", "09:00–18:00"],
      ["Wtorek", "09:00–18:00"],
      ["Środa", "09:00–18:00"],
      ["Czwartek", "09:00–18:00"],
      ["Piątek", "09:00–18:00"],
      ["Sobota", "09:00–14:00"],
      ["Niedziela", "Zamknięte"]
    ],
    []
  );

  const directions =
    "https://www.google.com/maps/dir/?api=1&destination=Białoskórnicza+5,+50-134+Wrocław";

  return (
    <main>
      <header className="site-header">
        <a href="#" className="brand" aria-label="Unique - strona główna">
          <span className="brand-mark">U</span>
          <span>
            <strong>UNIQUE</strong>
            <small>HAIR STUDIO · WROCŁAW</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#o-nas" onClick={() => setMenuOpen(false)}>O salonie</a>
          <a href="#uslugi" onClick={() => setMenuOpen(false)}>Usługi</a>
          <a href="#galeria" onClick={() => setMenuOpen(false)}>Galeria</a>
          <a href="#opinie" onClick={() => setMenuOpen(false)}>Opinie</a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a>
        </nav>

        <a className="header-cta" href="tel:+48713448003">
          <Phone size={17} /> 71 344 80 03
        </a>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Otwórz menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> SALON FRYZJERSKI · WROCŁAW</p>
          <h1>Twój styl.<br /><em>Twoje Unique.</em></h1>
          <p className="hero-lead">
            Kameralny salon w samym centrum Wrocławia. Dobre cięcie, świadoma stylizacja
            i obsługa, do której chce się wracać.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#kontakt">Umów wizytę <ArrowRight size={18} /></a>
            <a className="button button-light" href={directions} target="_blank" rel="noreferrer">
              <MapPin size={18} /> Wyznacz trasę
            </a>
          </div>
          <div className="hero-trust">
            <div><Star fill="currentColor" size={16} /> <strong>4,6</strong><span> / 5</span></div>
            <div className="divider" />
            <div><strong>60</strong><span> opinii Google</span></div>
            <div className="divider" />
            <div><Check size={16} /> Przyjazny salon</div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image" style={{ backgroundImage: `url(${gallery[0]})` }} />
          <div className="hero-card">
            <Scissors size={18} />
            <div>
              <strong>Unique</strong>
              <span>Białoskórnicza 5</span>
            </div>
          </div>
          <div className="hero-stamp">EST.<br />WROCŁAW</div>
        </div>
      </section>

      <section className="quick-bar">
        <a href={directions} target="_blank" rel="noreferrer"><MapPin /> <span>Wyznacz trasę</span></a>
        <a href="#galeria"><span className="dot" /> Zobacz galerię</a>
        <a href="tel:+48713448003"><Phone /> <span>Zadzwoń</span></a>
        <a href="https://unique.wroc.pl/" target="_blank" rel="noreferrer"><ExternalLink /> <span>unique.wroc.pl</span></a>
      </section>

      <section className="section intro" id="o-nas">
        <div className="section-label">01 / O SALONIE</div>
        <div className="intro-grid">
          <div>
            <h2>Miejsce, w którym<br /><em>fryzura ma znaczenie.</em></h2>
          </div>
          <div className="intro-text">
            <p>
              Unique to salon fryzjerski przy Białoskórniczej 5, gdzie liczy się efekt,
              ale też cała wizyta. Bez pośpiechu, bez przypadkowych decyzji. Najpierw
              rozmowa, później cięcie lub stylizacja dopasowana do Ciebie.
            </p>
            <div className="mini-facts">
              <div><strong>01</strong><span>Centrum Wrocławia</span></div>
              <div><strong>02</strong><span>Indywidualne podejście</span></div>
              <div><strong>03</strong><span>Profesjonalna obsługa</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section" id="uslugi">
        <div className="section-label">02 / USŁUGI</div>
        <div className="section-heading">
          <div>
            <h2>Prosto. Precyzyjnie.<br /><em>Po Twojemu.</em></h2>
          </div>
          <p>Zakres usług można łatwo rozbudować w panelu właściciela wraz z cenami i opisami.</p>
        </div>
        <div className="service-grid">
          {services.map((service, i) => (
            <article className="service-card" key={service.title}>
              <span>0{i + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ArrowRight size={18} />
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="galeria">
        <div className="gallery-head">
          <div>
            <div className="section-label">03 / GALERIA</div>
            <h2>Zobacz <em>Unique.</em></h2>
          </div>
          <p>Zdjęcia salonu i realizacji. Właściciel może wymieniać galerię bez ruszania kodu.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((src, index) => (
            <button className={index === 0 ? "gallery-item large" : "gallery-item"} key={src + index} onClick={() => setActiveImage(index)}>
              <img src={src} alt={`Unique, galeria ${index + 1}`} />
              <span>0{index + 1}</span>
            </button>
          ))}
          <div className="gallery-note">
            <Scissors />
            <strong>Naturalny styl.<br />Dopracowany detal.</strong>
            <span>Dodaj własne zdjęcia w panelu właściciela.</span>
          </div>
        </div>
      </section>

      <section className="section reviews-section" id="opinie">
        <div className="section-label">04 / OPINIE</div>
        <div className="review-top">
          <div>
            <h2>4,6 <Star fill="currentColor" size={30} /></h2>
            <p>na podstawie 60 opinii Google</p>
          </div>
          <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Unique+Białoskórnicza+5+Wrocław" target="_blank" rel="noreferrer">
            Zobacz profil Google <ArrowRight size={17} />
          </a>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="stars">★★★★★</div>
              <p>“{review.text}”</p>
              <div className="review-author"><strong>{review.name}</strong><span>{review.date}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div className="contact-main">
          <div className="section-label">05 / KONTAKT</div>
          <h2>Wpadnij do<br /><em>Unique.</em></h2>
          <p>Białoskórnicza 5<br />50-134 Wrocław</p>
          <div className="contact-actions">
            <a className="button button-light" href={directions} target="_blank" rel="noreferrer"><MapPin size={18} /> Wyznacz trasę</a>
            <a className="button button-outline-light" href="tel:+48713448003"><Phone size={18} /> 71 344 80 03</a>
          </div>
        </div>
        <div className="hours-card">
          <div className="hours-title"><Clock3 /> GODZINY OTWARCIA</div>
          {hours.map(([day, time]) => (
            <div className="hours-row" key={day}><span>{day}</span><strong>{time}</strong></div>
          ))}
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="Mapa do salonu Unique"
          src="https://www.google.com/maps?q=Białoskórnicza+5,+50-134+Wrocław&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="map-overlay">
          <MapPin size={18} />
          <div><strong>Unique</strong><span>Białoskórnicza 5, Wrocław</span></div>
        </div>
      </section>

      <footer className="footer">
        <div className="brand footer-brand"><span className="brand-mark">U</span><span><strong>UNIQUE</strong><small>HAIR STUDIO · WROCŁAW</small></span></div>
        <p>© {new Date().getFullYear()} Unique Hair Studio</p>
        <button className="owner-button" onClick={() => setPanelOpen(true)}>Panel właściciela</button>
      </footer>

      {activeImage !== null && gallery.length > 0 && (
        <div className="lightbox" onClick={() => setActiveImage(-1)} style={{ display: activeImage >= 0 ? "flex" : "none" }}>
          <button className="lightbox-close" onClick={() => setActiveImage(-1)}><X /></button>
          <button className="lightbox-arrow left" onClick={(e) => { e.stopPropagation(); setActiveImage((activeImage - 1 + gallery.length) % gallery.length); }}><ChevronLeft /></button>
          <img src={gallery[activeImage]} alt="Podgląd galerii" onClick={(e) => e.stopPropagation()} />
          <button className="lightbox-arrow right" onClick={(e) => { e.stopPropagation(); setActiveImage((activeImage + 1) % gallery.length); }}><ChevronRight /></button>
        </div>
      )}

      {panelOpen && (
        <div className="panel-backdrop">
          <div className="owner-panel">
            <button className="panel-close" onClick={() => setPanelOpen(false)}><X /></button>
            {!authorized ? (
              <div className="login-box">
                <div className="panel-icon"><Scissors /></div>
                <div className="section-label">STREFA WŁAŚCICIELA</div>
                <h2>Panel <em>Unique.</em></h2>
                <p>Wersja demonstracyjna panelu. Hasło: <strong>unique2026</strong></p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" onKeyDown={(e) => e.key === "Enter" && setAuthorized(password === "unique2026")} />
                <button className="button button-dark full" onClick={() => setAuthorized(password === "unique2026")}>Zaloguj się</button>
                {password && password !== "unique2026" && <small className="error">Nieprawidłowe hasło.</small>}
              </div>
            ) : (
              <div>
                <div className="panel-header">
                  <div><div className="section-label">STREFA WŁAŚCICIELA</div><h2>Zarządzaj <em>galerią.</em></h2></div>
                  <button className="logout" onClick={() => setAuthorized(false)}>Wyloguj</button>
                </div>
                <div className="panel-section">
                  <h3>Dodaj zdjęcie</h3>
                  <div className="add-image">
                    <input value={newImage} onChange={(e) => setNewImage(e.target.value)} placeholder="Wklej adres URL zdjęcia" />
                    <button onClick={() => { if (newImage.trim()) { saveGallery([...gallery, newImage.trim()]); setNewImage(""); } }}>Dodaj</button>
                  </div>
                </div>
                <div className="panel-section">
                  <h3>Aktualna galeria</h3>
                  <div className="panel-gallery">
                    {gallery.map((src, i) => (
                      <div key={src + i}>
                        <img src={src} alt="" />
                        <button onClick={() => saveGallery(gallery.filter((_, index) => index !== i))}><X size={15} /></button>
                      </div>
                    ))}
                  </div>
                </div>
                {notice && <div className="notice"><Check size={16} /> {notice}</div>}
                <div className="panel-warning">
                  <strong>Ważne przed sprzedażą strony:</strong>
                  <p>Ten panel zapisuje zmiany lokalnie w przeglądarce. Do prawdziwego panelu właściciela z logowaniem i trwałym uploadem zdjęć warto podłączyć Supabase, Firebase lub Cloudinary.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}