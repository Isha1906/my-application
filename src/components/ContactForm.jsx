function ContactForm() {
    return (
        <div>
            <h2>Let's Connect</h2>

            <form>
                <input type="text" placeholder="Your Name" />

                <input type="email" placeholder="Your Email" />

                <textarea placeholder="Your Message"></textarea>

                <button type="submit">
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactForm;