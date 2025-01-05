import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientProvider from "@/components/ClientProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sahibinden Clone",
  description: "Sahibinden.com clone with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
