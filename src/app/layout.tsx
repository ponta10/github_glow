import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/providers/NextAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GitHubGrow",
  description: "あなたのGitHubに応じて畑が育つ",
  openGraph: {
    title: "GitHubGrow",
    description: "あなたのGitHubに応じて畑が育つ",
    siteName: "GitHubGrow",
    images: [
      {
        url: "http://drive.google.com/uc?export=view&id=1oNWhxY7LVV_SrkJGhB8k8fivfpQkcvHS",
        width: 1602,
        height: 916,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
