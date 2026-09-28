import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unique | Salon fryzjerski we Wrocławiu",
  description:
    "Unique, salon fryzjerski przy Białoskórniczej 5 we Wrocławiu. Profesjonalna obsługa, precyzyjne cięcie i stylizacja.",
  metadataBase: new URL("https://unique.wroc.pl"),
  openGraph: {
    title: "Unique | Salon fryzjerski we Wrocławiu",
    description:
      "Salon fryzjerski Unique we Wrocławiu. Zobacz galerię, usługi i skontaktuj się z salonem.",
    url: "https://unique.wroc.pl",
    siteName: "Unique",
    locale: "pl_PL",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}