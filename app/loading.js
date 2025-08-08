export default function Loading() {
  // Or a custom loading skeleton component
  return <div className="flex justify-center items-center bg-gradient-to-tl to-[#21082b] from-[#27022e] min-h-screen">
  <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-blue-400 text-4xl text-blue-400">
        <div className="flex h-12 w-12 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-red-400 text-2xl text-red-400"></div>
      </div>
    </div>
  </div>
}