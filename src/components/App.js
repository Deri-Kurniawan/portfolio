import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { Container } from "react-bootstrap";
import styles from './App.module.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <NavBar />
        <div className={styles.App_container}>
          <Container>
            <AppRouter />
          </Container>
        </div>
      </div>
    </BrowserRouter>
  );
}
