import Image from "next/image";
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
          <div className="mb-5">
            <h3 className="mb-2 text-3xl">HackerRank - React Certification</h3>
            <p className="mb-2 text-lg text-gray-300">
              Assignment based Certification offered by HackerRank
            </p>
            <a
              className="text-gray-400"
              rel="noreferrer"
              href="https://www.hackerrank.com/certificates/31bc6c8ff984"
              target="_blank"
            >
              View Certification
            </a>
          </div>
          <div className="mb-5">
            <h3 className="mb-1 text-3xl">
              HackerRank - JavaScript Intermediate
            </h3>
            <a
              className="text-gray-400"
              rel="noreferrer"
              href="https://www.hackerrank.com/certificates/e814e21289a1"
              target="_blank"
            >
              View Certification
            </a>
          </div>
          <div className="mb-5">
            <h3 className="mb-1 text-3xl">
              HackerRank - JavaScript Basic Certification
            </h3>
            <a
              className="text-gray-400"
              rel="noreferrer"
              href="https://www.hackerrank.com/certificates/1fe971d7596a"
              target="_blank"
            >
              View Certification
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
