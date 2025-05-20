"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { submitContactForm } from "./actions"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Handle form submission
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    try {
      await submitContactForm(data)
      setFormStatus("success")
      form.reset()
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Get In Touch</h1>
        <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
          Have a project in mind or want to discuss cybersecurity solutions? I'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.div variants={item} className="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-800/50">
                  <Mail className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="text-slate-400">contact@cybersecurity-expert.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-800/50">
                  <Phone className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-800/50">
                  <MapPin className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Location</h3>
                  <p className="text-slate-400">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-white mb-3">Working Hours</h3>
              <div className="space-y-2 text-slate-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: By appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Security Services</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-300">
                <div className="h-2 w-2 rounded-full bg-cyan-500" />
                Security Audits & Assessments
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <div className="h-2 w-2 rounded-full bg-cyan-500" />
                Penetration Testing
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <div className="h-2 w-2 rounded-full bg-cyan-500" />
                Security Architecture Design
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <div className="h-2 w-2 rounded-full bg-cyan-500" />
                Incident Response Planning
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <div className="h-2 w-2 rounded-full bg-cyan-500" />
                Security Training & Workshops
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="rounded-lg border border-slate-700 bg-slate-900/50 p-6"
        >
          <motion.h2 variants={item} className="text-2xl font-bold text-white mb-6">
            Send a Message
          </motion.h2>

          {formStatus === "success" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Alert className="bg-green-900/20 border-green-800 text-green-300 mb-6">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your message has been sent successfully. I'll get back to you as soon as possible.
                </AlertDescription>
              </Alert>
            </motion.div>
          )}

          {formStatus === "error" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Alert className="bg-red-900/20 border-red-800 text-red-300 mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>There was an error sending your message. Please try again later.</AlertDescription>
              </Alert>
            </motion.div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <motion.div variants={item} className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500 focus-visible:ring-cyan-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your email"
                          className="bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500 focus-visible:ring-cyan-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={item}>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Message subject"
                          className="bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500 focus-visible:ring-cyan-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={item}>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          className="min-h-[150px] bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500 focus-visible:ring-cyan-500"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-slate-500">
                        Please provide details about your project or inquiry.
                      </FormDescription>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={item}>
                <Button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  )
}
