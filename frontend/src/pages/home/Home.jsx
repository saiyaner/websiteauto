import MainLayout from "../../layouts/MainLayout";

function Home(){
    return(
        <MainLayout>
        <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 hero-gradient -z-10"></div>
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New v3.0 Templates Live
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              Launch your next <span className="text-primary">SaaS project</span> in minutes.
            </h1>
            <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Premium website templates designed for conversion, speed, and modern aesthetics. Stop building
              from
              scratch and start shipping today.
            </p>
            <div className="max-w-2xl mx-auto">
              <div
                className="glass-card p-2 rounded-xl flex items-center gap-2 group focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                <div className="pl-4 text-slate-400">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="bg-transparent border-none focus:ring-0 w-full text-slate-100 placeholder:text-slate-500 py-3"
                  placeholder="Search templates (e.g. AI Dashboard, Crypto, Portfolio...)" type="text" />
                <button
                  className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-all shrink-0">
                  Search
                </button>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-500">
                <span>Popular:</span>
                <a className="hover:text-primary transition-colors" href="#">#SaaS</a>
                <a className="hover:text-primary transition-colors" href="#">#Dashboard</a>
                <a className="hover:text-primary transition-colors" href="#">#Fintech</a>
                <a className="hover:text-primary transition-colors" href="#">#AI</a>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 lg:px-20 py-20 bg-background-light/50 dark:bg-background-dark/50" id="template">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Templates</h2>
                <p className="text-slate-400">Hand-picked premium designs by our top creators.</p>
              </div>
              <a className="flex items-center gap-2 text-primary font-bold hover:underline" href="#">
                View all <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className="group glass-card rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="Modern dark dashboard interface with purple accents"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABxNmEBQ_XmIwf8wBxqW2Ypba_XRXBDFnoLf3oWTZUMQoEbVgZGwMwvaUYD61hUJzo7WHsXw1dRH7weTYokObpKW_KaSZ_8d5uJZ_uJanDai5n6xxoEy8N2vFjfocX6PLp2iJuKeIV5_MpQTDEWMeIZuRYcRphNfxathjQwXJz9Y0nrlN9zlFhWVevomUhB0Mjtvqu1WDOHGF2KorPuTuzomQC5XB9vtkMAlQ67I3n-YpfNQSbqQ1sOeeD0CXNQ2x0J5Nm0f1JjG-m" />
                  <div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      className="bg-white text-slate-900 font-bold px-4 py-2 rounded-lg text-sm">Preview</button>
                    <button
                      className="bg-primary text-white font-bold px-4 py-2 rounded-lg text-sm">Details</button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Aura Analytics</h3>
                    <span className="text-lg font-black text-primary">$49</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">Perfect for high-scale SaaS applications and
                    data-driven
                    startups.</p>
                  <div className="flex items-center gap-3 border-t border-slate-200/10 pt-4">
                    <div className="w-6 h-6 rounded-full bg-slate-700"></div>
                    <span className="text-xs font-medium text-slate-300 italic">by DesignFlow</span>
                    <div className="ml-auto flex items-center gap-1 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-[14px]">bolt</span> High Speed
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="group glass-card rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="Clean minimal landing page design with white background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTbuZcoZANXG7Xm2pCgwH3JMum2yCI7OK15cHhF-J3sn2OLzhwI8wYtEezQ1RGUyCbatYvO_hEhbsT3S3lQ_fH2NJKIXNQYW8q0yXke8-eRCKoJ6kwkSDZoostmDPkMPwDr-eXVFp82d4qazXmcOPmGYIDpymEBTf-jrXS72jLW2TRWlL7kJuncBobvIly-iNFXUtKeLT2DKmijghtF8yyzLaHXwDYzQzCTK_k0xv0QwEneUFqQBpLxRsHAC120Ow2T4R_SG54HtRo" />
                  <div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      className="bg-white text-slate-900 font-bold px-4 py-2 rounded-lg text-sm">Preview</button>
                    <button
                      className="bg-primary text-white font-bold px-4 py-2 rounded-lg text-sm">Details</button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Nexus Landing</h3>
                    <span className="text-lg font-black text-primary">$59</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">A conversion-optimized landing page for your next
                    big product
                    launch.</p>
                  <div className="flex items-center gap-3 border-t border-slate-200/10 pt-4">
                    <div className="w-6 h-6 rounded-full bg-slate-700"></div>
                    <span className="text-xs font-medium text-slate-300 italic">by PixelPerfect</span>
                    <div className="ml-auto flex items-center gap-1 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-[14px]">responsive_layout</span>
                      Fully Responsive
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="group glass-card rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="Abstract vibrant geometric UI components on dark canvas"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBHqmLWtM4xIF32LlC-Km4Z3cnU7GQK94GXMKtZPWxA68199IPblVPdq7Z9UXtEWDCEkcKpBgyTEhYHLQrAgvr_YL5ztDT8J6lDPL5E01QONIFMv4nQG52rXp_pqMHjsD7LlBWeUcsC9z_3Mc5-k0Et1aGtpI13MatFlNg5lItUXA57hRcH6LX5Pk-iFM3jvKWKc0PlqZ-W96AgnzjqklYSo-1XTSZOXuuPI2I4Nx4ICfl-yU4CZo4sMtLxmWbEqqhqT6W3883SZAG" />
                  <div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      className="bg-white text-slate-900 font-bold px-4 py-2 rounded-lg text-sm">Preview</button>
                    <button
                      className="bg-primary text-white font-bold px-4 py-2 rounded-lg text-sm">Details</button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Stellar Dev Kit</h3>
                    <span className="text-lg font-black text-primary">$79</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">Complete UI kit with 50+ components for developer
                    tools and
                    agencies.</p>
                  <div className="flex items-center gap-3 border-t border-slate-200/10 pt-4">
                    <div className="w-6 h-6 rounded-full bg-slate-700"></div>
                    <span className="text-xs font-medium text-slate-300 italic">by CodeCraft</span>
                    <div className="ml-auto flex items-center gap-1 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-[14px]">code</span> Clean Code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 lg:px-20 py-24 bg-background-dark" id="layanan">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black mb-4">Layanan Kami</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Kami menyediakan solusi lengkap untuk membantu
                bisnis SaaS
                Anda tumbuh lebih cepat dengan infrastruktur desain terbaik.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all">
                <div
                  className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">custom_typography</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Development</h3>
                <p className="text-slate-400 text-sm">Modifikasi template sesuai kebutuhan spesifik bisnis Anda
                  dengan
                  bantuan tim ahli kami.</p>
              </div>
              <div className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all">
                <div
                  className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">search_check</span>
                </div>
                <h3 className="text-xl font-bold mb-3">SEO Optimization</h3>
                <p className="text-slate-400 text-sm">Pengaturan teknis SEO mendalam untuk memastikan situs Anda
                  mendapatkan
                  peringkat terbaik di Google.</p>
              </div>
              <div className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all">
                <div
                  className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">speed</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Performance Audit</h3>
                <p className="text-slate-400 text-sm">Optimasi kecepatan loading dan Core Web Vitals untuk
                  pengalaman
                  pengguna yang mulus.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 lg:px-20 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-black mb-6 leading-tight">Why choose our templates?</h2>
                <p className="text-slate-400 text-lg mb-10">We don't just sell designs; we sell high-performance
                  infrastructure for your business.</p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/20 text-primary p-3 rounded-xl h-fit">
                      <span className="material-symbols-outlined">trending_up</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">SEO Optimized</h4>
                      <p className="text-slate-400 text-sm">Built with clean semantic HTML and
                        lightning-fast loading speeds
                        to rank higher on search engines.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/20 text-primary p-3 rounded-xl h-fit">
                      <span className="material-symbols-outlined">devices</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Fully Responsive</h4>
                      <p className="text-slate-400 text-sm">Every pixel is tested on mobile, tablet, and
                        desktop to ensure a
                        flawless experience everywhere.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/20 text-primary p-3 rounded-xl h-fit">
                      <span className="material-symbols-outlined">draw</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Easy Customization</h4>
                      <p className="text-slate-400 text-sm">Organized style guides and modular components
                        make it easy to
                        adapt to your brand identity.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-primary/10 rounded-3xl absolute -inset-4 blur-2xl -rotate-6">
                </div>
                <div
                  className="relative glass-card rounded-3xl p-8 border border-white/10 aspect-video flex flex-col justify-center overflow-hidden">
                  <img className="rounded-xl shadow-2xl" data-alt="Code editor showing clean React code"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9LPHuBGsqxzSAnY98h8h3zSEHHB92gSYrs_SEupb5jaJ88L3fthD5y8GSTBYvtlSWWpYN9fB54H8-0NVbsVXDR9rf1RiksBBT4qLZ0hA9K9Nn3hFl7uZ6uIwrMcmgU0mA9H3KXr4j9O2fFRAfIkTO_t1DaXZ5k8Yfl8z9Vo6SzeAXDxCSO2hd8ZTN0TQHdv99tI6lUjsobQU6OwWF2shQcAvBkqaTopLQUJ2CUBxC3mRQVIP78UsWRuNQHVD_ta0GWHgfjV-Et0pJ" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 lg:px-20 py-24 bg-background-light/5 dark:bg-background-dark/50" id="fitur">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-6 rounded-2xl">
                    <span className="material-symbols-outlined text-primary mb-4">bolt</span>
                    <h4 className="font-bold mb-2">Ultra Fast</h4>
                    <p className="text-xs text-slate-400">Skor Lighthouse 90+</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl mt-8">
                    <span className="material-symbols-outlined text-primary mb-4">security</span>
                    <h4 className="font-bold mb-2">Secure Code</h4>
                    <p className="text-xs text-slate-400">Best practices security</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl">
                    <span className="material-symbols-outlined text-primary mb-4">palette</span>
                    <h4 className="font-bold mb-2">Theming</h4>
                    <p className="text-xs text-slate-400">Easy color presets</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl mt-8">
                    <span className="material-symbols-outlined text-primary mb-4">deployed_code</span>
                    <h4 className="font-bold mb-2">Ready to Ship</h4>
                    <p className="text-xs text-slate-400">Production ready</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-black mb-6">Fitur Unggulan Kami</h2>
                <p className="text-slate-400 mb-8">Setiap template kami dibangun dengan teknologi terbaru untuk
                  memastikan
                  skalabilitas dan performa maksimal untuk bisnis Anda.</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><span
                    className="material-symbols-outlined text-primary text-sm">check_circle</span> 100%
                    Fully Responsive
                    Layouts</li>
                  <li className="flex items-center gap-3"><span
                    className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Advanced Animations
                    with Framer Motion</li>
                  <li className="flex items-center gap-3"><span
                    className="material-symbols-outlined text-primary text-sm">check_circle</span> SEO
                    Semantic HTML
                    Structure</li>
                  <li className="flex items-center gap-3"><span
                    className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Modern Tech Stack
                    (Next.js, Tailwind CSS)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 lg:px-20 py-24" id="harga">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black mb-4">Pilih Paket Anda</h2>
              <p className="text-slate-400">Investasi terbaik untuk mempercepat peluncuran produk Anda.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-2xl flex flex-col">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-slate-400 text-sm mb-6">Untuk proyek kecil &amp; personal.</p>
                <div className="text-4xl font-black mb-8">$49 <span
                  className="text-sm text-slate-500 font-medium">/template</span></div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-2 text-sm"><span
                    className="material-symbols-outlined text-green-500 text-lg">check</span> Single
                    domain license</li>
                  <li className="flex items-center gap-2 text-sm"><span
                    className="material-symbols-outlined text-green-500 text-lg">check</span> Lifetime
                    updates</li>
                  <li className="flex items-center gap-2 text-sm"><span
                    className="material-symbols-outlined text-slate-600 text-lg">close</span> Community
                    support</li>
                </ul>
                <button
                  className="w-full py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Get
                  Started</button>
              </div>
              <div
                className="glass-card p-8 rounded-2xl flex flex-col border-primary/50 ring-2 ring-primary/20 relative">
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  Most Popular</div>
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <p className="text-slate-400 text-sm mb-6">Untuk startup yang sedang tumbuh.</p>
                <div className="text-4xl font-black mb-8">$99 <span
                  className="text-sm text-slate-500 font-medium">/template</span></div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-2 text-sm"><span
                    className="material-symbols-outlined text-green-500 text-lg">check</span> Unlimited
                    domains</li>
                  <li className="flex items-center gap-2 text-sm"><span
                    className="material-symbols-outlined text-green-500 text-lg">check</span> Lifetime
                    updates</li>
                  <li className="flex items-center gap-2 text-sm"><span
                    className="material-symbols-outlined text-green-500 text-lg">check</span> Priority
                    support</li>
                </ul>
                <button
                  className="w-full py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">Get
                  Started</button>
              </div>
              <div className="glass-card p-8 rounded-2xl flex flex-col">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-slate-400 text-sm mb-6">Solusi custom untuk tim besar.</p>
                <div className="text-4xl font-black mb-8">Custom</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-2 text-sm"><span
                    className="material-symbols-outlined text-green-500 text-lg">check</span> Tailored
                    solutions</li>
                  <li className="flex items-center gap-2 text-sm"><span
                    className="material-symbols-outlined text-green-500 text-lg">check</span> Dedicated
                    developer</li>
                  <li className="flex items-center gap-2 text-sm"><span
                    className="material-symbols-outlined text-green-500 text-lg">check</span> 24/7 Phone
                    support</li>
                </ul>
                <button
                  className="w-full py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Contact
                  Us</button>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 lg:px-20 py-24 bg-background-light/5 dark:bg-background-dark/50" id="faq">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black mb-4">Pertanyaan Umum</h2>
              <p className="text-slate-400">Segala hal yang perlu Anda ketahui tentang template kami.</p>
            </div>
            <div className="space-y-4">
              <div className="glass-card rounded-xl overflow-hidden">
                <details className="group p-6">
                  <summary className="flex items-center justify-between font-bold cursor-pointer list-none">
                    <span>Apa yang saya dapatkan setelah membeli?</span>
                    <span
                      className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <p className="mt-4 text-slate-400 text-sm leading-relaxed">Anda akan menerima file source
                    code lengkap
                    (React/Next.js), dokumentasi penggunaan, dan akses ke update gratis selamanya.</p>
                </details>
              </div>
              <div className="glass-card rounded-xl overflow-hidden">
                <details className="group p-6">
                  <summary className="flex items-center justify-between font-bold cursor-pointer list-none">
                    <span>Apakah saya bisa meminta refund?</span>
                    <span
                      className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <p className="mt-4 text-slate-400 text-sm leading-relaxed">Kami menawarkan garansi uang
                    kembali 14 hari
                    jika Anda tidak puas dengan kualitas template kami, sesuai syarat dan ketentuan.</p>
                </details>
              </div>
              <div className="glass-card rounded-xl overflow-hidden">
                <details className="group p-6">
                  <summary className="flex items-center justify-between font-bold cursor-pointer list-none">
                    <span>Apakah template ini mendukung dark mode?</span>
                    <span
                      className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <p className="mt-4 text-slate-400 text-sm leading-relaxed">Ya, semua template kami mendukung
                    sistem
                    dark/light mode secara otomatis mengikuti preferensi OS atau toggle manual.</p>
                </details>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 lg:px-20 py-24" id="kontak">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl font-black mb-6">Hubungi Kami</h2>
                <p className="text-slate-400 mb-10">Punya pertanyaan khusus atau butuh bantuan custom
                  development? Tim kami
                  siap membantu Anda.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email Kami</p>
                      <p className="font-bold">support@webflowx.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Kantor</p>
                      <p className="font-bold">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8 rounded-3xl">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase">Nama</label>
                      <input
                        className="w-full bg-white/5 border-white/10 rounded-lg focus:ring-primary focus:border-primary text-sm"
                        placeholder="John Doe" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase">Email</label>
                      <input
                        className="w-full bg-white/5 border-white/10 rounded-lg focus:ring-primary focus:border-primary text-sm"
                        placeholder="john@example.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Subjek</label>
                    <select
                      className="w-full bg-white/5 border-white/10 rounded-lg focus:ring-primary focus:border-primary text-sm text-slate-400">
                      <option>Pertanyaan Umum</option>
                      <option>Dukungan Teknis</option>
                      <option>Custom Project</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Pesan</label>
                    <textarea
                      className="w-full bg-white/5 border-white/10 rounded-lg focus:ring-primary focus:border-primary text-sm"
                      placeholder="Tuliskan pesan Anda di sini..." rows="4"></textarea>
                  </div>
                  <button
                    className="w-full bg-primary py-3 rounded-lg font-bold hover:bg-primary/90 transition-all"
                    type="submit">Kirim Pesan</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        </MainLayout>
    )
}
export default Home