'use client';

import React, { useState } from "react";
import { ArrowRight, Calendar as CalendarIcon, MapPin, Clock, X, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagneticButton } from "@/components/MagneticButton";
import { KineticHeadline } from "@/components/KineticHeadline";
import { InkFlowText } from "@/components/InkFlowText";
import { ImageReveal } from "@/components/ImageReveal";
import { saveEventRsvp } from "@/lib/data-store";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const events = [
  {
    day: "12",
    month: "SEP",
    title: "National Youth Hope Summit 2026",
    location: "Kampala Main Auditorium & Online Stream",
    time: "9:00 AM - 5:00 PM",
    image: "/images/img1.jpg"
  },
  {
    day: "25",
    month: "SEP",
    title: "Campus Mental Health & Exam Stress Talk",
    location: "Makerere University Student Center",
    time: "2:00 PM - 5:00 PM",
    image: "/images/img2.jpeg"
  },
  {
    day: "10",
    month: "OCT",
    title: "Secondary School Addiction Awareness Walk",
    location: "Jinja High School Grounds",
    time: "8:00 AM - 1:00 PM",
    image: "/images/img3.jpeg"
  },
  {
    day: "24",
    month: "OCT",
    title: "Peer Mentor & Volunteer Training Day",
    location: "SVA Headquarters & Zoom",
    time: "10:00 AM - 3:00 PM",
    image: "/images/img4.jpeg"
  },
  {
    day: "05",
    month: "NOV",
    title: "High School Leadership & Character Workshop",
    location: "Gulu Youth Hall",
    time: "9:30 AM - 2:00 PM",
    image: "/images/img5.jpeg"
  },
  {
    day: "20",
    month: "NOV",
    title: "Anxiety, Faith & Mental Freedom Panel",
    location: "University Campus Chapel & Online",
    time: "4:00 PM - 7:00 PM",
    image: "/images/img6.jpg"
  }
];

export default function EventsPage() {
  const { toast } = useToast();
  const [selectedEventTitle, setSelectedEventTitle] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attendeesCount, setAttendeesCount] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenRsvp = (eventTitle: string) => {
    setSelectedEventTitle(eventTitle);
  };

  const handleCloseRsvp = () => {
    setSelectedEventTitle(null);
  };

  const handleSubmitRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEventTitle) return;

    setIsSubmitting(true);
    setTimeout(() => {
      saveEventRsvp({
        eventTitle: selectedEventTitle,
        fullName,
        email,
        phone,
        attendeesCount: parseInt(attendeesCount, 10) || 1,
      });

      setIsSubmitting(false);
      toast({
        title: "RSVP Confirmed & Stored!",
        description: `Your registration for "${selectedEventTitle}" has been saved in our records.`,
      });

      setFullName("");
      setEmail("");
      setPhone("");
      setAttendeesCount("1");
      setSelectedEventTitle(null);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#F5F5F5] relative">
      {/* Parallax Background Wrapper */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ clipPath: 'inset(0)' }}>
        <div 
          className="fixed inset-0 w-full h-full bg-center bg-cover brightness-[0.45]"
          style={{
            backgroundImage: `url(/images/img8.jpg)`,
          }}
        />
      </div>

      {/* 1. Featured Event Hero */}
      <section className="relative z-10 w-full min-h-[80vh] flex flex-col lg:flex-row overflow-hidden border-b border-white/10">
        {/* Left: Photo with subtle zoom */}
        <div className="w-full lg:w-3/5 relative min-h-[320px] sm:min-h-[400px] lg:min-h-full overflow-hidden group">
          <ImageReveal 
            src="/images/img7.jpg" 
            alt="Featured Youth Summit" 
            className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
        </div>

        {/* Right: Solid Green Date/Title block */}
        <div className="w-full lg:w-2/5 bg-[#003322] flex flex-col justify-center p-6 sm:p-12 md:p-20 text-white">
          <div className="space-y-6 slide-up">
            <span className="text-[#FFB800] font-serif text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter block border-b-2 border-[#FFB800] w-fit pb-2">
              SEP 12
            </span>
            <KineticHeadline 
              lines={["NATIONAL YOUTH", "HOPE SUMMIT"]} 
              className="text-3xl sm:text-5xl md:text-7xl font-black uppercase font-headline leading-[0.85]"
            />
            <InkFlowText className="text-white/80 text-lg md:text-xl font-body leading-relaxed max-w-md">
              Uniting thousands of students across Africa for a day of powerful testimonies, mental health guidance, music, and peer mentorship.
            </InkFlowText>
            <div className="pt-8">
              <MagneticButton>
                <Button 
                  onClick={() => handleOpenRsvp("National Youth Hope Summit 2026")}
                  className="bg-[#FFB800] text-[#003322] hover:bg-[#FFB800]/90 font-black h-16 px-10 rounded-full text-xl group"
                >
                  RSVP NOW <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Grid Header */}
      <section className="relative z-10 py-24 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <KineticHeadline 
            lines={["UPCOMING", "OUTREACHES"]} 
            className="text-white text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter font-headline mb-6"
          />
          <div className="h-1 w-24 bg-[#FFB800] mx-auto" />
        </div>
      </section>

      {/* 3. Event Grid */}
      <section className="relative z-10 pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event, i) => (
              <div 
                key={i} 
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl slide-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Top: Big Date */}
                <div className="p-8 bg-white flex flex-col items-center justify-center border-b border-gray-100">
                  <span className="text-sm font-black tracking-[0.3em] text-gray-400 uppercase">{event.month}</span>
                  <span className="text-6xl font-black text-[#FFB800] font-headline">{event.day}</span>
                </div>

                {/* Middle: Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageReveal 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom: Charcoal Title/Button block */}
                <div className="p-8 bg-[#3E3E4E] text-white flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-headline leading-tight">{event.title}</h3>
                    <div className="space-y-1 text-white/60 text-sm font-body">
                      <div className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-[#FFB800]" /> {event.location}</div>
                      <div className="flex items-center"><Clock className="h-4 w-4 mr-2 text-[#FFB800]" /> {event.time}</div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <MagneticButton className="w-full">
                      <Button 
                        onClick={() => handleOpenRsvp(event.title)}
                        className="w-full h-12 bg-white text-[#3E3E4E] hover:bg-[#FFB800] hover:text-[#003322] font-black uppercase tracking-wider rounded-full transition-colors group"
                      >
                        ATTEND EVENT <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-32 bg-[#003322] text-white text-center">
        <div className="container mx-auto px-6">
          <KineticHeadline 
            lines={["HOST SVA AT YOUR SCHOOL"]} 
            className="text-4xl md:text-7xl font-black uppercase font-headline mb-12"
          />
          <Link href="/contact">
            <MagneticButton>
              <Button variant="outline" className="border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322] font-black h-20 px-12 rounded-full text-2xl group">
                INVITE OUR TEAM <ArrowRight className="ml-2 h-8 w-8 group-hover:translate-x-2 transition-transform" />
              </Button>
            </MagneticButton>
          </Link>
        </div>
      </section>

      {/* Event RSVP Modal */}
      {selectedEventTitle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#2D2B44] text-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 animate-in fade-in zoom-in duration-300">
            <div className="p-6 bg-[#003322] flex items-center justify-between border-b border-white/10">
              <div>
                <span className="text-[#FFB800] text-xs font-bold uppercase tracking-widest block">RSVP Registration</span>
                <h3 className="text-xl font-bold font-headline text-white">{selectedEventTitle}</h3>
              </div>
              <button 
                onClick={handleCloseRsvp}
                className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmitRsvp} className="p-8 space-y-5">
              <div className="space-y-2">
                <Label className="text-xs font-bold text-white/80 uppercase tracking-wider">Full Name</Label>
                <Input 
                  placeholder="Your name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/30"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold text-white/80 uppercase tracking-wider">Email Address</Label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/30"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold text-white/80 uppercase tracking-wider">Phone / WhatsApp Number</Label>
                <Input 
                  placeholder="+256 7..."
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/30"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold text-white/80 uppercase tracking-wider">Number of Attendees / Seats</Label>
                <Input 
                  type="number"
                  min="1"
                  max="10"
                  required
                  value={attendeesCount}
                  onChange={(e) => setAttendeesCount(e.target.value)}
                  className="h-12 bg-white/10 border-white/20 text-white text-lg font-bold"
                />
              </div>

              <div className="pt-4 flex gap-3">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleCloseRsvp}
                  className="flex-1 h-14 border-white/20 text-white hover:bg-white/10"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 h-14 bg-[#FFB800] hover:bg-[#FFB800]/90 text-[#2D2B44] font-black uppercase text-base tracking-wider shadow-xl"
                >
                  {isSubmitting ? "Confirming..." : "CONFIRM RSVP"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
