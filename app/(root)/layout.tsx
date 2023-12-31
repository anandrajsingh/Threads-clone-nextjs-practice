import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <TopBar/>

      <main>
        <LeftSideBar/>
        <section className='main-container'>
          <div className="w-full max-w-4xl">
            {children}
          </div>
        </section>
        <RightSideBar/>
      </main>
      <BottomBar/>
    </ClerkProvider>
  )
}
