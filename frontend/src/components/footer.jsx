function Footer(){
    return(
        <footer className="px-6 lg:px-20 py-16 border-t border-slate-200/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-80">
            <div className="bg-slate-700 p-1 rounded-lg">
              <span className="material-symbols-outlined text-white text-xl">rocket_launch</span>
            </div>
            <h2 className="text-lg font-bold tracking-tight">WebFlowX</h2>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">Support</a>
            <a className="hover:text-primary transition-colors" href="#">Contact</a>
          </div>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary transition-colors"
              href="#">
              <span className="material-symbols-outlined text-xl">language</span>
            </a>
            <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary transition-colors"
              href="#">
              <span className="material-symbols-outlined text-xl">alternate_email</span>
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-200/5 text-center text-xs text-slate-600">
          © 2024 WebFlowX. All rights reserved. Built for the future of web development.
        </div>
      </footer>
    )
}

export default Footer