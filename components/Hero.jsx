import "../styles/Home.module.css";
import Link from "next/link";
import HeroImg from "../public/hero.png";
import Image from "next/image";
import { paths } from "../constants/global.constants";

import { useEffect } from "react";
import { useRouter } from "next/router";
import Clock from 'react-live-clock';
export default function Hero(props) {
  const {inViewSection}=props;
  // console.log(inViewSection)
  const { asPath } = useRouter();

  useEffect(() => {
    console.log(asPath);
  }, [asPath]);
  return (
    
    <div className="container mx-auto mt-16 flex w-full items-center justify-between px-8 md:px-14 lg:px-24 ">
      <div className="flex flex-wrap md:flex-nowrap">
        <nav className="left-percentage fixed z-10 inline-block  hidden lg:mr-24 lg:w-4 xl:block">
          <div className="left-50 absolute  mt-36 -translate-x-1/2 transform space-y-6">
            
            <Link href={paths.home}>
              <a
                className={`nav-dot ${
                  asPath === paths.home || inViewSection==="heroRefInView" ? "selected-circle" : ""
                } border-nav bg-body block h-7 w-7 rounded-full border-4`}
                href="#"
              >
                <span className="ml-10 rounded-md bg-black px-2 py-1 opacity-0">
                  Home
                </span>
              </a>
            </Link>
            <Link href={paths.skills}>
              <a
                className={`nav-dot ${
                  asPath === paths.skills  || inViewSection==="skillsRefInView" ? "selected-circle" : ""
                } border-nav bg-body block h-7 w-7 rounded-full border-4`}
                href="#skills"
              >
                <span className="ml-10 rounded-md bg-black px-2 py-1 opacity-0">
                  Skills
                </span>
              </a>
            </Link>
            <Link href={paths.projects}>
              <a
                className={`nav-dot ${
                  asPath === paths.projects  || inViewSection==="projectsRefInView"? "selected-circle" : ""
                } border-nav bg-body block h-7 w-7 rounded-full border-4`}
                href="#projects"
              >
                <span className="ml-10 rounded-md bg-black px-2 py-1 opacity-0">
                  Projects
                </span>
              </a>
            </Link>
            <Link href={paths.certifications}>
              <a
                className={`nav-dot ${
                  asPath === paths.certifications  || inViewSection==="collectionsRefInView"? "selected-circle" : ""
                } border-nav bg-body block h-7 w-7 rounded-full border-4`}
                href="#certifications"
              >
                <span className="ml-10 rounded-md bg-black px-2 py-1 opacity-0">
                  Certifications
                </span>
              </a>
            </Link>
          </div>
        </nav>
        <div id="pong">
        <div className="pad-a"></div>
        <div className="ball"></div>
        <div className="overlayed">
           
        </div>
        <div className="pad-b"></div>
      </div>
        <div className="mt-0 flex max-w-xl flex-wrap justify-center md:my-36 md:justify-start lg:ml-20">
          <div className="flex justify-between">

          <h1 className="text-centre text-4xl font-bold md:text-left md:text-6xl lg:text-7xl">
            Hi, I am Prem Sagar
          </h1>
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'}  className="text-centre text-4xl font-bold md:text-left md:text-6xl lg:text-4xl"/>
          {/* <div className="macbook">
  <div className="inner">
    <div className="screen">
      <div className="face-one">
        <div className="camera"></div>
        <div className="display">
          <div className="shade"></div>
        </div>
        <span>MacBook Air</span>
      </div>
      <img src="http://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white.svg" className="logo" />
    </div>
    <div className="bodyz">
      <div className="face-one">
        <div className="touchpad">
        </div>
        <div className="keyboard">
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key space"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
          <div className="key f"></div>
        </div>
      </div>
      <div className="pad one"></div>
      <div className="pad two"></div>
      <div className="pad three"></div>
      <div className="pad four"></div>
    </div>
  </div>
  <div className="shadow"></div>
</div> */}
<div className='links'>
<a href="https://twitter.com/neoberg" target="_blank" rel="noreferrer">@neoberg</a>
<a href="mailto:neoberg@gmail.com">contact me</a>
</div>



          </div>
          <div className="flex w-full justify-center md:justify-start">
            <a
              href="https://github.com/Dante-Nephilim"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-12 flex items-center space-x-3 rounded-sm bg-primary px-8 py-4 font-bold text-white">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1.5em"
                    height="1.5em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 250"
                  >
                    <path
                      fill="#1a202c"
                      d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z"
                    />
                  </svg>
                </div>
                <span> GitHub</span>
              </button>
            </a>
          </div>
          
        </div>
        {/* <Image
          width={500}
          height={500}
          src={HeroImg}
          alt="My Photo"
          layout="intrinsic"
          className="z-1 right-0 mt-12  w-3/4 md:absolute  md:mt-0"
        /> */}
      </div>
    </div>
  );
}
