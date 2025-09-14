import { redirect } from "next/navigation";
import { i18n } from "@/types/i18n";

// This is a root layout that redirects to the default locale
// We're using app/[locale]/layout.tsx for the actual layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The middleware handles the redirect, so this layout should never actually render
  // But Next.js requires a root layout, so we provide a minimal one
  // The actual rendering happens in app/[locale]/layout.tsx
  return children;
}
