import Link from 'next/link'
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className='navbar py-5'>
          <h1>Navbar</h1>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </nav>
    )
}