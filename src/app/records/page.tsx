"use client";

import React, { useEffect, useState } from "react";
import { 
  getSVADataStore, 
  subscribeToDataStore, 
  updateCounselingStatus, 
  clearSVADataStore,
  type SVADataStore 
} from "@/lib/data-store";
import { 
  Database, 
  MessageSquare, 
  HeartHandshake, 
  Calendar, 
  Lock, 
  Mail, 
  User, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  RefreshCw,
  Download,
  Trash2,
  Tag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { KineticHeadline } from "@/components/KineticHeadline";
import { useToast } from "@/hooks/use-toast";

export default function RecordsPage() {
  const [store, setStore] = useState<SVADataStore | null>(null);
  const [activeTab, setActiveTab] = useState<"counseling" | "contacts" | "stories" | "donations" | "rsvps">("counseling");
  const { toast } = useToast();

  useEffect(() => {
    setStore(getSVADataStore());
    const unsubscribe = subscribeToDataStore(() => {
      setStore(getSVADataStore());
    });
    return () => unsubscribe();
  }, []);

  if (!store) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-6">
        <div className="flex items-center space-x-3 text-[#003322]">
          <RefreshCw className="h-6 w-6 animate-spin text-[#FFB800]" />
          <span className="font-headline font-bold text-lg">Loading Stored Data Records...</span>
        </div>
      </div>
    );
  }

  const handleStatusChange = (id: string, status: "Pending" | "In Review" | "Connected") => {
    updateCounselingStatus(id, status);
    toast({
      title: "Status Updated",
      description: `Counseling request marked as ${status}.`,
    });
  };

  const handleResetData = () => {
    if (confirm("Reset data store to default initial records?")) {
      clearSVADataStore();
      toast({
        title: "Data Reset",
        description: "Restored sample raw code records.",
      });
    }
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `sva-data-records-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    toast({
      title: "Export Complete",
      description: "Downloaded raw code JSON data store.",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24">
      {/* Header Banner */}
      <section className="bg-[#2D2B44] text-white py-16 px-6 md:px-12 border-b border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Database className="h-8 w-8 text-[#FFB800]" />
                <Badge className="bg-[#FFB800] text-[#2D2B44] font-bold text-xs uppercase tracking-widest">
                  In-Memory & Local Code Storage
                </Badge>
              </div>
              <KineticHeadline 
                lines={["SVA DATA RECORDS HUB"]} 
                className="text-3xl md:text-5xl font-black font-headline text-white uppercase tracking-tight"
              />
              <p className="text-white/70 text-sm font-body max-w-2xl">
                All user submissions (Counseling Requests, Contact Messages, Anonymous Stories, Event RSVPs, and Donations) are stored in raw code state until a database is connected.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={exportJSON}
                className="bg-[#003322] hover:bg-[#003322]/90 text-white font-bold h-12 px-6 rounded-full flex items-center space-x-2 shadow-lg"
              >
                <Download className="h-4 w-4 text-[#FFB800]" />
                <span>EXPORT DATA (JSON)</span>
              </Button>

              <Button 
                onClick={handleResetData}
                variant="outline"
                className="border-white/20 text-white hover:bg-red-500/20 hover:border-red-400 font-bold h-12 px-6 rounded-full flex items-center space-x-2"
              >
                <Trash2 className="h-4 w-4 text-red-400" />
                <span>RESET STORE</span>
              </Button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-12 pt-8 border-t border-white/10">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-xs font-bold text-[#FFB800] uppercase tracking-wider block">Counseling</span>
              <span className="text-3xl font-black font-headline text-white">{store.counselingRequests.length}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-xs font-bold text-[#FFB800] uppercase tracking-wider block">Contacts</span>
              <span className="text-3xl font-black font-headline text-white">{store.contacts.length}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-xs font-bold text-[#FFB800] uppercase tracking-wider block">Anonymous</span>
              <span className="text-3xl font-black font-headline text-white">{store.anonymousStories.length}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-xs font-bold text-[#FFB800] uppercase tracking-wider block">Donations</span>
              <span className="text-3xl font-black font-headline text-white">{store.donations.length}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-xs font-bold text-[#FFB800] uppercase tracking-wider block">Event RSVPs</span>
              <span className="text-3xl font-black font-headline text-white">{store.eventRsvps.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          {/* Tab Selection */}
          <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab("counseling")}
              className={`flex-1 min-w-[150px] py-3.5 px-5 rounded-xl font-headline text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                activeTab === "counseling" 
                  ? "bg-[#003322] text-white shadow-md" 
                  : "text-[#2D2B44]/70 hover:bg-gray-100"
              }`}
            >
              <HeartHandshake className="h-4 w-4 text-[#FFB800]" />
              <span>Counseling ({store.counselingRequests.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("contacts")}
              className={`flex-1 min-w-[150px] py-3.5 px-5 rounded-xl font-headline text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                activeTab === "contacts" 
                  ? "bg-[#003322] text-white shadow-md" 
                  : "text-[#2D2B44]/70 hover:bg-gray-100"
              }`}
            >
              <Mail className="h-4 w-4 text-[#FFB800]" />
              <span>Contacts ({store.contacts.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("stories")}
              className={`flex-1 min-w-[150px] py-3.5 px-5 rounded-xl font-headline text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                activeTab === "stories" 
                  ? "bg-[#003322] text-white shadow-md" 
                  : "text-[#2D2B44]/70 hover:bg-gray-100"
              }`}
            >
              <Lock className="h-4 w-4 text-[#FFB800]" />
              <span>Anonymous ({store.anonymousStories.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("donations")}
              className={`flex-1 min-w-[150px] py-3.5 px-5 rounded-xl font-headline text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                activeTab === "donations" 
                  ? "bg-[#003322] text-white shadow-md" 
                  : "text-[#2D2B44]/70 hover:bg-gray-100"
              }`}
            >
              <Sparkles className="h-4 w-4 text-[#FFB800]" />
              <span>Donations ({store.donations.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("rsvps")}
              className={`flex-1 min-w-[150px] py-3.5 px-5 rounded-xl font-headline text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                activeTab === "rsvps" 
                  ? "bg-[#003322] text-white shadow-md" 
                  : "text-[#2D2B44]/70 hover:bg-gray-100"
              }`}
            >
              <Calendar className="h-4 w-4 text-[#FFB800]" />
              <span>RSVPs ({store.eventRsvps.length})</span>
            </button>
          </div>

          {/* TAB 1: COUNSELING REQUESTS */}
          {activeTab === "counseling" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black font-headline text-[#2D2B44] uppercase">Counseling Session Requests</h2>
              {store.counselingRequests.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-2xl border border-gray-200 text-muted-foreground">
                  No counseling requests recorded yet.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {store.counselingRequests.map((req) => (
                    <div key={req.id} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-[#003322] text-[#FFB800] font-black flex items-center justify-center">
                            {req.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#2D2B44] font-headline">{req.name}</h3>
                            <p className="text-xs text-muted-foreground flex items-center">
                              <Phone className="h-3 w-3 mr-1 text-[#FFB800]" /> {req.contact}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Badge className={
                            req.status === "Connected" 
                              ? "bg-emerald-600 text-white" 
                              : req.status === "In Review" 
                              ? "bg-amber-500 text-white" 
                              : "bg-[#2D2B44] text-[#FFB800]"
                          }>
                            {req.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground font-mono">
                            {new Date(req.createdAt).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-body">
                        <div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Topic</span>
                          <span className="font-bold text-[#2D2B44] uppercase">{req.topic}</span>
                        </div>
                        <div className="md:col-span-2">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Notes</span>
                          <p className="text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100 italic">
                            {req.note || "No additional note provided."}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-end space-x-2">
                        <span className="text-xs font-bold text-gray-400 mr-2 uppercase">Update Status:</span>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleStatusChange(req.id, "Pending")}
                          className="text-xs font-bold"
                        >
                          Pending
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleStatusChange(req.id, "In Review")}
                          className="text-xs font-bold text-amber-700 border-amber-200 bg-amber-50"
                        >
                          In Review
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => handleStatusChange(req.id, "Connected")}
                          className="text-xs font-bold bg-[#003322] text-white"
                        >
                          Connected
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CONTACT MESSAGES */}
          {activeTab === "contacts" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black font-headline text-[#2D2B44] uppercase">Contact & Inquiry Messages</h2>
              {store.contacts.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-2xl border border-gray-200 text-muted-foreground">
                  No contact messages recorded yet.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {store.contacts.map((c) => (
                    <div key={c.id} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
                        <div>
                          <h3 className="text-lg font-bold text-[#2D2B44] font-headline">{c.firstName} {c.lastName}</h3>
                          <p className="text-xs text-muted-foreground">{c.email}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-[#FFB800] text-[#2D2B44] font-bold">
                            {c.reason}
                          </Badge>
                          <span className="text-xs text-muted-foreground font-mono">
                            {new Date(c.createdAt).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="text-sm font-body">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Message</span>
                        <p className="text-gray-800 bg-[#F8F9FA] p-4 rounded-xl border border-gray-100 whitespace-pre-wrap">
                          {c.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ANONYMOUS STORIES */}
          {activeTab === "stories" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black font-headline text-[#2D2B44] uppercase">Anonymous Stories & Unburdened Messages</h2>
              {store.anonymousStories.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-2xl border border-gray-200 text-muted-foreground">
                  No anonymous stories submitted yet.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {store.anonymousStories.map((s) => (
                    <div key={s.id} className="bg-[#3E3E4E] text-white p-8 rounded-2xl shadow-sm space-y-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="flex items-center space-x-2">
                          <Lock className="h-5 w-5 text-[#FFB800]" />
                          <span className="font-bold text-[#FFB800] uppercase font-headline text-sm">
                            Anonymous Submission • {s.category}
                          </span>
                        </div>
                        <span className="text-xs text-white/40 font-mono">
                          {new Date(s.createdAt).toLocaleString()}
                        </span>
                      </div>

                      <p className="text-white/90 font-body text-base leading-relaxed italic bg-black/20 p-6 rounded-xl border border-white/5">
                        "{s.message}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: DONATION RECORDS */}
          {activeTab === "donations" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black font-headline text-[#2D2B44] uppercase">Donation & Sponsorship Logs</h2>
              {store.donations.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-2xl border border-gray-200 text-muted-foreground">
                  No donation records yet.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {store.donations.map((d) => (
                    <div key={d.id} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                        <div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Amount</span>
                          <span className="text-3xl font-black text-[#003322] font-headline">${d.amount}</span>
                        </div>
                        <Badge className={d.recurring ? "bg-[#FFB800] text-[#2D2B44] font-bold" : "bg-gray-100 text-gray-700"}>
                          {d.recurring ? "Monthly Sponsor" : "One-Time"}
                        </Badge>
                      </div>

                      <div className="space-y-2 text-sm font-body">
                        <p className="text-gray-700">
                          <strong>Donor:</strong> {d.donorName || "Anonymous Supporter"} ({d.donorEmail || "No email"})
                        </p>
                        <p className="text-gray-700">
                          <strong>Method:</strong> {d.paymentMethod}
                        </p>
                        <p className="text-xs text-gray-400 font-mono pt-2">
                          Date: {new Date(d.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: EVENT RSVPs */}
          {activeTab === "rsvps" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black font-headline text-[#2D2B44] uppercase">Event RSVPs & Attendees</h2>
              {store.eventRsvps.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-2xl border border-gray-200 text-muted-foreground">
                  No event RSVPs submitted yet.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {store.eventRsvps.map((r) => (
                    <div key={r.id} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                      <div className="border-b border-gray-100 pb-3">
                        <Badge className="bg-[#003322] text-[#FFB800] mb-2 font-bold">
                          {r.eventTitle}
                        </Badge>
                        <h3 className="text-xl font-bold text-[#2D2B44] font-headline">{r.fullName}</h3>
                      </div>

                      <div className="space-y-1.5 text-sm font-body text-gray-700">
                        <p><strong>Email:</strong> {r.email}</p>
                        <p><strong>Phone:</strong> {r.phone}</p>
                        <p><strong>Seats / Attendees:</strong> {r.attendeesCount}</p>
                        <p className="text-xs text-gray-400 font-mono pt-2">
                          Registered: {new Date(r.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
