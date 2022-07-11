import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitch from "./LanguageSwitch";
import "./NavBar.css";

export default function NavBar() {
  const { t } = useTranslation();

  return (
    <div className="NavBar position-sticky top-0">
      <Navbar expand="md">
        <Container>
          <Link className="navbar-brand" to="/">
            DK
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/home" activeclassname="active" className="nav-link">
                {t("Home")}
              </NavLink>
              <NavLink
                to="/timeline"
                activeclassname="active"
                className="nav-link"
              >
                {t("Timeline")}
              </NavLink>
              <NavLink
                to="/about"
                activeclassname="active"
                className="nav-link"
              >
                {t("About")}
              </NavLink>
              <NavLink to="/404" activeclassname="active" className="nav-link">
                {t("Page Not Found")}
              </NavLink>
            </Nav>
            <div className="d-flex">
              <LanguageSwitch />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
