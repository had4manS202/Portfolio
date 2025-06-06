import Link from "next/link"
import { ArrowRight, Shield, Terminal, Code, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a192f] text-slate-300">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    <span className="text-cyan-500">Manash</span> Hada
                  </h1>
                  <p className="max-w-[600px] text-slate-400 md:text-xl">
                    Protecting digital assets and securing networks with advanced penetration testing and vulnerability
                    assessment.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/gallery">
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                      View Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/cv">
                    <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                      Resume
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-80 lg:h-96 overflow-hidden rounded-lg border border-slate-700 bg-slate-900/50 p-6">
                  <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#00000080,transparent)]" />
                  <div className="relative flex h-full items-center justify-center">
                    <div className="flex flex-col items-center space-y-4">
                      <Shield className="h-16 w-16 text-cyan-500" strokeWidth={1.5} />
                      <div className="text-center">
                        <h2 className="text-xl font-bold text-white">Secure By Design</h2>
                        <p className="text-sm text-slate-400">Building robust security solutions for the digital age</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Interests</h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed">
                  Interested in various aspects of cybersecurity and digital protection
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="grid gap-4 group rounded-lg border border-slate-700 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/50 hover:bg-slate-800/50">
                <div className="flex items-center justify-center rounded-md border border-slate-700 bg-slate-800/50 p-2 w-10 h-10 group-hover:border-cyan-500/50">
                  <Terminal className="h-5 w-5 text-cyan-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white">Penetration Testing</h3>
                  <p className="text-sm text-slate-400">
                    Identifying vulnerabilities through simulated cyber attacks on systems and networks.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 group rounded-lg border border-slate-700 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/50 hover:bg-slate-800/50">
                <div className="flex items-center justify-center rounded-md border border-slate-700 bg-slate-800/50 p-2 w-10 h-10 group-hover:border-cyan-500/50">
                  <Code className="h-5 w-5 text-cyan-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white">Secure Coding</h3>
                  <p className="text-sm text-slate-400">
                    Developing applications with security built-in from the ground up.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 group rounded-lg border border-slate-700 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/50 hover:bg-slate-800/50">
                <div className="flex items-center justify-center rounded-md border border-slate-700 bg-slate-800/50 p-2 w-10 h-10 group-hover:border-cyan-500/50">
                  <Lock className="h-5 w-5 text-cyan-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white">Security Architecture</h3>
                  <p className="text-sm text-slate-400">
                    Designing robust security frameworks for organizations of all sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Recent Projects
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed">
                  A selection of my latest work in cybersecurity
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <Link
                  href="/gallery"
                  key={item}
                  className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900/50 transition-all hover:border-cyan-500/50 hover:bg-slate-800/50"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
                    <div className="h-full w-full bg-slate-800 transition-transform duration-500 group-hover:scale-105">
                      <div className="flex h-full items-center justify-center bg-grid-white/5">
                        <Shield className="h-16 w-16 text-cyan-500 opacity-20" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="font-bold text-white">Project {item}</h3>
                    <p className="text-sm text-slate-400">Cybersecurity solution</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/gallery">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
