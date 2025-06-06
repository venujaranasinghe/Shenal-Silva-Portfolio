"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Star,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Download,
  Menu,
  X,
  MapPin,
  Calendar,
  Award,
  Users,
  Coffee,
  Heart,
  ArrowUp,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "./components/contact-form"
import { PortfolioFilter } from "./components/portfolio-filter"
import { AnimatedCounter } from "./components/animated-counter"
import { TypingAnimation } from "./components/typing-animation"
import { FloatingElements } from "./components/floating-elements"
import { BlogSection } from "./components/blog-section"
import { FunFacts } from "./components/fun-facts"
import { CurrentStatus } from "./components/current-status"
import { useSmoothScroll } from "./components/smooth-scroll"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Creating stunning, responsive user interfaces with modern frameworks like React, Next.js, and Vue.js. Focus on performance, accessibility, and user experience.",
      color: "from-purple-600 to-pink-600",
      features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Building robust server-side applications and APIs using Node.js, Python, and modern database technologies. Scalable and secure solutions.",
      color: "from-blue-600 to-cyan-600",
      features: ["Node.js/Express", "Python/FastAPI", "PostgreSQL", "REST APIs"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Full Stack Development",
      description:
        "End-to-end web application development combining frontend and backend expertise. Complete solutions from concept to deployment.",
      color: "from-green-600 to-teal-600",
      features: ["MERN Stack", "Next.js", "Database Design", "Cloud Deployment"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications using React Native and Flutter. Native performance with shared codebase efficiency.",
      color: "from-orange-600 to-red-600",
      features: ["React Native", "Flutter", "iOS/Android", "App Store Deploy"],
    },
  ]

  const skills = [
    { name: "JavaScript", level: 92, icon: "🟨", category: "Frontend" },
    { name: "React", level: 88, icon: "⚛️", category: "Frontend" },
    { name: "TypeScript", level: 85, icon: "🔷", category: "Frontend" },
    { name: "Node.js", level: 82, icon: "🟢", category: "Backend" },
    { name: "Python", level: 78, icon: "🐍", category: "Backend" },
    { name: "PostgreSQL", level: 75, icon: "🐘", category: "Database" },
    { name: "MongoDB", level: 72, icon: "🍃", category: "Database" },
    { name: "Docker", level: 70, icon: "🐳", category: "DevOps" },
  ]

  const experience = [
    {
      year: "2024 - Present",
      title: "FREELANCE DEVELOPER",
      company: "Self-Employed",
      description:
        "Working on diverse web development projects for startups and established businesses. Specializing in modern web technologies and delivering high-quality solutions.",
      achievements: ["15+ successful projects", "100% client satisfaction", "Average 4.9/5 rating"],
    },
    {
      year: "2023 - 2024",
      title: "FULL STACK INTERN",
      company: "TechSolutions Lanka",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on enterprise-level projects.",
      achievements: ["Led 3 junior developers", "Reduced load time by 40%", "Implemented CI/CD pipeline"],
    },
    {
      year: "2023",
      title: "JUNIOR DEVELOPER",
      company: "StartupHub Colombo",
      description:
        "Contributed to frontend development and learned modern development practices. Worked in an agile environment with cross-functional teams.",
      achievements: ["Delivered 5 major features", "Improved code coverage to 85%", "Mentored 2 interns"],
    },
  ]

  const education = [
    {
      year: "2023 - Present",
      title: "BSc COMPUTER SCIENCE",
      institution: "University of Colombo",
      description:
        "Currently in second year with focus on software engineering, algorithms, and web technologies. Maintaining a strong GPA while working on practical projects.",
      achievements: ["GPA: 3.8/4.0", "Dean's List 2023", "CS Society Vice President"],
    },
    {
      year: "2022",
      title: "FULL STACK BOOTCAMP",
      institution: "CodeAcademy Pro",
      description:
        "Intensive 6-month program covering modern web development stack. Hands-on projects and industry best practices.",
      achievements: ["Top 5% of cohort", "3 portfolio projects", "Industry mentor program"],
    },
    {
      year: "2021",
      title: "WEB DESIGN CERTIFICATION",
      institution: "Google UX Design",
      description:
        "Comprehensive course on UI/UX design principles, user research, and responsive web design methodologies.",
      achievements: ["Google certified", "5 design projects", "User research specialist"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Solutions",
      content:
        "Shenal delivered exceptional work on our e-commerce platform. His attention to detail, technical expertise, and ability to meet tight deadlines made him an invaluable team member. The final product exceeded our expectations.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      project: "E-commerce Platform",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      content:
        "Working with Shenal was a game-changer for our startup. He not only understood our technical requirements but also provided valuable insights that improved our product. His code quality and documentation are top-notch.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      project: "SaaS Dashboard",
    },
    {
      name: "Priya Patel",
      role: "CTO",
      company: "DigitalFirst",
      content:
        "Shenal's full-stack development skills are impressive for someone his age. He delivered a complex web application on time and within budget. His communication throughout the project was excellent.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      project: "Analytics Platform",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden relative">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-900/30 via-transparent to-transparent" />

      <FloatingElements />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 relative">
                <span className="text-white font-bold text-lg">SS</span>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="font-bold text-xl text-white">ShenalSilva</span>
                <span className="text-purple-400">.dev</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#portfolio"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 shadow-lg shadow-purple-500/25 relative overflow-hidden group">
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-gray-800/50">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors font-medium">
                About
              </a>
              <a href="#services" className="block text-gray-300 hover:text-white transition-colors font-medium">
                Services
              </a>
              <a href="#portfolio" className="block text-gray-300 hover:text-white transition-colors font-medium">
                Portfolio
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors font-medium">
                Contact
              </a>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold mt-4">
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-green-400 font-medium text-lg">Available for freelance</p>
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
                <div>
                  <p className="text-purple-400 text-2xl font-medium mb-4">Hello, I am</p>
                  <h1 className="text-7xl lg:text-9xl font-black leading-tight mb-6 text-white drop-shadow-lg">
                    <TypingAnimation
                      texts={["SHENAL", "SILVA"]}
                      className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
                    />
                  </h1>
                  <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                    Web Developer +<br />
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                      CS Undergrad
                    </span>
                  </h2>
                </div>
                <p className="text-gray-300 text-xl leading-relaxed max-w-lg">
                  Second year Computer Science undergraduate passionate about creating innovative web solutions and
                  learning cutting-edge technologies. Let's build something extraordinary together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg shadow-lg shadow-purple-500/25 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-14 h-14 hover:bg-gray-800/50 text-gray-400 hover:text-white transition-all duration-300 border border-gray-800 hover:border-purple-500"
                  >
                    <Github className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-14 h-14 hover:bg-gray-800/50 text-gray-400 hover:text-white transition-all duration-300 border border-gray-800 hover:border-blue-500"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-14 h-14 hover:bg-gray-800/50 text-gray-400 hover:text-white transition-all duration-300 border border-gray-800 hover:border-cyan-500"
                  >
                    <Twitter className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="absolute inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-15 animate-pulse delay-1000" />
                <div className="relative w-full h-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full backdrop-blur-sm border border-gray-800/50 overflow-hidden shadow-2xl">
                  <Image
                    src="/profile-image.png"
                    alt="Shenal Silva"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25 animate-bounce">
                  <Coffee className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/25 animate-pulse">
                  <Code className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center p-8 bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 hover:bg-gray-800/30 transition-all duration-300 group">
              <div className="text-white text-4xl font-bold">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <div className="text-gray-300 text-sm font-medium mt-2 group-hover:text-gray-200 transition-colors">
                PROJECTS COMPLETED
              </div>
            </div>
            <div className="text-center p-8 bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 hover:bg-gray-800/30 transition-all duration-300 group">
              <div className="text-white text-4xl font-bold">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <div className="text-gray-300 text-sm font-medium mt-2 group-hover:text-gray-200 transition-colors">
                HAPPY CLIENTS
              </div>
            </div>
            <div className="text-center p-8 bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 hover:bg-gray-800/30 transition-all duration-300 group">
              <div className="text-white text-4xl font-bold">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-gray-300 text-sm font-medium mt-2 group-hover:text-gray-200 transition-colors">
                GITHUB COMMITS
              </div>
            </div>
            <div className="text-center p-8 bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 hover:bg-gray-800/30 transition-all duration-300 group">
              <div className="text-white text-4xl font-bold">
                <AnimatedCounter end={7} />
              </div>
              <div className="text-gray-300 text-sm font-medium mt-2 group-hover:text-gray-200 transition-colors">
                AWARDS WON
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Computer Science student and web developer who loves creating digital experiences that
              make a difference. Currently pursuing my degree while building real-world applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">My Journey</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Started coding at 16, fell in love with web development, and haven't looked back since. Currently
                  balancing academic excellence with practical experience through freelance projects and internships.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  My goal is to become a full-stack developer who can bridge the gap between beautiful design and robust
                  functionality. I believe in writing clean, maintainable code and creating user-centered solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3 p-6 bg-gray-900/30 rounded-2xl border border-gray-800/50">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Age</span>
                  </div>
                  <p className="text-white font-semibold text-xl">20 Years</p>
                </div>
                <div className="space-y-3 p-6 bg-gray-900/30 rounded-2xl border border-gray-800/50">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Location</span>
                  </div>
                  <p className="text-white font-semibold text-xl">Colombo, Sri Lanka</p>
                </div>
                <div className="space-y-3 p-6 bg-gray-900/30 rounded-2xl border border-gray-800/50">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Experience</span>
                  </div>
                  <p className="text-white font-semibold text-xl">2+ Years</p>
                </div>
                <div className="space-y-3 p-6 bg-gray-900/30 rounded-2xl border border-gray-800/50">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Projects</span>
                  </div>
                  <p className="text-white font-semibold text-xl">15+ Completed</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-xl p-8 hover:bg-gray-800/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-3 text-lg">Clean Code</h4>
                    <p className="text-gray-300 text-sm">Writing maintainable and scalable code</p>
                  </div>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-xl p-8 mt-8 hover:bg-gray-800/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-3 text-lg">User Focus</h4>
                    <p className="text-gray-300 text-sm">Creating experiences users love</p>
                  </div>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-xl p-8 -mt-4 hover:bg-gray-800/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-3 text-lg">Innovation</h4>
                    <p className="text-gray-300 text-sm">Always learning new technologies</p>
                  </div>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-xl p-8 mt-4 hover:bg-gray-800/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-3 text-lg">Quality</h4>
                    <p className="text-gray-300 text-sm">Delivering excellence in every project</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <CurrentStatus />

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 text-white">My Quality Services</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              I provide high-quality development services with modern technologies and best practices to help bring your
              ideas to life with precision and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 backdrop-blur-xl border-gray-800/50 hover:bg-gray-800/50 transition-all duration-500 group cursor-pointer overflow-hidden"
              >
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6 text-lg">{service.description}</p>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-purple-400 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 text-white">My Recent Works</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills and passion for creating exceptional digital
              experiences.
            </p>
          </div>

          <PortfolioFilter />
        </div>
      </section>

      {/* Fun Facts Section */}
      <FunFacts />

      {/* Experience & Education */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <h2 className="text-5xl font-bold mb-12 flex items-center text-white">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl mr-6 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                My Experience
              </h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-gray-800/50 backdrop-blur-xl hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
                          {exp.year}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{exp.title}</h3>
                      <div className="text-purple-400 font-semibold mb-4">{exp.company}</div>
                      <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-5xl font-bold mb-12 flex items-center text-white">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl mr-6 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                My Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-gray-800/50 backdrop-blur-xl hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                          {edu.year}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{edu.title}</h3>
                      <div className="text-purple-400 font-semibold mb-4">{edu.institution}</div>
                      <p className="text-gray-300 leading-relaxed mb-6">{edu.description}</p>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 text-white">My Skills</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Here are the technologies and tools I work with to create amazing digital experiences. Always learning and
              staying up-to-date with the latest trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800/50 backdrop-blur-xl hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-5xl mb-6">{skill.icon}</div>
                    <h3 className="font-bold text-white mb-3 text-xl group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </h3>
                    <Badge variant="secondary" className="mb-6 bg-purple-600/20 text-purple-400 border-purple-600/30">
                      {skill.category}
                    </Badge>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-300 font-semibold text-lg">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 text-white">My Client's Stories</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Here's what my clients say about working with me and the results we've achieved together. Their success is
              my success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800/50 backdrop-blur-xl hover:bg-gray-800/50 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full border-2 border-gray-700"
                    />
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-gray-300">{testimonial.role}</p>
                      <p className="text-purple-300 text-sm font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic leading-relaxed mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="bg-gray-800/50 text-gray-300">
                      {testimonial.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 text-white">Let's work together!</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life and create something amazing together.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

{/* Enhanced Footer */}
<footer className="border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/70 backdrop-blur-md">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-4 gap-12 mb-12">
      <div className="md:col-span-2">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
            <span className="text-white font-bold text-lg">SS</span>
          </div>
          <div>
            <span className="font-bold text-2xl text-white">ShenalSilva</span>
            <span className="text-purple-400">.dev</span>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
          Passionate web developer and CS student creating digital experiences that matter. 
          Always ready to take on new challenges and build something extraordinary.
        </p>
        <div className="flex space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 hover:bg-gray-800/50 text-gray-300 hover:text-white transition-all duration-300 border border-gray-700 hover:border-purple-500"
          >
            <Github className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 hover:bg-gray-800/50 text-gray-300 hover:text-white transition-all duration-300 border border-gray-700 hover:border-blue-500"
          >
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 hover:bg-gray-800/50 text-gray-300 hover:text-white transition-all duration-300 border border-gray-700 hover:border-cyan-500"
          >
            <Twitter className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 hover:bg-gray-800/50 text-gray-300 hover:text-white transition-all duration-300 border border-gray-700 hover:border-pink-500"
          >
            <Instagram className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-white mb-6 text-lg">Quick Links</h4>
        <div className="space-y-3">
          <a
            href="#home"
            className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 duration-300"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 duration-300"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
        <div className="space-y-3">
          <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">Frontend Development</p>
          <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">Backend Development</p>
          <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">Full Stack Development</p>
          <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">Mobile Development</p>
          <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">UI/UX Design</p>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Shenal Silva. All rights reserved. Made with ❤️ in Sri Lanka
        </p>
        <div className="flex items-center space-x-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full shadow-lg shadow-purple-500/25 z-50 transition-all duration-300"
          size="icon"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  )
}