const items = [
  {
    cardTitle: "TALOS",
    tagline: "Multi-Agent AI System for Salesforce Bug Diagnosis & Resolution",
    featured: true,
    accent: "#2196f3",
    cardDetailedText: [
      "Architected a multi-agent LangGraph pipeline that autonomously diagnoses and resolves Apex, Flow, and sObject errors for Salesforce development teams.",
      "Built a Root Cause Analysis agent with 9 diagnostic tools and a Weaviate-backed RAG pipeline, improving diagnostic accuracy by 30% and cutting debugging time by 40%.",
      "Automated Salesforce CLI validation (dry-run deployment, scoped Apex testing, coverage gating) and resolved 10+ critical LangGraph state-routing defects.",
      "Closed the loop end-to-end: validated diagnoses automatically generate Jira tickets and GitHub pull requests.",
    ],
    technologies: [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "Weaviate",
      "Salesforce CLI",
      "LangSmith",
    ],
    links: [],
  },
  {
    cardTitle: "GraphTravelAssistant",
    tagline: "Hybrid GraphRAG Travel Assistant",
    accent: "#00bfa5",
    cardDetailedText: [
      "Designed a Hybrid GraphRAG architecture on Neo4j, combining graph-based reasoning with semantic vector retrieval for context-aware Q&A.",
      "Built an automated knowledge-ingestion pipeline with Firecrawl MCP and LLMGraphTransformer, turning unstructured web content into a structured, queryable knowledge graph.",
      "Served hybrid retrieval over embedded document chunks through a FastAPI + LangChain REST layer.",
    ],
    technologies: ["Neo4j", "LangChain", "FastAPI", "Firecrawl MCP", "GraphRAG"],
    links: [],
  },
  {
    cardTitle: "FutureCover",
    tagline: "AI-Powered Insurance Platform",
    accent: "#ff8a65",
    cardDetailedText: [
      "Built a full insurance service platform on Salesforce (Experience Cloud, Flow Builder, Apex), automating quote generation and contract creation via CongaSign and Visualforce.",
      "Integrated a real-time fraud-detection engine (Isolation Forest, Autoencoder, XGBoost, Llama3-7B) with Flask to score and flag suspicious claims.",
    ],
    technologies: ["Salesforce", "Apex", "Flask", "XGBoost", "Llama3-7B"],
    links: [],
  },
  {
    cardTitle: "AI Voice Intelligence Platform",
    tagline: "Customer Conversation Analysis",
    accent: "#ba68c8",
    cardDetailedText: [
      "Built a cross-platform mobile app (React Native, FastAPI, Supabase) deployed as a Microsoft Teams tab.",
      "Integrated Whisper speech-to-text and an LLM summarization layer to extract insights and action items from sales conversations in real time.",
    ],
    technologies: ["React Native", "FastAPI", "Supabase", "Whisper"],
    links: [],
  },
  {
    cardTitle: "HandDrawn Interface Coder",
    tagline: "Sketch-to-Code with Computer Vision",
    accent: "#ffd54f",
    cardDetailedText: [
      "Developed an intelligent application that uses AI to convert hand-drawn wireframes into working code.",
      "Used CNNs for image recognition and EasyOCR for text extraction from sketches.",
      "Built with a React.js frontend and a Spring Boot + Flask microservices backend for scalability.",
    ],
    technologies: [
      "React JS",
      "Spring Boot",
      "Flask",
      "TensorFlow",
      "EasyOCR",
      "OpenCV",
    ],
    links: [
      {
        url: "https://github.com/khaledmraad/PCD_Drawini",
        text: "View Source Code",
      },
    ],
  },
];

const Projects = () => {
  const featured = items.find((item) => item.featured);
  const rest = items.filter((item) => !item.featured);

  return (
    <section id="projects" className="about background-alt">
      <style>{`
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }
        .proj-card {
          background: #343a40;
          border-radius: 12px;
          padding: 26px 28px;
          border-top: 3px solid var(--accent);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .proj-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
        }
        .proj-card--featured {
          grid-column: 1 / -1;
          border-top: none;
          border-left: 4px solid var(--accent);
          background: linear-gradient(135deg, #3a4147 0%, #2e343a 100%);
          padding: 32px 36px;
        }
        .proj-eyebrow {
          display: inline-block;
          width: fit-content;
          font-size: 0.72em;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 15%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 12px;
        }
        .proj-title {
          font-size: 1.25em;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 4px;
        }
        .proj-card--featured .proj-title {
          font-size: 1.5em;
        }
        .proj-tagline {
          font-size: 0.95em;
          color: #8b95a1;
          margin: 0 0 16px;
        }
        .proj-list {
          margin: 0 0 auto;
          padding-left: 1.1em;
          color: #a9b2b9;
          font-size: 0.93em;
          line-height: 1.55em;
          flex-grow: 1;
        }
        .proj-list li {
          margin-bottom: 6px;
        }
        .proj-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
        }
        .proj-tech-tag {
          font-size: 0.75em;
          padding: 4px 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          color: #cfd6db;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .proj-links {
          margin-top: 18px;
        }
        .proj-link-btn {
          display: inline-block;
          font-size: 0.85em;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
          padding: 7px 16px;
          border-radius: 20px;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .proj-link-btn:hover {
          background: var(--accent);
          color: #14181b;
        }
        @media (max-width: 768px) {
          .proj-grid {
            grid-template-columns: 1fr;
          }
          .proj-card--featured {
            padding: 26px 24px;
          }
        }
      `}</style>

      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Projects</h2>
        </div>

        <div className="proj-grid">
          {featured && (
            <div
              className="proj-card proj-card--featured"
              style={{ "--accent": featured.accent }}
              data-aos="fade-up"
            >
              <span className="proj-eyebrow">Flagship Project</span>
              <h3 className="proj-title">{featured.cardTitle}</h3>
              <p className="proj-tagline">{featured.tagline}</p>
              <ul className="proj-list">
                {featured.cardDetailedText.map((text, idx) => (
                  <li key={idx}>{text}</li>
                ))}
              </ul>
              <div className="proj-tech-row">
                {featured.technologies.map((tech, idx) => (
                  <span className="proj-tech-tag" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
              {featured.links.length > 0 && (
                <div className="proj-links">
                  {featured.links.map((link, j) => (
                    <a
                      className="proj-link-btn"
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {rest.map((data, i) => (
            <div
              className="proj-card"
              style={{ "--accent": data.accent }}
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3 className="proj-title">{data.cardTitle}</h3>
              <p className="proj-tagline">{data.tagline}</p>
              <ul className="proj-list">
                {data.cardDetailedText.map((text, idx) => (
                  <li key={idx}>{text}</li>
                ))}
              </ul>
              <div className="proj-tech-row">
                {data.technologies.map((tech, idx) => (
                  <span className="proj-tech-tag" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
              {data.links.length > 0 && (
                <div className="proj-links">
                  {data.links.map((link, j) => (
                    <a
                      className="proj-link-btn"
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;