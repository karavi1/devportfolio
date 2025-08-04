import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Tools() {
  const [topic, setTopic] = useState('');
  const [blogOutput, setBlogOutput] = useState('');
  const [seoUrl, setSeoUrl] = useState('');
  const [seoMeta, setSeoMeta] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const generateBlog = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/bloggen/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic })
      });
      const data = await res.json();
      setBlogOutput(data.content || 'No content returned.');
    } catch (err) {
      setBlogOutput('Error generating blog.');
    }
    setLoading(false);
  };

  const analyzeSeo = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/seo/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: seoUrl })
      });
      const data = await res.json();
      setSeoMeta(data);
    } catch (err) {
      setSeoMeta({ error: 'Failed to analyze SEO.' });
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">AI Tools</h1>

        {/* Blog Generator */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Blog Intro Generator</h2>
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter blog topic"
            className="border p-2 w-full mt-2 mb-2"
          />
          <button
            onClick={generateBlog}
            className="bg-blue-600 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            Generate
          </button>
          <div className="mt-4 bg-gray-100 p-3 rounded whitespace-pre-wrap">
            {loading ? 'Generating...' : blogOutput}
          </div>
        </div>

        {/* SEO Analyzer */}
        <div>
          <h2 className="text-xl font-semibold">SEO Analyzer</h2>
          <input
            value={seoUrl}
            onChange={(e) => setSeoUrl(e.target.value)}
            placeholder="Enter webpage URL"
            className="border p-2 w-full mt-2 mb-2"
          />
          <button
            onClick={analyzeSeo}
            className="bg-green-600 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            Analyze
          </button>
          <div className="mt-4 bg-gray-100 p-3 rounded whitespace-pre-wrap">
            {loading
              ? 'Analyzing...'
              : seoMeta
              ? JSON.stringify(seoMeta, null, 2)
              : 'No analysis yet.'}
          </div>
        </div>
      </main>
    </>
  );
}