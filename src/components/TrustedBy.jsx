import companies from "../data/companyData"

function TrustedBy() {
    return (
        <section className="text-center">
            <p className="text-3xl">Trusted By Teams Building The Future</p>
            <div className="flex justify-center gap-6 mt-8">
                {companies.map((company) =>
                (<span key={company} className="bg-blue-100 px-6 py-4 
            rounded-full hover:translate-y-2 hover:shadow-xl ">
                    {company}
                </span>
                ))}
            </div>
        </section>
    )
}
export default TrustedBy