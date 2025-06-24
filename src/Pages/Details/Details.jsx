import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const { title, description, liveLink, image, gitHubLink, techStack } =
    details;

  return (
    <div>
      <div>
        <h1>this is details page</h1>
      </div>
      <div>
        <div className="md:py-10 py-4">
          <img className="rounded-lg" src={image} alt="" />
        </div>
        <div className="text-left space-y-4">
          <h1 className="text-2xl font font-semibold">{title}</h1>
          <p>{description}</p>
          <div className="flex gap-6 items-center">
            <span className="text-lg font-bold">Technologies:</span>
            {techStack.map((tech) => (
              <h3 className="border border-gray-500 p-2 rounded-lg">{tech}</h3>
            ))}
          </div>
          <div className="flex items-center gap-8">
            <a href={liveLink}>
              <button className="bg-blue-700 px-10 py-2 rounded text-white flex items-center gap-2">
                Live Link
              </button>
            </a>
            <a href={gitHubLink}>
              <button className=" border border-blue-700 px-5 py-2 rounded-full hover:bg-blue-700 hover:text-white dark:text-gray-700 transition duration-300 flex items-center gap-2">
                GitHub Link
              </button>
            </a>
            <a>
              <button className="border-b-2 border-blue-600">Go back</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
