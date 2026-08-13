'use client';

import React, { useState } from "react";
import { Play, Pause, ArrowRight, Clock, Calendar, Volume2, SkipForward, SkipBack, BookOpen, Download, ShieldCheck, Heart, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/MagneticButton";
import { KineticHeadline } from "@/components/KineticHeadline";
import { InkFlowText } from "@/components/InkFlowText";
import { BlurFocusText } from "@/components/BlurFocusText";
import { ImageReveal } from "@/components/ImageReveal";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const episodes = [
  {
    number: "05",
    title: "Healing in Community & Overcoming Isolation",
    description: "Discovering how safe peer communities transform student mental health and offer unconditional hope across African universities.",
    date: "AUG 10, 2026",
    duration: "45 MIN",
    image: "/images/img1.jpg"
  },
  {
    number: "04",
    title: "Overcoming Shame & Finding Your Voice",
    description: "Unpacking how guilt and isolation affect student mental health, and how taking the first step to share your story brings freedom.",
    date: "AUG 01, 2026",
    duration: "35 MIN",
    image: "/images/img4.jpeg"
  },
  {
    number: "03",
    title: "Breaking Free From Pornography & Hidden Addictions",
    description: "A candid, non-judgmental discussion on addiction recovery, neuroplasticity, peer support, and practical daily habits.",
    date: "JUL 24, 2026",
    duration: "42 MIN",
    image: "/images/img5.jpeg"
  },
  {
    number: "02",
    title: "Navigating Academic Pressure & Anxiety",
    description: "Practical tools for handling university exam stress, family expectations, and anxiety without burning out.",
    date: "JUL 15, 2026",
    duration: "30 MIN",
    image: "/images/img2.jpeg"
  },
  {
    number: "01",
    title: "The Power of Safe Spaces: SVA Launch Story",
    description: "Our founding story on why Student Voices of Africa was established to ensure no young person suffers in silence.",
    date: "JUL 01, 2026",
    duration: "40 MIN",
    image: "/images/img3.jpeg"
  }
];

const guides = [
  {
    id: "g1",
    title: "Addiction Recovery Action Guide",
    category: "Mental Health & Wellness",
    desc: "A 10-step confidential self-help roadmap for students overcoming porn and substance habits.",
    content: "Step 1: Identify your triggers without self-condemnation. Step 2: Establish a trusted peer accountability partner. Step 3: Replace secret isolation with open fellowship. Reach out to SVA counseling anytime for free confidential 1-on-1 support."
  },
  {
    id: "g2",
    title: "Student Anxiety & Panic Toolkit",
    category: "Emotional Support",
    desc: "Grounding exercises, breathing techniques, and mental health tips during high-stress exam periods.",
    content: "Box Breathing Technique: Breathe in for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds. Repeat 4 times. Remember: Your grades do not define your human worth."
  },
  {
    id: "g3",
    title: "Peer Mentorship & Listening Handbook",
    category: "Leadership & Community",
    desc: "How to listen without judgment and support friends going through personal crises.",
    content: "Principle 1: Active compassionate listening without jumping to give advice. Principle 2: Assure strict confidentiality. Principle 3: Connect your friend with professional SVA counselors when safety is at risk."
  },
];

export default function PodcastPage() {
  const { toast } = useToast();
  const [activeEpisode, setActiveEpisode] = useState(episodes[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeGuide, setActiveGuide] = useState<typeof guides[0] | null>(null);

  const handlePlayEpisode = (ep: typeof episodes[0]) => {
    setActiveEpisode(ep);
    setIsPlaying(true);
    toast({
      title: `Now Playing: Episode ${ep.number}`,
      description: ep.title,
    });
  };

  const handleDownloadGuide = (g: typeof guides[0]) => {
    setActiveGuide(g);
    toast({
      title: `Guide Selected: ${g.title}`,
      description: "You can read or download this confidential wellness guide.",
    });
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#1A1A1A] pb-32">
      {/* 1. Latest Episode Hero */}
      <section className="relative w-full lg:h-[85vh] flex flex-col lg:flex-row border-b border-white/5">
        {/* Left: Cover Art */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center p-12 md:p-24 bg-[#141414]">
          <BlurFocusText className="relative aspect-square w-full max-w-md">
             <div className="absolute inset-0 bg-[#FFB800]/20 blur-3xl rounded-full scale-110 opacity-30 animate-pulse" />
             <ImageReveal 
              src={activeEpisode.image} 
              alt={activeEpisode.title} 
              className="w-full h-full shadow-2xl rounded-sm object-cover"
            />
          </BlurFocusText>
        </div>

        {/* Right: Content Block */}
        <div className="w-full lg:w-1/2 bg-[#003322] flex flex-col justify-center p-12 md:p-24 text-white">
          <div className="space-y-4 mb-8">
            <span className="text-[#FFB800] font-headline font-bold text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] block uppercase">
              STUDENT VOICES PODCAST
            </span>
            <div className="flex flex-col">
              <span className="text-[#FFB800] text-base sm:text-lg font-bold">EPISODE</span>
              <span className="text-6xl sm:text-8xl md:text-[10rem] font-black leading-none font-headline">{activeEpisode.number}</span>
            </div>
          </div>
          
          <KineticHeadline 
            lines={[activeEpisode.title.toUpperCase()]} 
            className="text-2xl sm:text-4xl md:text-5xl font-black uppercase font-headline leading-[1.0] mb-8 sm:mb-12"
          />

          <div className="flex items-center space-x-8">
            <MagneticButton strength={30}>
              <button 
                onClick={() => handlePlayEpisode(activeEpisode)}
                className="bg-[#FFB800] text-[#003322] w-24 h-24 rounded-full flex items-center justify-center shadow-lg group hover:scale-110 transition-transform"
              >
                {isPlaying && activeEpisode.number === episodes[0].number ? (
                  <Pause className="h-10 w-10 fill-[#003322]" />
                ) : (
                  <Play className="h-10 w-10 fill-[#003322] ml-1 group-hover:scale-110 transition-transform" />
                )}
              </button>
            </MagneticButton>
            <div className="space-y-1">
              <p className="font-bold text-xl font-headline">{isPlaying ? "Currently Playing" : "Listen Now"}</p>
              <p className="text-white/70 font-body">{activeEpisode.duration} • Student Mental Health Series</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Free Guides & Materials Section */}
      <section className="py-20 bg-[#232323] text-white border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="mb-12 space-y-3">
            <span className="text-[#FFB800] font-bold text-xs uppercase tracking-widest font-headline">Free Materials & Downloads</span>
            <h2 className="text-3xl md:text-5xl font-black font-headline uppercase">Recovery & Wellness Guides</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((g) => (
              <div key={g.id} className="bg-[#1A1A1A] p-8 rounded-xl border border-white/10 hover:border-[#FFB800] transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-[#FFB800] uppercase tracking-wider block">{g.category}</span>
                  <h3 className="text-xl font-bold font-headline leading-snug">{g.title}</h3>
                  <p className="text-white/60 font-body text-sm leading-relaxed">{g.desc}</p>
                </div>
                <div className="pt-6">
                  <Button 
                    onClick={() => handleDownloadGuide(g)}
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-[#FFB800] hover:text-[#003322] hover:border-[#FFB800] font-bold rounded-full group-hover:border-[#FFB800]"
                  >
                    View & Download Guide <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Episode Archive List */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="mb-16">
            <KineticHeadline 
              lines={["PODCAST", "EPISODES"]} 
              className="text-white text-4xl md:text-6xl font-black font-headline mb-4"
            />
            <div className="h-1 w-24 bg-[#FFB800]" />
          </div>

          <div className="space-y-0">
            {episodes.map((ep) => {
              const isThisPlaying = isPlaying && activeEpisode.number === ep.number;
              return (
                <div 
                  key={ep.number} 
                  className={`group flex flex-col md:flex-row items-center py-12 border-b border-white/10 transition-colors px-6 -mx-6 rounded-xl ${
                    isThisPlaying ? "bg-white/5 border-[#FFB800]/50" : "hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-24 shrink-0 mb-6 md:mb-0 md:mr-12">
                    <ImageReveal 
                      src={ep.image} 
                      alt={ep.title} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 space-y-3 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-1">
                      <span className="text-[#FFB800] font-bold text-sm tracking-widest uppercase">EP {ep.number}</span>
                      <span className="hidden md:block text-white/20">•</span>
                      <span className="text-white/40 text-xs font-bold uppercase tracking-widest">{ep.date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-headline group-hover:text-[#FFB800] transition-colors">
                      {ep.title}
                    </h3>
                    <InkFlowText className="text-white/60 font-body text-sm md:text-base max-w-2xl">
                      {ep.description}
                    </InkFlowText>
                  </div>

                  {/* Duration & Button */}
                  <div className="mt-8 md:mt-0 md:ml-12 flex flex-col items-center md:items-end space-y-4">
                    <div className="flex items-center text-white/40 text-xs font-bold space-x-2">
                      <Clock className="h-3 w-3" />
                      <span>{ep.duration}</span>
                    </div>
                    <MagneticButton>
                      <Button 
                        onClick={() => handlePlayEpisode(ep)}
                        variant="outline" 
                        className={`border-white/20 text-white font-black rounded-full px-8 group ${
                          isThisPlaying 
                            ? "bg-[#FFB800] text-[#003322] border-[#FFB800]" 
                            : "hover:bg-[#FFB800] hover:text-[#003322] hover:border-[#FFB800]"
                        }`}
                      >
                        {isThisPlaying ? "PLAYING NOW" : "LISTEN NOW"} 
                        {isThisPlaying ? <Pause className="ml-2 h-4 w-4 fill-current" /> : <Play className="ml-2 h-4 w-4 fill-current" />}
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guide Download Modal */}
      {activeGuide && (
        <div className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#2D2B44] text-white w-full max-w-xl rounded-2xl p-8 shadow-2xl border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-[#FFB800]" />
                <span className="text-xs font-bold text-[#FFB800] uppercase tracking-widest">{activeGuide.category}</span>
              </div>
              <button onClick={() => setActiveGuide(null)} className="text-white/60 hover:text-white p-2">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-black font-headline text-white">{activeGuide.title}</h3>
              <p className="text-white/70 font-body text-sm italic">{activeGuide.desc}</p>
              
              <div className="bg-black/30 p-6 rounded-xl border border-white/10 text-white/90 font-body text-sm space-y-3 leading-relaxed">
                <span className="text-xs font-bold text-[#FFB800] uppercase tracking-wider block">Guide Preview & Key Takeaway:</span>
                <p>{activeGuide.content}</p>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <Button 
                onClick={() => {
                  const blob = new Blob([`${activeGuide.title}\n\n${activeGuide.desc}\n\nContent:\n${activeGuide.content}`], { type: "text/plain" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `${activeGuide.title.toLowerCase().replace(/\s+/g, "-")}.txt`;
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                  toast({
                    title: "Download Started",
                    description: `Saved "${activeGuide.title}" as text guide.`,
                  });
                }}
                className="flex-1 bg-[#FFB800] text-[#003322] font-black h-12 rounded-full hover:bg-[#FFB800]/90"
              >
                DOWNLOAD FULL GUIDE (.TXT)
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Floating Audio Player Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] bg-[#3E3E4E] border-t border-white/10 h-20 sm:h-24 flex items-center shadow-2xl px-4 sm:px-6 md:px-12 backdrop-blur-lg bg-opacity-95">
        <div className="container mx-auto flex items-center justify-between gap-2 sm:gap-8">
          {/* Track Info */}
          <div className="flex items-center space-x-2 sm:space-x-4 max-w-[160px] sm:max-w-md overflow-hidden">
            <div className="hidden sm:block w-10 h-10 sm:w-12 sm:h-12 bg-[#FFB800]/20 rounded overflow-hidden shrink-0">
              <img src={activeEpisode.image} alt={activeEpisode.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col truncate">
              <span className="text-white font-bold text-xs sm:text-sm truncate uppercase tracking-wider">{activeEpisode.title}</span>
              <span className="text-[#FFB800] text-[9px] sm:text-[10px] uppercase font-bold tracking-widest truncate">EP {activeEpisode.number} • {isPlaying ? "PLAYING" : "PAUSED"}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center flex-1 space-y-1 sm:space-y-2">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <button className="text-white/60 hover:text-[#FFB800] transition-colors"><SkipBack className="h-4 w-4 sm:h-5 sm:w-5" /></button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-[#FFB800] text-[#003322] hover:bg-[#FFB800]/90 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-lg"
              >
                {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current ml-0.5" />}
              </button>
              <button className="text-white/60 hover:text-[#FFB800] transition-colors"><SkipForward className="h-4 w-4 sm:h-5 sm:w-5" /></button>
            </div>
            {/* Progress */}
            <div className="hidden sm:flex w-full max-w-lg items-center space-x-4">
              <span className="text-[10px] text-white/40 font-mono">04:15</span>
              <div className="flex-1 h-1.5 bg-white/10 rounded-full relative group cursor-pointer">
                <div className={`absolute top-0 left-0 h-full ${isPlaying ? 'w-2/5 animate-pulse' : 'w-2/5'} bg-[#FFB800] rounded-full`} />
              </div>
              <span className="text-[10px] text-white/40 font-mono">{activeEpisode.duration}</span>
            </div>
          </div>

          {/* Volume */}
          <div className="hidden md:flex items-center space-x-4">
            <Volume2 className="h-5 w-5 text-white/60" />
            <div className="w-20 h-1 bg-white/10 rounded-full">
              <div className="h-full w-3/4 bg-[#FFB800] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
