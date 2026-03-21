'use client'

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] w-full py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-screen-2xl mx-auto gap-4">
        <div className="text-white/40 font-body text-[0.75rem] uppercase tracking-widest">
          Made with Enigma by Karl Mercado &bull;{' '}
          <span className="serif-italic lowercase">Cotton the Chief Greeter says hello.</span>
        </div>
        <div className="flex gap-8">
          <a
            href="https://github.com/KMercad0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors duration-300 font-label text-[0.75rem] uppercase tracking-widest"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kmercad0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors duration-300 font-label text-[0.75rem] uppercase tracking-widest"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
