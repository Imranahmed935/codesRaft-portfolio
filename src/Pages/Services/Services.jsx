import consultant from '../../assets/skills/Consultant.jpg'
import uiDesign from '../../assets/skills/ui.jpeg'
import dev1 from '../../assets/skills/development.jpg'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <div>
        <h1 className="text-left md:text-3xl text-2xl font-semibold mt-6">
          welcome to Services page
        </h1>
        <h3 className="text-left text-lg">
          Explore a wide range of solutions tailored to meet your needs and goals.
        </h3>
      </div>
      <div className='space-y-6 md:py-14 '>
        <div className="text-left md:flex gap-4 items-center border border-gray-500 p-4 rounded-lg">
            <div className='w-full '>
                <img className='w-[500px] h-64' src={dev1} alt="" />
            </div>
            <div className='py-4 space-y-4 text-justify'>
                <h1 className='text-2xl font-bold '>Web Development</h1>
                <p>
                    Web development is the process of creating, building, and maintaining websites and web applications. It involves everything from web design to programming and database management. Web development is generally divided into three core areas: Frontend Development, Backend Development, and Full Stack Development.
                </p>

                <Link to={'/contact'}>
                <button className="bg-blue-700 mt-4 px-10 py-2 rounded text-white flex items-center gap-2 cursor-pointer">Contact</button>
                </Link>

            </div>
        </div>
        <div className="text-left md:flex gap-4 items-center border border-gray-500 p-4 rounded-lg">
            <div className='w-full '>
                <img className='w-[500px] h-64' src={consultant} alt="" />
            </div>
            <div className='py-4 space-y-4 text-justify'>
                <h1 className='text-2xl font-bold '>Web Consultant</h1>
                <p>
                    Web development is the process of creating, building, and maintaining websites and web applications. It involves everything from web design to programming and database management. Web development is generally divided into three core areas: Frontend Development, Backend Development, and Full Stack Development.
                </p>

                <Link to={'/contact'}>
                <button className="bg-blue-700 mt-4 px-10 py-2 rounded text-white flex items-center gap-2 cursor-pointer">Contact</button>
                </Link>

            </div>
        </div>
        <div className="text-left md:flex gap-4 items-center border border-gray-500 p-4 rounded-lg">
            <div className='w-full '>
                <img className='w-[500px] h-64' src={uiDesign} alt="" />
            </div>
            <div className='py-4 space-y-4 text-justify'>
                <h1 className='text-2xl font-bold '>UI/UX Design</h1>
                <p>
                    Web development is the process of creating, building, and maintaining websites and web applications. It involves everything from web design to programming and database management. Web development is generally divided into three core areas: Frontend Development, Backend Development, and Full Stack Development.
                </p>

                <Link to={'/contact'}>
                <button className="bg-blue-700 mt-4 px-10 py-2 rounded text-white flex items-center gap-2 cursor-pointer">Contact</button>
                </Link>

            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
