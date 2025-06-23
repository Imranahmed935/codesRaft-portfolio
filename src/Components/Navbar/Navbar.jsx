
const Navbar = () => {
    return (
        <nav className="max-w-5xl mx-auto flex justify-between items-center px-0 mt-4 p-2 rounded-full">
            <h1 className="text-2xl font-bold text-blue-600 tracking-wide">CodeRaft</h1>
            <ul className="hidden md:flex gap-8 dark:text-gray-700 font-medium">
                <li>Home</li>
                <li>Projects</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <button className="border border-blue-700 px-5 py-2 rounded-full hover:bg-blue-700 hover:text-white dark:text-gray-700 transition duration-300">Hire Me</button>
        </nav>
    );
};

export default Navbar;