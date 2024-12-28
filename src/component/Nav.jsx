const Nav = () => {
    return (
        <nav className="sticky top-0 w-full flex items-center justify-between py-6 px-10 border-b border-gray-300 z-50">
            <div className="text-2xl font-bold">Senopati.co</div>
            <ul className="flex items-center gap-40 text-sm font-medium [&>*{cursor:pointer}]">
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button className="font-bold border border-gray-300 py-3 px-8 rounded-full">Sign Up</button>
        </nav>
    );
};

export default Nav;
