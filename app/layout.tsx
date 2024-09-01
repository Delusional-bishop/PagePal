import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import Provider from "./Provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata={
  title:'PagePal',
  description:'Online text and documentation editor'

}
export default function RootLayout({ children }: {children:React.ReactNode}) {
  return (
    <ClerkProvider 
    appearance={{
      baseTheme:dark,
      variables:{colorPrimary:"#FFFFFF",fontSize:'16px'}
    }}>

    <html lang="en" suppressHydrationWarning>
      
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
        >
          <Provider>
        {children}
          </Provider>
          <Analytics />
          <SpeedInsights />
      </body>
    </html>
    </ClerkProvider>
  )
}
