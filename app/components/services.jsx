"use client"

import { Code2, Palette, Smartphone, Cpu } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      price: "$2,999",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive designs that users love and engage with daily.",
      price: "$1,999",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      price: "$3,999",
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Integrate artificial intelligence into your applications for smarter solutions.",
      price: "$4,999",
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-muted/50 border border-border hover:border-accent transition-all duration-300 hover:shadow-xl group overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="mb-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-semibold text-2xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
