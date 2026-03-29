import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/provider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fit Fusion Ayurveda",
  description: "Fit Fusion Ayurveda - Better Life with Ayurveda",
  openGraph: {
    type: "website",
    title: "Fit Fusion Ayurveda",
    description: "Fit Fusion Ayurveda - Better Life with Ayurveda",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/355ecc63-789a-4a84-a700-c38ed6961215/id-preview-28eb0cad--782c0916-71f2-47e8-8299-a454054c5c62.lovable.app-1772187697097.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    title: "Fit Fusion Ayurveda",
    description: "Fit Fusion Ayurveda - Better Life with Ayurveda",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/355ecc63-789a-4a84-a700-c38ed6961215/id-preview-28eb0cad--782c0916-71f2-47e8-8299-a454054c5c62.lovable.app-1772187697097.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
