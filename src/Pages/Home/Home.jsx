import developerImg from "../../assets/develop.webp";

const Home = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center gap-4 px-4 py-6 ">
      <div className=" md:w-1/2 h-auto p-6 w-full rounded-md space-y-4">
        <h3 className="text-2xl">I'm a Full Stack Developer</h3>
        <h1 className="md:text-4xl text-4xl font-bold">
          Turning Ideas Into Web Solutions.
        </h1>
        <p className="text-lg leading-relaxed">
          I develop Seamless user experiences and robust Backend logic for
          modern web Apps.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-700 px-6 py-2 text-white">Hire Me</button>
          <button className=" border border-blue-700 px-5 py-2 rounded-full hover:bg-blue-700 hover:text-white dark:text-gray-700 transition duration-300">
            Latest Projects
          </button>
        </div>
      </div>
      <div className="md:w-1/2 w-full rounded-md ">
        <img className="w-full" src={developerImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
