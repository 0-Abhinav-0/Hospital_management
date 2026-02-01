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
      <body className="flex flex-col bg-background-1 min-h-screen">
        <Providers>
          <Header/>
          <main className="flex-1 w-full"> {children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
