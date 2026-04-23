/* -------------------------------------------------------------------------- */
/* Problem — contexto científico e quebra de crença limitante                 */
/* -------------------------------------------------------------------------- */

export function Problem() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-bold uppercase leading-snug text-accent md:text-3xl">
          TE DISSERAM QUE VOCÊ VAI CONVIVER COM O DIABETES PARA SEMPRE. MAS A
          CIÊNCIA CONTA UMA HISTÓRIA DIFERENTE.
        </h2>
        <div className="mx-auto my-6 h-1 w-16 bg-primary" aria-hidden />
        <div className="mx-auto max-w-2xl space-y-6 text-left text-xl font-semibold leading-relaxed text-[#1a1a1a]">
          <p>
            A medicina convencional trata o diabetes como doença crônica — algo
            que se controla, nunca se resolve. Você toma remédio, faz exame,
            volta ao médico, ajusta a dose. E assim, para o resto da vida.
          </p>
          <p>
            Mas estudos recentes — inclusive os que levaram o NHS britânico a
            adotar a dieta low carb como protocolo oficial — mostram que é
            possível alcançar a remissão do diabetes tipo 2: glicemia
            normalizada, com muito menos medicamento, através da mudança de
            estilo de vida.
          </p>
          <p>O problema, na maioria dos casos, não está no seu pâncreas.</p>
          <p className="text-2xl font-black text-primary">Está no prato.</p>
        </div>
      </div>
    </section>
  );
}
