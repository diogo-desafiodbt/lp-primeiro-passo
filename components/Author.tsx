import Image from "next/image";

/* -------------------------------------------------------------------------- */
/* Author — biografia e posicionamento do Dr. Turí Souza                      */
/* -------------------------------------------------------------------------- */

export function Author() {
  return (
    <section className="bg-accent px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-12 md:grid-cols-2">
        <div className="relative w-full h-[500px] max-w-[420px] overflow-hidden rounded-2xl mx-auto md:mx-0">
          <Image
            src="/images/turi-author.png"
            alt="Dr. Turí Souza"
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            style={{ objectFit: "cover", objectPosition: "50% 10%" }}
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            SOBRE O AUTOR
          </p>
          <h2 className="mt-2 text-2xl font-bold uppercase text-white md:text-3xl">
            QUEM É O DR. TURÍ SOUZA
          </h2>
          <div className="my-4 h-1 w-12 bg-primary" aria-hidden />
          <div className="space-y-4 font-semibold leading-relaxed text-white">
            <p>
              Dr. Turí Souza é nutricionista e educador físico. Há mais de 15
              anos, dedica sua prática clínica e sua pesquisa ao controle
              metabólico do diabetes por meio da alimentação low carb
              individualizada.
            </p>
            <p>
              Criou a metodologia Low Carb Individualizada por Tipo Metabólico —
              uma inovação que diferencia sua abordagem de qualquer low carb
              genérica. E, como cofundador do Desafio Diabetes, hoje conecta
              milhares de brasileiros com diabetes, pré-diabetes e resistência à
              insulina ao método que pode mudar o rumo da doença.
            </p>
          </div>
          <figure className="relative mt-8 overflow-hidden rounded-lg bg-primary p-5 text-white">
            <span
              className="pointer-events-none absolute left-2 top-1 select-none text-6xl font-serif leading-none text-white/30"
              aria-hidden
            >
              “
            </span>
            <blockquote className="relative z-10 pt-4 text-xl leading-relaxed">
              O primeiro passo não precisa ser perfeito. Precisa apenas ser dado.
            </blockquote>
            <figcaption className="relative z-10 mt-4 font-bold">
              — Dr. Turí Souza
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
