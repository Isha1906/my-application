import services from "../data/servicesData";

function Services() {
    return (
        <section className="mx-auto mt-8 max-w-7xl px-4 py-12 text-center sm:px-6 md:py-16 lg:py-20">
            
            <div className="mx-auto max-w-2xl">
                
                <p className="mb-3 text-xs font-semibold tracking-widest text-blue-600 sm:text-sm">
                    SERVICES
                </p>

                <h2 className="text-3xl font-bold text-gray-700 sm:text-4xl md:text-5xl">
                    What we do best.
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                    From early ideas to finished products, we help brands solve problems
                    and build digital experiences that matter.
                </p>

            </div>

            {/* Services Grid */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
                
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-6 md:p-8"
                    >
                        <h3 className="mb-4 text-lg font-bold sm:text-xl">
                            {service.title}
                        </h3>

                        <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                            {service.desc}
                        </p>

                        <button className="rounded-full bg-blue-300 px-4 py-2 text-sm transition duration-300 hover:bg-gradient-to-r hover:from-[#7CFF9B] hover:via-[#28D9D1] hover:to-[#D92BCB] sm:px-5 sm:text-base">
                            Learn more
                        </button>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default Services;