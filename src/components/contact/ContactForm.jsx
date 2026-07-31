import contact from "../../data/contact.json";

export default function ContactForm() {
  const inputClasses =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900">
        {contact.form.title}
      </h2>

      <p className="mt-3 text-slate-600">
        {contact.form.description}
      </p>

      <form className="mt-8 flex flex-1 flex-col">
        <div className="space-y-6">
          {/* Name & Email */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-slate-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Enter your full name"
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-slate-700"
              >
                Email <span className="text-red-500">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email address"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Phone & Subject */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block font-medium text-slate-700"
              >
                Phone <span className="text-red-500">*</span>
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="Enter your phone number"
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block font-medium text-slate-700"
              >
                Subject <span className="text-red-500">*</span>
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="How can we help?"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-slate-700"
            >
              Message <span className="text-red-500">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell us about your requirements..."
              className={`${inputClasses} resize-none`}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}