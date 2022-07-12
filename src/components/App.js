import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { Container } from "react-bootstrap";
import styles from './App.module.css';
import Footer from "./Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.root}>
        <NavBar />
        <div className={styles.container}>
          <Container>
            <AppRouter />
          </Container>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
