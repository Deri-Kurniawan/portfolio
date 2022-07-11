import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppRouter from "./AppRouter";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container className="mt-3">
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}
