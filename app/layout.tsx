import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "荒野与王泪攻略书 | 塞尔达传说非官方深度攻略",
  description:
    "面向新玩家与老玩家的塞尔达传说：旷野之息、王国之泪非官方深度攻略站，整理玩法核心、剧情冲突、人物关系、情感锚点与全收集路线。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
