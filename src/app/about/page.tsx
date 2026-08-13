
'use client';

import Image from "next/image"
import { Mail, Phone, ArrowRight, ShieldCheck, Heart, Users, Sparkles, Award, Compass, Volume2, ShieldAlert, CheckCircle2, UserCheck, Mic, Calendar, FileText, Wallet, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { InkFlowText } from "@/components/InkFlowText"
import { MagneticButton } from "@/components/MagneticButton"
import { BlurFocusText } from "@/components/BlurFocusText"
import { Separator } from "@/components/ui/separator"
import { ImageReveal } from "@/components/ImageReveal"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import Link from "next/link"

const executiveLeaders = [
  {
    title: "President",
    role: "Overall Leadership & Representation",
    desc: "Provides overall strategic leadership, chairs executive meetings, represents members across Africa, and oversees implementation of all organizational programs.",
    icon: Award,
  },
  {
    title: "Vice President",
    role: "Internal Operations & Coordination",
    desc: "Supports the President, coordinates internal operations, supervises active committees, and acts on behalf of the President when necessary.",
    icon: Compass,
  },
  {
    title: "Organizing Secretary",
    role: "Programs, Outreaches & Mobilization",
    desc: "Plans and coordinates organizational activities, campus events, mental health campaigns, school outreach programs, and student membership mobilization.",
    icon: Calendar,
  },
  {
    title: "General Secretary",
    role: "Records, Documentation & Administration",
    desc: "Manages official records, organizational correspondence, meeting minutes, official documentation, and administrative affairs of SVA across chapters.",
    icon: FileText,
  },
  {
    title: "Finance Secretary",
    role: "Financial Planning & Accountability",
    desc: "Oversees financial planning, budgeting, strict accountability, fundraising support, and transparent financial reporting.",
    icon: Wallet,
  },
  {
    title: "Publicity & Communications Secretary",
    role: "Media, Branding & Digital Advocacy",
    desc: "Leads branding, media relations, public awareness campaigns, digital communications, student advocacy, and promotion of SVA's mission across Africa.",
    icon: Megaphone,
  },
];

export default function AboutPage() {
  const historyImg = PlaceHolderImages.find(img => img.id === 'about-history')?.imageUrl || "/images/IMG_8919.jpg";

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[60vh] sm:h-[75vh] w-full overflow-hidden flex items-center justify-center bg-[#1A1A1A] py-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.45]"
            style={{
              backgroundImage: `url(/images/img7.jpg)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex justify-center text-center max-w-full">
          <div className="flex flex-col items-center max-w-4xl">
            <span className="text-[#FFB800] font-headline font-bold text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 bg-black/40 px-4 py-1.5 rounded-full border border-[#FFB800]/30 backdrop-blur-md">
              THEME: "RAISING THE STUDENT VOICE OF AFRICA"
            </span>
            <KineticHeadline 
              lines={["ORGANIZATION", "PROFILE"]} 
              className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] font-headline text-[#FFB800] max-w-full"
              staggerDelay={0.2}
            />
            <p className="mt-6 text-white/90 text-base sm:text-xl font-body max-w-2xl font-medium italic">
              "Breaking the Silence, Ending Stigma, Inspiring Change."
            </p>
          </div>
        </div>
      </section>

      {/* 2. Background & Foundation Story (White/Charcoal) */}
      <section className="py-20 sm:py-28 bg-white text-[#2D2B44]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-[#003322] text-[#FFB800] px-4 py-1 rounded-full text-xs font-headline font-bold tracking-widest uppercase">
                FOUNDATION BACKGROUND
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase font-headline tracking-tight text-[#2D2B44] leading-tight">
                Breaking Silence, Transforming Lives
              </h2>
              <Separator className="bg-[#FFB800] w-24 h-[3px]" />
              
              <p className="text-[#2D2B44]/80 text-base sm:text-lg leading-relaxed font-body">
                <strong>Student Voices of Africa (SVA)</strong> is a youth-led, non-profit, and non-partisan movement established to empower students across Africa by promoting communication, leadership, advocacy, innovation, and active participation in solving challenges affecting students.
              </p>
              
              <div className="p-6 bg-[#F8F8F8] border-l-4 border-[#FFB800] rounded-r-xl space-y-3">
                <h3 className="font-headline font-bold text-lg text-[#003322] uppercase">The Vision & Founding</h3>
                <p className="text-[#2D2B44]/80 text-sm sm:text-base leading-relaxed font-body">
                  The vision for SVA was first developed in <strong>2024 by Atugonza Rodgers</strong> while he was a science student at <strong>St. Julian High School, Gayaza</strong>. He observed that many students remained silent about challenges affecting their education, health, mental well-being, finances, careers, and personal lives because of fear, stigma, discrimination, or the lack of safe platforms.
                </p>
                <p className="text-[#2D2B44]/80 text-sm sm:text-base leading-relaxed font-body">
                  On <strong>27 May 2026</strong>, while studying at <strong>Avance International University, College of Health Sciences</strong>, Atugonza Rodgers officially founded Student Voices of Africa (SVA) to establish a continental platform where every African student is heard, respected, empowered, and inspired to create positive change.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#003322]">
                <Image 
                  src="/images/atugonza_rodgers.jpeg" 
                  alt="Atugonza Rodgers - Founder & Executive Director" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003322] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[#FFB800] text-xs font-bold uppercase tracking-widest block font-headline">FOUNDER & EXECUTIVE DIRECTOR</span>
                  <h4 className="text-2xl font-black font-headline">Atugonza Rodgers</h4>
                  <p className="text-white/80 text-xs font-body">Pioneering student advocate & visionary behind Student Voices of Africa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Breaking Silence Matters & Our Response (High Contrast Green) */}
      <section className="py-20 sm:py-28 bg-[#003322] text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#FFB800] font-headline font-bold text-xs sm:text-sm tracking-[0.3em] uppercase">OUR CORE PHILOSOPHY</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-headline tracking-tight text-white">
              Why Breaking Silence Matters
            </h2>
            <p className="text-white/80 font-body text-base sm:text-lg">
              SVA firmly believes that silence can hide pain, feed stigma, and limit the extraordinary potential of African youth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Left: The Danger of Silence */}
            <div className="bg-[#2D2B44]/60 p-8 rounded-2xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 text-[#FFB800]">
                <ShieldAlert className="h-8 w-8" />
                <h3 className="text-xl sm:text-2xl font-black font-headline uppercase">The Harm of Silence</h3>
              </div>
              <ul className="space-y-3 font-body text-white/80 text-sm sm:text-base">
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB800] font-bold">•</span>
                  <span>Hides mental health struggles and deep emotional pain.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB800] font-bold">•</span>
                  <span>Increases stigma and social discrimination.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB800] font-bold">•</span>
                  <span>Prevents students from seeking timely professional help.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB800] font-bold">•</span>
                  <span>Leads to poor academic performance and high school dropout rates.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB800] font-bold">•</span>
                  <span>Allows bullying, abuse, and exploitation to continue unchecked.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB800] font-bold">•</span>
                  <span>Limits creativity, innovation, leadership, confidence, and personal growth.</span>
                </li>
              </ul>
            </div>

            {/* Right: SVA Response */}
            <div className="bg-[#3E3E4E]/80 p-8 rounded-2xl border border-[#FFB800]/30 space-y-6">
              <div className="flex items-center space-x-3 text-[#FFB800]">
                <CheckCircle2 className="h-8 w-8" />
                <h3 className="text-xl sm:text-2xl font-black font-headline uppercase">Our Response</h3>
              </div>
              <ul className="space-y-3 font-body text-white/90 text-sm sm:text-base">
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB800] font-bold">✓</span>
                  <span>Encouraging students to speak openly without fear or prejudice.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB800] font-bold">✓</span>
                  <span>Creating safe, confidential, and inclusive platforms for dialogue.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB800] font-bold">✓</span>
                  <span>Fighting stigma in schools, colleges, and university campuses.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB800] font-bold">✓</span>
                  <span>Promoting mental health awareness and structured peer support.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB800] font-bold">✓</span>
                  <span>Developing leadership, communication, and public speaking skills.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB800] font-bold">✓</span>
                  <span>Building strategic partnerships with institutions, governments, and NGOs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Structure (6 Executive Leaders) */}
      <section className="py-20 sm:py-28 bg-[#F8F8F8] text-[#2D2B44]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#FFB800] font-headline font-bold text-xs sm:text-sm tracking-[0.3em] uppercase bg-[#003322] text-[#FFB800] px-4 py-1.5 rounded-full">GOVERNANCE & LEADERSHIP</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-headline tracking-tight text-[#2D2B44]">
              Executive Leadership Structure
            </h2>
            <p className="text-[#2D2B44]/70 font-body text-base sm:text-lg">
              Led by Founder & Executive Director <strong>Atugonza Rodgers</strong> alongside a six-member Executive Leadership Team driving SVA's vision across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveLeaders.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#003322] text-[#FFB800] flex items-center justify-center font-bold">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black font-headline text-[#2D2B44] uppercase">{item.title}</h3>
                      <p className="text-[#FFB800] font-bold text-xs uppercase tracking-wider mt-1">{item.role}</p>
                    </div>
                    <p className="text-[#2D2B44]/70 font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 sm:py-24 bg-[#2D2B44] text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <KineticHeadline 
            lines={["NEED A SAFE PLACE", "TO TALK?"]} 
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-headline mb-8 text-[#FFB800]"
          />
          <p className="text-white/80 font-body text-base sm:text-lg max-w-xl mx-auto mb-8">
            Reach out to our counseling team or student mentors today. You are never alone.
          </p>
          <Link href="/get-help">
            <MagneticButton>
              <Button className="bg-[#FFB800] text-[#2D2B44] hover:bg-[#FFB800]/90 font-black h-14 sm:h-16 px-8 sm:px-10 rounded-full text-base sm:text-xl group shadow-2xl">
                TALK TO SOMEONE NOW <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>
          </Link>
        </div>
      </section>
    </div>
  )
}

