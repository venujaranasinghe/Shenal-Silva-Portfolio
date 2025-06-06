"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Code, Clock, Zap, Heart, Star } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"

const funFacts = [
  {
    icon: <Coffee className="w-8 h-8 text-white" />,
    number: 1247,
    suffix: "+",
    label: "Cups of Coffee",
    color: "from-amber-600 to-orange-600",
  },
  {
    icon: <Code className="w-8 h-8 text-white" />,
    number: 50000,
    suffix: "+",
    label: "Lines of Code",
    color: "from-green-600 to-teal-600",
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    number: 2500,
    suffix: "+",
    label: "Hours Coding",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    number: 98,
    suffix: "%",
    label: "Project Success Rate",
    color: "from-purple-600 to-pink-600",
  },
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    number: 25,
    suffix: "+",
    label: "Happy Clients",
    color: "from-red-600 to-pink-600",
  },
  {
    icon: <Star className="w-8 h-8 text-white" />,
    number: 4.9,
    suffix: "/5",
    label: "Average Rating",
    color: "from-yellow-600 to-orange-600",
  },
]

export function FunFacts() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
            Fun Facts About Me
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Some interesting numbers that represent my journey as a developer and the passion I bring to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {funFacts.map((fact, index) => (
            <Card
              key={index}
              className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl hover:bg-gray-800/30 transition-all duration-500 group"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${fact.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {fact.icon}
                </div>
                <div className="text-4xl font-bold mb-2 text-white">
                  <AnimatedCounter end={fact.number} suffix={fact.suffix} />
                </div>
                <p className="text-gray-300 font-medium">{fact.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}