import Image from "next/image";
import { CreditCard, IndianRupee, ReceiptText } from "lucide-react";
import { academy } from "@/lib/constants";

export function PaymentCard() {
  return (
    <div className="rounded-md border border-academy-gold/30 bg-white p-5 shadow-soft dark:border-academy-gold/30 dark:bg-white/10">
      <div className="mb-5 flex items-center gap-3">
        <span className="inline-flex size-11 items-center justify-center rounded-full bg-academy-gold text-academy-navy">
          <IndianRupee />
        </span>
        <div>
          <h3 className="text-xl font-black text-academy-navy dark:text-white">Secure Payment</h3>
          <p className="text-sm text-slate-600 dark:text-white/70">UPI now, Razorpay ready for production keys.</p>
        </div>
      </div>

      <div className="rounded-md bg-academy-sky p-4 dark:bg-academy-navy">
        <Image src="/upi-payment.svg" alt="UPI payment QR for Speak-Up English Online Academy" width={520} height={680} className="mx-auto h-auto w-full max-w-sm" />
      </div>

      <dl className="mt-5 grid gap-3 text-sm">
        <div className="flex items-center justify-between gap-3 rounded-md bg-slate-50 p-3 dark:bg-white/10">
          <dt className="font-bold text-slate-600 dark:text-white/70">Payee</dt>
          <dd className="text-right font-black text-academy-navy dark:text-white">{academy.payeeName}</dd>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-md bg-slate-50 p-3 dark:bg-white/10">
          <dt className="font-bold text-slate-600 dark:text-white/70">UPI ID</dt>
          <dd className="text-right font-black text-academy-blue dark:text-academy-gold">{academy.upiId}</dd>
        </div>
      </dl>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-academy-gold px-4 py-3 text-sm font-black text-academy-navy">
          <ReceiptText size={18} />
          Generate Receipt
        </button>
        <button className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-academy-blue/20 px-4 py-3 text-sm font-black text-academy-blue dark:border-white/20 dark:text-white">
          <CreditCard size={18} />
          Razorpay Checkout
        </button>
      </div>
    </div>
  );
}
