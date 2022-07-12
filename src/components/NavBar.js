import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitch from "./LanguageSwitch";
import styles from "./NavBar.module.css";

const navLinks = [
  {
    to: "/",
    label: "Home"
  },
  {
    to: "/timeline",
    label: "Timeline"
  },
  {
    to: "/about",
    label: "About"
  },
  {
    to: "/404",
    label: "Page Not Found"
  },
]

export default function NavBar() {
  const { t } = useTranslation();

  return (
    <Navbar expand="md" className={`${styles.root} position-sticky top-0`}>
      <Container>
        <Link className="navbar-brand" to="/">
          DK
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map(({ to, label }, i) => (
              <NavLink
                key={i}
                to={to}
                activeclassname="active"
                className="nav-link"
              >
                {t(label)}
              </NavLink>
            ))}
          </Nav>
          <div className="d-flex">
            <LanguageSwitch />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
