'use client'
import { Outfit } from 'next/font/google'
import './globals.css'
import Header from './_components/Header'
import Footer from './_components/Footer'
import { ClerkProvider } from '@clerk/nextjs'
const inter = Outfit({ subsets: ['latin'] })

/* export const metadata = {
  title: 'Digital E-Commerce',
  description: 'Generated by create next app'
} */

export default function RootLayout ({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
    </ClerkProvider>

  )
}
