import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Manifesto from "./components/Manifesto";
import Principles from "./components/Principles";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Manifesto />
        <Principles />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
