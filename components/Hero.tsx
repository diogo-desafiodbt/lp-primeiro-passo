import Image from "next/image";

import { PurchaseButtonWithTooltip } from "@/components/PurchaseButtonWithTooltip";

/* -------------------------------------------------------------------------- */
/* Hero — gradiente, proposta de valor, CTAs livro físico / livro digital     */
/* -------------------------------------------------------------------------- */

export function Hero() {
  return (
    <section
      className="relative px-6 pb-[60px] pt-20"
      style={{
        background:
          "linear-gradient(135deg, #a30000 0%, #f4001e 50%, #ff6666 100%)",
      }}
    >
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-12 md:grid-cols-2">
        {/* Coluna texto */}
        <div className="order-1 flex flex-col md:order-none">
          <span className="mb-4 inline-flex w-fit items-center rounded-md bg-white px-3 py-1 text-sm font-bold uppercase tracking-wide text-primary sm:text-base">
            📖 O LIVRO DO DR. TURÍ SOUZA
          </span>
          <h1 className="font-impact text-[2.2rem] font-bold uppercase leading-tight text-white md:text-[3.5rem]">
            O PRIMEIRO PASSO CONTRA O DIABETES
          </h1>
          <p className="mt-5 text-xl font-semibold leading-[1.7] text-white">
            O guia prático do Dr. Turí Souza — o maior especialista do Brasil em
            diabetes — para quem quer mudar o metabolismo pela raiz, com ciência
            e sem complicação.
          </p>
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:flex-wrap">
            <div className="w-full md:min-w-0 md:flex-1">
              <PurchaseButtonWithTooltip href="#comprar">
                Livro Físico
              </PurchaseButtonWithTooltip>
            </div>
            <div className="w-full md:min-w-0 md:flex-1">
              <PurchaseButtonWithTooltip href="#comprar">
                Ebook
              </PurchaseButtonWithTooltip>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-start gap-1 text-white">
            <span className="text-base font-semibold tracking-wide">
              Role para baixo
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="animate-bounce"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Coluna imagem — preenche a altura da linha da grelha */}
        <div className="order-2 flex h-full min-h-[380px] w-full max-w-[600px] self-stretch md:order-none md:ml-auto md:mr-0 md:min-h-0">
          <div className="relative h-full min-h-[380px] w-full flex-1 overflow-hidden rounded-2xl bg-transparent md:h-full md:min-h-0">
            <Image
              src="/images/turi-hero.png"
              alt="Dr. Turí Souza"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "50% 15%" }}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="h-[60px] w-full"
          aria-hidden
        >
          <path
            d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z"
            fill="#13244f"
          />
        </svg>
      </div>
    </section>
  );
}
