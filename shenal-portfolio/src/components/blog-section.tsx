"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn how to structure large React applications using TypeScript, best practices for component architecture, and state management patterns.",
    image: "/placeholder.svg?height=200&width=300",
    category: "React",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    views: "1.2k",
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Web Development: What's Coming in 2025",
    excerpt:
      "Exploring upcoming trends in web development including AI integration, new frameworks, and the evolution of user experience design.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Trends",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    views: "890",
    featured: false,
  },
  {
    id: 3,
    title: "Mastering Node.js Performance Optimization",
    excerpt:
      "Deep dive into Node.js performance optimization techniques, memory management, and scaling strategies for production applications.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Node.js",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    views: "756",
    featured: false,
  },
]

export function BlogSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">Latest Articles</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Sharing my knowledge and insights about web development, programming, and the latest tech trends.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl overflow-hidden group hover:bg-gray-800/30 transition-all duration-500">
              <div className="relative">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">Featured</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-400 border-purple-600/30">
                    {blogPosts[0].category}
                  </Badge>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{blogPosts[0].views}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Other Posts */}
          <div className="space-y-6">
            {blogPosts.slice(1).map((post) => (
              <Card
                key={post.id}
                className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl hover:bg-gray-800/30 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-gray-400 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h4 className="font-bold mb-2 text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-gray-400 text-xs">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-purple-400 hover:text-white">
                      Read <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800/50">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}