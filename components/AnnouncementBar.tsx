/* -------------------------------------------------------------------------- */
/* Faixa de mensagem — acima do Hero                                          */
/* -------------------------------------------------------------------------- */

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#a30000] px-6 py-3 text-center">
      <p className="text-xl font-bold leading-snug text-white">
        O Desafio contra o <span className="uppercase">DIABETES</span> precisa de
        um{" "}
        <span className="uppercase underline decoration-white/60">
          PRIMEIRO PASSO
        </span>
      </p>
    </div>
  );
}
