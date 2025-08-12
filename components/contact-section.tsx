"use client"

import type React from "react"
import { useState } from "react"
import { personalInfo, emailConfig } from "@/constants/data"
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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
          .header { background: linear-gradient(135deg, #60a5fa, #a855f7); padding: 30px; text-align: center; }
          .header h1 { color: white; margin: 0; font-size: 28px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
          .content { padding: 30px; }
          .message-box { background-color: #f8f9fa; border-left: 4px solid #60a5fa; padding: 20px; margin: 20px 0; border-radius: 5px; }
          .contact-info { background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0; }
          .footer { background-color: #333; color: white; padding: 20px; text-align: center; }
          .social-links { margin: 15px 0; }
          .social-links a { color: #60a5fa; text-decoration: none; margin: 0 10px; font-weight: bold; }
          .social-links a:hover { color: #a855f7; }
          .highlight { color: #60a5fa; font-weight: bold; }
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
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
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16">
          <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">CONTACT</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 rounded bg-white flex items-center justify-center text-sm font-bold text-green-600">
                    C
                  </div>
                </div>
                <div>
                  <p className="text-white font-semibold">Codolio</p>
                  <a
                    href={personalInfo.codolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center space-x-1"
                  >
                    <span>View my profile</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-1"
                  >
                    <span>Connect with me</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">GitHub</p>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center space-x-1"
                  >
                    <span>View my code</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors resize-vertical"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && <p className="text-green-400 text-sm text-center">{statusMessage}</p>}

              {submitStatus === "error" && <p className="text-red-400 text-sm text-center">{statusMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
