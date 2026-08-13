'use client';

import React, { useState } from "react";
import { MessageSquare, Phone, Mail, ShieldCheck, Calendar, Lock, Send, Heart, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { KineticHeadline } from "@/components/KineticHeadline";
import { InkFlowText } from "@/components/InkFlowText";
import { MagneticButton } from "@/components/MagneticButton";
import { BlurFocusText } from "@/components/BlurFocusText";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

import { saveCounselingRequest, saveAnonymousStory } from "@/lib/data-store";

export default function GetHelpPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"counseling" | "anonymous">("counseling");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Counseling state
  const [counselingName, setCounselingName] = useState("");
  const [counselingContact, setCounselingContact] = useState("");
  const [counselingTopic, setCounselingTopic] = useState("general");
  const [counselingNote, setCounselingNote] = useState("");

  // Anonymous state
  const [anonymousTopic, setAnonymousTopic] = useState("general");
  const [anonymousMessage, setAnonymousMessage] = useState("");

  const handleCounselingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      saveCounselingRequest({
        name: counselingName,
        contact: counselingContact,
        topic: counselingTopic,
        note: counselingNote,
      });
      setIsSubmitting(false);
      toast({
        title: "Session Request Saved & Received",
        description: "Your counseling request has been recorded in our hub. A friendly counselor will reach out shortly.",
      });
      setCounselingName("");
      setCounselingContact("");
      setCounselingNote("");
    }, 1000);
  };

  const handleAnonymousSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      saveAnonymousStory({
        category: anonymousTopic,
        message: anonymousMessage,
      });
      setIsSubmitting(false);
      toast({
        title: "Anonymous Message Stored",
        description: "Your story has been safely submitted and recorded. Thank you for sharing your voice.",
      });
      setAnonymousMessage("");
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[45vh] w-full overflow-hidden flex items-center justify-center bg-[#003322] text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.45]"
            style={{ backgroundImage: `url(/images/img7.jpg)` }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center space-y-4">
          <span className="text-[#FFB800] font-black tracking-[0.4em] text-xs uppercase block">Confidential Support</span>
          <KineticHeadline 
            lines={["WE ARE HERE TO LISTEN", "WITHOUT JUDGMENT."]} 
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter font-headline text-white leading-tight"
            staggerDelay={0.1}
          />
          <p className="text-white/80 max-w-xl mx-auto font-body text-base md:text-lg">
            Whatever struggle or burden you carry today, you will be treated with absolute dignity, respect, and confidentiality.
          </p>
        </div>
      </section>

      {/* Quick Access Action Bar */}
      <section className="bg-[#2D2B44] text-white py-10 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://wa.me/256777672263?text=Hello%20Student%20Voices%20of%20Africa,%20I%20would%20like%20to%20talk%20to%20someone." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#003322] p-6 rounded-xl hover:bg-[#004d33] transition-all flex items-center space-x-4 border border-[#FFB800]/30 group"
            >
              <div className="p-3 bg-[#FFB800] text-[#003322] rounded-full group-hover:scale-110 transition-transform">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg font-headline text-[#FFB800]">WhatsApp Chat</h4>
                <p className="text-xs text-white/70 font-body">+256 777 672 263 (Instant Chat)</p>
              </div>
            </a>

            <div className="bg-[#3E3E4E] p-6 rounded-xl flex items-center space-x-4 border border-white/10">
              <div className="p-3 bg-white/10 text-[#FFB800] rounded-full">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg font-headline">100% Confidential</h4>
                <p className="text-xs text-white/70 font-body">Your identity and conversations are strictly private</p>
              </div>
            </div>

            <a 
              href="tel:0748983423" 
              className="bg-[#3E3E4E] p-6 rounded-xl hover:bg-[#4E4E60] transition-all flex items-center space-x-4 border border-white/10 group"
            >
              <div className="p-3 bg-[#FFB800] text-[#2D2B44] rounded-full group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg font-headline">Helpline Call</h4>
                <p className="text-xs text-white/70 font-body">0748983423 (Mon - Sat)</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Support Forms & Options */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex justify-center mb-12">
            <div className="bg-[#F8F8F8] p-1.5 rounded-2xl sm:rounded-full border border-gray-200 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab("counseling")}
                className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-full font-headline text-xs sm:text-sm font-bold tracking-wider uppercase transition-all w-full sm:w-auto ${
                  activeTab === "counseling"
                    ? "bg-[#003322] text-white shadow-md"
                    : "text-[#2D2B44]/70 hover:text-[#2D2B44]"
                }`}
              >
                Book Counseling Session
              </button>
              <button
                onClick={() => setActiveTab("anonymous")}
                className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-full font-headline text-xs sm:text-sm font-bold tracking-wider uppercase transition-all w-full sm:w-auto ${
                  activeTab === "anonymous"
                    ? "bg-[#003322] text-white shadow-md"
                    : "text-[#2D2B44]/70 hover:text-[#2D2B44]"
                }`}
              >
                Anonymous Support Form
              </button>
            </div>
          </div>

          {activeTab === "counseling" ? (
            <div className="bg-[#F8F8F8] p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
              <div className="max-w-2xl mx-auto space-y-8">
                <div>
                  <h3 className="text-3xl font-black font-headline text-[#2D2B44] uppercase mb-2">Request 1-on-1 Counseling</h3>
                  <p className="text-muted-foreground font-body text-base">
                    Fill out this simple form to schedule a private, compassionate conversation with a trained student counselor.
                  </p>
                </div>

                <form onSubmit={handleCounselingSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label className="font-bold uppercase tracking-wider text-xs text-[#2D2B44]">Name / Preferred Alias</Label>
                    <Input 
                      placeholder="Your name or nickname"
                      required
                      value={counselingName}
                      onChange={(e) => setCounselingName(e.target.value)}
                      className="h-14 bg-white border-gray-200 text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="font-bold uppercase tracking-wider text-xs text-[#2D2B44]">Contact Method (Phone / WhatsApp / Email)</Label>
                    <Input 
                      placeholder="+256... or email@example.com"
                      required
                      value={counselingContact}
                      onChange={(e) => setCounselingContact(e.target.value)}
                      className="h-14 bg-white border-gray-200 text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="font-bold uppercase tracking-wider text-xs text-[#2D2B44]">Topic You'd Like Guidance On</Label>
                    <select
                      value={counselingTopic}
                      onChange={(e) => setCounselingTopic(e.target.value)}
                      className="w-full h-14 bg-white border border-gray-200 rounded-md px-4 font-body text-base text-[#2D2B44] focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                    >
                      <option value="general">General Support & Listening</option>
                      <option value="depression">Depression & Anxiety</option>
                      <option value="addiction">Drug / Pornography Addiction Recovery</option>
                      <option value="academics">Academic & Peer Pressure</option>
                      <option value="family">Family & Home Difficulties</option>
                      <option value="relationships">Relationships & Personal Growth</option>
                      <option value="spiritual">Spiritual Guidance & Faith</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-bold uppercase tracking-wider text-xs text-[#2D2B44]">Brief Note (Optional)</Label>
                    <Textarea 
                      placeholder="Share whatever you're comfortable expressing..."
                      className="min-h-[120px] bg-white border-gray-200 text-base p-4"
                      value={counselingNote}
                      onChange={(e) => setCounselingNote(e.target.value)}
                    />
                  </div>

                  <div className="pt-2">
                    <MagneticButton strength={20} className="w-full">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-16 bg-[#003322] hover:bg-[#003322]/90 text-white font-black text-lg uppercase tracking-wider rounded-full shadow-xl group"
                      >
                        {isSubmitting ? "Submitting..." : (
                          <span className="flex items-center justify-center">
                            REQUEST COUNSELING <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        )}
                      </Button>
                    </MagneticButton>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="bg-[#3E3E4E] text-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="flex items-center space-x-3 text-[#FFB800]">
                  <Lock className="h-8 w-8" />
                  <h3 className="text-3xl font-black font-headline uppercase">Share Your Story Anonymously</h3>
                </div>
                <p className="text-white/80 font-body text-base leading-relaxed">
                  No names, no phone numbers, no tracking. Use this safe box to unburden your thoughts or ask questions without revealing who you are.
                </p>

                <form onSubmit={handleAnonymousSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label className="font-bold uppercase tracking-wider text-xs text-white/80">Category</Label>
                    <select
                      value={anonymousTopic}
                      onChange={(e) => setAnonymousTopic(e.target.value)}
                      className="w-full h-14 bg-white/10 border border-white/20 rounded-md px-4 font-body text-base text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                    >
                      <option value="general" className="text-[#2D2B44]">General Struggle</option>
                      <option value="addiction" className="text-[#2D2B44]">Addiction & Habits</option>
                      <option value="loneliness" className="text-[#2D2B44]">Loneliness & Heartbreak</option>
                      <option value="pressure" className="text-[#2D2B44]">Academic / Family Stress</option>
                      <option value="question" className="text-[#2D2B44]">Anonymous Question</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-bold uppercase tracking-wider text-xs text-white/80">Your Message / Story</Label>
                    <Textarea 
                      placeholder="Write freely here. You are in a completely safe space..."
                      required
                      className="min-h-[180px] bg-white/10 border-white/20 text-white placeholder:text-white/30 text-lg p-4 focus-visible:ring-[#FFB800]"
                      value={anonymousMessage}
                      onChange={(e) => setAnonymousMessage(e.target.value)}
                    />
                  </div>

                  <div className="pt-2">
                    <MagneticButton strength={20} className="w-full">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-16 bg-[#FFB800] hover:bg-[#FFB800]/90 text-[#2D2B44] font-black text-lg uppercase tracking-wider rounded-full shadow-xl group"
                      >
                        {isSubmitting ? "Sending..." : (
                          <span className="flex items-center justify-center">
                            SUBMIT ANONYMOUSLY <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        )}
                      </Button>
                    </MagneticButton>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Emergency Helpline Notice */}
      <section className="py-16 bg-[#2D2B44] text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center space-y-6">
          <div className="inline-flex p-3 bg-red-500/20 text-red-400 rounded-full mb-2">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black font-headline uppercase">In Immediate Danger or Crisis?</h3>
          <p className="text-white/80 font-body text-base max-w-xl mx-auto">
            If you or someone you know is in immediate physical danger or contemplating self-harm, please reach out to our emergency line or local emergency health services immediately.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a href="tel:0748983423" className="inline-block">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-black h-14 px-8 rounded-full text-lg">
                CALL CRISIS LINE NOW: 0748983423
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
