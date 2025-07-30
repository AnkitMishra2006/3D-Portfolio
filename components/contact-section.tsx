"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const contactItems = gsap.utils.toArray(".contact-item")
    const formFields = gsap.utils.toArray(".form-field")

    contactItems.forEach((item: any, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    })

    formFields.forEach((field: any, index) => {
      gsap.from(field, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: field,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    })

    // Form submission animation
    const handleSubmit = (e: Event) => {
      e.preventDefault()
      gsap.to(formRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      })
    }

    formRef.current?.addEventListener("submit", handleSubmit)

    return () => {
      formRef.current?.removeEventListener("submit", handleSubmit)
    }
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 fade-in">
          <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">CONTACT</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="contact-item">
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect!</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
                and development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="contact-item flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:ankit.kumar.mishra2006@gmail.com"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    ankit.kumar.mishra2006@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">💼</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="contact-item flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🐙</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a href="#" className="text-white hover:text-green-400 transition-colors">
                    View GitHub Profile
                  </a>
                </div>
              </div>

              <div className="contact-item flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form ref={formRef} className="space-y-6">
              <div className="form-field">
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-gray-800">
          <p className="text-gray-400">© 2024 Ankit Kumar Mishra. Built with Next.js, Three.js, and GSAP.</p>
        </div>
      </div>
    </section>
  )
}
