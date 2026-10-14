import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation("contact");

  const inputClasses =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = new FormData();

    form.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    // Honeypot Spam Protection
    form.append("botcheck", "");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: form,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900">
        {t("form.title")}
      </h2>

      <p className="mt-3 text-slate-600">
        {t("form.description")}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-1 flex-col"
      >
        {/* Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <div className="space-y-6">

          {/* Name & Email */}

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-slate-700"
              >
                {t("form.name")}{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("form.namePlaceholder")}
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-slate-700"
              >
                {t("form.email")}{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("form.emailPlaceholder")}
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
                {t("form.phone")}{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("form.phonePlaceholder")}
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block font-medium text-slate-700"
              >
                {t("form.subject")}{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("form.subjectPlaceholder")}
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
              {t("form.message")}{" "}
              <span className="text-red-500">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={t("form.messagePlaceholder")}
              className={`${inputClasses} resize-none`}
            />
          </div>

        </div>

        {/* Status Messages */}

        {status === "success" && (
          <div className="mt-6 rounded-xl bg-green-100 p-4 text-green-700">
            {t("form.success")}
          </div>
        )}

        {status === "error" && (
          <div className="mt-6 rounded-xl bg-red-100 p-4 text-red-700">
            {t("form.error")}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          {loading
            ? t("form.sending")
            : t("form.submit")}
        </button>

      </form>
    </div>
  );
}