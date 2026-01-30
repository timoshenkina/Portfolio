// This layout is required by Next.js, even if all pages are nested in [locale]
// It will only be active if middleware doesn't match a route.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
