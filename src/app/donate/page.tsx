"use client"

import * as React from "react"
import { Heart, ShieldCheck, CreditCard, Banknote, Smartphone, ArrowRight, Users, PlayCircle, Star, Sparkles, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { KineticHeadline } from "@/components/KineticHeadline"
import { MagneticButton } from "@/components/MagneticButton"
import { InkFlowText } from "@/components/InkFlowText"
import { BlurFocusText } from "@/components/BlurFocusText"

import { saveDonation } from "@/lib/data-store"

export default function DonatePage() {
  const [amount, setAmount] = React.useState<string>("50")
  const [recurring, setRecurring] = React.useState(false)
  const [donorName, setDonorName] = React.useState("")
  const [donorEmail, setDonorEmail] = React.useState("")
  const [paymentMethod, setPaymentMethod] = React.useState("Mobile Money")
  const { toast } = useToast()

  const handleDonate = () => {
    const numAmount = parseFloat(amount) || 0
    saveDonation({
      amount: numAmount,
      recurring,
      paymentMethod,
      donorName: donorName.trim() || "Anonymous Supporter",
      donorEmail: donorEmail.trim() || "N/A",
    })

    toast({
      title: "Thank You for Your Generosity!",
      description: `Your ${recurring ? 'monthly' : 'one-time'} donation record of $${numAmount} via ${paymentMethod} has been saved in our records hub.`,
    })

    setDonorName("")
    setDonorEmail("")
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#2D2B44]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.45]"
            style={{
              backgroundImage: `url(/images/img8.jpg)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-full">
          <KineticHeadline 
            lines={["SUPPORT OUR", "STUDENT MISSION"]} 
            className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] font-serif text-[#FFB800] max-w-full"
            staggerDelay={0.2}
          />
          <p className="mt-6 text-white/80 max-w-2xl mx-auto font-body text-base sm:text-lg px-2">
            Every gift directly funds free student counseling, school addiction prevention talks, and peer mentorship across Africa.
          </p>
          <div className="mt-8 h-1 w-24 bg-[#FFB800] mx-auto opacity-60" />
        </div>
      </section>

      {/* 2. Split Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: The Form */}
            <div className="fade-in">
              <Card className="bg-[#3E3E4E] border-none shadow-2xl rounded-sm overflow-hidden">
                <div className="p-8 md:p-12 space-y-10">
                  <div className="space-y-2">
                    <span className="text-[#FFB800] font-bold tracking-[0.3em] text-xs uppercase">Safe & Transparent</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Choose your contribution</h2>
                  </div>

                  {/* Big Amount Buttons */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {["15", "50", "100", "150", "500", "Other"].map((val) => (
                      <button
                        key={val}
                        onClick={() => val !== 'Other' ? setAmount(val) : setAmount("")}
                        className={`h-14 sm:h-20 text-lg sm:text-2xl font-black transition-all duration-300 border-2 ${
                          (amount === val || (val === 'Other' && !["15", "50", "100", "150", "500"].includes(amount)))
                            ? "bg-[#FFB800] border-[#FFB800] text-[#3E3E4E]" 
                            : "bg-transparent border-white/10 text-white hover:border-[#FFB800] hover:text-[#FFB800]"
                        } font-serif`}
                      >
                        {val === 'Other' ? 'Custom' : `$${val}`}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div className="relative group">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl text-white/40 font-black font-serif">$</span>
                      <Input
                        type="number"
                        placeholder="0.00"
                        className="h-16 sm:h-20 bg-white/5 border-2 border-white/10 text-white text-2xl sm:text-3xl font-black pl-12 focus:border-[#FFB800] transition-colors rounded-none placeholder:text-white/10"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>

                    <div className="flex items-center justify-between bg-black/20 p-4 sm:p-6 border border-white/5">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <Heart className={`h-5 w-5 sm:h-6 sm:w-6 ${recurring ? 'text-[#FFB800] fill-[#FFB800]' : 'text-white/40'}`} />
                        <div>
                          <p className="font-bold text-white uppercase tracking-wider text-xs sm:text-sm">Monthly Student Sponsor</p>
                          <p className="text-white/40 text-[10px] sm:text-xs">Sponsor ongoing student counseling sessions</p>
                        </div>
                      </div>
                      <Switch checked={recurring} onCheckedChange={setRecurring} className="data-[state=checked]:bg-[#FFB800]" />
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          placeholder="Your Name (Optional)"
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          className="h-12 bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm"
                        />
                        <Input
                          type="email"
                          placeholder="Your Email (Optional)"
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          className="h-12 bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs font-bold text-white/60 uppercase tracking-wider">Payment Method</Label>
                        <select
                          value={paymentMethod}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-full h-12 bg-white/5 border border-white/10 text-white text-sm rounded-none px-4 focus:outline-none focus:border-[#FFB800]"
                        >
                          <option value="Mobile Money" className="text-[#2D2B44]">Mobile Money (MTN / Airtel / M-Pesa)</option>
                          <option value="Credit / Debit Card" className="text-[#2D2B44]">Credit / Debit Card (Visa / Mastercard)</option>
                          <option value="Bank Transfer" className="text-[#2D2B44]">Bank Transfer</option>
                        </select>
                      </div>
                    </div>

                    <MagneticButton strength={25} className="w-full">
                      <Button 
                        className="w-full h-16 sm:h-20 text-lg sm:text-2xl font-black bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90 rounded-none shadow-xl group" 
                        onClick={handleDonate}
                      >
                        GIVE {recurring ? 'MONTHLY' : 'NOW'} — ${amount || '0'}
                        <ArrowRight className="ml-2 sm:ml-4 h-5 w-5 sm:h-8 sm:w-8 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </MagneticButton>
                  </div>

                  <div className="pt-6 flex items-center justify-center space-x-6 opacity-40 text-white text-xs font-bold uppercase tracking-widest">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-5 w-5 text-[#FFB800]" />
                      <span>Mobile Money</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-5 w-5 text-[#FFB800]" />
                      <span>Card</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column: The Impact */}
            <div className="space-y-16">
              <div className="space-y-8">
                <span className="text-[#FFB800] font-black tracking-[0.4em] text-sm uppercase block">Why Your Giving Matters</span>
                <KineticHeadline 
                  lines={["YOUR GENEROSITY", "TRANSFORMS LIVES"]} 
                  className="text-4xl md:text-6xl font-black uppercase text-[#2D2B44] font-headline"
                />
                <InkFlowText className="text-muted-foreground text-xl leading-relaxed font-body max-w-xl">
                  Every contribution allows us to reach schools with non-judgmental mental health care, addiction recovery tools, and unconditional guidance.
                </InkFlowText>
              </div>

              <div className="space-y-12">
                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#F8F8F8] p-5 rounded-sm transition-transform group-hover:scale-110 duration-500">
                    <Heart className="h-8 w-8 text-[#FFB800]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#2D2B44] uppercase tracking-wide">$15 — Free Counseling Session</h3>
                    <InkFlowText delay={1} className="text-muted-foreground font-body leading-relaxed">
                      Sponsors 1-on-1 confidential counseling and recovery materials for a student struggling with anxiety or addiction.
                    </InkFlowText>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#F8F8F8] p-5 rounded-sm transition-transform group-hover:scale-110 duration-500">
                    <Users className="h-8 w-8 text-[#FFB800]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#2D2B44] uppercase tracking-wide">$50 — School Outreach Package</h3>
                    <InkFlowText delay={1.2} className="text-muted-foreground font-body leading-relaxed">
                      Provides printed mental health toolkits and addiction prevention guidebooks for an entire high school class.
                    </InkFlowText>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#F8F8F8] p-5 rounded-sm transition-transform group-hover:scale-110 duration-500">
                    <Star className="h-8 w-8 text-[#FFB800]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#2D2B44] uppercase tracking-wide">$150 — Peer Mentor Certification</h3>
                    <InkFlowText delay={1.4} className="text-muted-foreground font-body leading-relaxed">
                      Trains 5 student ambassadors in compassionate listening and peer crisis escalation protocols on campus.
                    </InkFlowText>
                  </div>
                </div>
              </div>

              <BlurFocusText delay={1.6}>
                <div className="p-8 bg-[#F8F8F8] border-l-4 border-[#FFB800] flex items-center space-x-6">
                  <ShieldCheck className="h-10 w-10 text-[#003322] shrink-0" />
                  <p className="text-sm font-bold text-[#2D2B44] uppercase tracking-widest leading-relaxed">
                    Student Voices of Africa operates with complete financial stewardship and 100% transparency.
                  </p>
                </div>
              </BlurFocusText>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Footer CTA Section */}
      <section className="py-32 bg-[#003322] text-white text-center">
        <div className="container mx-auto px-6">
          <KineticHeadline 
            lines={["THANK YOU FOR BEING", "A VOICE OF HOPE"]} 
            className="text-4xl md:text-7xl font-black uppercase font-headline mb-16"
          />
          <MagneticButton strength={30}>
            <Button className="bg-[#FFB800] text-[#003322] hover:bg-[#FFB800]/90 font-black h-20 px-16 rounded-full text-2xl group transition-all duration-500 shadow-2xl">
              SPONSOR A STUDENT NOW <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
