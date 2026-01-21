import Header from "@/components/organisms/Header";
import "@/app/globals.css";
import { Providers } from "@/components/providers";
import Footer from "@/components/organisms/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className="bg-background-1 text-foreground font-sans antialiased">
        <Providers>
          <div>
        <Header/>
            <main>
              
              {children}
            </main>
        <Footer/>
          </div>
        </Providers>
      </body>
    </html>
  );
}
