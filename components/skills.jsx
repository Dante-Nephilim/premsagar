import Image from "next/image";

import JSlogo from "../public/js.png";
import HTMLlogo from "../public/html-logo.svg";
import CSSlogo from "../public/css-logo.png";
import myreactlogo from "../public/reactjs.svg";
import nextJSLogo from "../public/Next.js-Logo-Vector-730x730.jpg";
import typescriptlogo from "../public/Typescript_logo_2020.svg.png";
import tailwindcsslogo from "../public/tw.jpg";
import { useEffect } from "react";
export default function Skills() {
 
  
  return (
    <div
      id="skills"
      className="container mx-auto mt-32  w-full  px-8 md:px-14  lg:px-32"
    >
      <h2 id="work" className="secondary-title">
        Skills
      </h2>
      <div className="section">
        {/* <h2 className="sectionTitle secondary-title">Skills</h2> */}
        <div className="skillGrid">
          <div className="skill">
            <div>
              <Image
                width={100}
                height={100}
                src={myreactlogo}
                alt="My Photo"
                layout="intrinsic"
              />
            </div>
            <p className="skillName">React</p>
          </div>
          <div className="skill">
            <div>
              <Image
                width={100}
                height={100}
                src={JSlogo}
                alt="My Photo"
                layout="intrinsic"
              />
            </div>
            <p className="skillName">Java Script</p>
          </div>
          <div className="skill">
            <div>
              <Image
                width={100}
                height={100}
                src={HTMLlogo}
                alt="My Photo"
                layout="intrinsic"
              />
            </div>
            <p className="skillName">HTML 5</p>
          </div>
          <div className="skill">
            <div>
              <Image
                width={100}
                height={100}
                src={CSSlogo}
                alt="My Photo"
                layout="intrinsic"
              />
            </div>
            <p className="skillName">CSS 3</p>
          </div>
          <div className="skill">
            <div>
              <Image
                width={100}
                height={100}
                src={typescriptlogo}
                alt="My Photo"
                layout="intrinsic"
              />
            </div>
            <p className="skillName">Type Script</p>
          </div>
          <div className="skill">
            <div>
              <Image
                width={100}
                height={100}
                src={nextJSLogo}
                alt="My Photo"
                layout="intrinsic"
              />
            </div>
            <p className="skillName">Next JS</p>
          </div>
          <div className="skill">
            <div>
              <Image
                width={100}
                height={100}
                src={tailwindcsslogo}
                alt="My Photo"
                layout="intrinsic"
              />
            </div>
            <p className="skillName">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
