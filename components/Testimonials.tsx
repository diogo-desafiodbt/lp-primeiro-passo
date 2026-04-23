/* -------------------------------------------------------------------------- */
/* Testimonials — prova social com depoimentos                                */
/* -------------------------------------------------------------------------- */

const items = [
  {
    quote:
      "Depois de anos tomando remédio sem entender o porquê, finalmente entendi o que estava acontecendo no meu corpo. Minha glicemia estabilizou e minha relação com o diabetes mudou completamente.",
    author: "Maria S., 58 anos, São Paulo",
  },
  {
    quote:
      "Aprendi que a dieta não é igual para todo mundo. Descobri meu tipo metabólico e em dois meses minha glicemia já estava respondendo diferente.",
    author: "Roberto A., 63 anos, Belo Horizonte",
  },
  {
    quote:
      "Simples, direto e baseado em ciência. Sem milagres, sem enrolação. Exatamente o que eu precisava para começar.",
    author: "Ana P., 51 anos, Curitiba",
  },
] as const;

export function Testimonials() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold uppercase text-accent md:text-3xl">
          QUEM DÁ O PRIMEIRO PASSO, NÃO PARA MAIS
        </h2>
        <div className="mx-auto my-4 h-1 w-12 bg-primary" aria-hidden />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t) => (
            <article
              key={t.author}
              className="border-l-4 border-primary py-1 pl-4"
            >
              <div className="mb-3 text-lg text-primary">⭐⭐⭐⭐⭐</div>
              <p className="text-lg font-semibold italic leading-relaxed text-[#1a1a1a]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 text-lg font-semibold text-[#1a1a1a]">
                {t.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
