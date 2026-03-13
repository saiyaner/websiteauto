import { Link } from "react-router-dom";

function SignUp() {
    return (
        <body className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <main className="flex flex-1 items-center justify-center py-12 px-6">
                        <div className="layout-content-container flex flex-col max-w-[480px] w-full gap-6">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Create your account</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Join the world's largest website marketplace and start trading assets today.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-slate-900 dark:text-white text-base font-medium">Full Name</label>
                                    <input className="flex w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400" placeholder="John Doe" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-slate-900 dark:text-white text-base font-medium">Email</label>
                                    <input className="flex w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400" placeholder="name@company.com" type="email" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-slate-900 dark:text-white text-base font-medium">Password</label>
                                    <div className="relative flex w-full">
                                        <input className="flex w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-4 pr-12 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400" placeholder="••••••••" type="password" />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">visibility</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 py-2">
                                    <input className="mt-1 h-5 w-5 rounded border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-primary focus:ring-primary" id="terms" type="checkbox" />
                                    <label className="text-sm text-slate-600 dark:text-slate-400" for="terms">
                                        I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                                    </label>
                                </div>
                                <button className="w-full bg-primary text-white font-bold py-4 rounded-lg text-lg transition-transform active:scale-[0.98] hover:shadow-lg hover:shadow-primary/20">
                                    Create Account
                                </button>
                            </div>
                            <div className="relative flex items-center py-4">
                                <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                                <span className="flex-shrink mx-4 text-slate-400 text-sm font-medium uppercase tracking-wider">Or sign up with</span>
                                <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/50 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <img alt="Google" className="w-5 h-5" data-alt="Google colorful logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKhcru2FN9lnxS2dc4pNsujPsYtkZ3Kn1PokykqfmWmXJjbjV_OqJK2xquV0WWeiZdB6hqtWmb_PWWBWCTCF53Z3m5WilCiuk2GazR_Tx-k6qfB8B7TeXJFcfb9_rvYWq0xGfJxZ53bM7Mk1va0nvsD2FPmHYpDAGakbxEajYon5QR_TqS2R6LEBcmr4v_OjBwO9cs0d0KQrY3XOP1L6XryWiK0eCZz6kguHgZa0yyc_QdXipBeJiIp_P_jqgRcttIaVlZzbqsEWfU" />
                                    <span className="text-sm font-semibold dark:text-white">Google</span>
                                </button>
                                <button className="flex items-center justify-center gap-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/50 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <svg className="w-5 h-5 fill-current dark:text-white" viewbox="0 0 24 24">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                    </svg>
                                    <span className="text-sm font-semibold dark:text-white">GitHub</span>
                                </button>
                            </div>
                            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
                                Already have an account? <Link className="text-primary font-bold hover:underline" to="/sign-in">Sign in</Link>
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </body>
    )
}

export default SignUp
