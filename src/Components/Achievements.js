import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import tf_badge from "./images/kodekloud.jpg";
import mta from "./images/Nvidia_(logo).svg.png";
import ocajp from "./images/Kaggle_logo.png";
import Button from "@material-ui/core/Button";
import Card from "react-bootstrap/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            img: tf_badge, // You can replace with the actual image path
            cardTitle: "Kubernetes for the Absolute Beginners - Hands-on Tutorial",
            cardText: "Issued on: <br/> September, 2024",
            btnText: "See Credential",
            btnUrl: "https://kodekloud.com/certificate-verification/23dcba2a-5b42-43e4-9fa6-778f3f4dbbe9/",
          },
          {
            img: tf_badge, // You can replace with the actual image path
            cardTitle: "Learn Ansible Basics - Beginners Course",
            cardText: "Issued on: <br/> September, 2024",
            btnText: "See Credential",
            btnUrl: "https://kodekloud.com/certificate-verification/4214cff2-afc3-42b0-9ad7-7c62c10b8305/",
          },
          {
            img: tf_badge, // You can replace with the actual image path
            cardTitle: "Terraform Basics Training Course",
            cardText: "Issued on: <br/> September, 2024",
            btnText: "See Credential",
            btnUrl: "https://kodekloud.com/certificate-verification/5a9b9e86-69a0-41c1-abd5-31210d995d5d/",
          },
        {
            img: ocajp,
            cardTitle: "Intro to Machine Learning",
            cardText: "Issued on: <br/> April , 2023",
            btnText: "See Credential",
            btnUrl: "https://www.kaggle.com/learn/certification/jassercherif/intro-to-machine-learning",
        },
    ];

    // Carousel settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards at a time
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    right: "-30px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    zIndex: 10,
                }}
                onClick={onClick}
            >
                <FaArrowRight size={30} color="#fff" />
            </div>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "-30px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    zIndex: 10,
                }}
                onClick={onClick}
            >
                <FaArrowLeft size={30} color="#fff" />
            </div>
        );
    }

    return (
        <section id="achievements" className="about background-alt">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2 style={{ color: "white" }}>Certifications</h2>
                </div>
                <div style={{ position: "relative" }}>
                    <Slider {...settings}>
                        {items.map((data, i) => (
                            <div key={i}>
                                <Card
                                    style={{
                                        width: "16rem",
                                        background: "#343a40",
                                        padding: "20px",
                                        margin: "10px auto",
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
                                        <br />
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
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
