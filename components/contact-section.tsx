"use client"

import type React from "react"
import { useRef, useState } from "react"
import { personalInfo, emailConfig } from "@/constants/data"

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const createEmailTemplate = (name: string, email: string, message: string) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #00ffff, #ff00ff); padding: 30px; text-align: center; }
          .header h1 { color: white; margin: 0; font-size: 28px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
          .content { padding: 30px; }
          .message-box { background-color: #f8f9fa; border-left: 4px solid #00ffff; padding: 20px; margin: 20px 0; border-radius: 5px; }
          .contact-info { background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0; }
          .footer { background-color: #333; color: white; padding: 20px; text-align: center; }
          .social-links { margin: 15px 0; }
          .social-links a { color: #00ffff; text-decoration: none; margin: 0 10px; font-weight: bold; }
          .social-links a:hover { color: #ff00ff; }
          .highlight { color: #00ffff; font-weight: bold; }
          .timestamp { color: #666; font-size: 12px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Portfolio Contact!</h1>
          </div>
          
          <div class="content">
            <h2>Hello Ankit! 👋</h2>
            <p>You've received a new message through your portfolio website.</p>
            
            <div class="contact-info">
              <h3>📧 Contact Details:</h3>
              <p><strong>Name:</strong> <span class="highlight">${name}</span></p>
              <p><strong>Email:</strong> <span class="highlight">${email}</span></p>
            </div>
            
            <div class="message-box">
              <h3>💬 Message:</h3>
              <p>${message.replace(/\n/g, "<br>")}</p>
            </div>
            
            <p>You can reply directly to <strong>${email}</strong> to continue the conversation.</p>
            
            <div class="timestamp">
              <p>📅 Received: ${new Date().toLocaleString()}</p>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>Ankit Kumar Mishra</strong> - Full Stack Developer</p>
            <div class="social-links">
              <a href="${personalInfo.linkedin}">LinkedIn</a> |
              <a href="${personalInfo.github}">GitHub</a> |
              <a href="${personalInfo.codolio}">Codolio</a>
            </div>
            <p>📍 Delhi, India</p>
          </div>
        </div>
      </body>
      </html>
    `
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus("error")
      setStatusMessage("Please fill in all fields.")
      setIsSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error")
      setStatusMessage("Please enter a valid email address.")
      setIsSubmitting(false)
      return
    }

    try {
      const emailContent = createEmailTemplate(formData.name, formData.email, formData.message)

      const response = await fetch(emailConfig.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toEmail: emailConfig.recipientEmail,
          emailContent: emailContent,
          subject: `Portfolio Contact: Message from ${formData.name}`,
          fromName: `${formData.name} via Portfolio`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setStatusMessage("Thank you! Your message has been sent successfully. I'll get back to you soon!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error(result.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
      setStatusMessage("Sorry, there was an error sending your message. Please try again or contact me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">CONTACT</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Let's Connect!</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
                and development. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-white hover:text-cyan-400 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">💼</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🐙</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    View GitHub Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">💻</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Codolio</p>
                  <a
                    href={personalInfo.codolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    View DSA Stats
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                } text-white`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus !== "idle" && (
                <div
                  className={`p-4 rounded-lg text-center transition-all duration-300 ${
                    submitStatus === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-400"
                      : "bg-red-500/20 border border-red-500/30 text-red-400"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="text-center mt-20 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm md:text-base">
            © 2024 {personalInfo.name}. Built with Next.js, Three.js, and GSAP.
          </p>
        </div>
      </div>
    </section>
  )
}
