function Hero() {
    return (
        <section className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-12 sm:px-6 md:py-16 lg:py-24">

            <p className="text-center text-sm font-bold text-gray-700 sm:text-base">
                ✦ THE NEXORA IMPACT ✦
            </p>

            <h1 className="max-w-2xl px-2 py-2 text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                The world's leading distributor of professional
            </h1>

            <p className="max-w-3xl text-center text-base leading-relaxed text-gray-600 sm:text-lg">
                Nexora ensures the world's leading technology
                brands reach their customers in the most
                powerful ways. We bring together specialist
                teams for unrivalled depth of knowledge,
                unique market access and durable partnerships
                built on trust. Harnessing progressive technology
                for real-world outcomes and commercial impact.
            </p>

            <div className="flex flex-col items-center gap-4 px-2 py-2 sm:flex-row">
                <button className="w-full rounded-full bg-blue-600 px-5 py-2 transition-transform duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#7CFF9B] hover:via-[#28D9D1] hover:to-[#D92BCB] sm:w-auto">
                    Start a Project
                </button>

                <button className="w-full rounded-full bg-blue-600 px-5 py-2 transition-transform duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#7CFF9B] hover:via-[#28D9D1] hover:to-[#D92BCB] sm:w-auto">
                    View Our Work →
                </button>
            </div>

        </section>
    );
}

export default Hero;