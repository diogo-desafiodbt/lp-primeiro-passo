/* -------------------------------------------------------------------------- */
/* WhatYouLearn — estrutura em 6 partes do conteúdo do livro                 */
/* -------------------------------------------------------------------------- */

const parts = [
  {
    part: "PARTE 1",
    title: "O Projeto Primeiro Passo",
    text: "Por que tantas pessoas com diabetes não conseguem melhorar — e o que realmente faz a diferença.",
  },
  {
    part: "PARTE 2",
    title: "Entendendo o Diabetes Como Nunca Foi Explicado",
    text: "O que ninguém te contou sobre o que está acontecendo no seu corpo — e por que a alimentação que te ensinaram pode estar piorando tudo.",
  },
  {
    part: "PARTE 3",
    title: "Os Exames Que Mostram Se Você Está Melhorando",
    text: "Quais números realmente importam, como interpretá-los — e o que fazer com essa informação.",
  },
  {
    part: "PARTE 4",
    title: "O Primeiro Passo na Prática",
    text: "Um plano de 21 dias progressivo, com cardápio e receitas simples, baratas e feitas para a vida real.",
  },
  {
    part: "PARTE 5",
    title: "Tipos Metabólicos: O Segredo da Individualização",
    text: "Por que a mesma dieta funciona para uns e não funciona para outros — e como descobrir o que funciona para você.",
  },
  {
    part: "APÊNDICE",
    title: "A Ciência Por Trás do Método",
    text: "Os estudos que comprovam. Explicados em linguagem simples.",
  },
] as const;

export function WhatYouLearn() {
  return (
    <section className="bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold uppercase text-accent md:text-3xl">
          O QUE VOCÊ VAI ENCONTRAR DENTRO DO LIVRO
        </h2>
        <div className="mx-auto my-4 h-1 w-12 bg-primary" aria-hidden />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {parts.map((item) => (
            <article
              key={item.part}
              className="card-surface transition-shadow duration-200 hover:shadow-lg"
            >
              <p className="text-sm font-bold uppercase tracking-wide text-primary">
                {item.part}
              </p>
              <h3 className="mt-2 text-lg font-bold text-accent">{item.title}</h3>
              <p className="mt-3 text-lg font-semibold leading-relaxed text-[#222222]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
