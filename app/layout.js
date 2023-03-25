import '../styles/globals.css'
import Header from './components/Header'

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first app with NextJs 13</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
