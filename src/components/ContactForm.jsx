import { useState } from "react";

function ContactForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

            <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-3 text-2xl text-gray-500 hover:text-black"
                >
                    ×
                </button>

                <h2 className="mb-6 text-2xl font-bold">
                    Let's Connect
                </h2>

                <form className="flex flex-col gap-4">

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                    />

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="4"
                        className="resize-none rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                    />

                    <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
                    >
                        Send Message
                    </button>

                </form>
            </div>
        </div>
    );
}

export default ContactForm;