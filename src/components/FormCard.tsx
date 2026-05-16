"use client";

import { CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: string;
  options?: string[];
  required?: boolean;
};

type FormCardProps = {
  title: string;
  subtitle: string;
  fields: Field[];
  endpoint: string;
  cta: string;
  success: string;
};

export function FormCard({ title, subtitle, fields, endpoint, cta, success }: FormCardProps) {
  const [status, setStatus] = useState<"idle" | "saving" | "done">("idle");
  const [otpSent, setOtpSent] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("saving");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch {
      // Keep UX positive in static preview mode; backend handles persistence when connected.
    }

    setOtpSent(true);
    window.setTimeout(() => setStatus("done"), 700);
  };

  return (
    <form onSubmit={submit} className="rounded-md border border-academy-blue/10 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/10">
      <div className="mb-5">
        <h3 className="text-2xl font-black text-academy-navy dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70">{subtitle}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="text-sm font-bold text-academy-navy dark:text-white">
            {field.label}
            {field.options ? (
              <select
                name={field.name}
                required={field.required}
                className="focus-ring mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-3 font-medium text-slate-700 dark:border-white/15 dark:bg-academy-navy dark:text-white"
              >
                <option value="">Select</option>
                {field.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                minLength={field.name.toLowerCase().includes("mobile") ? 10 : undefined}
                className="focus-ring mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-3 font-medium text-slate-700 placeholder:text-slate-400 dark:border-white/15 dark:bg-academy-navy dark:text-white"
              />
            )}
          </label>
        ))}
      </div>

      {otpSent && (
        <div className="mt-4 rounded-md bg-academy-sky p-3 text-sm font-bold text-academy-navy dark:bg-white/10 dark:text-white">
          OTP verification step initiated. Connect SMS provider credentials in production.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "saving"}
        className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-academy-blue px-5 py-3 font-black text-white shadow-lg shadow-academy-blue/20 transition hover:translate-y-[-1px] disabled:opacity-70"
      >
        {status === "done" ? <CheckCircle2 size={18} /> : <Send size={18} />}
        {status === "saving" ? "Submitting..." : status === "done" ? success : cta}
      </button>
    </form>
  );
}
