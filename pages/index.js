import PageHeader from "../components/PageHeader";
import Hero from "../components/Hero";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Certifications from "../components/certifications";
// import "/styles/globals.css";

export default function Home() {
  return (
    <>
      <PageHeader />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
    </>
  );
}
