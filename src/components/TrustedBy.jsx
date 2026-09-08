import companies from "../data/companyData";

function TrustedBy() {
    return (
        <section className="px-4 py-12 text-center sm:px-6 md:py-16">

            <p className="text-2xl font-semibold sm:text-3xl md:text-4xl">
                Trusted By Teams Building The Future
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                {companies.map((company) => (
                    <span
                        key={company}
                        className="rounded-full bg-blue-100 px-4 py-3 text-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:px-6 sm:py-4 sm:text-base"
                    >
                        {company}
                    </span>
                ))}
            </div>

        </section>
    );
}

export default TrustedBy;