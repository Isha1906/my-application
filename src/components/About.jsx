function About() {
    return (
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2">
            <div>
                <h3 className="text-sm font-semibold tracking-widest text-blue-600">
                    ABOUT NEXORA
                </h3>

                <h2 className="mt-4 text-4xl font-bold leading-tight">
                    We don't just build websites. We build digital experiences.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                    Supporting text about your company and what makes it different.
                </p>

                <div className="mt-8 space-y-4">
                    <p>✓ Strategy-first approach</p>
                    <p>✓ Design that feels intuitive</p>
                    <p>✓ Technology built to scale</p>
                </div>
            </div>

            <div className="flex items-center justify-center rounded-2xl bg-white p-10 shadow-sm">
                <div className="text-center">
                    <p className="text-5xl font-bold text-blue-600">
                        4+
                    </p>

                    <p className="mt-2 text-lg text-slate-600">
                        Years of Experience
                    </p>
                </div>
            </div>

        </section>
    );
}

export default About;