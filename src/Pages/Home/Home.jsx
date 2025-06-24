import developerImg from "../../assets/develop.webp";
import bgImage from "../../assets/bgImage.png";
import { BiDownload } from "react-icons/bi";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-4 py-6 ">
        <div className=" md:w-1/2 h-auto w-full rounded-md space-y-4 text-left">
          <h3 className="text-2xl">I'm a Full Stack Developer</h3>
          <h1 className="md:text-4xl text-4xl font-bold">
            Turning Ideas Into Web Solutions.
          </h1>
          <p className="text-lg leading-relaxed">
            I develop Seamless user experiences and robust Backend logic for
            modern web Apps.
          </p>

          <div className="flex gap-4">
            <a
              href="https://drive.google.com/uc?export=download&id=1zAAAhgU7BHi2ixys3fUP2d1iSdrw-v2e"
              className="bg-blue-700 px-10 py-2 rounded text-white flex items-center gap-2 cursor-pointer"
              download
            >
              Hire Me <BiDownload className="text-xl" />
            </a>
            <button className=" border border-blue-700 px-5 py-2 rounded-full hover:bg-blue-700 hover:text-white dark:text-gray-700 transition duration-300">
              Latest Projects
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full rounded-md z-50">
          <img className="w-full" src={developerImg} alt="" />
        </div>
      </div>
      <div className="w-full -mt-64 hidden md:block ">
        <img className="z-0" src={bgImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
