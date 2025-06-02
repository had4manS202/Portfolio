"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Shield, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/gallery" },
    { name: "Images", path: "/images" },
    { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-700" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-white">Manash Hada</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative text-sm font-medium transition-colors hover:text-cyan-500 ${
                pathname === item.path ? "text-cyan-500" : "text-slate-300"
              }`}
            >
              {item.name}
              {pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 top-full h-[2px] w-full bg-cyan-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button className="hidden md:flex bg-cyan-600 hover:bg-cyan-700 text-white">Contact Me</Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden border-slate-700">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 border-slate-700">
              <div className="flex flex-col gap-8 pt-8">
                <Link href="/" className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-cyan-500" />
                  <span className="font-bold text-white">CyberPortfolio</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`text-lg font-medium transition-colors hover:text-cyan-500 ${
                        pathname === item.path ? "text-cyan-500" : "text-slate-300"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <Link href="/contact">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Contact Me</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
