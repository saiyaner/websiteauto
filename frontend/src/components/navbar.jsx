function Navbar(){
    return(
        <header
        className="sticky top-0 z-50 w-full border-b border-slate-200/10 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-1.5 rounded-lg">
              <span className="material-symbols-outlined text-white text-2xl">rocket_launch</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">WebFlowX</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10"><a
            className="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#layanan">Layanan</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#template">Template</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#harga">Harga</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#fitur">Fitur</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#faq">FAQ</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#kontak">Kontak</a>
          </nav>
          <div className="flex items-center gap-4"><button
            className="text-sm font-bold hover:text-primary transition-colors">Login</button>
            <button
              className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-primary/20">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    )
}

export default Navbar