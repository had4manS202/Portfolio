"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Terminal, Code, Lock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

export default function GalleryPage() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const projects = [
    {
      id: 1,
      title: "Introduction to Cybersecurity",
      category: "training",
      company:"Cisco",
      description: "Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course.",
      icon: "https://media.licdn.com/dms/image/v2/D560BAQHT3lpSlRAwCg/company-logo_100_100/B56ZaSy889G4AQ-/0/1746219552862/cisco_logo?e=1753315200&v=beta&t=RRu25rvJMKSdiVNZiq_9sdI9dcV2oIqWKr3Zl-Yt5K4",
      link:"https://www.credly.com/badges/66b68599-057a-4480-abb7-89d52cec268e/linked_in_profile"
    },
    {
      id: 2,
      title: "ISC2 Candidate",
      company:"ISC2",
      category: "training",
      description: "ISC2 Candidates are individuals pursuing or considering a cybersecurity certification",
      icon: "https://media.licdn.com/dms/image/v2/D4E0BAQEANDNp1O78-g/company-logo_100_100/company-logo_100_100/0/1692269546870?e=1753315200&v=beta&t=TWo8TWCsGB0JlKgZvsT9VVFHMO7K88j4sMD_aIzBsfg",
      link:"https://www.credly.com/badges/645cef42-97cd-4fc8-9ccf-b56337884a7a/linked_in_profile"
    },
    {
      id: 3,
      title: "Check Point Jump Start - Cloud Security",
      company:"Check Point Software Technologies",
      category: "training",
      description: "Participated in Check Point Jump Start - Cloud Security course which is a free introduction to Check Point CloudGuard",
      icon: "https://media.licdn.com/dms/image/v2/D560BAQGtqN8lHnC7WA/company-logo_100_100/company-logo_100_100/0/1698642229581/check_point_software_technologies_logo?e=1753315200&v=beta&t=0MTwHBOjEweyTXtdj1t-3cfQ3lsugRbJaTz_2BlCqhE",
      link:"https://www.credly.com/badges/7b6b78a7-23ff-4263-964b-6336eb20fdf6/linked_in_profile"
    },
    {
      id: 4,
      title: "Check Point Jump Start - CloudGuard Posture Management",
      company:"Check Point Software Technologies",
      category: "traning",
      description: "Completed the Check Point Jump Start - CloudGuard Posture Management course",
      icon: 'https://media.licdn.com/dms/image/v2/D560BAQGtqN8lHnC7WA/company-logo_100_100/company-logo_100_100/0/1698642229581/check_point_software_technologies_logo?e=1753315200&v=beta&t=0MTwHBOjEweyTXtdj1t-3cfQ3lsugRbJaTz_2BlCqhE',
      link:"https://www.credly.com/badges/eda6122a-0efc-4be8-b261-ff803a6d3249/linked_in_profile"
    },
    {
      id: 5,
      title: "Check Point Jump Start - Quantum Management",
      company:"Check Point Software Technologies",
      category: "training",
      description: "Completed the Check Point Jump Start - Quantum Management course, which teaches configuration and management of Check Point Security Gateways",
      icon: 'https://media.licdn.com/dms/image/v2/D560BAQGtqN8lHnC7WA/company-logo_100_100/company-logo_100_100/0/1698642229581/check_point_software_technologies_logo?e=1753315200&v=beta&t=0MTwHBOjEweyTXtdj1t-3cfQ3lsugRbJaTz_2BlCqhE',
      link:"https://media.licdn.com/dms/image/v2/D560BAQGtqN8lHnC7WA/company-logo_100_100/company-logo_100_100/0/1698642229581/check_point_software_technologies_logo?e=1753315200&v=beta&t=0MTwHBOjEweyTXtdj1t-3cfQ3lsugRbJaTz_2BlCqhE"
    },
    {
      id: 6,
      title: "Check Point Jump Start - SMB",
      company:"Check Point Software Technologies",
      category: "training",
      description: "Passed the Check Point Jump Start - SMB exam on Pearson Vue (#156-413) after completing the course",
      icon: 'https://media.licdn.com/dms/image/v2/D560BAQGtqN8lHnC7WA/company-logo_100_100/company-logo_100_100/0/1698642229581/check_point_software_technologies_logo?e=1753315200&v=beta&t=0MTwHBOjEweyTXtdj1t-3cfQ3lsugRbJaTz_2BlCqhE',
      link:"https://www.credly.com/badges/9385580a-72f4-4c28-861c-d421c4ddffff/linked_in_profile"
    },
    // {
    //   id: 5,
    //   title: "Encryption Library",
    //   category: "development",
    //   description: "High-performance encryption library for sensitive data",
    //   icon: <Lock className="h-10 w-10 text-cyan-500" strokeWidth={1.5} />,
    // },
  
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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Certifications & Projects</h1>
        <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
          Explore my cybersecurity certificates, projects, tools, and research
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
            <TabsTrigger value="audits" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
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
              {/* {project.icon} */}
                  <Image src={project.icon} alt={project.company}  width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white">{project.title}</h3>
              <h3 className="font-bold text-white">{project.company}</h3>
              <p className="text-sm text-slate-400">{project.description}</p>
            </div>
            <div className="flex-1 flex items-end">
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="px-0 text-cyan-500 hover:text-cyan-400">
                View Details
              </Link>
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
