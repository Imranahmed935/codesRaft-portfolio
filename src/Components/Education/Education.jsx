import certificate from "../../assets/skills/certificate.png";
const Education = () => {
  return (
    <div>
      <div>
        <h1 className="text-left md:text-4xl text-2xl font-semibold">
          Educational Background
        </h1>
        <h3 className="text-left text-lg">
          an Overview of my Academic and technical Journey.
        </h3>
      </div>
      <div className="md:py-14 py-10 md:flex md:gap-8">
        <div className="md:w-4/6 p-8 text-left space-y-4 bg-white rounded-lg">
          <div>
            <h2 className="text-2xl">Higher Secondary Certificate(HSC)</h2>
            <h3>Completed in 2019, From Brindaban government College.</h3>
          </div>
          <div>
            <h2 className="text-2xl">Secondary School Certificate(SSC)</h2>
            <h3>Completed in 2016, From Borni High School.</h3>
          </div>
          <div>
            <h2 className="text-2xl">Programming Journey</h2>
            <h3>Completed Web Development Course by Programming Hero</h3>
            <p>june 2024 - january 2025</p>
          </div>
        </div>
        <div className="md:w-[500px] mt-2">
          <img className="rounded-lg" src={certificate} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Education;
