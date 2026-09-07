import services from "../data/servicesData"

function Services() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20 text-center mt-8">
            <div className="max-w-2xl mx-auto">
                <p className="mb-3 text-sm font-semibold tracking-widest text-blue-600">
                    SERVICES
                </p>
                <h2 className="text-3xl font-bold md:text-5xl text-gray-700 ">
                    What we do best.
                </h2>
                <p className="mt-5 text-gray-600">
                    From early ideas to finished products, we help brands solve problems
                    and build digital experiences that matter.
                </p>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {services.map((service) =>
                    (
                        <div key={service}
                            className="rounded-2xl border border-gray-200 bg-white p-8 text-left transition duration-300 hover:translate-y-2 hover:shadow-lg">
                            <h3 className="mb-4 text-xl font-bold">{service.title}</h3>
                            <p className="mb-6 leading-relaxed text-gray-600">{service.desc}</p>
                            <button className="bg-blue-300 rounded-full px-5 py-2 hover:bg-gradient-to-r from-[#7CFF9B] via-[#28D9D1] to-[#D92BCB] transition-transform duration-500 ease-in-out">
                                Learn more
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Services