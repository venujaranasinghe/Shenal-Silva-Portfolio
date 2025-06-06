"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "fullstack",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    description: "A complete e-commerce solution with payment integration and admin dashboard.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "frontend",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Vue.js", "TypeScript", "Tailwind CSS"],
    description: "Collaborative task management tool with real-time updates.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    category: "fullstack",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
    description: "Analytics dashboard for social media management.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "mobile",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React Native", "Firebase", "Redux"],
    description: "Secure mobile banking application with biometric authentication.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "AI Chat Bot",
    category: "backend",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Python", "FastAPI", "OpenAI", "Docker"],
    description: "Intelligent chatbot with natural language processing capabilities.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "frontend",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    description: "Responsive portfolio website with smooth animations.",
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "mobile", label: "Mobile" },
]

export function PortfolioFilter() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            variant={activeCategory === category.id ? "default" : "ghost"}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
            }`}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="bg-gray-900/50 border-gray-800 overflow-hidden group hover:bg-gray-800/50 transition-all duration-500 backdrop-blur-xl"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-3 bg-purple-600/20 text-purple-400 border-purple-600/30">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </Badge>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
