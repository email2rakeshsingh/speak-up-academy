import {
  BriefcaseBusiness,
  CalendarCheck,
  Clock3,
  GraduationCap,
  MessageCircle,
  Mic2,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Video
} from "lucide-react";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#schedule", label: "Schedule" },
  { href: "#enroll", label: "Enroll" },
  { href: "#demo", label: "Demo" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" }
];

export const courses = [
  {
    name: "3 Months Plan",
    price: "\u20b91500",
    description: "Strong spoken English foundation with daily Zoom practice.",
    features: [
      "Spoken English",
      "Daily communication practice",
      "Breakout room practice",
      "Vocabulary improvement",
      "Zoom sessions",
      "Confidence building"
    ]
  },
  {
    name: "6 Months Plan",
    price: "\u20b92500",
    description: "Advanced plan for public speaking and professional personality.",
    popular: true,
    features: [
      "Everything in 3-month plan",
      "Public speaking",
      "Storytelling practice",
      "Personality development",
      "Group discussions",
      "Professional communication"
    ]
  }
];

export const stats = [
  { value: "300+", label: "Active working professionals" },
  { value: "7 AM", label: "Classes start every morning" },
  { value: "9 PM", label: "Sessions run till evening" },
  { value: "Hourly", label: "New class every hour" }
];

export const audiences = [
  { icon: BriefcaseBusiness, label: "Working professionals" },
  { icon: GraduationCap, label: "Freshers and job seekers" },
  { icon: UsersRound, label: "Software and IT employees" },
  { icon: MessageCircle, label: "People with English speaking fear" }
];

export const benefits = [
  {
    icon: ShieldCheck,
    title: "Friendly Environment",
    text: "Students practice without judgement, pressure, or fear."
  },
  {
    icon: Clock3,
    title: "Hourly Flexibility",
    text: "Join any live session from 7 AM to 9 PM based on your availability."
  },
  {
    icon: Video,
    title: "Zoom Breakout Practice",
    text: "Speak in small rooms, team discussions, and guided activities."
  },
  {
    icon: Mic2,
    title: "Public Speaking Growth",
    text: "Storytelling, presentations, interviews, and real-life conversations."
  }
];

export const sessionFeatures = [
  { icon: CalendarCheck, title: "7:00 AM to 9:00 PM", text: "Live communication sessions all day." },
  { icon: Clock3, title: "New Batch Every Hour", text: "No waiting for fixed batches." },
  { icon: Video, title: "Zoom Live Interaction", text: "Practice with coaches and students." },
  { icon: UsersRound, title: "Breakout Rooms", text: "Small-group speaking practice." },
  { icon: Mic2, title: "Public Speaking", text: "Storytelling and confidence activities." },
  { icon: Sparkles, title: "Daily Activities", text: "Real-life English speaking tasks." }
];

export const testimonials = [
  {
    name: "Ananya S.",
    role: "Software Engineer",
    quote: "Now I speak confidently in office meetings.",
    detail: "Hourly Zoom practice helped me share project updates without hesitation."
  },
  {
    name: "Rahul M.",
    role: "Job Seeker",
    quote: "My communication improved greatly.",
    detail: "Storytelling and interview activities made my answers clearer and more natural."
  },
  {
    name: "Priya K.",
    role: "IT Professional",
    quote: "Breakout room practice helped me remove speaking fear.",
    detail: "Small-group practice made me comfortable speaking with colleagues and new people."
  }
];

export const faqs = [
  {
    question: "Are classes suitable for software employees?",
    answer: "Yes. Lessons focus on meetings, interviews, public speaking, team discussions, storytelling, and workplace communication."
  },
  {
    question: "Can I attend classes at different timings?",
    answer: "Yes. Live sessions run from 7:00 AM to 9:00 PM, and a new class starts every hour so working professionals can join flexibly."
  },
  {
    question: "How do I pay?",
    answer: "Students can pay through UPI using the payment section or through Razorpay once payment keys are connected."
  },
  {
    question: "Is the demo class free?",
    answer: "Yes. You can book a free demo class and choose a preferred timing."
  }
];
