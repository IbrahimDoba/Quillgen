import Footer from "@/components/shared/Footer";
import MainNavbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-full overflow-x-hidden w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <MainNavbar />

        {children}
        <Footer/>
      </div>
    </>
  );
}

