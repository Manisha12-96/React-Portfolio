import "./styles.css";
//import Indexes from "./index2";
import "./modal.js";
// import "./pt.min.js";
//import "./canvas.js";
import React from "react";
import Home from "./Components/home";
import About from "./Components/about";
import AboutMe from "./Components/aboutMe";
import Blogs from "./Components/blogs";
import ContactUs from "./Components/contactUs";
import Footer from "./Components/footer";
// import Header from "./Components/header";
import ModalOpen from "./Components/modalOpen";
import Preload from "./Components/preload";
import PortfolioProjects from "./Components/portfolioProjects";

// import data from "../yourData";
function App() {
  return (
    <div className="App overflow-wrap">
      {/* <header>My Portfolio</header> */}
      {/* <h1>Hello this is app.js</h1> */}
      <Preload />
      {/* <Indexes /> */}
      <Home />
      <ModalOpen />
      <About />
      <AboutMe />
      <PortfolioProjects />
      <Blogs />
      <ContactUs />
      <Footer />
      {/* <Header />*/}
    </div>
  );
}
export default App;
