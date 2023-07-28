
import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
        <div className="logo">
            <h1>SCS</h1>
        </div>

        <Link href="/">Anasayfa</Link>
        <Link href="/hakkimizda">Hakkımızda</Link>
        <Link href="/bloglar">Bilgi Listesi</Link>
         
    </nav>
  )
}
