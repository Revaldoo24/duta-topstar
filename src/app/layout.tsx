import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dutateladan-stekom.vercel.app"),
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  title: {
    default: "Duta Teladan Universitas STEKOM",
    template: "%s | Duta Teladan Universitas STEKOM",
  },
  description:
    "Program resmi Universitas STEKOM untuk membangun personal branding, skill konten kreator, serta peluang uang saku dan bonus performa.",
  keywords: [
    "Duta Teladan Universitas STEKOM",
    "Content Creator Pelajar",
    "Program Content Creator STEKOM",
    "Pelatihan Konten Kreator",
    "Personal Branding Kreator",
  ],
  openGraph: {
    title: "Duta Teladan Universitas STEKOM",
    description:
      "Bangun nama, skill, serta peluang uang saku dan bonus performa melalui program Content Creator Development resmi Universitas STEKOM.",
    type: "website",
    locale: "id_ID",
    siteName: "Duta Teladan Universitas STEKOM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
