function Work() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:py-20">

            <div className="mx-auto max-w-2xl text-center">

                <p className="text-xs font-semibold tracking-widest text-blue-600 sm:text-sm">
                    SELECTED WORK
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                    Ideas brought to life through strategy, design & technology.
                </h2>

            </div>

            {/* Project Grid */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
                {/* ProjectCards will render here */}
            </div>

        </section>
    );
}

export default Work;