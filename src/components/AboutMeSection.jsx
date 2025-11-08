function AboutMeSection() {
  return (
    <section
      id="about-me"
      className="w-full bg-white text-zinc-800 flex items-center justify-center py-20 px-6"
    >
      <div className="w-full max-w-2xl border border-zinc-300 rounded-xl p-8 shadow-md bg-zinc-50 hover:shadow-teal-300/30 transition">
        <h2 className="text-2xl font-bold text-teal-600 border-b border-zinc-300 pb-2 mb-4 font-mono">
          # sobre-mim
        </h2>

        <p className="text-zinc-600 font-mono text-lg mb-6">
          Clique abaixo para saber mais sobre mim e o que estou fazendo:
        </p>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-lg font-mono text-blue-600 hover:text-red-500 transition-colors duration-200"
        >
          <span>→ Clique aqui</span>
        </a>
      </div>
    </section>
  );
}

export default AboutMeSection;
