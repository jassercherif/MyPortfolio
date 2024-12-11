import React from "react";
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
} from "react-icons/fa";
import {
  SiKubernetes,
  SiMicrosoftazure,
  SiGitlab,
  SiSonarqube,
  SiTensorflow,
  SiJavascript,
  SiTypescript,
  SiFlask,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiHibernate,
  SiAngular,
  SiExpress,
  SiTerraform,
  SiArgo,
  SiMocha,
  SiGit,
  SiAnsible,
  SiVisualstudio,
  SiEclipseide,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React JS", icon: <FaReact size={30} color="white" /> },
    { name: "Angular", icon: <SiAngular size={30} color="white" /> },
    { name: "JavaScript", icon: <SiJavascript size={30} color="white" /> },
    { name: "TypeScript", icon: <SiTypescript size={30} color="white" /> },
    { name: "Node JS", icon: <FaNodeJs size={30} color="white" /> },
    { name: "Express", icon: <SiExpress size={30} color="white" /> },
    { name: "Mocha", icon: <SiMocha size={30} color="white" /> },
    { name: "Python", icon: <FaPython size={30} color="white" /> },
    { name: "Flask", icon: <SiFlask size={30} color="white" /> },
    { name: "TensorFlow", icon: <SiTensorflow size={30} color="white" /> },
    { name: "Machine Learning", icon: <FaBrain size={30} color="white" /> },
    { name: "Java", icon: <FaJava size={30} color="white" /> },
    { name: "Spring Boot", icon: <SiSpringboot size={30} color="white" /> },
    { name: "Hibernate", icon: <SiHibernate size={30} color="white" /> },
    { name: "MySQL", icon: <SiMysql size={30} color="white" /> },
    { name: "MongoDB", icon: <SiMongodb size={30} color="white" /> },
    { name: "Docker", icon: <FaDocker size={30} color="white" /> },
    { name: "Jenkins", icon: <FaJenkins size={30} color="white" /> },
    { name: "Kubernetes", icon: <SiKubernetes size={30} color="white" /> },
    { name: "Linux", icon: <FaLinux size={30} color="white" /> }, 
    { name: "Git", icon: <SiGit size={30} color="white" /> },
    { name: "GitHub", icon: <FaGithub size={30} color="white" /> },
    { name: "GitLab", icon: <SiGitlab size={30} color="white" /> },
    { name: "SonarQube", icon: <SiSonarqube size={30} color="white" /> },
    { name: "Ansible", icon: <SiAnsible size={30} color="white" /> },
    { name: "Terraform", icon: <SiTerraform size={30} color="white" /> },
    { name: "Argo CD", icon: <SiArgo size={30} color="white" /> },
    { name: "Azure", icon: <SiMicrosoftazure size={30} color="white" /> },
    { name: "VSCode", icon: <SiVisualstudio size={30} color="white" /> },
    { name: "Eclipse", icon: <SiEclipseide size={30} color="white" /> },
  ];

  // Split skills into groups of 6
  const skillGroups = [];
  for (let i = 0; i < skills.length; i += 6) {
    skillGroups.push(skills.slice(i, i + 6));
  }

  return (
    <section id="skills" style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "white", marginBottom: "10px" }}>
        Skills
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "10px", // Réduit l'espace entre les éléments
        }}
      >
        {skills.map((skill, skillIndex) => (
          <div
            key={skillIndex}
            style={{
              textAlign: "center",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#1e1e1e",
              width: "100px",
              height: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px", // Espacement vertical réduit
            }}
          >
            <div style={{ marginBottom: "5px" }}>{skill.icon}</div>
            <p style={{ color: "white", fontSize: "12px" }}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
