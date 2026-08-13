"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Get Help", href: "/get-help" },
  { name: "Our Programs", href: "/sermons" },
  { name: "Resources", href: "/podcast" },
  { name: "Events", href: "/events" },
  { name: "Donate", href: "/donate" },
  { name: "Contact Us", href: "/contact" },
  { name: "Records", href: "/records" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full z-50 sticky top-0 bg-[#3E3E4E] shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo & Links Group */}
          <div className="flex items-center">
            {/* Logo - Far Left (SVA Badge Only) */}
            <Link href="/" className="flex items-center mr-4 sm:mr-8 group">
              <div className="w-10 h-10 rounded-full bg-[#FFB800] text-[#2D2B44] font-black flex items-center justify-center font-headline text-lg shadow group-hover:scale-105 transition-transform shrink-0">
                SVA
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.15em] transition-all hover:text-[#FFB800] font-headline text-white whitespace-nowrap",
                    pathname === link.href ? "opacity-100 text-[#FFB800] font-bold" : "opacity-85"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Group: Search Icon & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Link href="/podcast" aria-label="Search" className="p-2 text-white hover:text-[#FFB800] transition-colors">
              <Search className="h-5 w-5" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-white hover:text-[#FFB800] transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7 text-[#FFB800]" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Links Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-[#2D2B44] border-t border-white/10 px-6 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "block text-lg font-bold uppercase tracking-wider text-white font-headline py-2 border-b border-white/5 transition-colors hover:text-[#FFB800]",
                pathname === link.href ? "text-[#FFB800]" : "opacity-80"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link 
              href="/get-help" 
              onClick={() => setIsOpen(false)}
              className="block text-center w-full py-3.5 bg-[#FFB800] text-[#2D2B44] font-black rounded-full text-base uppercase font-headline tracking-wider shadow-lg hover:bg-[#FFB800]/90 transition-colors"
            >
              TALK TO SOMEONE NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
