const Skills = () => {

  const skills = [
    "C","C++","JavaScript","TypeScript", "Python", "Flask", "React Js","Express Js","Node Js", "Java",
    "Spring Boot", "JPA", "Hibernate", "Machine Learning",
    "MySQL", "MongoDB"
  ]
  return (
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
        </div>
        <div>
          <ul>
              {
                skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))
              }
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;