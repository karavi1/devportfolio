import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useState } from "react";

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
      <main className="px-6 md:px-10 lg:px-16">
        <section className="mx-auto max-w-3xl py-12">
          <h1 className="text-3xl md:text-4xl font-bold">Get in Touch</h1>
          <p className="mt-2 text-gray-600">Open to short‑term contracts and collaborations. Prefer projects with clear scope and fast iteration.</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5 rounded-2xl border p-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-xl border px-4 py-2 outline-none focus:ring" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border px-4 py-2 outline-none focus:ring" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium">Company (optional)</label>
              <input id="company" name="company" className="mt-1 w-full rounded-xl border px-4 py-2 outline-none focus:ring" />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium">Budget / Range (optional)</label>
              <input id="budget" name="budget" className="mt-1 w-full rounded-xl border px-4 py-2 outline-none focus:ring" />
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-medium">Project details</label>
              <textarea id="details" name="details" required rows={5} className="mt-1 w-full rounded-xl border px-4 py-2 outline-none focus:ring" />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm border bg-black text-white hover:shadow-md transition disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
            {message ? <p className="text-sm text-gray-700">{message}</p> : null}
          </form>

          <div className="mt-6 text-sm text-gray-600">
            Prefer email? <a className="underline" href="mailto:kaush.ravi@gmail.com">kaush.ravi@gmail.com</a>
          </div>
        </section>
      </main>
    </>
  );
}