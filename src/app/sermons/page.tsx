'use client';

import { ArrowRight, BookOpen, Users, Shield, Heart, Award, Compass, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { InkFlowText } from "@/components/InkFlowText"
import { MagneticButton } from "@/components/MagneticButton"
import { ImageReveal } from "@/components/ImageReveal"
import { cn } from "@/lib/utils"
import Link from "next/link"

const programs = [
  {
    title: "SCHOOL OUTREACH",
    description: "Bringing vital mental health awareness, addiction prevention, and compassionate support directly to secondary school and university students across Africa.",
    image: "/images/img1.jpg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "YOUTH CONFERENCES",
    description: "High-energy, empowering youth summits uniting thousands of students to celebrate their potential, share testimonies, and learn life-transforming resilience tools.",
    image: "/images/img6.jpg",
    bgColor: "bg-[#003322]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322]"
  },
  {
    title: "CAMPUS TALKS",
    description: "Interactive, open-floor discussions on African university campuses addressing real student issues—academic burnout, identity struggles, relationships, and emotional health.",
    image: "/images/img7.jpg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "DRUG & ADDICTION AWARENESS",
    description: "Dedicated campaigns providing practical recovery roadmaps, non-judgmental intervention, and compassionate guidance for those battling substance abuse or porn addiction.",
    image: "/images/img8.jpg",
    bgColor: "bg-[#003322]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322]"
  },
  {
    title: "PEER MENTORSHIP",
    description: "Pairing experienced student leaders and mentors with younger students to provide ongoing brotherhood, sisterhood, accountability, and encouragement.",
    image: "/images/img9.jpeg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "LEADERSHIP TRAINING",
    description: "Equipping student ambassadors with ethical leadership skills, emotional intelligence, and public speaking ability to champion positive culture in their institutions.",
    image: "/images/img10.jpg",
    bgColor: "bg-[#003322]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322]"
  },
  {
    title: "FAITH & SPIRITUAL DISCUSSIONS",
    description: "An open, welcoming space for students seeking spiritual clarity, prayer support, and foundational truth rooted in love, grace, and hope.",
    image: "/images/img2.jpeg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "COMMUNITY SERVICE",
    description: "Engaging students in hands-on social impact—supporting vulnerable youth, donating study materials, and serving surrounding local communities.",
    image: "/images/img3.jpeg",
    bgColor: "bg-[#003322]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322]"
  }
]

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section (Parallax) */}
      <section className="relative min-h-[50vh] sm:h-screen w-full overflow-hidden flex items-center justify-center bg-[#1A1A1A] py-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.45]"
            style={{
              backgroundImage: `url(/images/img6.jpg)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex justify-center text-center max-w-full">
          <div className="flex flex-col items-center max-w-full">
            <KineticHeadline 
              lines={["OUR", "PROGRAMS"]} 
              className="text-5xl sm:text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] font-headline text-[#FFB800] max-w-full"
              staggerDelay={0.2}
            />
          </div>
        </div>
      </section>

      {/* 2. Z-Pattern Content Rows */}
      {programs.map((prog, i) => (
        <section key={i} className="relative w-full">
          <div className={cn(
            "flex flex-col lg:flex-row min-h-[450px] lg:min-h-[600px]",
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          )}>
            {/* Image Block - Fixed explicit height for mobile/tablet visibility */}
            <div className="w-full lg:w-1/2 relative h-[320px] sm:h-[420px] lg:h-auto min-h-[300px] lg:min-h-full">
              <ImageReveal 
                src={prog.image} 
                alt={prog.title} 
                className="w-full h-full object-cover"
                maskColor={prog.bgColor === "bg-[#3E3E4E]" ? "bg-[#3E3E4E]" : "bg-[#003322]"}
              />
            </div>

            {/* Text Block */}
            <div className={cn(
              "w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-24",
              prog.bgColor,
              prog.textColor
            )}>
              <div className="max-w-md space-y-8">
                <KineticHeadline 
                  lines={[prog.title]} 
                  className="text-3xl md:text-5xl font-bold font-serif text-[#FFB800]"
                />
                <InkFlowText delay={0.8} className="text-lg md:text-xl font-body leading-relaxed opacity-90">
                  {prog.description}
                </InkFlowText>
                <div className="pt-4">
                  <Link href="/get-help">
                    <MagneticButton>
                      <Button className={cn("h-14 px-10 rounded-full font-black text-lg group", prog.btnClass)}>
                        GET INVOLVED <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </MagneticButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 3. Footer CTA Section */}
      <section className="py-32 bg-[#003322] text-white text-center">
        <div className="container mx-auto px-6">
          <KineticHeadline 
            lines={["READY TO BRING SVA", "TO YOUR CAMPUS?"]} 
            className="text-4xl md:text-7xl font-black uppercase font-headline mb-12"
          />
          <Link href="/contact">
            <MagneticButton>
              <Button variant="outline" className="border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322] font-black h-20 px-12 rounded-full text-2xl group transition-all duration-500">
                INVITE OUR TEAM <ArrowRight className="ml-8 h-8 w-8 group-hover:translate-x-2 transition-transform" />
              </Button>
            </MagneticButton>
          </Link>
        </div>
      </section>
    </div>
  )
}
