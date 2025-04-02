import { Geist } from "next/font/google";
import { Providers } from "./_providers/MantineProvider";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "QuickDemo | Same-day demo",
  description: "Same day demo",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground overscroll-none">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
