import "./globals.css";

export const metadata = {
  title: "GitTrack",
  description: "Find who does not followed you on github.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
