export default function AdvertorialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white text-black font-serif antialiased">
      {children}
    </div>
  )
}
