import React, { useState } from "react";
import "../../components/shared/styles/global.css";
import Navigation from "../../components/shared/Navigation"; 

type Category = {
  id: string;
  name: string;
  description: string;
};

type Testimony = {
  title: string;
  author: string;
  content: string;
};

const categories: Category[] = [
  { id: "salvation", name: "Salvation", description: "Conversion and being born again." },
  { id: "repentance", name: "Repentance & Rededication", description: "Returning to God and renewing commitment." },
  { id: "deliverance", name: "Deliverance", description: "Freedom from bondage and oppression." },
  { id: "healing", name: "Healing", description: "Physical, emotional, and mental restoration." },
  { id: "provision", name: "Provision & Financial Breakthrough", description: "God’s supernatural supply." },
  { id: "protection", name: "Protection & Preservation", description: "Divine safety and rescue." },
  { id: "guidance", name: "Guidance & Direction", description: "Clarity and leading from God." },
  { id: "transformation", name: "Transformation", description: "Changed life and character." },
  { id: "calling", name: "Calling & Ministry", description: "Discovering purpose and assignment." },
  { id: "faith", name: "Faith & Trust", description: "Trusting God through difficult seasons." },
  { id: "restoration", name: "Restoration", description: "Rebuilding what was lost." },
  { id: "trials", name: "Victory Over Trials", description: "Overcoming hardship and persecution." },
  { id: "supernatural", name: "Supernatural Encounters", description: "Dreams, visions, and divine encounters." },
  { id: "evangelism", name: "Evangelism & Soul-Winning", description: "Leading others to Christ." },
  { id: "gratitude", name: "Gratitude & Praise", description: "Thanksgiving for God’s goodness." },
  { id: "breakthrough", name: "Breakthrough", description: "Sudden change after long struggle." },
  { id: "family", name: "Family & Generational", description: "Transformation within families." },
  { id: "career", name: "Academic & Career", description: "Success in school and workplace." },
  { id: "crisis", name: "Crisis & Rescue", description: "God intervening in emergencies." },
  { id: "daily", name: "Daily Walk", description: "Everyday experiences with God." },
];

const testimonies: Record<string, Testimony[]> = {
  salvation: [
    {
      title: "Found True Peace",
      author: "John M.",
      content:
        "I gave my life to Christ and experienced true peace for the first time. My life was filled with confusion before, but now I walk in clarity and purpose daily."
    },
    {
      title: "A New Beginning",
      author: "Sarah K.",
      content:
        "After years of searching, I found purpose in Jesus. Everything changed when I surrendered my life fully to Him."
    }
  ],
  repentance: [
    {
      title: "Restored Again",
      author: "Anonymous",
      content:
        "I returned to God after drifting away, and He restored me completely and renewed my strength."
    }
  ],
  deliverance: [
    {
      title: "Set Free",
      author: "Michael T.",
      content:
        "God delivered me from addiction completely. I am no longer bound by what once controlled me."
    }
  ],
  healing: [
    {
      title: "Healed Completely",
      author: "Grace L.",
      content:
        "I was healed from a long illness doctors couldn’t explain. God showed His power in my life."
    }
  ],
  provision: [],
  protection: [],
  guidance: [],
  transformation: [],
  calling: [],
  faith: [],
  restoration: [],
  trials: [],
  supernatural: [],
  evangelism: [],
  gratitude: [],
  breakthrough: [],
  family: [],
  career: [],
  crisis: [],
  daily: [],
};

const TestimonyMenu: React.FC = () => {
  const [selected, setSelected] = useState<string>("salvation");
  const [activeTestimony, setActiveTestimony] = useState<Testimony | null>(null);

  const selectedCategory = categories.find((c) => c.id === selected);

  return (
    <div className="testimony-page">

      {/* ===== Header & Sidebar ===== */}
      <Navigation />

      {/* HERO */}
      <section className="testimony-hero">
        <div className="testimony-hero-overlay" />
        <div className="testimony-hero-content">
          <h1 className="testimony-hero-title">Testimonies of Grace</h1>
          <p className="testimony-hero-text">
            Explore powerful stories of salvation, healing, and transformation
          </p>
        </div>
      </section>

      {/* MAIN */}
      <div className="testimony-container">

        {/* MOBILE DROPDOWN */}
        <div className="testimony-mobile-select">
          <p className="testimony-guide-text">
            Select a testimony category:
          </p>
          <select
            className="testimony-select"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* SIDEBAR */}
        <aside className="testimony-sidebar">
          <p className="testimony-guide-text">Select a category:</p>

          <div className="testimony-sidebar-scroll">
            <ul className="testimony-sidebar-list">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    className={`testimony-sidebar-btn ${
                      selected === cat.id ? "testimony-active" : ""
                    }`}
                    onClick={() => setSelected(cat.id)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="testimony-sidebar-hint">
            ↓ Scroll for more categories
          </div>
        </aside>

        {/* CONTENT */}
        <main className="testimony-content">
          <h2 className="testimony-title">{selectedCategory?.name}</h2>

          <p className="testimony-description">
            {selectedCategory?.description}
          </p>

          <div className="testimony-cards">
            {testimonies[selected]?.map((item, i) => (
              <div key={i} className="testimony-card">

                <h3 className="testimony-card-title">{item.title}</h3>

                <p className="testimony-card-author">
                  <em>- {item.author}</em>
                </p>

                <p className="testimony-card-text">
                  {item.content.slice(0, 120)}...
                </p>

                <button
                  className="read-more-btn"
                  onClick={() => setActiveTestimony(item)}
                >
                  Read more
                </button>

              </div>
            ))}
          </div>
        </main>
      </div>

      {/* ✅ MODAL */}
      {activeTestimony && (
        <div
          className="testimony-modal-overlay"
          onClick={() => setActiveTestimony(null)}
        >
          <div
            className="testimony-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="testimony-close-btn"
              onClick={() => setActiveTestimony(null)}
            >
              ✕
            </button>

            {/* 👇 SCROLLABLE CONTENT */}
            <div className="testimony-modal-body">
              <h2>{activeTestimony.title}</h2>

              <p className="testimony-modal-author">
                <em>- {activeTestimony.author}</em>
              </p>

              <p className="testimony-modal-content">
                {activeTestimony.content}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="testimony-footer">
        © {new Date().getFullYear()} RCCG Power Assembly
      </footer>
    </div>
  );
};

export default TestimonyMenu;