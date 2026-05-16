"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { academy, whatsappMessage } from "@/lib/constants";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${academy.whatsapp}?text=${whatsappMessage}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-academy-blue/10 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-academy-navy/90">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Speak-Up English Online Academy logo" width={58} height={58} priority />
          <div className="leading-tight">
            <p className="text-sm font-black uppercase tracking-wide text-academy-navy dark:text-white">
              Speak-Up English
            </p>
            <p className="text-xs font-semibold text-academy-blue dark:text-academy-gold">Online Academy</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-academy-ink/80 lg:flex dark:text-white/80">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-academy-blue dark:hover:text-academy-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="#enroll"
            className="focus-ring rounded-full bg-academy-gold px-5 py-3 text-sm font-black text-academy-navy shadow-lg shadow-academy-gold/20 transition hover:translate-y-[-1px]"
          >
            Enroll Now
          </Link>
          <Link
            href={whatsappUrl}
            target="_blank"
            className="focus-ring rounded-full bg-academy-blue px-5 py-3 text-sm font-black text-white shadow-lg shadow-academy-blue/20 transition hover:translate-y-[-1px]"
          >
            WhatsApp
          </Link>
        </div>

        <button
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
          className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-academy-blue/20 lg:hidden dark:border-white/20"
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-academy-navy/60 backdrop-blur-sm lg:hidden">
          <div className="ml-auto flex min-h-screen w-[84%] max-w-sm flex-col bg-white p-5 shadow-2xl dark:bg-academy-navy">
            <div className="mb-8 flex items-center justify-between">
              <Image src="/logo.svg" alt="Speak-Up English Online Academy logo" width={56} height={56} />
              <button
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-academy-blue/20 dark:border-white/20"
              >
                <X />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 font-bold text-academy-navy transition hover:bg-academy-sky dark:text-white dark:hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex items-center gap-3 pt-8">
              <ThemeToggle />
              <Link
                href={whatsappUrl}
                target="_blank"
                className="focus-ring flex-1 rounded-full bg-academy-blue px-4 py-3 text-center text-sm font-black text-white"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
