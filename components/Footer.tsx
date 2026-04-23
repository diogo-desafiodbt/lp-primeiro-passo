import Image from "next/image";

/* -------------------------------------------------------------------------- */
/* Footer — marca Desafio Diabetes e links oficiais                           */
/* -------------------------------------------------------------------------- */

export function Footer() {
  return (
    <footer className="bg-accent px-6 py-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Image
          src="/images/logo.png"
          alt="Logo Desafio Diabetes"
          width={140}
          height={90}
          className="mx-auto block max-w-[140px]"
          style={{ objectFit: "contain" }}
          sizes="140px"
        />
        <p className="mt-6 text-lg font-semibold text-white">
          Desafio Diabetes · A ciência da reversão do diabetes.
        </p>
        <p className="mt-2 flex w-full max-w-full flex-wrap items-center justify-center gap-x-2 text-center text-base font-semibold text-white break-words md:text-lg">
          <a
            className="break-words text-primary-light hover:underline"
            href="https://instagram.com/desafiodiabetesbr"
            target="_blank"
            rel="noreferrer"
          >
            @desafiodiabetesbr
          </a>
          <span className="mx-2 font-semibold text-white">·</span>
          <a
            className="break-words text-primary-light hover:underline"
            href="https://instagram.com/drturisouza"
            target="_blank"
            rel="noreferrer"
          >
            @drturisouza
          </a>
          <span className="mx-2 font-semibold text-white">·</span>
          <a
            className="break-words text-primary-light hover:underline"
            href="https://desafiodiabetes.com.br"
            target="_blank"
            rel="noreferrer"
          >
            desafiodiabetes.com.br
          </a>
        </p>
        <div className="mt-8 w-full border-t border-white/10 pt-6">
          <p className="text-sm font-semibold text-white">
            © 2025 Desafio Diabetes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
