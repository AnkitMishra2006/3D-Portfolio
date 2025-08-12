"use client"

import { personalInfo } from "@/constants/data"
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">{personalInfo.shortDescription}</p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={personalInfo.codolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors duration-300 group"
              >
                <div className="w-5 h-5 rounded bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white group-hover:scale-110 transition-transform">
                  C
                </div>
                <span className="text-sm">Codolio</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs text-center sm:text-right">Built with Next.js, Three.js & GSAP</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
