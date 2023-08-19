import NavBar from "./NavBar"
import '../globals.css'
import { Inter } from 'next/font/google'

export default function PagesLayout({
    children,
  }) {
    return (
      <section>
        <NavBar/>
        {children}
      </section>
    )
  }