import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoneyIQ",
  description: "AI-powered finance platform",
};

export default function RootLayout({
  children,
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-white text-gray-900`}>
          <Header />

          <main className="min-h-screen">{children}</main>
          <Toaster richColors/>
          <footer className="bg-white border-t border-gray-200 py-12">
            <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
              <p className="text-sm">
                © {new Date().getFullYear()} MoneyIQ. All rights reserved.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
