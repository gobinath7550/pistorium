import AnnouncementBar from "./global/AnnouncementBar";
import Footer from "./global/Footer";
import Header from "./global/Header";

export default function PageRender({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AnnouncementBar />
            <Header />
            <main className="bg-yellow-50 text-[var(--background)]">
                {children}
            </main>
            <Footer />
        </>
    )
}