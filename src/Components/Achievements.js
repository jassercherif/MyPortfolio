import { useState } from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import tf_badge from "./images/kodekloud.jpg";
import nvidiaBadge from "./images/Nvidia_(logo).svg.png";
import kaggleBadge from "./images/Kaggle_logo.png";
import salesforceLogo from "./images/salesforce.png";
import neo4jLogo from "./images/neo4j.png";
import datacampLogo from "./images/datacamp.png";

const items = [
    {
        issuer: "Neo4j",
        accent: "#00bfa5",
        img: neo4jLogo,
        cardTitle: "Neo4j Certified Professional",
        issued: "May 2026",
        credentialId: "1c85f8f1-3358-4bdb-92b9-95cc156f2271",
        btnUrl: "https://graphacademy.neo4j.com/c/1c85f8f1-3358-4bdb-92b9-95cc156f2271",
    },
    {
        issuer: "Salesforce",
        accent: "#00a1e0",
        img: salesforceLogo,
        cardTitle: "Salesforce Certified Agentforce Specialist",
        issued: "Nov 2025",
        expires: "Dec 2035",
        credentialId: "7055503",
        btnUrl: "https://www.salesforce.com/trailblazer/jassercherif",
    },
    {
        issuer: "DataCamp",
        accent: "#03ef62",
        img: datacampLogo,
        cardTitle: "LLMOps Concepts",
        issued: "Dec 2024",
        credentialId: "779d9f917f4c27265388056393b88b2ed20b13c2",
        btnUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/779d9f917f4c27265388056393b88b2ed20b13c2",
    },
    {
        issuer: "KodeKloud",
        accent: "#7e57c2",
        img: tf_badge,
        cardTitle: "DevOps Pre-Requisite Course",
        issued: "April 2024",
        btnUrl:
            "https://kodekloud.com/certificate-verification/2DEA71E6C148-2DEA6BE14F20-2DEA6BB3B0A0/",
    },
    {
        issuer: "KodeKloud",
        accent: "#7e57c2",
        img: tf_badge,
        cardTitle: "Jenkins",
        issued: "April 2024",
        btnUrl:
            "https://kodekloud.com/certificate-verification/2D143D54879B-2DEF3760D12C-2D12195335F5/",
    },
    {
        issuer: "NVIDIA",
        accent: "#76b900",
        img: nvidiaBadge,
        cardTitle:
            "Building Transformer-Based Natural Language Processing Applications",
        issued: "March 2024",
        btnUrl:
            "https://courses.nvidia.com/certificates/c48fe0f4df2340a886fc4d15ea0ea487/",
    },
    {
        issuer: "Kaggle",
        accent: "#20beff",
        img: kaggleBadge,
        cardTitle: "Intro to Deep Learning",
        issued: "April 2023",
        btnUrl:
            "https://www.kaggle.com/learn/certification/jassercherif/intro-to-deep-learning",
    },
    {
        issuer: "KodeKloud",
        accent: "#7e57c2",
        img: tf_badge,
        cardTitle: "Kubernetes for the Absolute Beginners — Hands-on Tutorial",
        issued: "September 2024",
        btnUrl:
            "https://kodekloud.com/certificate-verification/23dcba2a-5b42-43e4-9fa6-778f3f4dbbe9/",
    },
    {
        issuer: "KodeKloud",
        accent: "#7e57c2",
        img: tf_badge,
        cardTitle: "Learn Ansible Basics — Beginners Course",
        issued: "September 2024",
        btnUrl:
            "https://kodekloud.com/certificate-verification/4214cff2-afc3-42b0-9ad7-7c62c10b8305/",
    },
    {
        issuer: "KodeKloud",
        accent: "#7e57c2",
        img: tf_badge,
        cardTitle: "Terraform Basics Training Course",
        issued: "September 2024",
        btnUrl:
            "https://kodekloud.com/certificate-verification/5a9b9e86-69a0-41c1-abd5-31210d995d5d/",
    },
    {
        issuer: "Kaggle",
        accent: "#20beff",
        icon: kaggleBadge,
        img: kaggleBadge,
        cardTitle: "Intro to Machine Learning",
        issued: "April 2023",
        btnUrl:
            "https://www.kaggle.com/learn/certification/jassercherif/intro-to-machine-learning",
    },
];

const issuers = ["All", ...Array.from(new Set(items.map((i) => i.issuer)))];

const Achievements = () => {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All" ? items : items.filter((i) => i.issuer === active);

    return (
        <section id="achievements" className="about background-alt">
            <style>{`
        .cert-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 30px;
        }
        .cert-filter-btn {
          font-size: 0.85em;
          font-weight: 600;
          padding: 7px 18px;
          border-radius: 20px;
          background: #343a40;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #a9b2b9;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .cert-filter-btn:hover {
          border-color: rgba(255, 255, 255, 0.3);
          color: #fff;
        }
        .cert-filter-btn.active {
          background: #2196f3;
          border-color: #2196f3;
          color: #fff;
        }
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 22px;
        }
        .cert-card {
          background: #343a40;
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          border-top: 3px solid var(--accent);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cert-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
        }
        .cert-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .cert-badge-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
          padding: 5px;
          flex-shrink: 0;
        }
        .cert-badge-icon {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4em;
          flex-shrink: 0;
        }
        .cert-issuer {
          font-size: 0.72em;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 2px;
        }
        .cert-title {
          font-size: 1.02em;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.92);
          margin: 0;
          line-height: 1.3em;
        }
        .cert-meta {
          font-size: 0.85em;
          color: #8b95a1;
          margin: 0 0 4px;
        }
        .cert-id {
          font-family: "SF Mono", Consolas, monospace;
          font-size: 0.72em;
          color: #6b7480;
          word-break: break-all;
          margin: 6px 0 0;
        }
        .cert-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }
        .cert-skill-tag {
          font-size: 0.72em;
          padding: 3px 10px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          color: #cfd6db;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .cert-footer {
          margin-top: auto;
          padding-top: 16px;
        }
        .cert-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82em;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
          padding: 6px 14px;
          border-radius: 18px;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .cert-link-btn:hover {
          background: var(--accent);
          color: #14181b;
        }
        @media (max-width: 480px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Certifications</h2>
                </div>

                <div className="cert-filters">
                    {issuers.map((issuer) => (
                        <button
                            key={issuer}
                            className={`cert-filter-btn${active === issuer ? " active" : ""}`}
                            onClick={() => setActive(issuer)}
                        >
                            {issuer}
                        </button>
                    ))}
                </div>

                <div className="cert-grid">
                    {filtered.map((data, i) => (
                        <div
                            className="cert-card"
                            style={{ "--accent": data.accent }}
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={(i % 3) * 100}
                        >
                            <div className="cert-card-header">
                                {data.img ? (
                                    <img
                                        src={data.img}
                                        alt={data.issuer}
                                        className="cert-badge-img"
                                    />
                                ) : (
                                    <div className="cert-badge-icon">
                                        {data.icon || <FaCertificate />}
                                    </div>
                                )}
                                <div>
                                    <p className="cert-issuer">{data.issuer}</p>
                                    <h3 className="cert-title">{data.cardTitle}</h3>
                                </div>
                            </div>

                            <p className="cert-meta">
                                Issued {data.issued}
                                {data.expires ? ` · Expires ${data.expires}` : ""}
                            </p>

                            {data.credentialId && (
                                <p className="cert-id">ID: {data.credentialId}</p>
                            )}

                            {data.skills && (
                                <div className="cert-skills">
                                    {data.skills.map((skill, idx) => (
                                        <span className="cert-skill-tag" key={idx}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="cert-footer">
                                <a
                                    className="cert-link-btn"
                                    href={data.btnUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Show credential <FaExternalLinkAlt size={11} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;