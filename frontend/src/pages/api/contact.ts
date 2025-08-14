import type { NextApiRequest, NextApiResponse } from "next";

// Minimal validation and shape enforcement
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  const { name, email, company = "", budget = "", details } = req.body as Record<string, string>;
  if (!name || !email || !details || !isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: "Invalid payload" });
  }

  // TODO: Wire up delivery (choose one):
  // 1) Resend (recommended):
  //    await fetch("https://api.resend.com/emails", { headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` }, ... })
  // 2) Nodemailer with SMTP creds in env
  // 3) Pipe to Slack webhook or Notion inbox

  // For now, log and respond success so the UI flow works end-to-end.
  console.log("Contact form submission", { name, email, company, budget, details });
  return res.status(200).json({ ok: true });
}