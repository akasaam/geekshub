interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="w-full py-12 md:py-24 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-400/10"></div>
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="border-primary/5 border-[0.5px]"
              style={{
                gridColumn: `${i * 2 + 1} / span 2`,
                gridRow: "1 / -1",
              }}
            ></div>
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="border-primary/5 border-[0.5px]"
              style={{
                gridColumn: "1 / -1",
                gridRow: `${i * 2 + 1} / span 2`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-slide-up">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">{title}</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

