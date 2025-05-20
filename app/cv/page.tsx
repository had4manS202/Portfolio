"use client"

import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin, Globe, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function CVPage() {
  const skills = [
    { name: "Penetration Testing", level: 95 },
    { name: "Network Security", level: 90 },
    { name: "Secure Coding", level: 85 },
    { name: "Vulnerability Assessment", level: 92 },
    { name: "Security Architecture", level: 88 },
    { name: "Incident Response", level: 80 },
    { name: "Cloud Security", level: 75 },
    { name: "Cryptography", level: 70 },
  ]

  const experience = [
    {
      title: "Senior Security Consultant",
      company: "CyberShield Solutions",
      period: "2020 - Present",
      description:
        "Lead security assessments and penetration testing for enterprise clients. Develop security frameworks and provide strategic guidance on cybersecurity initiatives.",
    },
    {
      title: "Security Engineer",
      company: "SecureNet Technologies",
      period: "2017 - 2020",
      description:
        "Implemented security controls and conducted vulnerability assessments. Developed secure coding practices and performed code reviews for critical applications.",
    },
    {
      title: "Network Security Analyst",
      company: "DataGuard Inc.",
      period: "2015 - 2017",
      description:
        "Monitored network traffic for security threats and implemented defensive measures. Conducted security audits and recommended improvements to network infrastructure.",
    },
  ]

  const education = [
    {
      degree: "Master of Science in Cybersecurity",
      institution: "Tech University",
      year: "2015",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      year: "2013",
    },
  ]

  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "Certified Information Systems Security Professional (CISSP)",
    "Offensive Security Certified Professional (OSCP)",
    "Certified Cloud Security Professional (CCSP)",
    "CompTIA Security+",
  ]

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
      <div className="flex justify-between items-start mb-12 flex-col md:flex-row gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-2">John Doe</h1>
          <h2 className="text-xl text-cyan-500 mb-4">Cybersecurity Expert</h2>
          <div className="flex flex-col sm:flex-row gap-4 text-slate-400">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
          <Download className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-12">
          <motion.section variants={item} className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-2">Professional Summary</h2>
            <p className="text-slate-300 leading-relaxed">
              Experienced cybersecurity professional with over 8 years of expertise in securing digital assets,
              conducting penetration testing, and implementing robust security frameworks. Passionate about staying
              ahead of emerging threats and developing innovative solutions to complex security challenges.
            </p>
          </motion.section>

          <motion.section variants={item} className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-2">Professional Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-start flex-col sm:flex-row gap-1">
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <div className="flex items-center text-cyan-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {job.period}
                    </div>
                  </div>
                  <div className="text-lg text-slate-300">{job.company}</div>
                  <p className="text-slate-400">{job.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={item} className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-2">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <div className="flex justify-between items-start flex-col sm:flex-row gap-1">
                    <div className="text-slate-300">{edu.institution}</div>
                    <div className="text-cyan-500">{edu.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={item} className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-2">Certifications</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-cyan-500" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.section>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-12">
          <motion.section variants={item} className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-2">Skills</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-cyan-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-slate-700" indicatorClassName="bg-cyan-500" />
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={item} className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-2">Languages</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-300">English</span>
                <span className="text-cyan-500">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Spanish</span>
                <span className="text-cyan-500">Fluent</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">French</span>
                <span className="text-cyan-500">Basic</span>
              </div>
            </div>
          </motion.section>

          <motion.section variants={item} className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-2">Connect</h2>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-cyan-500 transition-colors">
                <Github className="h-5 w-5" />
                <span>github.com/johndoe</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-cyan-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/johndoe</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-cyan-500 transition-colors">
                <Globe className="h-5 w-5" />
                <span>johndoe-security.com</span>
              </a>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
