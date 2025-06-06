"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, X, ZoomIn, Download, Info } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Child from "@/assets/images/WasteHackathon.png"
import Ex from "@/assets/images/SafaStack.png"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"

export default function ImagesGallery() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState<null | {
    id: number
    title: string
    category: string
    description: string
    src: string
  }>(null)

  const images = [
    {
      id: 1,
      title: "First Hackathon",
      category: "events",
      description: "One of the most memorable hackathons",
      src: typeof Child === "string" ? Child : Child.src,
    },
    {
      id: 2,
      title: "My Team: SafaStack",
      category: "events",
      description: "With my team: Lagzen Thakuri, Jyotsana Sigdel, & Swikriti Poudel",
      src: typeof Ex === "string" ? Ex : Ex.src,
    },
    // {
    //   id: 3,
    //   title: "Dream that never came true",
    //   category: "events",
    //   description: "Workstation configured for advanced penetration testing",
    //   src: typeof Withex === "string" ? Withex : Withex.src,
    // },
    // {
    //   id: 4,
    //   title: "Meme's cafe ",
    //   category: "events",
    //   description: "Physical and digital security measures for data centers",
    //   src: typeof Smoke === "string" ? Smoke : Smoke.src,
    // },
    // {
    //   id: 5,
    //   title: "Cisco Certificate ",
    //   category: "certificate",
    //   description: "Physical and digital security measures for data centers",
    //   src: typeof Smoke === "string" ? Smoke : Smoke.src,
    // },
    
  ]

  const filteredImages = images.filter(
    (image) =>
      (filter === "all" || image.category === filter) &&
      (searchQuery === "" ||
        image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.description.toLowerCase().includes(searchQuery.toLowerCase())),
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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Image Gallery</h1>
        <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
          A visual showcase of cybersecurity environments, setups, and events
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input
            type="search"
            placeholder="Search images..."
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
            <TabsTrigger
              value="infrastructure"
              className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white"
            >
              Infrastructure
            </TabsTrigger>
            <TabsTrigger value="workspace" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              Workspace
            </TabsTrigger>
            <TabsTrigger value="hardware" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              Hardware
            </TabsTrigger>
            <TabsTrigger value="software" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              Software
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              Events
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            variants={item}
            className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900/50 aspect-[4/3] cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4">
              <h3 className="font-bold text-white text-lg">{image.title}</h3>
              <p className="text-sm text-slate-300 line-clamp-2">{image.description}</p>
              <div className="flex gap-2 mt-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(image)
                  }}
                >
                  <ZoomIn className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Info className="h-4 w-4" />
                  <span className="sr-only">Info</span>
                </Button>
              </div>
            </div>
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 z-10 bg-slate-800/80 text-xs font-medium text-cyan-400 px-2 py-1 rounded-full border border-slate-700">
              {image.category}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredImages.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="h-24 w-24 rounded-full bg-slate-800 flex items-center justify-center mb-4">
            <Search className="h-12 w-12 text-slate-700" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-white">No images found</h3>
          <p className="text-slate-400">Try adjusting your search or filter criteria</p>
        </div>
      )}

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-slate-900 border-slate-700 text-slate-300">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">{selectedImage?.title}</DialogTitle>
            <DialogDescription className="text-slate-400">{selectedImage?.description}</DialogDescription>
          </DialogHeader>
          <div className="relative aspect-video w-full overflow-hidden rounded-md border border-slate-700">
            {selectedImage && (
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xs font-medium text-cyan-400 px-2 py-1 rounded-full border border-slate-700 bg-slate-800">
                {selectedImage?.category}
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <DialogClose asChild>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  <X className="h-4 w-4 mr-2" />
                  Close
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
