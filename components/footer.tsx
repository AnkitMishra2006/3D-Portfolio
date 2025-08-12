"use client"

import { personalInfo } from "@/constants/data"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "LinkedIn",
      url: personalInfo.linkedin,
      icon: "💼",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      url: personalInfo.github,
      icon: "🐙",
      color: "hover:text-gray-300",
    },
    {
      name: "Codolio",
      url: personalInfo.codolio,
      icon: "💻",
      color: "hover:text-yellow-400",
    },
    {
      name: "Email",
      url: `mailto:${personalInfo.email}`,
      icon: "✉️",
      color: "hover:text-red-400",
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <Logo size="lg" showText={true} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              {personalInfo.shortDescription}
            </p>
            <p className="text-gray-500 text-xs mt-2">📍 {personalInfo.location}</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  className={`w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs text-center sm:text-right">Built with Next.js, Three.js, and GSAP ✨</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
