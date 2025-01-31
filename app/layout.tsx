import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.scss";
import SheetProvider from "@/providers/sheet-providers";
import { Toaster } from "react-hot-toast";
import { QueryProvider } from "@/providers/query-provider";

export const metadata: Metadata = {
  title: "Snaped IO",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SheetProvider />
            {children}
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
