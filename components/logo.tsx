"use client"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export default function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* SVG Logo */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Left Curly Brace */}
          <path
            d="M25 20 C20 20, 15 25, 15 30 L15 40 C15 45, 10 50, 5 50 C10 50, 15 55, 15 60 L15 70 C15 75, 20 80, 25 80"
            stroke="url(#leftGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Curly Brace */}
          <path
            d="M75 20 C80 20, 85 25, 85 30 L85 40 C85 45, 90 50, 95 50 C90 50, 85 55, 85 60 L85 70 C85 75, 80 80, 75 80"
            stroke="url(#rightGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center Bars */}
          <rect x="40" y="25" width="4" height="50" fill="url(#goldGradient)" rx="2" />
          <rect x="48" y="20" width="4" height="60" fill="#ffffff" rx="2" />
          <rect x="56" y="25" width="4" height="50" fill="url(#goldGradient)" rx="2" />

          {/* Gradients */}
          <defs>
            <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f7931e" />
            </linearGradient>
            <linearGradient id="rightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f7931e" />
            </linearGradient>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#ffb347" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent ${textSizeClasses[size]} leading-tight`}
          >
            AKM
          </span>
          
        </div>
      )}
    </div>
  )
}
