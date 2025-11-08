function Contact() {
  return (
    <div
      id="contact"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8"
    >
      <h1 className="text-center text-4xl font-light text-(--color-primary)">
        Get in Touch
      </h1>

      <form
        className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl"
        aria-label="contact form"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg border-2 border-(--color-secondary) px-4 py-3 text-lg
            outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="text"
            placeholder="Your last name"
            className="w-full rounded-lg border-2 border-(--color-secondary) px-4 py-3 text-lg
            outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
          />

          <div className="md:col-span-2">
            <input
              type="email"
              placeholder="Your e-mail"
              className="w-full rounded-lg border-2 border-(--color-secondary) px-4 py-3 text-lg
              outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="md:col-span-2">
            <textarea
              placeholder="Your message"
              rows={6}
              className="w-full resize-none rounded-lg border-2 border-(--color-secondary) px-4 py-3 text-lg
              outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="rounded-lg border-2 border-(--color-secondary) bg-teal-500 px-6 py-3 font-semibold
            text-white transition-all duration-200 hover:bg-teal-600 cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
