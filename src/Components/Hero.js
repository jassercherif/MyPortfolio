import img from "./images/jasser.jpg";
import Typed from "react-typed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

export default function Hero() {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
      <Container data-aos="zoom-in" data-aos-delay="500">
        <Row>
          <Col lg={6} className="item-center">
            <h1>Jasser Cherif</h1>
            <br />
            <p>
              I'm a&nbsp;
              <span
                class="typed"
                data-typed-items="Software Engineering Student, Backend Developer, AI Enthusiast"
              >
                <Typed
                  strings={["Software Engineering Student", "Backend Developer", "AI Enthusiast"]}
                  loop
                  typeSpeed={90}
                  backSpeed={60}
                  smartBackspace
                  shuffle={false}
                  backDelay={500}
                  fadeOut={true}
                  fadeOutDelay={200}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </span>
            </p>
            <div class="social-links">
              <a href="https://www.facebook.com/jasser.cherif.79/?locale=fr_FR">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="https://www.instagram.com/jasser.cherif/">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="https://github.com/jassercherif">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jasser-cherif-a74037255/">
                <i class="bx bxl-linkedin"></i>
              </a>
              <a href="mailto:jasser.cherif@ensi-uma.tn">
                <i class="bx bx-envelope"></i>
              </a>
            </div>
            <br />
            <Button
            variant="outlined"
            target="_blank"
            href="https://github.com/jassercherif/MyPortfolio/blob/master/public/assets/pdf/Cv.pdf" // Change the href attribute to the desired URL
            startIcon={<CloudDownloadIcon />}
            style={{
                color: "rgb(116, 128, 138)",
                borderColor: "rgb(116, 128, 138)",
            }}
        >
            Download Resume
        </Button>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            <img
              src={img}
              height="100%"
              width="65%"
              style={{
                borderRadius: "30px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
