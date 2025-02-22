import { MdiPuzzlePlus } from "@/app/components/MdiPuzzlePlus";
import MdiLinkedin from "./components/MdiLinkedin";
import MdiGithub from "./components/MdiGithub";
import TablerBrandHackerrank from "./components/TablerBrandHackerrank";
import SimpleIconsPluralsight from "./components/SimpleIconsPluralsight";
import SolarMedalRibbonsStarOutline from "./components/SolarMedalRibbonsStarOutline";
import MdiStarFourPointsOutline from "./components/MdiStarFourPointsOutline";
import MaterialSymbolsAwardStarOutline from "./components/MaterialSymbolsAwardStarOutline";
import TablerExternalLink from "./components/TablerExternalLink";

const LINKEDIN_URL = "https://www.linkedin.com/in/prem-sagar-7a838a237";
const GITHUB_URL = "https://github.com/Dante-Nephilim";
const HACKERRANK_URL = "https://www.hackerrank.com/profile/s_premsagar_c";
const PLURALSIGHT_URL = "https://app.pluralsight.com/profile/Dante-Nephilim";

const skills = [
  "React",
  "NextJS",
  "Redux",
  "TypeScript",
  "JavaScript",
  "ExpressJS",
  "NodeJS",
  "PostgreSQL",
  "SQL",
  "MongoDB",
  "HTML",
  "CSS",
  "Angular",
  "REST API",
  "C#",
];

const certifications: Array<{ name: string; link: string }> = [
  {
    name: "HackerRank - React Certification",
    link: "https://www.hackerrank.com/certificates/31bc6c8ff984",
  },
  {
    name: "HackerRank - JavaScript Intermediate Certification",
    link: "https://www.hackerrank.com/certificates/e814e21289a1",
  },
  {
    name: "HackerRank - Node.js Intermediate Certificate",
    link: "https://www.hackerrank.com/certificates/5a30c7525998",
  },
  {
    name: "HackerRank - C# Basic Certificate",
    link: "https://www.hackerrank.com/certificates/826a9f0ae3d6",
  },
  {
    name: "W3Schools - Front End Certification",
    link: "https://verify.w3schools.com/1P7X5MNX2E",
  },
  {
    name: "W3Schools - JavaScript Certification",
    link: "https://verify.w3schools.com/1OU2PV7CZX",
  },
  {
    name: "W3Schools - HTML Certification",
    link: "https://verify.w3schools.com/1OUS835G9J",
  },
  {
    name: "W3Schools - BootStrap5 Certification",
    link: "https://verify.w3schools.com/1PB4JM9OE3",
  },
  {
    name: "W3Schools - CSS Certification",
    link: "https://verify.w3schools.com/1P7X59A30B",
  },
  {
    name: "FreeCodeCamp - JavaScript Algorithms & Data Structures",
    link: "https://www.freecodecamp.org/certification/prem_sagar/responsive-web-design",
  },
  {
    name: "HackerRank - SQL (Intermediate) Certificate",
    link: "https://www.hackerrank.com/certificates/8ef1081cfc62",
  },
  {
    name: "HackerRank - SQL (Basic) Certificate",
    link: "https://www.hackerrank.com/certificates/fb631cc91457",
  },
  {
    name: "FreeCodeCamp - Responsive Web Design",
    link: "https://www.freecodecamp.org/certification/prem_sagar/responsive-web-design",
  },
  {
    name: "HackerRank - JavaScript (Basic) Certificate",
    link: "https://www.hackerrank.com/certificates/1fe971d7596a",
  },
  {
    name: "HackerRank - Node (Basic) Certificate",
    link: "https://www.hackerrank.com/certificates/b69e4dfffffb",
  },
];

export default function Home() {
  return (
    <div className="page">
      <section id="hero">
        <div>
          <p className="greeting">Hello.</p>
          <p className="name">
            My name is <span className="highlighted-text">Prem Sagar</span>
          </p>
          <p className="description">
            I am a{" "}
            <span className="highlighted-text">Full Stack Developer</span>{" "}
            passionate about latest web technologies. Other than programming, I
            like gaming and traveling.
          </p>
          <a href={LINKEDIN_URL} className="primary-cta" target="_blank">
            <MdiLinkedin />
            Contact me
          </a>
          <div className="cta-group">
            <a href={GITHUB_URL} className="secondary-cta-btn" target="_blank">
              <MdiGithub />
              GitHub
            </a>
            <a
              href={HACKERRANK_URL}
              className="secondary-cta-btn"
              target="_blank"
            >
              <TablerBrandHackerrank />
              HackerRank
            </a>
            <a
              href={PLURALSIGHT_URL}
              className="secondary-cta-btn"
              target="_blank"
            >
              <SimpleIconsPluralsight />
              PluralSight
            </a>
          </div>
        </div>
        <div id="skills">
          <p className="title">
            <MdiPuzzlePlus />
            Skills
          </p>
          <ul className="skill-list">
            {skills.map((skill) => (
              <li className="skill" key={skill}>
                <span className="bullet"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="achievements">
        <p className="section-header">
          <SolarMedalRibbonsStarOutline />
          Achievements
        </p>
        <ul className="achievement-list">
          <li className="achievement">
            <div>
              <p className="title">
                <MdiStarFourPointsOutline />
                Raving Fan Award - Miles Technologies
              </p>
              <p className="description">
                Won
                <span className="highlighted-text">
                  &apos;Raving Fan&apos;
                </span>{" "}
                Award within 7 months of starting my career, for building rate
                limiter used by multiple projects in the company
              </p>
            </div>
          </li>
          <li className="achievement">
            <div>
              <p className="title">
                <MdiStarFourPointsOutline />
                Increment within 2 months
              </p>
              <p className="description">
                Received an increment within 2 months of joining the company
              </p>
            </div>
          </li>
          <li className="achievement">
            <div>
              <p className="title">
                <MdiStarFourPointsOutline />
                Topper of the town in SSC (05/2010)
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section id="certifications">
        <p className="section-header">
          <MaterialSymbolsAwardStarOutline />
          Certifications
        </p>
        <ul className="certification-list">
          {certifications.map((certificate) => (
            <li key={certificate.link} className="certificate">
              <MdiStarFourPointsOutline />
              <div>

              <span>{certificate.name} : </span>
              <a href={certificate.link} target="_blank" className="view-btn">
                View
                <TablerExternalLink />
              </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
