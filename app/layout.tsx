import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Feedback Matters | Value Family Hospital",
  description: "Share your experience with Value Family Hospital.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
