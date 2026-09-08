type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="bg-carbon relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[80px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-xs tracking-[0.28em] text-brand-bright uppercase sm:text-sm sm:tracking-[0.35em]">
          {eyebrow}
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-3xl tracking-wide sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/65 sm:text-lg">{text}</p>
      </div>
    </section>
  );
}
