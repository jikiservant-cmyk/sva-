"use client";

// Raw Code Data Store for SVA App
// Persists all user data in memory + localStorage until a database is connected.

export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  reason: string;
  message: string;
  createdAt: string;
}

export interface CounselingRequest {
  id: string;
  name: string;
  contact: string;
  topic: string;
  note?: string;
  status: "Pending" | "In Review" | "Connected";
  createdAt: string;
}

export interface AnonymousStory {
  id: string;
  category: string;
  message: string;
  createdAt: string;
}

export interface DonationRecord {
  id: string;
  amount: number;
  recurring: boolean;
  paymentMethod: string;
  donorName?: string;
  donorEmail?: string;
  createdAt: string;
}

export interface EventRsvp {
  id: string;
  eventTitle: string;
  fullName: string;
  email: string;
  phone: string;
  attendeesCount: number;
  createdAt: string;
}

export interface SVADataStore {
  contacts: ContactMessage[];
  counselingRequests: CounselingRequest[];
  anonymousStories: AnonymousStory[];
  donations: DonationRecord[];
  eventRsvps: EventRsvp[];
}

const STORAGE_KEY = "sva_raw_code_datastore_v1";

// Initial seed data in code if empty
const initialData: SVADataStore = {
  contacts: [
    {
      id: "cnt_101",
      firstName: "David",
      lastName: "Kato",
      email: "david.kato@student.ac.ug",
      reason: "Volunteer / Mentor",
      message: "I am a 3rd year psychology student at Makerere interested in volunteering for campus peer mentorship.",
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
  ],
  counselingRequests: [
    {
      id: "cns_101",
      name: "Grace M.",
      contact: "+256 771 234 567",
      topic: "depression",
      note: "Having panic attacks during exam prep. Need someone to talk to.",
      status: "Pending",
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    },
    {
      id: "cns_102",
      name: "Anonymous Alex",
      contact: "alex@campus.edu",
      topic: "addiction",
      note: "Looking for recovery tools and peer accountability group.",
      status: "In Review",
      createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    },
  ],
  anonymousStories: [
    {
      id: "anon_101",
      category: "addiction",
      message: "I struggled alone with porn addiction for 4 years thinking nobody understood. Seeing SVA talk about it freely gave me courage to get help.",
      createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    },
  ],
  donations: [
    {
      id: "don_101",
      amount: 50,
      recurring: true,
      paymentMethod: "Mobile Money",
      donorName: "Sarah N.",
      donorEmail: "sarah.n@gmail.com",
      createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    },
  ],
  eventRsvps: [
    {
      id: "rsvp_101",
      eventTitle: "National Youth Hope Summit 2026",
      fullName: "Emmanuel Ochieng",
      email: "emmanuel.o@gmail.com",
      phone: "+256 701 999 888",
      attendeesCount: 2,
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    },
  ],
};

let listeners: Array<() => void> = [];

export function getSVADataStore(): SVADataStore {
  if (typeof window === "undefined") return initialData;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
      return initialData;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading SVA data store", err);
    return initialData;
  }
}

function saveStore(data: SVADataStore) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    listeners.forEach((cb) => cb());
  } catch (err) {
    console.error("Error saving SVA data store", err);
  }
}

export function subscribeToDataStore(callback: () => void) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}

export function saveContactMessage(msg: Omit<ContactMessage, "id" | "createdAt">): ContactMessage {
  const store = getSVADataStore();
  const newMsg: ContactMessage = {
    ...msg,
    id: "cnt_" + Date.now(),
    createdAt: new Date().toISOString(),
  };
  store.contacts.unshift(newMsg);
  saveStore(store);
  return newMsg;
}

export function saveCounselingRequest(req: Omit<CounselingRequest, "id" | "createdAt" | "status">): CounselingRequest {
  const store = getSVADataStore();
  const newReq: CounselingRequest = {
    ...req,
    id: "cns_" + Date.now(),
    status: "Pending",
    createdAt: new Date().toISOString(),
  };
  store.counselingRequests.unshift(newReq);
  saveStore(store);
  return newReq;
}

export function saveAnonymousStory(story: Omit<AnonymousStory, "id" | "createdAt">): AnonymousStory {
  const store = getSVADataStore();
  const newStory: AnonymousStory = {
    ...story,
    id: "anon_" + Date.now(),
    createdAt: new Date().toISOString(),
  };
  store.anonymousStories.unshift(newStory);
  saveStore(store);
  return newStory;
}

export function saveDonation(don: Omit<DonationRecord, "id" | "createdAt">): DonationRecord {
  const store = getSVADataStore();
  const newDon: DonationRecord = {
    ...don,
    id: "don_" + Date.now(),
    createdAt: new Date().toISOString(),
  };
  store.donations.unshift(newDon);
  saveStore(store);
  return newDon;
}

export function saveEventRsvp(rsvp: Omit<EventRsvp, "id" | "createdAt">): EventRsvp {
  const store = getSVADataStore();
  const newRsvp: EventRsvp = {
    ...rsvp,
    id: "rsvp_" + Date.now(),
    createdAt: new Date().toISOString(),
  };
  store.eventRsvps.unshift(newRsvp);
  saveStore(store);
  return newRsvp;
}

export function updateCounselingStatus(id: string, status: "Pending" | "In Review" | "Connected") {
  const store = getSVADataStore();
  const found = store.counselingRequests.find((r) => r.id === id);
  if (found) {
    found.status = status;
    saveStore(store);
  }
}

export function clearSVADataStore() {
  saveStore(initialData);
}
