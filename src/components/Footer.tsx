import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2D2B44] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link href="/" className="flex flex-col items-start group">
              <span className="text-3xl font-black uppercase tracking-tighter leading-[0.9] text-white group-hover:text-[#FFB800] transition-colors font-headline">
                STUDENT VOICES<br /><span className="text-[#FFB800]">OF AFRICA</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed font-body text-base">
              A youth-led continental movement dedicated to raising the voices of African students, breaking silence, ending stigma, and inspiring positive change.
            </p>
            <div className="p-3 bg-black/30 rounded-xl border border-white/10 space-y-1">
              <p className="text-[#FFB800] text-xs font-headline font-bold uppercase tracking-wider">Motto</p>
              <p className="text-white/90 text-xs font-body italic">"Breaking the Silence, Ending Stigma, Inspiring Change."</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB800] transition-all hover:scale-110" aria-label="Facebook"><Facebook className="h-6 w-6" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB800] transition-all hover:scale-110" aria-label="Twitter"><Twitter className="h-6 w-6" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB800] transition-all hover:scale-110" aria-label="Instagram"><Instagram className="h-6 w-6" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB800] transition-all hover:scale-110" aria-label="YouTube"><Youtube className="h-6 w-6" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#FFB800] tracking-widest font-headline">Quick Links</h3>
            <ul className="space-y-4 text-base font-bold">
              <li><Link href="/about" className="hover:text-[#FFB800] transition-colors">About Us</Link></li>
              <li><Link href="/get-help" className="hover:text-[#FFB800] transition-colors">Get Help Now</Link></li>
              <li><Link href="/sermons" className="hover:text-[#FFB800] transition-colors">Our Programs</Link></li>
              <li><Link href="/podcast" className="hover:text-[#FFB800] transition-colors">Resources & Podcasts</Link></li>
              <li><Link href="/events" className="hover:text-[#FFB800] transition-colors">Upcoming Events</Link></li>
              <li><Link href="/scripture-finder" className="hover:text-[#FFB800] transition-colors">Daily Encouragement</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFB800] transition-colors">Contact Us</Link></li>
              <li><Link href="/donate" className="hover:text-[#FFB800] transition-colors">Support Our Mission</Link></li>
              <li><Link href="/records" className="text-[#FFB800] hover:underline flex items-center font-bold"><span>Data Records Hub</span> <span className="ml-2 text-[10px] bg-[#FFB800] text-[#2D2B44] px-2 py-0.5 rounded font-black">STORE</span></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#FFB800] tracking-widest font-headline">Support Hours</h3>
            <ul className="space-y-3 text-white/70 font-body text-base">
              <li><strong className="text-white">Online Counseling:</strong> 24/7 Confidential</li>
              <li><strong className="text-white">WhatsApp Line:</strong> Mon-Sat 8am - 10pm</li>
              <li><strong className="text-white">Campus Outreach:</strong> Weekly Visits</li>
              <li><strong className="text-white">Peer Mentorship:</strong> Wed & Sat</li>
              <li><strong className="text-white">Emergency Helpline:</strong> Always Available</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#FFB800] tracking-widest font-headline">Connect</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#FFB800] mt-1 shrink-0" />
                <span className="text-white/70 text-base">Kampala, Uganda & Serving Student Communities Across Africa</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#FFB800] shrink-0" />
                <a href="tel:0748983423" className="text-white/80 hover:text-[#FFB800] transition-colors text-base font-bold">
                  0748983423
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <MessageSquare className="h-6 w-6 text-[#FFB800] shrink-0" />
                <a 
                  href="https://wa.me/256777672263?text=Hello%20Student%20Voices%20of%20Africa,%20I%20would%20like%20to%20talk%20to%20someone." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-[#FFB800] transition-colors text-base font-bold"
                >
                  WhatsApp: +256 777 672263
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#FFB800] shrink-0" />
                <a href="mailto:rodgersatugonza4@gmail.com" className="text-white/80 hover:text-[#FFB800] transition-colors text-base break-all">
                  rodgersatugonza4@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 text-center text-xs text-white/40 uppercase tracking-[0.2em] font-headline">
          <p>© {new Date().getFullYear()} Student Voices of Africa. Your Voice Matters. You Are Not Alone.</p>
        </div>
      </div>
    </footer>
  )
}
