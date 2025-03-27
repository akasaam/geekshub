import type React from "react"

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex flex-col min-h-screen">{children}</div>
}

