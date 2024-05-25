import tf_badge from "./images/kodekloud.jpg";
import mta from "./images/Nvidia_(logo).svg.png";
import ocajp from "./images/Kaggle_logo.png";
import Button from "@material-ui/core/Button";
import Card from "react-bootstrap/Card";

const Achievements = () => {
    const items = [
        {
            img: tf_badge,
            cardTitle: "DevOps Pre-Requisite Course",
            cardText: "Issued on: <br/> April , 2024",
            btnText: "See Credential",
            btnUrl: "https://kodekloud.com/certificate-verification/2DEA71E6C148-2DEA6BE14F20-2DEA6BB3B0A0/",
        },
        {
            img: tf_badge,
            cardTitle: "Jenkins",
            cardText: "Issued on: <br/> April , 2024",
            btnText: "See Credential",
            btnUrl: "https://kodekloud.com/certificate-verification/2D143D54879B-2DEF3760D12C-2D12195335F5/",
        },
        {
            img: mta,
            cardTitle: "Building Transformer-Based Natural Language Processing Applications",
            cardText: "Issued on: <br/> March , 2024",
            btnText: "See Credential",
            btnUrl: "https://courses.nvidia.com/certificates/c48fe0f4df2340a886fc4d15ea0ea487/",
        },
        {
            img: ocajp,
            cardTitle: "Intro to Deep Learning",
            cardText: "Issued on: <br/> April , 2023",
            btnText: "See Credential",
            btnUrl: "https://www.kaggle.com/learn/certification/jassercherif/intro-to-deep-learning",
        },
        {
            img: ocajp,
            cardTitle: "Intro to Machine Learning",
            cardText: "Issued on: <br/> April , 2023",
            btnText: "See Credential",
            btnUrl: "https://www.kaggle.com/learn/certification/jassercherif/intro-to-machine-learning",
        },
    ];
    return (
        <section id="achievements" class="about background-alt">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Certifications</h2>
                </div>
                <div class="row">
                    {items.map((data, i) => (
                        <div
                            class="col-sm-3 d-flex justify-content-center"
                            key={i}
                        >
                            {/* <div class="card shadow-large h-100 achievement-card" style={{maxWidth: "270px", background: "#343a40", padding: "20px"}}>
                    <img class="card-img-top responsive" src={data.img} height="50%" width="30%"/>
                  <div class="card-body">
                    <h5 class="card-title" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "16px"}}>{data.cardTitle}</h5>
                    <p class="card-text" style={{color: "#74808a"}}>{data.cardText}</p>
                    <a href="https://www.credential.net/bef2570d-7d63-4f07-be28-57ec4da87373" target="_blank" class="btn btn-primary">See Credential</a>
                  </div>
                </div> */}
                            <Card
                                style={{
                                    width: "16rem",
                                    background: "#343a40",
                                    padding: "20px",
                                }}
                                className="text-center"
                            >
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            color: "rgba(255, 255, 255, 0.7)",
                                            fontSize: "18px",
                                        }}
                                    >
                                        {data.cardTitle}
                                    </Card.Title>
                                    <br></br>
                                    <Card.Text style={{ color: "#74808a" }}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.cardText,
                                            }}
                                        ></div>
                                    </Card.Text>
                                    {data.btnText && (
                                        <Button
                                            variant="contained"
                                            color="default"
                                            target="_blank"
                                            href={data.btnUrl}
                                        >
                                            {data.btnText}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
