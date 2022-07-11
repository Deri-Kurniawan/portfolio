import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import TextTyper from "../components/TextTyper";
import "./Home.css";
import {run as runHolder} from 'holderjs/holder';

export default function Home() {
  const { t } = useTranslation();
  const myAge = new Date().getFullYear() - 2001;

  document.title = `${t("Home")} | ${t('Deri Kurniawan')}`;

  useEffect(() => {
    runHolder('image-class-name-no-initial-dot');
  })

  return (
    <div className="Home">
      <section id='section1'>
        <div className="py-5 my-2">
          <Row className="flex-lg-row-reverse g-5 py-5">
            <Col xs={12} md={12} lg={6}>
              <img
                src="holder.js/100px310"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
              />
            </Col>
            <Col lg={6}>
              <div className="py-5">
                <h1 className="fw-bold lh-1 mb-3">
                  {t("I'm")}{" "}
                  <TextTyper
                    text={[
                      t('Deri Kurniawan'),
                      `${myAge} ${t("years old")}`,
                      t("Student"),
                      t("Junior Developer"),
                    ]}
                  />
                </h1>
                <p className="lead">{t("Home-Intro")}</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start align-items-center">
                  <a
                    href="#section2"
                    className="btn btn-primary btn-lg px-4 me-md-2"
                  >
                    {t("Discover")}
                  </a>
                  <Link to="/about" className="btn btn-outline-light btn-lg px-4">
                    {t("About Me")}
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section id="section2">
        <div className="px-4 py-5 my-2">
          <h1 className="fw-bold text-white text-lg-center">My Experience</h1>
          <Row className="flex-lg-row-reverse g-5 py-5">
            <Col>
              <p className="lead">
                Bahasa Pemrograman, Tools, Library yang pernah saya gunakan
              </p>
            </Col>
            <Col>
              <p className="lead">
                Bahasa Pemrograman, Tools, Library yang pernah saya gunakan
              </p>
            </Col>
          </Row>
        </div>
      </section>
      <section id='section3'>
        <div className="px-4 py-5 my-2">
          <h1 className="fw-bold text-white text-lg-center">My Projects</h1>
          <Row className="flex-lg-row-reverse g-5 py-5">
            <Col>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col lg={4}>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
          </Row>
        </div>
      </section>
      <Footer />
    </div>
  );
}
