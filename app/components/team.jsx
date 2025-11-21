"use client"

import { Linkedin, Twitter } from "lucide-react"

export default function Team() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "👨‍💼",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "👨‍💻",
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      image: "👩‍🎨",
    },
    {
      name: "James Wilson",
      role: "Product Manager",
      image: "👨‍💼",
    },
  ]

  return (
    <section id="team" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to delivering excellence
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group cursor-pointer">
              {/* Avatar */}
              <div className="mb-4 w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {member.image}
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
