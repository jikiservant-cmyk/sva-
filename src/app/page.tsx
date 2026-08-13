
'use client';

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageSquare, ChevronDown, ArrowRight, HeartHandshake, Shield, Users, BookOpen, Sparkles, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import { ImageReveal } from "@/components/ImageReveal"
import { KineticHeadline } from "@/components/KineticHeadline"
import { MagneticButton } from "@/components/MagneticButton"
import { InkFlowText } from "@/components/InkFlowText"
import { cn } from "@/lib/utils"

const challenges = [
  { title: "Depression & Anxiety", desc: "Finding light and steady support in dark seasons." },
  { title: "Loneliness & Isolation", desc: "Connecting with peers and mentors who truly listen." },
  { title: "Substance & Drug Abuse", desc: "Compassionate, non-judgmental recovery guidance." },
  { title: "Pornography Addiction", desc: "Safe, confidential support toward freedom and growth." },
  { title: "Family & Home Problems", desc: "Wise counsel and strength through personal hardship." },
  { title: "Academic & Future Pressure", desc: "Mentorship to handle expectations and stress." },
  { title: "Identity & Peer Pressure", desc: "Understanding your worth with dignity and respect." },
  { title: "Relationships & Heartbreak", desc: "Navigating healthy boundaries and emotional healing." },
  { title: "Suicide Prevention", desc: "Immediate, caring intervention when life feels heavy." },
  { title: "Spiritual Guidance", desc: "Faith discussions and hope rooted in grace and love." },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    { url: "/images/img1.jpg", title: "STUDENT VOICES OF AFRICA", subtitle: "RAISING THE STUDENT VOICE ACROSS THE CONTINENT" },
    { url: "/images/img6.jpg", title: "BREAKING THE SILENCE", subtitle: "ENDING STIGMA, EMPOWERING AFRICAN YOUTH" },
    { url: "/images/img7.jpg", title: "CAMPUS OUTREACH & MENTORSHIP", subtitle: "MENTAL HEALTH SUPPORT & SAFE SPACE FOR EVERY STUDENT" },
    { url: "/images/img8.jpg", title: "YOUTH CONFERENCES & SUMMITS", subtitle: "UNITING STUDENTS FOR POSITIVE SOCIAL CHANGE" },
    { url: "/images/img10.jpg", title: "PEER SUPPORT & LEADERSHIP", subtitle: "RAISING COURAGEOUS & COMPASSIONATE STUDENT LEADERS" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const visionImg = PlaceHolderImages.find(img => img.id === 'hero-church')

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section with Auto-Playing Slideshow */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#2D2B44] py-16 sm:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {heroSlides.map((slide, idx) => (
            <div 
              key={idx}
              className={cn(
                "absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ease-in-out",
                idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
              )}
              style={{
                backgroundImage: `url(${slide.url})`,
                transition: "opacity 1000ms ease-in-out, transform 6000ms ease-out"
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex justify-center max-w-full">
          <div className="flex flex-col items-center text-white text-center max-w-4xl w-full">
            <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 font-headline text-[#FFB800] bg-black/40 px-4 py-1.5 rounded-full border border-[#FFB800]/30 backdrop-blur-md">
              {heroSlides[currentSlide].subtitle}
            </span>
            
            <KineticHeadline 
              lines={["YOU ARE NOT", "ALONE."]} 
              className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-[900] uppercase tracking-tighter leading-[0.85] sm:leading-[0.8] font-headline text-center max-w-full"
              staggerDelay={0.1}
            />

            <p className="mt-6 sm:mt-8 text-white/90 text-base sm:text-xl font-body leading-relaxed max-w-2xl px-2">
              We provide a safe space where students across Africa can share their struggles, find hope, receive guidance, and connect with people who genuinely care.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 z-20">
              <Link href="/get-help" className="w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-[#FFB800] text-[#2D2B44] hover:bg-[#FFB800]/90 font-black h-12 sm:h-14 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-xl">
                    TALK TO SOMEONE
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#2D2B44] font-black h-12 sm:h-14 px-6 sm:px-8 rounded-full text-base sm:text-lg">
                    ORGANIZATION PROFILE
                  </Button>
                </MagneticButton>
              </Link>
            </div>
            
            {/* Slideshow Dot Indicators */}
            <div className="mt-8 sm:mt-10 flex items-center space-x-3 z-20">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    idx === currentSlide ? "w-8 bg-[#FFB800]" : "w-2.5 bg-white/40 hover:bg-white/70"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-[#FFB800] mt-6 sm:mt-8 mb-4 opacity-80" />
            <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 animate-bounce opacity-60 text-[#FFB800]" strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
        <Link href="/get-help">
          <MagneticButton strength={20}>
            <button className="bg-[#003322] text-white flex items-center space-x-2 sm:space-x-3 px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group border-2 border-[#FFB800]/30">
              <div className="relative">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFB800]" />
                <div className="absolute -top-1 -right-1 bg-[#FFB800] w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#003322] animate-pulse" />
              </div>
              <span className="font-bold text-sm sm:text-lg font-headline">Need to Talk?</span>
            </button>
          </MagneticButton>
        </Link>
      </div>

      {/* Introduction Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[#FFB800] font-black tracking-[0.3em] text-xs uppercase block">Student Voices of Africa</span>
            <KineticHeadline 
              lines={["No Young Person", "Suffers in Silence."]}
              className="text-[#2D2B44] text-4xl md:text-6xl font-black uppercase leading-tight font-headline"
            />
            <InkFlowText className="text-muted-foreground text-xl leading-relaxed font-body">
              Student Voices of Africa exists to ensure every student across our continent has access to a judgment-free environment. We believe every young person deserves someone who will listen without condemnation and walk with them toward healing, growth, and hope.
            </InkFlowText>
            <div className="h-1 w-20 bg-[#FFB800] mx-auto pt-4" />
          </div>
        </div>
      </section>

      {/* Problems We Help With Section */}
      <section className="py-24 bg-[#F8F8F8] relative z-10 border-y border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#003322] font-bold uppercase tracking-widest text-sm">Compassionate & Confidential Support</span>
            <KineticHeadline 
              lines={["WHATEVER YOU'RE FACING,", "YOU'RE WELCOME HERE."]}
              className="text-3xl md:text-5xl font-black text-[#2D2B44] uppercase font-headline leading-tight"
            />
            <p className="text-muted-foreground font-body text-base">
              You will be treated with dignity and respect. We listen first, support with compassion, and walk alongside you as you seek healing and strength.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#FFB800] hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-full bg-[#FFB800]/15 text-[#2D2B44] font-black flex items-center justify-center mb-4 group-hover:bg-[#FFB800] transition-colors">
                  <Shield className="h-5 w-5 text-[#2D2B44]" />
                </div>
                <h3 className="text-xl font-bold font-headline text-[#2D2B44] mb-2">{c.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/get-help">
              <MagneticButton>
                <Button className="bg-[#003322] text-white hover:bg-[#003322]/90 font-black h-14 px-8 rounded-full text-lg group">
                  REACH OUT CONFIDENTIALLY <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Reveal Section with Kinetic Headline */}
      <section className="py-12 md:py-24 bg-[#3E3E4E] overflow-hidden text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ImageReveal 
                src={visionImg?.imageUrl || "/images/img6.jpg"}
                alt="Student Community"
                className="rounded-lg shadow-2xl aspect-[4/3]"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="text-[#FFB800] font-bold uppercase tracking-widest">Our Vision & Mission</span>
              <KineticHeadline 
                lines={["HEALING, HOPE,", "& FREEDOM"]}
                className="text-4xl md:text-6xl font-black uppercase font-headline leading-none"
              />
              <InkFlowText className="text-white/80 text-lg font-body leading-relaxed max-w-xl">
                Through school outreach programs, youth conferences, campus talks, and 1-on-1 counseling, Student Voices of Africa empowers young people with essential life guidance, addiction recovery tools, and unconditional care.
              </InkFlowText>
              <Link href="/sermons">
                <MagneticButton>
                  <Button className="bg-[#FFB800] hover:bg-[#FFB800]/90 text-[#2D2B44] font-black h-14 px-8 rounded-full text-lg group">
                    EXPLORE OUR PROGRAMS
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Spotlight Section */}
      <section className="py-20 bg-[#003322] text-white relative z-10">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center space-y-8">
          <Heart className="h-12 w-12 text-[#FFB800] mx-auto opacity-80" />
          <p className="text-2xl md:text-3xl font-serif leading-relaxed italic text-white/90">
            "I was struggling with addiction and loneliness for years. Through Student Voices of Africa, I found people who listened without judging me. Today I'm living with hope again."
          </p>
          <p className="text-[#FFB800] font-headline font-bold tracking-widest uppercase text-sm">
            — Anonymous University Student, Kampala
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-[#F5F5F5] relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/get-help" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#FFB800]">
                <KineticHeadline lines={["Get Help"]} className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline" />
                <InkFlowText className="text-muted-foreground mb-6 text-base font-body">Connect confidentially via WhatsApp, anonymous form, or book a conversation.</InkFlowText>
                <span className="text-[#003322] font-bold text-sm tracking-widest uppercase group-hover:text-[#FFB800] transition-colors">Speak to Someone →</span>
              </div>
            </Link>
            <Link href="/sermons" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#FFB800]">
                <KineticHeadline lines={["Our Programs"]} className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline" />
                <InkFlowText className="text-muted-foreground mb-6 text-base font-body">School outreach, youth summits, drug awareness, and peer mentorship.</InkFlowText>
                <span className="text-[#003322] font-bold text-sm tracking-widest uppercase group-hover:text-[#FFB800] transition-colors">Explore Programs →</span>
              </div>
            </Link>
            <Link href="/donate" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#FFB800]">
                <KineticHeadline lines={["Support Us"]} className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline" />
                <InkFlowText className="text-muted-foreground mb-6 text-base font-body">Sponsor student counseling, school outreach, and educational materials.</InkFlowText>
                <span className="text-[#003322] font-bold text-sm tracking-widest uppercase group-hover:text-[#FFB800] transition-colors">Donate Now →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
