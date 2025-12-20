import Header from "@/components/organisms/Header";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div>
         <Header/>
         <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
