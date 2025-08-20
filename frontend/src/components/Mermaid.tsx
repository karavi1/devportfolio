'use client'
import { useEffect, useRef } from 'react'

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      // Dynamically import to ensure client-only load
      const mermaid = (await import('mermaid')).default
      mermaid.initialize({ startOnLoad: false, securityLevel: 'loose', theme: 'default' })

      const { svg } = await mermaid.render(
        `mmd-${Math.random().toString(36).slice(2)}`,
        chart.trim()
      )

      if (!cancelled && ref.current) ref.current.innerHTML = svg
    })().catch((e) => {
      if (ref.current) ref.current.textContent = String(e)
    })

    return () => {
      cancelled = true
    }
  }, [chart])

  return <div className="overflow-auto rounded-2xl border p-3" ref={ref} />
}