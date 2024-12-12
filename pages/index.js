import PageHeader from "../components/PageHeader";
import Hero from "../components/Hero";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Certifications from "../components/certifications";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";

// import "/styles/globals.css";

export default function Home() {
  const { ref: skillsRef, inView: skillRefInView } = useInView();
  const { ref: projectsRef, inView: projectsRefInView } = useInView();
  const { ref: certificationsRef, inView: collectionsRefInView } = useInView();
  let setInViewDiv = "heroRefInView";
  if (collectionsRefInView) {
    setInViewDiv = "collectionsRefInView";
  } else if (projectsRefInView) {
    setInViewDiv = "projectsRefInView";
  } else if (skillRefInView) {
    setInViewDiv = "skillsRefInView";
  }
  console.log(setInViewDiv);
  return (
    <>
      <PageHeader />

      <Hero inViewSection={setInViewDiv} />

      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={certificationsRef}>
        <Certifications />
      </div>
    </>
  );
}
