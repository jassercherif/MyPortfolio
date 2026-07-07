import img from "./images/jz.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" className="about background-alt">
      <Container data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
        </div>

        <Row className="align-items-center">

          <Col lg={4} className="d-flex justify-content-center mb-4">
            <img
              src={img}
              alt="Jasser Cherif"
              style={{
                width: "75%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Col>


          <Col lg={8} className="content">

            <h3>
              AI Software Engineer
            </h3>

            <p style={{ color: "#728394", lineHeight: "1.8" }}>
              I'm an AI Software Engineer passionate about designing and building
              intelligent systems powered by Large Language Models, Multi-Agent
              Architectures, and Retrieval-Augmented Generation (RAG). I specialize
              in developing scalable AI backends using technologies such as LangChain,
              LangGraph, FastAPI, and vector databases.
            </p>

            <p style={{ color: "#728394", lineHeight: "1.8" }}>
              Graduated as a Computer Science Engineer from ENSI, I am currently working
              as an AI Software Engineer at Talan Tunisia, where I develop production-ready
              AI solutions that address complex business challenges. My experience spans
              AI engineering, backend development, and cloud-based software systems.
            </p>


            <Row>

              <Col lg={6}>
                <ul>

                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Location:</strong>{" "}
                    <span>Tunis, Tunisia</span>
                  </li>

                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong>{" "}
                    <span>
                      Computer Science Engineer @ ENSI
                    </span>
                  </li>

                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Specialization:</strong>{" "}
                    <span>
                      AI & Software Development
                    </span>
                  </li>

                </ul>
              </Col>


              <Col lg={6}>
                <ul>

                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:jasser.cherif@ensi-uma.tn">
                        jasser.cherif@ensi-uma.tn
                      </a>
                    </span>
                  </li>


                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Experience:</strong>{" "}
                    <span>
                      AI Software Engineer @ Talan Tunisia
                    </span>
                  </li>


                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Interests:</strong>{" "}
                    <span>
                      LLMs, Agents, RAG, Cloud & Backend
                    </span>
                  </li>

                </ul>
              </Col>

            </Row>

          </Col>

        </Row>

      </Container>
    </section>
  );
}