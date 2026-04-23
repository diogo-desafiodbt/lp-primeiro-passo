import Image from "next/image";

/* -------------------------------------------------------------------------- */
/* Book — apresentação do livro e pilares do método                           */
/* -------------------------------------------------------------------------- */

const pillars = [
  {
    icon: "🔬",
    title: "Baseado em ciência",
    body: "Cada orientação parte de estudos reais e de mais de uma década de experiência clínica.",
  },
  {
    icon: "🍽️",
    title: "Feito para a sua realidade",
    body: "A alimentação de baixo carboidrato que Dr. Turí ensina funciona com alimentos simples, acessíveis e do cotidiano.",
  },
] as const;

export function Book() {
  return (
    <section className="bg-white px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
        <div className="flex w-full justify-center drop-shadow-2xl">
          <div className="relative mx-auto h-[260px] w-full max-w-[220px] sm:h-[300px] sm:max-w-[260px] md:h-[min(520px,75vh)] md:max-w-[440px] md:min-h-[440px]">
            <Image
              src="/images/livro-fisico.png"
              alt="Livro O Primeiro Passo"
              fill
              sizes="(max-width: 768px) 260px, 440px"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold uppercase text-accent md:text-3xl">
            O QUE É &apos;O PRIMEIRO PASSO&apos;
          </h2>
          <div className="my-4 h-1 w-12 bg-primary" aria-hidden />
          <p className="text-lg font-semibold leading-relaxed text-[#333333]">
            Este livro é o ponto de partida que faltava. Escrito pelo Dr. Turí
            Souza — o maior especialista do Brasil em diabetes, com mais de 15
            anos dedicados ao controle metabólico do diabetes — O Primeiro Passo
            reúne, de forma clara e acessível, tudo o que você precisa saber para
            começar a tratar o diabetes pela raiz. Sem jargões. Sem promessas
            miraculosas. Sem dieta igual para todo mundo. Apenas ciência aplicada
            à vida real.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4">
            {pillars.map((card) => (
              <div
                key={card.title}
                className="card-surface border-l-4 border-primary"
              >
                <p className="text-lg">
                  <span className="mr-2" aria-hidden>
                    {card.icon}
                  </span>
                  <span className="font-bold text-accent">{card.title}</span>
                </p>
                <p className="mt-2 text-lg font-semibold leading-relaxed text-[#333333]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
