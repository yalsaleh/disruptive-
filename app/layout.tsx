import type { Metadata } from "next"
import { Outfit, Manrope, Instrument_Serif } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "disruptive technologies",
  description:
    "Agentic AI systems that execute. Real operational impact across WhatsApp, Meta, and your internal tools.",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${manrope.variable} ${instrument.variable} font-body bg-brand-paper text-brand-ink antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
