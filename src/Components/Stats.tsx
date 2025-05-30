const Stats = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="dark:bg-gray-900/50 bg-gray-50 rounded-lg p-6 md:p-8 flex justify-around items-center text-center">
                <div>
                    <p className="text-3xl md:text-4xl font-bold text-orange-500">3+</p>
                    <p className="dark:text-gray-300 text-black  mt-2 text-sm md:text-base">Experiences</p>
                </div>
                <div className="border-l border-gray-600 h-16 mx-2"></div>
                <div>
                    <p className="text-3xl md:text-4xl font-bold text-orange-500">8+</p>
                    <p className="dark:text-gray-300 text-black mt-2 text-sm md:text-base">Project done</p>
                </div>
                <div className="border-l border-gray-600 h-16 mx-2"></div>
                <div>
                    <p className="text-3xl md:text-4xl font-bold text-orange-500">6+</p>
                    <p className="dark:text-gray-300 text-black mt-2 text-sm md:text-base">Happy Clients</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
