import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { paths } from "../constants/global.constants";
export default function PageHeader() {
  const { asPath } = useRouter();

  useEffect(() => {
    console.log(asPath);
  }, [asPath]);

  return (
    <header>
      <div className="container my-3 mx-auto flex  w-full items-center justify-between px-8 md:px-14 lg:px-24">
        <div className="text-lg font-bold">Prem Sagar</div>
        <div className="hidden items-center space-x-12 md:flex ">
          <Link href={paths.home}>
            <a className={asPath === paths.home ? "selected-text" : ""}>Home</a>
          </Link>
          <Link href={paths.skills}>
            <a className={asPath === paths.skills ? "selected-text" : ""}>
              Skills
            </a>
          </Link>
          <Link href={paths.projects}>
            <a className={asPath === paths.projects ? "selected-text" : ""}>
              Projects
            </a>
          </Link>

          <Link href={paths.certifications}>
            <a
              className={asPath === paths.certifications ? "selected-text" : ""}
            >
              Certifications
            </a>
          </Link>
          <Link href="/">
            <a
              href="https://techrez.io/resume/prem-sagar"
              target="_blank"
              rel="noreferrer"
            >
              <button className="rounded-sm bg-primary px-6 py-2 font-bold ">
                My Resume
              </button>
            </a>
          </Link>
        </div>
        <div className="md:hidden">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="26px"
            height="24px"
            viewBox="0 0 100 100"
          >
            <path
              fill="#000"
              stroke="none"
              strokeWidth="none"
              d="M20 1L80 1Q99 1 99 20L99 80Q99 99 80 99L20 99Q1 99 1 80L1 20Q1 1 20 1"
            />
            <path
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M25 35L75 35M25 50L75 50M25 65L75 65"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
