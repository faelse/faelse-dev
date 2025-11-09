import { useState, useEffect } from "react";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [showMessage, setShowMessage] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Validação local
  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "O nome é obrigatório.";
    if (!formData.lastName.trim())
      newErrors.lastName = "O sobrenome é obrigatório.";
    if (!formData.email.trim()) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido.";
    }
    if (!formData.message.trim())
      newErrors.message = "A mensagem é obrigatória.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mwpaeyak", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setErrors({});
        setShowMessage(true);
      } else {
        setStatus("error");
        setShowMessage(true);
      }
    } catch {
      setStatus("error");
      setShowMessage(true);
    }
  }

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
        setStatus("idle");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div
      id="contact"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-10 p-8 bg-white"
    >
      <h1 className="text-center text-4xl font-light text-(--color-primary)">
        Entre em contato :)
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl md:max-w-lg lg:max-w-xl"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Nome"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className={`w-full rounded-lg border-2 px-4 py-3 text-lg outline-none transition-all duration-300 hover:bg-teal-50 focus:border-teal-500 ${
                errors.firstName ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500 transition-all duration-300">
                {errors.firstName}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Sobrenome"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className={`w-full rounded-lg border-2 px-4 py-3 text-lg outline-none transition-all duration-300 hover:bg-teal-50 focus:border-teal-500 ${
                errors.lastName ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500 transition-all duration-300">
                {errors.lastName}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full rounded-lg border-2 px-4 py-3 text-lg outline-none transition-all duration-300 hover:bg-teal-50 focus:border-teal-500 ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 transition-all duration-300">
                {errors.email}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`w-full resize-none rounded-lg border-2 px-4 py-3 text-lg outline-none transition-all duration-300 hover:bg-teal-50 focus:border-teal-500 ${
                errors.message ? "border-red-400" : "border-gray-200"
              }`}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-500 transition-all duration-300">
                {errors.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-2 flex flex-col items-center md:items-end gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full md:w-auto rounded-lg px-8 py-3 font-semibold text-white transition-all duration-300 cursor-pointer ${
              status === "sending"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-teal-500 hover:bg-teal-600"
            }`}
          >
            {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
          </button>

          {/* Mensagem de sucesso/erro com fade suave */}
          <div
            className={`w-full overflow-hidden transition-all duration-500 ${
              showMessage ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {status === "success" && (
              <div className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-center text-green-700 transition-all duration-300">
                ✅ Sua mensagem foi enviada com sucesso! Obrigado pelo contato.
              </div>
            )}
            {status === "error" && (
              <div className="w-full rounded-lg border border-red-300 bg-red-50 p-4 text-center text-red-700 transition-all duration-300">
                ❌ Ocorreu um erro ao enviar. Tente novamente mais tarde.
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
