import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDocker,
  FaJenkins,
  FaGithub,
  FaBrain,
  FaLinux,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiGitlab,
  SiSonarqube,
  SiTensorflow,
  SiJavascript,
  SiTypescript,
  SiFlask,
  SiFastapi,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiNeo4J,
  SiSupabase,
  SiLangchain,
  SiAngular,
  SiExpress,
  SiTerraform,
  SiArgo,
  SiMocha,
  SiGit,
  SiAnsible,
} from "react-icons/si";
import {
  TbBrandAzure,
  TbBrandReactNative,
  TbCube,
  TbSitemap,
} from "react-icons/tb";

const categories = [
  {
    label: "Languages & Frameworks",
    accent: "#2196f3",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React JS", icon: <FaReact /> },
      { name: "React Native", icon: <TbBrandReactNative /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Node JS", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
    ],
  },
  {
    label: "AI / Machine Learning",
    accent: "#ba68c8",
    skills: [
      { name: "LangChain", icon: <SiLangchain /> },
      { name: "LangGraph", icon: <TbSitemap /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Machine Learning", icon: <FaBrain /> },
    ],
  },
  {
    label: "Databases & Vector Stores",
    accent: "#00bfa5",
    skills: [
      { name: "Neo4j", icon: <SiNeo4J /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Weaviate", icon: <TbCube /> },
      { name: "Qdrant", icon: <FaLayerGroup /> },
    ],
  },
  {
    label: "DevOps & Tools",
    accent: "#ff8a65",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Jenkins", icon: <FaJenkins /> },
      { name: "SonarQube", icon: <SiSonarqube /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Argo CD", icon: <SiArgo /> },
      { name: "Azure", icon: <TbBrandAzure /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Mocha", icon: <SiMocha /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="about background-alt">
      <style>{`
        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 34px;
        }
        .skills-category-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .skills-category-label h3 {
          font-size: 0.85em;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0;
          white-space: nowrap;
        }
        .skills-category-rule {
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(
            to right,
            color-mix(in srgb, var(--accent) 45%, transparent),
            transparent
          );
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 8px;
          background: #343a40;
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #d5dade;
          font-size: 0.88em;
          font-weight: 500;
          transition: transform 0.15s ease, border-color 0.15s ease,
            background 0.15s ease;
        }
        .skill-chip svg {
          font-size: 1.15em;
          color: var(--accent);
          flex-shrink: 0;
        }
        .skill-chip:hover {
          transform: translateY(-2px);
          border-color: color-mix(in srgb, var(--accent) 50%, transparent);
          background: #3a4147;
        }
        @media (max-width: 576px) {
          .skill-chip {
            padding: 8px 12px;
            font-size: 0.82em;
          }
        }
      `}</style>

      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="skills-container">
          {categories.map((category, ci) => (
            <div key={ci} style={{ "--accent": category.accent }}>
              <div className="skills-category-label">
                <h3>{category.label}</h3>
                <div className="skills-category-rule" />
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, si) => (
                  <div className="skill-chip" key={si}>
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;