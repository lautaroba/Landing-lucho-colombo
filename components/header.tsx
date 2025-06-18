"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Update the navItems array to include the Cambios section and reorder FAQ to be last
  const navItems = [
    { name: "Sobre Mi", href: "#about" },
    { name: "Cambios", href: "#cambios" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-gray-900 shadow-md py-2" : "bg-transparent text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={`${isScrolled ? "/logo-negro.png" : "/logo.png"}`} alt="Lucho Colombo Logo" width={180} height={50} className={`h-20 w-auto transition-all duration-300`} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium hover:text-emerald-500 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#calendly"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-medium transition-colors"
            >
              Agendar Llamada
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(true)}>
            <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 bg-gray-900 z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <Image src="/logo.png" alt="Lucho Colombo Logo" width={160} height={80} className="h-16 w-auto" />
                <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col p-4 space-y-6 pt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white text-xl font-medium hover:text-emerald-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="#calendly"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full font-medium transition-colors text-center mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agendar Llamada
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
