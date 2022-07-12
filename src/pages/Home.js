import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import TextTyper from "../components/TextTyper";
import { run as runHolder } from "holderjs/holder";
import Title from "../components/Title";
import LazyLoad from "react-lazyload";
import heroImage from '../hero.png';
import styles from "./Home.module.css";
import Section from "../components/Section";

export default function Home() {
  const { t } = useTranslation();
  const myAge = new Date().getFullYear() - 2001;

  useEffect(() => {
    runHolder("image-class-name-no-initial-dot");
  });

  return (
    <>
      <Title set="Home"/>

      <div className="Home">
        <Section id='Introduction'>
        <Row className="flex-lg-row-reverse g-0 py-5">
              <Col xs={12} md={12} lg={6}>
                <div className="shadow">
                  <LazyLoad>
                    <img
                      src={heroImage}
                      className={`${styles.person_img} d-block mx-lg-auto img-fluid col-12`}
                      alt=""
                    />
                  </LazyLoad>
                </div>
              </Col>
              <Col lg={6}>
                <div className="py-5">
                  <h1 className="fw-bold lh-1 mb-3">
                    {t("I'm")}{" "}
                    <TextTyper
                      text={[
                        t("Deri Kurniawan"),
                        `${myAge} ${t("years old")}`,
                        t("Student"),
                        t("Junior Developer"),
                      ]}
                    />
                  </h1>
                  <p className="lead">
                    {t(
                      "A student who is studying at the Muhammadiyah University of Sukabumi who is struggling to achieve his dream ~"
                    )}
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start align-items-center">
                    <a
                      href="#MyExperience"
                      className="btn btn-primary btn-lg px-4 me-md-2"
                    >
                      {t("Discover")}
                    </a>
                    <Link
                      to="/about"
                      className="btn btn-outline-light btn-lg px-4"
                    >
                      {t("About Me")}
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
        </Section>
        <Section id='MyExperience'>
          <h1 className="fw-bold text-white text-lg-center py-3">My Experience</h1>
          <Row>
            <Col xs={12} md={12} lg={6}>
              <img className="img-fluid" src="holder.js/550x500" alt=""/>
            </Col>
            <Col>Lorem Ipsum</Col>
          </Row>
        </Section>
        <Section id='MyProjects'>
          <h1 className="fw-bold text-white text-lg-center py-3">My Projects</h1>
          <Row>
            <Col xs={12} md={12} lg={6}>Ipsum Lorem</Col>
            <Col>
              <img className="img-fluid" src="holder.js/550x500" alt=""/>
            </Col>
          </Row>
        </Section>
        <Footer />
      </div>
    </>
  );
}
