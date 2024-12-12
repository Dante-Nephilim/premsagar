import Image from "next/image";
const certificationData = [
  {
    title: "FreeCodeCamp - Responsive Web Design Certification",
    url: "https://freecodecamp.org/certification/prem_sagar/responsive-web-design",
  },
  {
    title: "HackerRank - React Certification",
    url: "https://www.hackerrank.com/certificates/31bc6c8ff984",
  },
  {
    title: "HackerRank - NodeJs Intermediate Certification",
    url: "https://www.hackerrank.com/certificates/5a30c7525998",
  },
  {
    title: "FreeCodeCamp - JavaScript DataStructures & Algorithms Certification",
    url: "https://freecodecamp.org/certification/prem_sagar/javascript-algorithms-and-data-structures",
  },
  {
    title: "HackerRank - JavaScript Intermediate",
    url: "https://www.hackerrank.com/certificates/e814e21289a1",
  },
  {
    title: "W3Schools - Front End Web Development Certification",
    url: "https://verify.w3schools.com/1P7X5MNX2E",
  },
  {
    title: "W3Schools - HTML Certification",
    url: "https://verify.w3schools.com/1OUS835G9J",
  },
  {
    title: "W3Schools - JavaScript Certification",
    url: "https://verify.w3schools.com/1OU2PV7CZX",
  },
  {
    title: "W3Schools - CSS Certification",
    url: "https://verify.w3schools.com/1P7X59A30B",
  },
  {
    title: "HackerRank - JavaScript Basic Certification",
    url: "https://www.hackerrank.com/certificates/1fe971d7596a",
  },
  {
    title: "W3Schools - BootStrap 5 Certification",
    url: "https://verify.w3schools.com/1PB4JM9OE3",
  },
  {
    title: "HackerRank - C# Basics Certification",
    url: "https://www.hackerrank.com/certificates/fb631cc91457",
  },
  {
    title: "HackerRank - SQL Basics Certification",
    url: "https://www.hackerrank.com/certificates/5a30c7525998",
  },
  {
    title: "HackerRank - NodeJs Basics Certification",
    url: "https://www.hackerrank.com/certificates/b69e4dfffffb",
  },
];
export default function Certifications() {
  return (
    <div
      id="certifications"
      className="container mx-auto my-32 flex w-full items-center justify-between px-8 md:px-14 lg:px-32"
    >
      <section className="w-full">
        <h2 id="work" className="secondary-title">
          Certifications
        </h2>
        <div className="mt-8">
          {certificationData.map((item, index) => {
            return (
              <div className="mb-5" key={index}>
                <h3 className="mb-1 text-3xl">{item.title}</h3>
                <a className="text-gray-400" rel="noreferrer" href={item.url} target="_blank">
                  View Certification
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
