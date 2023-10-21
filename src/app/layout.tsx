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
    url: "https://github-glow.vercel.app/",
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
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "https://github-glow.vercel.app/githubGrow.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
