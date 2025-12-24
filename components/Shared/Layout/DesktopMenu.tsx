'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const DesktopMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Simple scroll detection - when user scrolls past the main menu
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className="hidden md:block sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: 'rgba(30, 30, 30, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          
          {/* Social Icons - Left Side */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://www.instagram.com/elev8moments/" 
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{ 
                color: 'rgba(249, 242, 236, 1)' 
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(207, 218, 199, 1)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249, 242, 236, 1)'}
            >
              <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
                <circle cx="255.25" cy="256.21" r="70.68"></circle>
                <path d="M338,54.63H174c-62.72,0-114,51.31-114,114V343.33c0,62.73,51.32,114,114,114H338c62.72,0,114-51.31,114-114V168.67C452,105.94,400.68,54.63,338,54.63ZM255.77,364.07A107.95,107.95,0,1,1,363.71,256.13,107.95,107.95,0,0,1,255.77,364.07Zm109.67-192A25.56,25.56,0,1,1,391,146.5,25.56,25.56,0,0,1,365.44,172.06Z"></path>
              </svg>
            </a>
            
          </div>

          {/* Navigation Links - Center */}
          <ul className="flex items-center space-x-8">
            <li>
              <Link 
                href="/" 
                className="transition-colors duration-300 text-sm font-medium uppercase tracking-wider font-montserrat"
                style={{ 
                  color: 'rgba(255, 255, 255, 1)',
                  letterSpacing: '0.1em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(207, 218, 199, 1)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 1)'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/aboutus" 
                className="transition-colors duration-300 text-sm font-medium uppercase tracking-wider font-montserrat"
                style={{ 
                  color: 'rgba(255, 255, 255, 1)',
                  letterSpacing: '0.1em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(207, 218, 199, 1)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 1)'}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/experience" 
                className="transition-colors duration-300 text-sm font-medium uppercase tracking-wider font-montserrat"
                style={{ 
                  color: 'rgba(255, 255, 255, 1)',
                  letterSpacing: '0.1em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(207, 218, 199, 1)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 1)'}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link 
                href="/eventdesign" 
                className="transition-colors duration-300 text-sm font-medium uppercase tracking-wider font-montserrat"
                style={{ 
                  color: 'rgba(255, 255, 255, 1)',
                  letterSpacing: '0.1em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(207, 218, 199, 1)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 1)'}
              >
                Event Design
              </Link>
            </li>
            <li>
              <Link 
                href="/gifting" 
                className="transition-colors duration-300 text-sm font-medium uppercase tracking-wider font-montserrat"
                style={{ 
                  color: 'rgba(255, 255, 255, 1)',
                  letterSpacing: '0.1em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(207, 218, 199, 1)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 1)'}
              >
                Gifting
              </Link>
            </li>
          </ul>

          {/* Right Side - Empty for balance */}
          <div className="w-20"></div>
        </div>
      </div>
    </nav>
  )
}

export default DesktopMenu