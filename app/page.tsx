import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Manifesto from "./components/Manifesto";
import Principles from "./components/Principles";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { OrganizationJsonLd, HomePageJsonLd } from "./components/JsonLd";

export const metadata: Metadata = {
  title: "RanCoPar — Ran Coding Partner | Web Development Kerala",
  description:
    "RanCoPar is a web development partnership based in Kerala, India. We build fast, clean web applications, admin systems, and SaaS products that last. Founded by Raihana, Adhil, and Nisamudheen.",
  alternates: { canonical: "https://rancopar.com" },
  openGraph: {
    url: "https://rancopar.com",
    title: "RanCoPar — Ran Coding Partner | Web Development Kerala",
    description: "A web development partnership based in Kerala. Fast, clean web applications, admin systems, and digital products built with craft.",
  },
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <HomePageJsonLd />
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
