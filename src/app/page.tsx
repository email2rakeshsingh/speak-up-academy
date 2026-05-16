import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Check,
  Clock3,
  Download,
  Headphones,
  LockKeyhole,
  Mail,
  Mic2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  UserCheck,
  UsersRound,
  Video
} from "lucide-react";
import { Header } from "@/components/Header";
import { FormCard } from "@/components/FormCard";
import { PaymentCard } from "@/components/PaymentCard";
import { academy, whatsappMessage } from "@/lib/constants";
import { audiences, benefits, courses, faqs, sessionFeatures, stats, testimonials } from "@/lib/data";

const enrollFields = [
  { name: "fullName", label: "Full Name", required: true },
  { name: "mobile", label: "Mobile Number", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "profession", label: "Profession", required: true },
  { name: "companyName", label: "Company Name" },
  { name: "course", label: "Course Selection", required: true, options: ["3 Months Plan", "6 Months Plan"] },
  { name: "preferredTiming", label: "Preferred Timing", required: true, options: ["Morning", "Afternoon", "Evening", "Weekend"] },
  { name: "city", label: "City", required: true }
];

const demoFields = [
  { name: "name", label: "Name", required: true },
  { name: "mobile", label: "Mobile", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "preferredTiming", label: "Preferred Timing", required: true, options: ["Morning", "Afternoon", "Evening", "Weekend"] }
];

const whatsappUrl = `https://wa.me/${academy.whatsapp}?text=${whatsappMessage}`;

const dashboardCards = [
  { label: "Student login/signup", icon: LockKeyhole },
  { label: "View enrolled students", icon: UsersRound },
  { label: "Download student data", icon: Download },
  { label: "Manage payments", icon: BarChart3 },
  { label: "Send notifications", icon: Mail },
  { label: "Track demo bookings", icon: UserCheck }
];

const galleryItems = [
  { label: "Zoom session screenshots", image: "/academy-hero.png" },
  { label: "Public speaking sessions", image: "/success-meeting.png" },
  { label: "Storytelling and interview practice", image: "/coaching-session.png" },
  { label: "Group discussion classes", image: "/gallery-3.svg" }
];

const scheduleHours = [
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM"
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white dark:bg-[#06172c]">
      <Header />

      <section id="home" className="hero-grid relative min-h-screen pt-24">
        <Image
          src="/academy-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.18] lg:hidden"
        />
        <div className="absolute inset-0 bg-white/78 lg:hidden dark:bg-academy-navy/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,181,49,0.24),transparent_32%),radial-gradient(circle_at_20%_20%,rgba(15,94,197,0.18),transparent_34%)]" />
        <div className="section-shell relative grid min-h-[calc(100vh-96px)] items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-academy-blue/15 bg-white px-4 py-2 text-sm font-black text-academy-blue shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-academy-gold">
              <ShieldCheck size={18} />
              300+ working professionals learning with confidence
            </div>
            <h1 className="max-w-4xl font-serif text-4xl font-black leading-[1.02] text-academy-navy sm:text-6xl lg:text-7xl dark:text-white">
              Speak Confidently. Grow Professionally.
            </h1>
            <p className="mt-6 max-w-2xl pr-16 text-lg leading-8 text-slate-600 sm:pr-0 sm:text-xl dark:text-white/75">
              Join 300+ working professionals improving communication confidence through live Zoom practice sessions, breakout rooms, storytelling, and public speaking activities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#enroll" className="focus-ring inline-flex items-center justify-center rounded-full bg-academy-gold px-7 py-4 font-black text-academy-navy shadow-lg shadow-academy-gold/25">
                Join Now
              </Link>
              <Link href="#demo" className="focus-ring inline-flex items-center justify-center rounded-full bg-academy-blue px-7 py-4 font-black text-white shadow-lg shadow-academy-blue/25">
                Book Free Demo
              </Link>
              <Link href={whatsappUrl} target="_blank" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-academy-blue/20 bg-white px-7 py-4 font-black text-academy-blue dark:border-white/20 dark:bg-white/10 dark:text-white">
                <MessageCircle size={19} />
                WhatsApp Us
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-md border border-academy-blue/10 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/10">
                  <p className="animate-countPulse text-2xl font-black text-academy-blue dark:text-academy-gold">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold leading-5 text-slate-600 dark:text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -left-4 top-8 z-10 hidden rounded-md bg-white p-4 shadow-soft lg:block dark:bg-academy-navy">
              <p className="text-xs font-black uppercase text-academy-blue dark:text-academy-gold">Live class focus</p>
              <p className="mt-1 text-sm font-bold text-academy-navy dark:text-white">Zoom. Breakout rooms. Public speaking.</p>
            </div>
            <div className="relative overflow-hidden rounded-md border border-white/70 bg-white p-2 shadow-soft dark:border-white/10 dark:bg-white/10">
              <Image src="/academy-hero.png" alt="Professionals attending live online English communication class" width={1536} height={864} priority className="h-auto w-full rounded-md object-cover" />
              <div className="absolute inset-x-2 bottom-2 grid gap-2 rounded-md bg-academy-navy/84 p-4 text-white backdrop-blur-md sm:grid-cols-3">
                <div>
                  <p className="text-2xl font-black text-academy-gold">300+</p>
                  <p className="text-xs font-bold text-white/75">Professionals</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-academy-gold">Live</p>
                  <p className="text-xs font-bold text-white/75">Online classes</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-academy-gold">1:1</p>
                  <p className="text-xs font-bold text-white/75">Any session access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20 dark:bg-[#06172c]">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-academy-blue dark:text-academy-gold">About us</p>
            <h2 className="mt-3 text-4xl font-black text-academy-navy sm:text-5xl dark:text-white">Flexible practice for busy professionals.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-white/70">
              Speak-Up English Online Academy helps working professionals, software employees, freshers, and job seekers improve spoken English, communication confidence, public speaking, and professional personality through live practice.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-white/70">
              Classes run from morning 7:00 AM to evening 9:00 PM. A new class starts every hour, and students can join any session based on their availability.
            </p>
            <p className="mt-5 rounded-md border-l-4 border-academy-gold bg-academy-sky p-5 text-lg font-bold leading-8 text-academy-navy dark:bg-white/10 dark:text-white">
              "Many talented professionals struggle to express themselves confidently in meetings and interviews. Speak-Up English Online Academy helps students remove fear and speak confidently in professional life."
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-md border border-academy-blue/10 p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
                <item.icon className="text-academy-blue dark:text-academy-gold" />
                <h3 className="mt-4 text-xl font-black text-academy-navy dark:text-white">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-academy-navy py-16 text-white">
        <div className="section-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <div key={audience.label} className="rounded-md border border-white/10 bg-white/10 p-5">
                <audience.icon className="text-academy-gold" />
                <p className="mt-4 text-lg font-black">{audience.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-[#06172c]">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-md border border-academy-blue/10 bg-white p-2 shadow-soft dark:border-white/10 dark:bg-white/10">
            <Image src="/success-meeting.png" alt="Software professional speaking confidently in team discussion" width={1536} height={864} className="h-auto w-full rounded-md object-cover" />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-academy-blue dark:text-academy-gold">Live practice method</p>
            <h2 className="mt-3 text-4xl font-black text-academy-navy sm:text-5xl dark:text-white">Practice with colleagues, coaches, and real people.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-white/70">
              Every session is built around speaking. Students join Zoom classes, enter breakout rooms, practice with other learners, tell stories, speak on topics, and build confidence through repetition.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-md bg-academy-sky p-4 font-black text-academy-navy dark:bg-white/10 dark:text-white">
                <Video className="mb-3 text-academy-blue dark:text-academy-gold" />
                Zoom classes
              </div>
              <div className="rounded-md bg-academy-sky p-4 font-black text-academy-navy dark:bg-white/10 dark:text-white">
                <UsersRound className="mb-3 text-academy-blue dark:text-academy-gold" />
                Breakout rooms
              </div>
              <div className="rounded-md bg-academy-sky p-4 font-black text-academy-navy dark:bg-white/10 dark:text-white">
                <Mic2 className="mb-3 text-academy-blue dark:text-academy-gold" />
                Public speaking
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-academy-sky py-20 dark:bg-[#09213e]">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase text-academy-blue dark:text-academy-gold">Course plans</p>
            <h2 className="mt-3 text-4xl font-black text-academy-navy sm:text-5xl dark:text-white">Simple pricing for serious career growth.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {courses.map((course) => (
              <article key={course.name} className="relative rounded-md border border-academy-blue/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/10">
                {course.popular && (
                  <span className="absolute right-5 top-5 rounded-full bg-academy-gold px-3 py-1 text-xs font-black uppercase text-academy-navy">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-black text-academy-navy dark:text-white">{course.name}</h3>
                <p className="mt-2 text-slate-600 dark:text-white/70">{course.description}</p>
                <p className="mt-6 text-5xl font-black text-academy-blue dark:text-academy-gold">{course.price}</p>
                <ul className="mt-6 grid gap-3">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm font-bold text-slate-700 dark:text-white/80">
                      <Check className="mt-0.5 shrink-0 text-academy-blue dark:text-academy-gold" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <Link href="#enroll" className="focus-ring rounded-full bg-academy-blue px-5 py-3 text-center font-black text-white">
                    Enroll Now
                  </Link>
                  <Link href="#payment" className="focus-ring rounded-full border border-academy-gold bg-academy-gold/10 px-5 py-3 text-center font-black text-academy-navy dark:text-white">
                    Pay Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="bg-white py-20 dark:bg-[#06172c]">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase text-academy-blue dark:text-academy-gold">Daily session schedule</p>
              <h2 className="mt-3 text-4xl font-black text-academy-navy sm:text-5xl dark:text-white">Morning 7:00 AM to evening 9:00 PM.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-white/70">
                New batch every hour. Students can join any session anytime, making communication practice realistic for working professionals with changing office schedules.
              </p>
              <Link href="#demo" className="focus-ring mt-7 inline-flex rounded-full bg-academy-blue px-7 py-4 font-black text-white">
                Book a Flexible Demo
              </Link>
            </div>
            <div>
              <div className="grid gap-2 sm:grid-cols-5">
                {scheduleHours.map((hour) => (
                  <div key={hour} className="rounded-md border border-academy-blue/10 bg-academy-sky p-4 text-center shadow-sm dark:border-white/10 dark:bg-white/10">
                    <Clock3 className="mx-auto mb-2 text-academy-blue dark:text-academy-gold" size={20} />
                    <p className="font-black text-academy-navy dark:text-white">{hour}</p>
                    <p className="mt-1 text-xs font-bold text-slate-600 dark:text-white/70">Live batch</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sessionFeatures.map((item) => (
                  <div key={item.title} className="rounded-md border border-academy-blue/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
                    <item.icon className="text-academy-blue dark:text-academy-gold" />
                    <h3 className="mt-4 font-black text-academy-navy dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-[#06172c]">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-academy-blue dark:text-academy-gold">Motivation</p>
            <h2 className="mt-3 text-4xl font-black text-academy-navy sm:text-5xl dark:text-white">Your Technical Skills Need a Powerful Voice</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-white/70">
              Many software professionals have excellent knowledge but hesitate during communication. Our academy helps students speak naturally, confidently, and professionally through daily live practice.
            </p>
            <Link href="#enroll" className="focus-ring mt-7 inline-flex rounded-full bg-academy-gold px-7 py-4 font-black text-academy-navy">
              Start Your Transformation Today
            </Link>
          </div>
          <div className="overflow-hidden rounded-md border border-academy-blue/10 bg-white p-2 shadow-soft dark:border-white/10 dark:bg-white/10">
            <Image src="/coaching-session.png" alt="English interview coaching session with online mentor" width={1536} height={864} className="h-auto w-full rounded-md object-cover" />
          </div>
        </div>
      </section>

      <section id="enroll" className="bg-academy-sky py-20 dark:bg-[#09213e]">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <FormCard
            title="Student Enrollment"
            subtitle="Register for live online classes. Data is validated and sent to the backend API for database storage, email confirmation, and admin notification."
            fields={enrollFields}
            endpoint="/api/students"
            cta="Submit Enrollment"
            success="Enrollment Submitted"
          />
          <div id="payment">
            <PaymentCard />
          </div>
        </div>
      </section>

      <section id="demo" className="bg-white py-20 dark:bg-[#06172c]">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-academy-blue dark:text-academy-gold">Free demo class</p>
            <h2 className="mt-3 text-4xl font-black text-academy-navy sm:text-5xl dark:text-white">Feel the class before you join.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-white/70">
              Book a free demo and receive WhatsApp and email confirmation after submission. Your lead is saved for admin follow-up.
            </p>
          </div>
          <FormCard
            title="Book Free Demo"
            subtitle="Choose a timing that works for your schedule."
            fields={demoFields}
            endpoint="/api/demo-bookings"
            cta="Book Demo Class"
            success="Demo Booked"
          />
        </div>
      </section>

      <section className="bg-academy-navy py-16 text-white">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-academy-gold">Make connection</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Talk to the academy before you decide.</h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Ask about timing, batch style, fees, demo class, or payment. The fastest way to connect is WhatsApp, and the enrollment form keeps your details ready for follow-up.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link href={whatsappUrl} target="_blank" className="rounded-md border border-white/10 bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15">
              <MessageCircle className="text-academy-gold" />
              <p className="mt-4 text-xl font-black">WhatsApp Now</p>
              <p className="mt-2 text-sm leading-6 text-white/70">Quick inquiry and class details.</p>
            </Link>
            <Link href="#demo" className="rounded-md border border-white/10 bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15">
              <UserCheck className="text-academy-gold" />
              <p className="mt-4 text-xl font-black">Free Demo</p>
              <p className="mt-2 text-sm leading-6 text-white/70">Experience the class first.</p>
            </Link>
            <Link href="#payment" className="rounded-md border border-white/10 bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15">
              <ShieldCheck className="text-academy-gold" />
              <p className="mt-4 text-xl font-black">Pay Securely</p>
              <p className="mt-2 text-sm leading-6 text-white/70">UPI and Razorpay-ready flow.</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-academy-navy py-20 text-white">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-academy-gold">Student reviews</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Confidence students can feel in real life.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-md border border-white/10 bg-white/10 p-6">
                <div className="mb-4 flex gap-1 text-academy-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl font-black">"{item.quote}"</p>
                <p className="mt-3 leading-7 text-white/70">{item.detail}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-academy-gold font-black text-academy-navy">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-black">{item.name}</p>
                    <p className="text-sm text-white/60">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-20 dark:bg-[#06172c]">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase text-academy-blue dark:text-academy-gold">Gallery</p>
            <h2 className="mt-3 text-4xl font-black text-academy-navy sm:text-5xl dark:text-white">A professional learning atmosphere.</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <div key={item.label} className="overflow-hidden rounded-md border border-academy-blue/10 bg-academy-sky shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/10">
                <Image src={item.image} alt={item.label} width={640} height={430} className="aspect-[4/3] w-full object-cover" />
                <p className="p-4 font-black text-academy-navy dark:text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="admin" className="bg-academy-sky py-20 dark:bg-[#09213e]">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase text-academy-blue dark:text-academy-gold">Admin and authentication</p>
            <h2 className="mt-3 text-4xl font-black text-academy-navy dark:text-white">Manage enrollments with clarity.</h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-white/70">
              The backend scaffold supports student signup/login, admin login, enrollments, demo bookings, payment records, notifications, and export-ready data.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {dashboardCards.map(({ label, icon: Icon }) => (
              <div key={label} className="rounded-md border border-academy-blue/10 bg-white p-5 font-black text-academy-navy shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
                <Icon className="mb-3 text-academy-blue dark:text-academy-gold" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-[#06172c]">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase text-academy-blue dark:text-academy-gold">FAQ</p>
            <h2 className="mt-3 text-4xl font-black text-academy-navy dark:text-white">Common questions</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-md border border-academy-blue/10 bg-white p-5 shadow-sm open:border-academy-gold dark:border-white/10 dark:bg-white/10">
                <summary className="cursor-pointer text-lg font-black text-academy-navy dark:text-white">{faq.question}</summary>
                <p className="mt-3 leading-7 text-slate-600 dark:text-white/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-academy-navy py-20 text-white">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase text-academy-gold">Contact</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Speak to us today.</h2>
            <div className="mt-7 grid gap-4">
              <a href={`tel:${academy.phone}`} className="flex items-center gap-3 rounded-md bg-white/10 p-4 font-bold">
                <Phone className="text-academy-gold" /> {academy.phone}
              </a>
              <a href={whatsappUrl} target="_blank" className="flex items-center gap-3 rounded-md bg-white/10 p-4 font-bold">
                <MessageCircle className="text-academy-gold" /> WhatsApp inquiry
              </a>
              <a href={`mailto:${academy.email}`} className="flex items-center gap-3 rounded-md bg-white/10 p-4 font-bold">
                <Mail className="text-academy-gold" /> {academy.email}
              </a>
              <a href={academy.instagram} target="_blank" className="flex items-center gap-3 rounded-md bg-white/10 p-4 font-bold">
                <Headphones className="text-academy-gold" /> Instagram
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-white/10 bg-white/10 p-3">
            <iframe
              title="Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(academy.mapQuery)}&output=embed`}
              className="h-[420px] w-full rounded-md border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#04162a] py-10 text-white">
        <div className="section-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Image src="/logo.svg" alt="Speak-Up English Online Academy logo" width={70} height={70} />
            <p className="mt-4 max-w-md leading-7 text-white/70">
              Premium online spoken English and communication academy for professionals, IT employees, freshers, and job seekers.
            </p>
          </div>
          <div>
            <h3 className="font-black">Quick links</h3>
            <div className="mt-4 grid gap-2 text-white/70">
              <Link href="#about">About</Link>
              <Link href="#courses">Courses</Link>
              <Link href="#demo">Book Demo</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="font-black">Courses</h3>
            <div className="mt-4 grid gap-2 text-white/70">
              <span>3 Months Plan</span>
              <span>6 Months Plan</span>
              <span>Professional English</span>
              <span>Interview Communication</span>
            </div>
          </div>
        </div>
        <div className="section-shell mt-8 border-t border-white/10 pt-6 text-sm text-white/60">
          &copy; 2026 Speak-Up English Online Academy. All Rights Reserved.
        </div>
      </footer>

      <Link
        href={whatsappUrl}
        target="_blank"
        aria-label="Open WhatsApp chat"
        className="focus-ring fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
      >
        <MessageCircle />
      </Link>
      <Link
        href="#enroll"
        className="focus-ring fixed bottom-5 left-5 z-50 hidden rounded-full bg-academy-gold px-5 py-3 text-sm font-black text-academy-navy shadow-2xl sm:inline-flex"
      >
        Sticky Enroll
      </Link>
    </main>
  );
}
