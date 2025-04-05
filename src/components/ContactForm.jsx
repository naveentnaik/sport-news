import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingSubmissions = JSON.parse(
      localStorage.getItem("contactSubmissions") || "[]"
    );

    const submission = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };

    existingSubmissions.push(submission);

    localStorage.setItem(
      "contactSubmissions",
      JSON.stringify(existingSubmissions)
    );

    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <div className="bg-gradient-to-t from-gray-600 via-gray-400 to-gray-200 text-white min-h-screen flex flex-col items-center p-8">
      <h1 className="text-6xl font-bold mb-6 mt-8">{t("form.contactUs")}</h1>

      <p className="text-xl text-center mb-12 max-w-lg">
        {t("form.description")}
      </p>

      {submitted && (
        <div className="mt-4 p-4 bg-blue-700 text-white rounded">
          {t("form.thankYou")}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-300 mb-2">
            {t("form.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            className={`w-full p-4 rounded transition-all duration-500 outline-none ${
              focusedField === "name"
                ? "bg-white text-gray-900"
                : "bg-gray-700 text-white"
            }`}
            placeholder={t("form.placeholderName")}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            {t("form.email")} 
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            className={`w-full p-4 rounded transition-all duration-500 outline-none ${
              focusedField === "email"
                ? "bg-white text-gray-900"
                : "bg-gray-700 text-white"
            }`}
            placeholder={t("form.placeholderEmail")}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            {t("form.message")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
            className={`w-full p-4 rounded h-40 transition-all duration-500 outline-none placeholder:text-gray-400 ${
              focusedField === "message"
                ? "bg-white text-gray-900"
                : "bg-gray-700 text-white"
            }`}
            placeholder={t("form.placeholderMessage")}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-100 hover:bg-blue-200 hover:cursor-pointer text-black font-bold p-4 rounded transition duration-200"
        >
          {t("form.submit")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
