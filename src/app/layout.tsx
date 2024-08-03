import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Glamour Félin',
    default: 'Glamour Félin - The best at home cat grooming',
  },
  description:
    'Glamour Félin is the best at home cat grooming, including nail trimming and shaving. Give your cat the glam it deserves in a stress-free environment: your home!.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-sky-800 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
