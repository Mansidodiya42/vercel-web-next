"use client"

import { ArrowRight } from "lucide-react"
import Image from 'next/image'
import vercel2Img from '../assets/Vercel-img.jpg'

export default function Hero() {
  return (
    <section className="relative w-full py-20 sm:py-32 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-primary/5 via-background to-background"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                ✨ Welcome to Our Platform
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
                Build Amazing Things
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance max-w-xl">
                Create stunning, responsive websites with our modern web solutions. Everything you need to succeed in
                one powerful platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-lg inline-flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all duration-200">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">99%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="hidden lg:block">
            <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="mx-auto">
                    <Image src={vercel2Img} alt="Hero" width={700} height={900} className="object-contain" />
                  </div>
                  {/* <p className="text-lg font-semibold">Hero Image</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
