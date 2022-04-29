import Image from "next/image";
import TicTacToe from "../public/ttt.jpg";
import FitnessTracker from "../public/ft.jpg";
import InteriorDesign from "../public/id.jpg";
export default function Projects() {
  return (
    <div
      id="projects"
      className="container mx-auto my-32 flex w-full items-center justify-between px-8 md:px-14 lg:px-32"
    >
      <section className="w-full">
        <h2 id="work" className="secondary-title">
          Projects
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              width={250}
              height={250}
              src={InteriorDesign}
              alt="My Photo"
              layout="intrinsic"
              className="bg-nav h-36 w-full rounded-md object-cover lg:h-72"
            />
            <p className="mt-2 text-xl">Interior Design Website</p>
          </div>
          <div>
            <Image
              width={250}
              height={250}
              src={FitnessTracker}
              alt="My Photo"
              layout="intrinsic"
              className="bg-nav h-36 w-full rounded-md object-cover lg:h-72"
            />
            <p className="mt-2 text-xl">Fitness Tracker</p>
          </div>
          <div>
            <Image
              width={250}
              height={250}
              src={TicTacToe}
              alt="My Photo"
              layout="intrinsic"
              className="bg-nav hidden h-36 w-full rounded-md object-cover md:block lg:h-72"
            />
            <p className="mt-2 text-xl">Tic Tac Toe</p>
          </div>
          {/* <Image
            width={500}
            height={500}
            src={HeroImg}
            alt="My Photo"
            layout="intrinsic"
            className="bg-nav hidden h-36 w-full object-cover md:block lg:h-72"
          />
          <Image
            width={500}
            height={500}
            src={HeroImg}
            alt="My Photo"
            layout="intrinsic"
            className="bg-nav hidden h-36 w-full object-cover md:block lg:h-72"
          />
          <Image
            width={500}
            height={500}
            src={HeroImg}
            alt="My Photo"
            layout="intrinsic"
            className="bg-nav hidden h-36 w-full object-cover md:block lg:h-72"
          />
          <Image
            width={500}
            height={500}
            src={HeroImg}
            alt="My Photo"
            layout="intrinsic"
            className="bg-nav hidden h-36 w-full object-cover md:block lg:h-72"
          />
          <Image
            width={500}
            height={500}
            src={HeroImg}
            alt="My Photo"
            layout="intrinsic"
            className="bg-nav hidden h-36 w-full object-cover md:block lg:h-72"
          />
          <Image
            width={500}
            height={500}
            src={HeroImg}
            alt="My Photo"
            layout="intrinsic"
            className="bg-nav hidden h-36 w-full object-cover md:col-span-2 md:block lg:col-span-1 lg:h-72"
          /> */}
        </div>
      </section>
    </div>
  );
}
