import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, type ReactNode } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Thanks! I received your message and will reply soon.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again later or email kaush.ravi@gmail.com.");
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Kaushik Ravi</title>
      </Head>
      <Navbar />
      <main className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-emerald-50" />
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-32">
          <div className="mb-8 space-y-2 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Let’s work together
            </p>
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">Get in touch</h1>
            <p className="text-lg text-slate-600">
              Open to scoped builds, audits, and collaborations. Bay Area roles preferred. I respond
              within one business day.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                I prefer projects with clear outcomes, quick feedback loops, and measurable wins.
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    How I can help
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>Architect and build FastAPI/React features end-to-end.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>Design and productionize data/ML pipelines with monitoring.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>Short technical audits, docs, and delivery playbooks.</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Direct contact
                  </p>
                  <p className="mt-2 font-semibold text-slate-900">kaush.ravi@gmail.com</p>
                  <p className="text-sm text-slate-600">Or drop a note below.</p>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" id="name">
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                  />
                </Field>
                <Field label="Email" id="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                  />
                </Field>
              </div>
              <Field label="Company (optional)" id="company">
                <input
                  id="company"
                  name="company"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                />
              </Field>
              <Field label="Budget / range (optional)" id="budget">
                <input
                  id="budget"
                  name="budget"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                />
              </Field>
              <Field label="Project details" id="details">
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                />
              </Field>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-800 disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
              {message ? <p className="text-sm text-slate-700">{message}</p> : null}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={id} className="block text-sm font-medium text-slate-800">
      {label}
      {children}
    </label>
  );
}
