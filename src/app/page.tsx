import Navbar from "./components/Navbar";
import MainPage from "@/app/components/MainPage";

export default function Home() {
    return (
        // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex min-h-screen w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl items-center mx-auto px-4">
            <div className="flex flex-col gap-6">
                <Navbar />
                <MainPage />
            </div>
        </main>
        // </div>
    );
}
