export default function Navbar() {
  return (
    <nav className="fixed left-3 top-4 z-50 flex items-center rounded-full border border-white/10 bg-black px-4 py-3">
      <div className="mr-6 h-7 w-7 rounded-full bg-white" />

      <div className="flex items-center gap-7 text-sm text-white/60">
        <a href="#" className="font-semibold text-white">
          Home
        </a>

        <a href="#blogs">Blogs</a>
        <a href="#projects">Projects</a>
        <a href="#oss">OSS</a>

        <span className="h-6 w-px bg-white/20" />

        <button className="text-lg">
          ☾
        </button>
      </div>
    </nav>
  )
}