import type React from "react"
import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'

export const metadata = {
     title: 'Manash Hada',
  description: 'An CyberSecurity enthusiastic',
  icons: {
    icon: '/pikachu.jpg', 
  },
    };
