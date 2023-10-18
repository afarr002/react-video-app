import React from "react";
import Container from "./styles/Container";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MobileNavbar />
      <Container>{/* <Routes /> */}</Container>
    </>
  );
}

export default App;
