// Inner pages sit below the persistent masthead (rendered by the root layout).
// The name in the header links home, so no separate back button is needed.
export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="reveal mt-20 max-w-2xl flex-1">{children}</main>;
}
