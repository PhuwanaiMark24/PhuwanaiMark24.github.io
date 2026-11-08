import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Container from "@/components/ui/Container";
import Navbar from "@/components/ui/Navbar";
import { projects } from "@/content/projects";

// Navbar and Footer live here, not in layout.tsx, so the Styleguide has neither.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <Hero />
          <About />
          <Projects projects={projects} />
          <Contact />
        </Container>
      </main>
      <Footer />
    </>
  );
}
