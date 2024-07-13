import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider"
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from 'sonner';
import { BillingProvider } from "@/providers/billing-provider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Autozen.',
  description: 'Automate Your Work With Autozen.',
}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
       publishableKey = {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
      <html lang="en">
        <body className={font.className}>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" rel="stylesheet"/>
          <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
             <BillingProvider>
                 <ModalProvider>
                    {children}
                    <Toaster />
                </ModalProvider>
               </BillingProvider>
            </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}
