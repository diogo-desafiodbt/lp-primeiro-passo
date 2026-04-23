/* -------------------------------------------------------------------------- */
/* Numbers — prova social com métricas da comunidade                         */
/* -------------------------------------------------------------------------- */

const stats = [
  { value: "+500 mil", label: "seguidores" },
  { value: "+60 mil", label: "livros vendidos" },
  { value: "+10 mil", label: "downloads do aplicativo" },
  { value: "+2.500", label: "diabéticos atendidos" },
] as const;

export function Numbers() {
  return (
    <section className="bg-accent px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-8">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={[
                "flex flex-col items-center justify-center border-r border-white/10 px-2 text-center",
                index % 2 === 1 ? "max-md:border-r-0" : "",
                index === stats.length - 1 ? "md:border-r-0" : "",
              ].join(" ")}
            >
              <span className="text-5xl font-black text-primary">{item.value}</span>
              <span className="mt-1 text-lg font-bold text-white">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-base font-semibold text-white">
          Esses números têm um nome por trás. E uma missão: ajudar você a dar o
          primeiro passo.
        </p>
      </div>
    </section>
  );
}
