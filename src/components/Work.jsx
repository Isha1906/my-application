function Work() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold tracking-widest text-blue-600">
                    SELECTED WORK
                </p>

                <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                    Ideas brought to life through strategy, design & technology.
                </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {/* ProjectCards will render here */}
            </div>
        </section>
    );
}

export default Work;