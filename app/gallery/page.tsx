"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Terminal, Code, Lock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const projects = [
    {
      id: 1,
      title: "Network Security Audit",
      category: "audit",
      description: "Comprehensive security audit for enterprise networks",
      icon: <Shield className="h-10 w-10 text-cyan-500" strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: "Secure Authentication System",
      category: "development",
      description: "Zero-trust authentication framework for web applications",
      icon: <Lock className="h-10 w-10 text-cyan-500" strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: "Vulnerability Scanner",
      category: "tools",
      description: "Automated vulnerability detection and reporting tool",
      icon: <Terminal className="h-10 w-10 text-cyan-500" strokeWidth={1.5} />,
    },
    {
      id: 4,
      title: "Secure Code Review",
      category: "audit",
      description: "Static and dynamic code analysis for security flaws",
      icon: <Code className="h-10 w-10 text-cyan-500" strokeWidth={1.5} />,
    },
    {
      id: 5,
      title: "Encryption Library",
      category: "development",
      description: "High-performance encryption library for sensitive data",
      icon: <Lock className="h-10 w-10 text-cyan-500" strokeWidth={1.5} />,
    },
    {
      id: 6,
      title: "Threat Intelligence Platform",
      category: "tools",
      description: "Real-time threat monitoring and intelligence gathering",
      icon: <Shield className="h-10 w-10 text-cyan-500" strokeWidth={1.5} />,
    },
    {
      id: 7,
      title: "Security Training Program",
      category: "training",
      description: "Comprehensive cybersecurity awareness training",
      icon: <Terminal className="h-10 w-10 text-cyan-500" strokeWidth={1.5} />,
    },
    {
      id: 8,
      title: "Penetration Testing Framework",
      category: "tools",
      description: "Advanced penetration testing toolkit for security professionals",
      icon: <Terminal className="h-10 w-10 text-cyan-500" strokeWidth={1.5} />,
    },
  ]

  const filteredProjects = projects.filter(
    (project) =>
      (filter === "all" || project.category === filter) &&
      (searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Project Gallery</h1>
        <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
          Explore my cybersecurity projects, tools, and research
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input
            type="search"
            placeholder="Search projects..."
            className="w-full bg-slate-800/50 border-slate-700 pl-8 text-slate-300 placeholder:text-slate-500 focus-visible:ring-cyan-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setFilter}>
          <TabsList className="bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="all" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              All
            </TabsTrigger>
            <TabsTrigger value="audit" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              Audits
            </TabsTrigger>
            <TabsTrigger value="development" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              Development
            </TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              Tools
            </TabsTrigger>
            <TabsTrigger value="training" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              Training
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="group flex flex-col space-y-4 rounded-lg border border-slate-700 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/50 hover:bg-slate-800/50"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-md border border-slate-700 bg-slate-800/50 group-hover:border-cyan-500/50">
              {project.icon}
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white">{project.title}</h3>
              <p className="text-sm text-slate-400">{project.description}</p>
            </div>
            <div className="flex-1 flex items-end">
              <Button variant="link" className="px-0 text-cyan-500 hover:text-cyan-400">
                View Details
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Shield className="h-16 w-16 text-slate-700 mb-4" strokeWidth={1.5} />
          <h3 className="text-xl font-bold text-white">No projects found</h3>
          <p className="text-slate-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}
