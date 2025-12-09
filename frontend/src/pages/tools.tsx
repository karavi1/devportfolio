import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tools() {
  const [topic, setTopic] = useState("");
  const [blogOutput, setBlogOutput] = useState("");
  const [seoUrl, setSeoUrl] = useState("");
  const [seoMeta, setSeoMeta] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const generateBlog = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/bloggen/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });
      const data = await res.json();
      setBlogOutput(data.content || "No content returned.");
    } catch (err) {
      setBlogOutput("Error generating blog.");
    }
    setLoading(false);
  };

  const analyzeSeo = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/seo/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: seoUrl }),
      });
      const data = await res.json();
      setSeoMeta(data);
    } catch (err) {
      setSeoMeta({ error: "Failed to analyze SEO." });
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 px-6 pb-16 pt-28">
        <div className="mx-auto max-w-4xl space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Labs</p>
            <h1 className="text-3xl font-bold text-slate-900">AI Tools</h1>
            <p className="text-sm text-slate-600">
              Lightweight utilities I’m experimenting with alongside my consulting work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Blog Generator */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Blog Intro Generator</h2>
              <p className="text-sm text-slate-600">
                Draft quick intros for outlines or landing pages.
              </p>
              <input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter blog topic"
                className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
              />
              <button
                onClick={generateBlog}
                className="mt-3 inline-flex items-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 disabled:opacity-60"
                disabled={loading}
              >
                Generate
              </button>
              <div className="mt-4 min-h-[80px] whitespace-pre-wrap rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                {loading ? "Generating..." : blogOutput || "Output will appear here."}
              </div>
            </div>

            {/* SEO Analyzer */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">SEO Analyzer</h2>
              <p className="text-sm text-slate-600">Quickly inspect metadata and on-page basics.</p>
              <input
                value={seoUrl}
                onChange={(e) => setSeoUrl(e.target.value)}
                placeholder="Enter webpage URL"
                className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
              />
              <button
                onClick={analyzeSeo}
                className="mt-3 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 disabled:opacity-60"
                disabled={loading}
              >
                Analyze
              </button>
              <div className="mt-4 min-h-[120px] whitespace-pre-wrap rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                {loading
                  ? "Analyzing..."
                  : seoMeta
                  ? JSON.stringify(seoMeta, null, 2)
                  : "No analysis yet."}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
