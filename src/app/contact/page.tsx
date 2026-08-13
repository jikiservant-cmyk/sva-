"use client"

import * as React from "react"
import { Mail, Phone, MapPin, Send, MessageSquare, Heart, ShieldCheck, UserCheck, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { KineticHeadline } from "@/components/KineticHeadline"
import { MagneticButton } from "@/components/MagneticButton"
import { InkFlowText } from "@/components/InkFlowText"

import { saveContactMessage } from "@/lib/data-store"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [reason, setReason] = React.useState("General Inquiry")
  const [message, setMessage] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      saveContactMessage({
        firstName,
        lastName,
        email,
        reason,
        message,
      })
      setIsSubmitting(false)
      toast({
        title: "Message Stored & Sent Successfully",
        description: "Thank you for reaching out! Your message has been saved into our records hub.",
      })
      setFirstName("")
      setLastName("")
      setEmail("")
      setMessage("")
    }, 1000)
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center bg-[#003322]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.45]"
            style={{
              backgroundImage: `url(/images/img1.jpg)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-full">
          <KineticHeadline 
            lines={["CONNECT WITH", "OUR TEAM"]} 
            className="text-3xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] font-serif text-[#FFB800] max-w-full"
            staggerDelay={0.2}
          />
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-20 space-y-6">
            <KineticHeadline 
              lines={["WE'RE HERE FOR YOU"]} 
              className="text-4xl md:text-5xl font-black text-[#2D2B44] uppercase font-headline"
            />
            <InkFlowText className="text-muted-foreground text-xl font-body max-w-2xl mx-auto leading-relaxed">
              Have a question about our student programs, want to volunteer, or wish to invite SVA to speak at your school? We'd love to connect.
            </InkFlowText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info Sidebar */}
            <div className="space-y-12">
              <div className="space-y-8">
                <span className="text-[#FFB800] font-black tracking-[0.4em] text-xs uppercase block">Information</span>
                
                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#F8F8F8] p-4 rounded-sm transition-transform group-hover:scale-110 duration-500">
                    <MapPin className="h-6 w-6 text-[#FFB800]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#2D2B44] uppercase tracking-wide">Location</h3>
                    <p className="text-muted-foreground font-body">Kampala Student Center & Outreach Hubs, Uganda</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#F8F8F8] p-4 rounded-sm transition-transform group-hover:scale-110 duration-500">
                    <Phone className="h-6 w-6 text-[#FFB800]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#2D2B44] uppercase tracking-wide">Helpline Call</h3>
                    <a href="tel:0748983423" className="text-[#003322] font-bold hover:text-[#FFB800] transition-colors block text-base">
                      0748983423
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#F8F8F8] p-4 rounded-sm transition-transform group-hover:scale-110 duration-500">
                    <MessageSquare className="h-6 w-6 text-[#FFB800]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#2D2B44] uppercase tracking-wide">WhatsApp Chat</h3>
                    <a 
                      href="https://wa.me/256777672263?text=Hello%20Student%20Voices%20of%20Africa,%20I%20would%20like%20to%20talk%20to%20someone." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#003322] font-bold hover:text-[#FFB800] transition-colors block text-base"
                    >
                      +256 777 672 263
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#F8F8F8] p-4 rounded-sm transition-transform group-hover:scale-110 duration-500">
                    <Mail className="h-6 w-6 text-[#FFB800]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#2D2B44] uppercase tracking-wide">Email Address</h3>
                    <a href="mailto:rodgersatugonza4@gmail.com" className="text-[#003322] font-bold hover:text-[#FFB800] transition-colors block text-base break-all">
                      rodgersatugonza4@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-[#3E3E4E] text-white space-y-6 rounded-sm shadow-xl">
                <ShieldCheck className="h-10 w-10 text-[#FFB800]" />
                <h3 className="text-2xl font-black uppercase font-headline">Confidential Support</h3>
                <InkFlowText delay={1} className="text-white/70 font-body leading-relaxed text-sm">
                  If you are a student seeking private help or counseling, visit our <a href="/get-help" className="text-[#FFB800] underline">Get Help page</a>. All support is completely free and non-judgmental.
                </InkFlowText>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="first-name" className="text-xs font-black uppercase tracking-widest text-[#2D2B44]/50">First Name</Label>
                    <Input id="first-name" placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="h-14 bg-[#F8F8F8] border-none rounded-none focus-visible:ring-1 focus-visible:ring-[#FFB800] placeholder:text-gray-300" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="last-name" className="text-xs font-black uppercase tracking-widest text-[#2D2B44]/50">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="h-14 bg-[#F8F8F8] border-none rounded-none focus-visible:ring-1 focus-visible:ring-[#FFB800] placeholder:text-gray-300" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-[#2D2B44]/50">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-14 bg-[#F8F8F8] border-none rounded-none focus-visible:ring-1 focus-visible:ring-[#FFB800] placeholder:text-gray-300" />
                </div>

                <div className="space-y-6">
                  <Label className="text-xs font-black uppercase tracking-widest text-[#2D2B44]/50">Reason for inquiry</Label>
                  <RadioGroup value={reason} onValueChange={setReason} className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-3 group cursor-pointer">
                      <RadioGroupItem value="General Inquiry" id="r1" className="border-2 border-[#FFB800] text-[#FFB800]" />
                      <Label htmlFor="r1" className="font-bold text-[#2D2B44] uppercase tracking-wide text-sm cursor-pointer group-hover:text-[#FFB800] transition-colors">General Inquiry</Label>
                    </div>
                    <div className="flex items-center space-x-3 group cursor-pointer">
                      <RadioGroupItem value="Volunteer / Mentor" id="r2" className="border-2 border-[#FFB800] text-[#FFB800]" />
                      <Label htmlFor="r2" className="font-bold text-[#2D2B44] uppercase tracking-wide text-sm cursor-pointer group-hover:text-[#FFB800] transition-colors">Volunteer / Mentor</Label>
                    </div>
                    <div className="flex items-center space-x-3 group cursor-pointer">
                      <RadioGroupItem value="Invite SVA Speaker" id="r3" className="border-2 border-[#FFB800] text-[#FFB800]" />
                      <Label htmlFor="r3" className="font-bold text-[#2D2B44] uppercase tracking-wide text-sm cursor-pointer group-hover:text-[#FFB800] transition-colors">Invite SVA Speaker</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-[#2D2B44]/50">Your Message or School Details</Label>
                  <Textarea id="message" placeholder="Tell us how we can assist or collaborate with you..." value={message} onChange={(e) => setMessage(e.target.value)} className="min-h-[200px] bg-[#F8F8F8] border-none rounded-none focus-visible:ring-1 focus-visible:ring-[#FFB800] placeholder:text-gray-300 p-6 text-lg resize-none" required />
                </div>

                <div className="pt-4">
                  <MagneticButton strength={20} className="w-full">
                    <Button type="submit" className="w-full h-16 sm:h-20 text-base sm:text-xl font-black bg-[#FFB800] text-[#003322] hover:bg-[#FFB800]/90 rounded-none shadow-xl group" disabled={isSubmitting}>
                      {isSubmitting ? "SENDING..." : (
                        <span className="flex items-center justify-center">
                          SEND MESSAGE
                          <Send className="ml-2 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </MagneticButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Footer Map / Hub Section */}
      <section className="h-[50vh] w-full bg-[#F5F5F5] relative group overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(/images/img8.jpg)` }}
        />
        <div className="absolute inset-0 bg-[#003322]/40 group-hover:bg-transparent transition-all duration-1000 flex items-center justify-center">
          <div className="bg-white p-8 shadow-2xl space-y-2 text-center max-w-md">
            <h3 className="text-xl font-black uppercase font-headline">Visit Our Student Hub</h3>
            <p className="text-muted-foreground text-sm font-body">Open for walk-in peer chat and counseling Mon-Fri, 9am - 5pm</p>
          </div>
        </div>
      </section>
    </div>
  )
}
