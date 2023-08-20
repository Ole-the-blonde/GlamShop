import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-2">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default App;
