import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Nested from "./components/nested/Nested";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Nested type="pages" />
      </section>
      <section>
        <About />
      </section>
      <section id="Portfolio">
        <Nested type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
