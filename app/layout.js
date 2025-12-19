import { Toaster } from "react-hot-toast";

import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header"; // ✅ Global Header component
import "./globals.css";

// ✅ Load Inter (for body text)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// ✅ Load Poppins (for headings)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // normal to bold weights
  variable: "--font-poppins",
});

// ✅ SEO Metadata for Alamco
export const metadata = {
  title: "Alamco Infratech Pvt. Ltd.",
  description:
    "Engineering Construction and Project Management Company providing reliable, cost-effective, and sustainable infrastructure solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* ✅ Global Header (appears on all pages) */}
        <Header />

        {/* ✅ Page-specific content */}
        <main>
          {children}

          <Toaster
            position="top-right"
            pauseOnHover
            toastOptions={{
              duration: 4500, // ⏱ stays ~4.5 seconds
              className:
                "bg-black/80 border border-gray-800 rounded-xl shadow-lg px-4 py-3 text-sm text-sky-200",
              success: {
                duration: 5000, // success slightly longer
                className:
                  "bg-black/80 border border-orange-300 rounded-xl shadow-lg px-4 py-3 text-sm text-sky-200",
              },
              error: {
                duration: 5500, // error longest (user needs time)
                className:
                  "bg-black/80 border border-red-400 rounded-xl shadow-lg px-4 py-3 text-sm text-sky-200",
              },
            }}
          />
        </main>
      </body>
    </html>
  );
}
