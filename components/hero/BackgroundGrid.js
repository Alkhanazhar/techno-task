export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 opacity-100 pointer-events-none">
      <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />
    </div>
  );
}
