import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MainLayout({children}){
    return(
        <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default MainLayout