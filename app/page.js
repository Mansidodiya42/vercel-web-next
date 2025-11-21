"use client"

import Navigation from "./components/navigation"
import Hero from "./components/hero"
import Features from "./components/features"
import Services from "./components/services"
import Team from "./components/team"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        {/* <Hero /> */}
        <Features />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
