"use client"

import { useEffect, useState } from "react"
import gsap from "gsap"
import { navItems } from "@/constants/data"
import Logo from "./logo"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      delay: 1,
      stagger: 0.1,
      ease: "power2.out",
    })
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest(".mobile-menu") && !target.closest(".hamburger-button")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToHome = () => {
    const element = document.querySelector("#home")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo - Clickable to scroll to home */}
            <button
              onClick={scrollToHome}
              className="transition-transform duration-300 hover:scale-105 focus:outline-none"
            >
              <Logo size="sm" showText={true} className="cursor-pointer" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-item transition-colors duration-300 relative group ${
                    activeSection === item.href.substring(1) ? "text-cyan-400" : "text-white hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                      activeSection === item.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden text-white hamburger-button relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 transition-all duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-lg border-l border-gray-700 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-700 mt-16 sm:mt-20">
            <div className="flex items-center space-x-3">
              <Logo size="sm" showText={false} />
              <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Navigation
              </div>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors text-sm"
            >
              ✕
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="py-6 sm:py-8 px-4 sm:px-6 overflow-y-auto" style={{ maxHeight: "calc(100vh - 140px)" }}>
            <div className="space-y-4 sm:space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400"
                      : "text-white hover:bg-gray-800/50 hover:text-cyan-400"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isMobileMenuOpen ? "slideInRight 0.3s ease-out forwards" : "none",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-base sm:text-lg">{getMenuIcon(item.name)}</span>
                    <span className="font-medium text-sm sm:text-base">{item.name}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Logo size="md" showText={true} />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mb-4">Connect with me</p>
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  <a
                    href="https://www.linkedin.com/in/ankit-kumar-mishra-0509982a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-600/30 transition-all duration-300 text-sm"
                  >
                    💼
                  </a>
                  <a
                    href="https://github.com/ankitmishra2006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-600/20 border border-gray-500/30 flex items-center justify-center text-gray-400 hover:bg-gray-600/30 transition-all duration-300 text-sm"
                  >
                    🐙
                  </a>
                  <a
                    href="mailto:ankit.kumar.mishra2006@gmail.com"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-600/30 transition-all duration-300 text-sm"
                  >
                    📧
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}

// Helper function to get menu icons
function getMenuIcon(itemName: string): string {
  const iconMap: { [key: string]: string } = {
    Home: "🏠",
    Skills: "⚡",
    Projects: "💼",
    Experience: "🎓",
    Contact: "📞",
  }
  return iconMap[itemName] || "📄"
}
