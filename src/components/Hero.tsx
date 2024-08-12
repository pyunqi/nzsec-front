import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
            <h1>My Landing Page</h1>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
          <p>© 2024 My Landing Page</p>
        </footer>
      </body>
    </html>
  )
}
