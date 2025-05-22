import Link from "next/link"
import { Shield, Github, Twitter, Linkedin} from "lucide-react"
import { FaMedium } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-700 bg-slate-900/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-cyan-500" />
          <span className="text-sm font-bold text-white">Manash Hada</span>
        </div>
        <div className="flex gap-4">
          <Link href="https://www.github.com/had4manS202" target='_blank' className="text-slate-400 hover:text-cyan-500 transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          {/* <Link href="#" className="text-slate-400 hover:text-cyan-500 transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link> */}
          <Link href="https://www.linkedin.com/in/manash-hada-0a75a3330" target='_blank' className="text-slate-400 hover:text-cyan-500 transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://www.medium.com/@hadamanash2023" target='_blank' className="text-slate-400 hover:text-cyan-500 transition-colors">
            <FaMedium className="h-5 w-5" />
            <span className="sr-only">Medium</span>
          </Link>
        </div>
        <p className="text-center text-sm text-slate-400 md:text-right">
          &copy; {new Date().getFullYear()} CyberPortfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
