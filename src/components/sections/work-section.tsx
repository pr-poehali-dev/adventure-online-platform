import { useReveal } from "@/hooks/use-reveal"

const PC_CATALOG = [
  {
    number: "01",
    title: "NEXUS Starter",
    specs: "RTX 4060 · Ryzen 5 · 16GB",
    target: "Full HD 144Hz",
    price: "от 89 900 ₽",
    image: "https://cdn.poehali.dev/projects/100aae93-24a5-4a05-bb89-c2c6b017b91c/files/8f690d99-2a5e-4ab7-8751-41911b94e622.jpg",
    url: "https://hyperpc.ru/gaming-pc/geforce-rtx-4060",
  },
  {
    number: "02",
    title: "NEXUS Pro",
    specs: "RTX 4070 Ti · Ryzen 7 · 32GB",
    target: "2K 165Hz",
    price: "от 159 900 ₽",
    image: "https://cdn.poehali.dev/projects/100aae93-24a5-4a05-bb89-c2c6b017b91c/files/ec902f9c-d8de-43d1-b608-4eea9975a386.jpg",
    url: "https://hyperpc.ru/gaming-pc/geforce-rtx-4070-ti",
  },
  {
    number: "03",
    title: "NEXUS Ultra",
    specs: "RTX 4090 · Ryzen 9 · 64GB",
    target: "4K 240Hz",
    price: "от 329 900 ₽",
    image: "https://cdn.poehali.dev/projects/100aae93-24a5-4a05-bb89-c2c6b017b91c/files/3b5d9d94-a203-4504-8a63-3bfdd100c113.jpg",
    url: "https://hyperpc.ru/gaming-pc/geforce-rtx-4090",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Каталог
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Готовые сборки</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {PC_CATALOG.map((pc, i) => (
            <PCCard key={i} pc={pc} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PCCard({
  pc,
  index,
  isVisible,
}: {
  pc: (typeof PC_CATALOG)[0]
  index: number
  isVisible: boolean
}) {
  return (
    <a
      href={pc.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-all duration-700 hover:border-foreground/25 hover:bg-foreground/10 hover:-translate-y-1 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-48 overflow-hidden md:h-56">
        <img
          src={pc.image}
          alt={pc.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute left-4 top-4 font-mono text-xs text-foreground/50">{pc.number}</span>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="mb-1 font-sans text-xl font-light text-foreground md:text-2xl">{pc.title}</h3>
        <p className="mb-1 font-mono text-xs text-foreground/60">{pc.specs}</p>
        <p className="mb-4 font-mono text-xs text-foreground/40">{pc.target}</p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-lg font-light text-foreground">{pc.price}</span>
          <span className="font-mono text-xs text-foreground/40 transition-all duration-300 group-hover:text-foreground/70 group-hover:translate-x-1">
            Подробнее →
          </span>
        </div>
      </div>
    </a>
  )
}
