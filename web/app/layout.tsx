import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/ui/theme-toggle'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Yoump | Youtube to mp3 in a single click',
  description: 'Convert any youtube video to mp3 with a single click',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className="border-b border-[#f2f2f2] dark:border-[#1b1b21] py-4 px-16 text-center flex justify-between items-center">
          <Link href="/" className="font-bold text-lg">
            🎒 Yoump
          </Link>

          <Link
            href="/multiple"
            className="text-emerald-500 hover:underline text-sm block dark:text-emerald-400"
          >
            Need to convert multiple links at once?
          </Link>
        </header>

        <main className="container md:w-4/12 w-full py-10 text-center">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}

            <ModeToggle />
          </ThemeProvider>
        </main>

        <footer className="border-t border-[#f2f2f2] dark:border-[#1b1b21] py-3 px-16 text-center fixed bottom-0 w-full">
          <p className="text-xs text-text">
            Made with ❤️ by{' '}
            <a
              href="https://github.com/gasampaiosouza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:underline dark:text-emerald-400"
            >
              @gasampaiosouza
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
