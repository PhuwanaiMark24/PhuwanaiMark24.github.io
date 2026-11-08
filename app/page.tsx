import About from "@/components/About";
import Hero from "@/components/Hero";
import Container from "@/components/ui/Container";
import Navbar from "@/components/ui/Navbar";
import Section from "@/components/ui/Section";

// Navbar lives here, not in layout.tsx, so the Styleguide has no Navbar.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <Hero />
          <About />
          <Section id="projects" title="Projects">
            <p>[[TODO: projects]]</p>
          </Section>
          <Section id="contact" title="Contact">
            <p>[[TODO: contact]]</p>
          </Section>
        </Container>
      </main>
    </>
  );
}
