import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import ForviaIcon from "./images/forvia.png"

export default function Experience() {
  const items = [
    {
      date: "July 2023 - August 2023",
      cardTitle: "Forvia",
      cardSubtitle: "Web Development Intern",
      cardDetailedText: [
        "Developed an innovative web interface to simplify access to IP addresses of an application to eliminate manual configuration and the use of an excel file.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      icon:ForviaIcon
    },
     {
    date: "July 2024 - September 2024",
    cardTitle: "Sofrecom Tunisia",
    cardSubtitle: "Software Engineer Intern",
    cardDetailedText: [
      'Developed a Request Management Application using the MERN stack (MongoDB, Express.js, React, Node.js).',
      'Built CRUD functionality for managing requests and an Admin Panel to manage coaches, projects, business units, and streams.',
      'Designed an interactive dashboard using ApexCharts to visualize request status changes and coach performance.',
      'Prototyped UI using Canva for wireframes and design mockups.',
      'Implemented API testing with Bruno and backend testing using the Mocha framework.',
      'Set up an automated CI/CD pipeline using GitLab CI for continuous integration and seamless deployment.',
      'Followed Agile methodology, gathering user feedback to iterate and improve the application.',
    ].map(function (text) {
      return <li>{text}</li>;
    }),
    technologies: ["React JS", "Node Js", "Express Js","MongoDB","Mocha","Gitlab CI/CD"],
    icon:ForviaIcon
  },
    
  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#343a40" }}
                    date={data.date}
                    dateClassName="timeline-date"
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "#0563bb",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontSize: "14",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {data.cardTitle}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "350",
                        color: "#7e8890",
                      }}
                    >
                      {data.cardSubtitle}
                    </h4>
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "350",
                        color: "#74808a",
                      }}
                    >
                      {data.cardDetailedText}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
