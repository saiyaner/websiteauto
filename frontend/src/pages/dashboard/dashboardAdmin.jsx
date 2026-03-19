export default function DashboardAdmin() {
    return (
        <main className="flex-1 flex flex-col h-screen overflow-y-scroll overscroll-none bg-slate-50 dark:bg-background-dark/50">
            <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 md:px-8 py-4 bg-white dark:bg-background-dark sticky top-0 z-30">
                <div class="flex items-center align-middle gap-4 lg:hidden">
                    <label class="p-2 -ml-2 text-slate-600 dark:text-slate-300 cursor-pointer" for="mobile-menu-checkbox">
                        <span class="material-symbols-outlined">menu</span>
                    </label>
                    <div class="bg-primary p-1 rounded-md">
                        <span class="material-symbols-outlined text-white text-[18px]">rocket_launch</span>
                    </div>
                </div>
                <div className="hidden md:flex flex-1 max-w-xl mx-4">
                    <div className="relative w-full">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input className="w-full pl-10 pr-4 py-2 rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-sm focus:ring-primary focus:border-primary outline-none" placeholder="Search templates, orders..." type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 relative min-w-[40px] min-h-[40px] flex items-center justify-center">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
                    </button>
                    <button className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 min-h-[40px]">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        <span className="hidden xs:inline">New Project</span>
                    </button>
                </div>
            </header>
            <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
                <div className="mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">Dashboard Overview</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">Manage your active website subscriptions and assets.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                    <div className="bg-white dark:bg-slate-900/40 p-5 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium">Active Subscriptions</p>
                            <span className="material-symbols-outlined text-primary text-sm">rocket</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold">12</p>
                        <div className="flex items-center gap-1 mt-2">
                            <span className="text-green-500 text-xs font-bold flex items-center"><span className="material-symbols-outlined text-[14px]">trending_up</span> 2</span>
                            <span className="text-slate-400 text-[10px] md:text-xs">from last month</span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900/40 p-5 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium">Template Downloads</p>
                            <span className="material-symbols-outlined text-primary text-sm">download</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold">48</p>
                        <div className="flex items-center gap-1 mt-2 text-[10px] md:text-xs text-slate-400">
                            Total assets acquired
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900/40 p-5 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium">Platform Credits</p>
                            <span className="material-symbols-outlined text-primary text-sm">payments</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold">150</p>
                        <div className="mt-3">
                            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full">
                                <div className="bg-primary h-1.5 rounded-full w-[75%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="lg:col-span-2 space-y-6 md:space-y-8">
                        <section className="bg-white dark:bg-slate-900/40 p-4 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                                <div>
                                    <h3 className="text-base md:text-lg font-bold">Project Traffic Usage</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Aggregated view across all sites</p>
                                </div>
                                <select className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-xs font-semibold focus:ring-0 py-2 px-3 w-fit">
                                    <option>Last 7 Days</option>
                                    <option>Last 30 Days</option>
                                </select>
                            </div>
                            <div className="h-48 md:h-64 flex flex-col gap-4">
                                <svg className="flex-1 w-full" fill="none" preserveaspectratio="none" viewbox="0 0 478 150" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="usageGradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#0d33f2" stop-opacity="0.3"></stop>
                                            <stop offset="100%" stopColor="#0d33f2" stop-opacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path d="M0 120C40 110 60 40 100 40C140 40 160 80 200 80C240 80 280 30 320 30C360 30 400 100 440 100C460 100 480 80 480 80V150H0V120Z" fill="url(#usageGradient)"></path>
                                    <path d="M0 120C40 110 60 40 100 40C140 40 160 80 200 80C240 80 280 30 320 30C360 30 400 100 440 100C460 100 480 80 480 80" fill="none" stroke="#0d33f2" stroke-linecap="round" stroke-width="3"></path>
                                </svg>
                                <div className="flex justify-between px-1">
                                    <p className="text-slate-400 text-[10px] md:text-xs font-medium">Mon</p>
                                    <p className="text-slate-400 text-[10px] md:text-xs font-medium">Tue</p>
                                    <p className="text-slate-400 text-[10px] md:text-xs font-medium">Wed</p>
                                    <p className="text-slate-400 text-[10px] md:text-xs font-medium">Thu</p>
                                    <p className="text-slate-400 text-[10px] md:text-xs font-medium">Fri</p>
                                    <p className="text-slate-400 text-[10px] md:text-xs font-medium">Sat</p>
                                    <p className="text-slate-400 text-[10px] md:text-xs font-medium">Sun</p>
                                </div>
                            </div>
                        </section>
                        <section className="bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                            <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                <h3 className="text-base md:text-lg font-bold">Recent Downloads</h3>
                                <button className="text-primary text-xs md:text-sm font-bold hover:underline">View All</button>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 group">
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="size-10 md:size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-slate-500">grid_view</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold truncate">Nexus Portfolio Pro</h4>
                                            <p className="text-[11px] text-slate-500">2 days ago • V2.1</p>
                                        </div>
                                    </div>
                                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors min-h-[40px]">
                                        <span className="material-symbols-outlined text-[16px]">download</span>
                                        Download
                                    </button>
                                </div>
                                <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 group">
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="size-10 md:size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-slate-500">account_balance_wallet</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold truncate">Fintech Dashboard UI</h4>
                                            <p className="text-[11px] text-slate-500">1 week ago • V1.0</p>
                                        </div>
                                    </div>
                                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors min-h-[40px]">
                                        <span className="material-symbols-outlined text-[16px]">download</span>
                                        Download
                                    </button>
                                </div>
                                <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 group">
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="size-10 md:size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-slate-500">shopping_bag</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold truncate">E-commerce Multi-Vendor</h4>
                                            <p className="text-[11px] text-slate-500">3 weeks ago • V4.5</p>
                                        </div>
                                    </div>
                                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors min-h-[40px]">
                                        <span className="material-symbols-outlined text-[16px]">download</span>
                                        Download
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-base md:text-lg font-bold px-1">Recommended for You</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group">
                                <div className="h-32 bg-slate-200 dark:bg-slate-800 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                                    <img className="w-full h-full object-cover opacity-60 mix-blend-overlay" data-alt="Screenshot of a sleek web dashboard UI template" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaiwHpqcpIwuVZByhNIx-eoGhORKyHD0Pb3ZPkfEYEK97K-ncwPJgauoXMtPqajYWPKG1oY5sbV3dRAP9aPyA-NALvlyncBgHRbliFcQFj7PW5PF9FlwHuOkGjy9el1cZHQ7XiWmxBoc164n6laP_vBL5ZgaVh_ZqC5HgxKCEqdhBCBnQfGnTecUnww9bCJQdwtTP4m6PXv9JL0VMGd2E4HHjV8LFq6xT2UQaqmqvdtYaa6NlXGr34SzEroj5F3uQ2AhTNdg6smyD7" />
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-sm">SaaS Landing Pack</h4>
                                        <span className="text-primary font-bold text-sm">$49</span>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">High-converting landing pages for your next startup launch.</p>
                                    <button className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all rounded-lg text-xs font-bold min-h-[40px]">
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group">
                                <div className="h-32 bg-slate-200 dark:bg-slate-800 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
                                    <img className="w-full h-full object-cover opacity-60 mix-blend-overlay" data-alt="Abstract colorful data visualization UI design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcO35CAPvymOGnsdvYd4JoT6xUiaWwfdWBhF4Ewk4cmw16M4J_wot9_LCLG_aONiiYljcuOPvXNOGPwauWLkid-uHwvKVP-nBgiey_yNVD9bZxAdkmBxhx8dfr6CpSrcjPyeK962f8lJeD8hzygqy3DqcohPkYk4-9-kwQC4MxD88AiqOC_hGO4nxct7CRP8cZW83tRVehQiF_3LW5scfUmERroadRbTYqGTbkIjsI2mypquny9cb9t12f2WK4L66MGl87IbUM0ufw" />
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-sm">Analytics Suite v2</h4>
                                        <span className="text-primary font-bold text-sm">$79</span>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">Powerful analytics components and charts for applications.</p>
                                    <button className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all rounded-lg text-xs font-bold min-h-[40px]">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-primary">support_agent</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1">Need assistance?</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Our design support team is available 24/7 to help.</p>
                            <button className="text-xs font-bold text-primary hover:underline min-h-[32px]">Open Support Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}