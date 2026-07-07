import ForviaIcon from "./images/forvia.png";
import SofrecomIcon from "./images/sofrecom.png";
import TalanIcon from "./images/talan.png";

const items = [
  {
    date: "Feb 2025 — Present",
    cardTitle: "AI Software Engineer",
    cardSubtitle: "Talan Tunisia",
    location: "Charguia 1, Tunis",
    accent: "#2196f3",
    cardDetailedText: [
      "Architected TALOS, a multi-agent LangGraph pipeline that autonomously diagnoses and resolves Apex, Flow, and sObject errors for Salesforce development teams.",
      "Designed a Root Cause Analysis agent with 9 diagnostic tools and a Weaviate-backed RAG pipeline, improving diagnostic accuracy by 30% and cutting debugging time by 40%.",
      "Built a Salesforce CLI validation pipeline (dry-run deployment, scoped Apex testing, coverage gating) and resolved 10+ critical defects in the LangGraph state-routing logic.",
      "Automated the fix-to-delivery workflow end-to-end, generating Jira tickets and GitHub pull requests directly from validated diagnoses.",
    ],
    technologies: [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "Weaviate",
      "Salesforce CLI",
      "LangSmith",
      "PostgreSQL",
      "React JS",
      "Docker"
    ],
    icon: TalanIcon,
  },
  {
    date: "Jul 2024 — Sep 2024",
    cardTitle: "Software Engineer Intern",
    cardSubtitle: "Sofrecom Tunisia",
    location: "Tunis",
    accent: "#00bfa5",
    cardDetailedText: [
      "Built a full-stack Request Management Application (MERN) with an Admin Panel for managing coaches, projects, business units, and streams.",
      "Designed an interactive ApexCharts dashboard to visualize request status changes and coach performance.",
      "Set up an automated GitLab CI/CD pipeline for continuous integration and deployment, and implemented API/backend testing with Bruno and Mocha.",
      "Prototyped UI in Canva and iterated through Agile sprints based on user feedback.",
    ],
    technologies: [
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mocha",
      "GitLab CI/CD",
    ],
    icon: SofrecomIcon,
  },
  {
    date: "Jul 2023 — Aug 2023",
    cardTitle: "Web Development Intern",
    cardSubtitle: "Forvia",
    location: "Tunisia",
    accent: "#ff8a65",
    cardDetailedText: [
      "Designed and built a web interface to streamline access to application IP addresses, eliminating manual configuration and error-prone spreadsheet tracking for internal teams.",
    ],
    technologies: ["JavaScript", "HTML/CSS", "REST APIs"],
    icon: ForviaIcon,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="about background-alt">
      <style>{`
        .exp-card {
          position: relative;
          background: #343a40;
          border-radius: 10px;
          padding: 28px 32px;
          margin-bottom: 24px;
          border-left: 4px solid var(--accent);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .exp-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
        }
        .exp-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 14px;
        }
        .exp-card-heading {
          display: flex;
          align-items: center;
          gap: 14px;
        }
          
        .exp-card-logo {
          width: 44px;
          height: 44px;
          object-fit: contain;
          border-radius: 8px;
          background: #dddada;
          padding: 6px;
          flex-shrink: 0;
        }
        .exp-card-title {
          font-size: 1.15em;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.92);
          margin: 0;
        }
        .exp-card-subtitle {
          font-size: 0.95em;
          font-weight: 400;
          color: #8b95a1;
          margin: 2px 0 0;
        }
        .exp-card-date {
          font-size: 0.8em;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 15%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
          padding: 5px 12px;
          border-radius: 20px;
          white-space: nowrap;
        }
        .exp-card-list {
          margin: 0;
          padding-left: 1.1em;
          color: #a9b2b9;
          font-size: 0.95em;
          line-height: 1.6em;
        }
        .exp-card-list li {
          margin-bottom: 6px;
        }
        .exp-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }
        .exp-tech-tag {
          font-size: 0.75em;
          padding: 4px 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          color: #cfd6db;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        @media (max-width: 576px) {
          .exp-card {
            padding: 22px 20px;
          }
        }
      `}</style>

      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Experience</h2>
        </div>
        <div className="row">
          <div className="col-lg-9 mx-auto">
            {items.map((data, i) => (
              <div
                className="exp-card"
                style={{ "--accent": data.accent }}
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="exp-card-header">
                  <div className="exp-card-heading">
                    <img
                      src={data.icon}
                      alt={data.cardSubtitle}
                      className="exp-card-logo"
                    />
                    <div>
                      <h3 className="exp-card-title">{data.cardTitle}</h3>
                      <p className="exp-card-subtitle">
                        {data.cardSubtitle}
                        {data.location ? ` · ${data.location}` : ""}
                      </p>
                    </div>
                  </div>
                  <span className="exp-card-date">{data.date}</span>
                </div>

                <ul className="exp-card-list">
                  {data.cardDetailedText.map((text, idx) => (
                    <li key={idx}>{text}</li>
                  ))}
                </ul>

                {data.technologies && (
                  <div className="exp-tech-row">
                    {data.technologies.map((tech, idx) => (
                      <span className="exp-tech-tag" key={idx}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}