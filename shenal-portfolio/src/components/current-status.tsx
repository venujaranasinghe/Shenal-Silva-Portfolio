"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Users, Briefcase, Calendar, MapPin } from "lucide-react"

export function CurrentStatus() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">What I'm Up To</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Here's what's keeping me busy these days - from studies to projects and everything in between.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current Activities */}
          <div className="space-y-6">
            <Card className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold">Studying Computer Science</h3>
                      <Badge className="bg-green-600/20 text-green-400 border-green-600/30">Active</Badge>
                    </div>
                    <p className="text-gray-400 mb-3">
                      Currently in my second year at University of Colombo, focusing on advanced algorithms, software
                      engineering, and web technologies.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>2023 - 2027</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>University of Colombo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold">Freelance Development</h3>
                      <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30">Ongoing</Badge>
                    </div>
                    <p className="text-gray-400 mb-3">
                      Working on exciting web development projects for startups and small businesses, specializing in
                      React and Node.js applications.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>5 Active Projects</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>25+ Clients Served</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold">Open Source Contributions</h3>
                      <Badge className="bg-green-600/20 text-green-400 border-green-600/30">Contributing</Badge>
                    </div>
                    <p className="text-gray-400 mb-3">
                      Actively contributing to open source projects and maintaining my own repositories to give back to
                      the developer community.
                    </p>
                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800/50">
                      View GitHub
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning & Goals */}
          <div className="space-y-6">
            <Card className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Currently Learning</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-xs font-bold">
                        TS
                      </div>
                      <span className="font-medium">Advanced TypeScript</span>
                    </div>
                    <div className="w-24 bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xs font-bold">
                        AI
                      </div>
                      <span className="font-medium">Machine Learning</span>
                    </div>
                    <div className="w-24 bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-xs font-bold">
                        GO
                      </div>
                      <span className="font-medium">Golang</span>
                    </div>
                    <div className="w-24 bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full w-1/3"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">2024 Goals</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Complete 20 freelance projects</span>
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/30 text-xs">15/20</Badge>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">Learn 3 new technologies</span>
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 text-xs">2/3</Badge>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Contribute to 5 open source projects</span>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 text-xs">3/5</Badge>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Build a SaaS product</span>
                    <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30 text-xs">In Progress</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-purple-600/30 backdrop-blur-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Available for New Projects</h3>
                <p className="text-gray-400 mb-6">
                  I'm currently accepting new freelance projects and collaboration opportunities.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Let's Work Together
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
