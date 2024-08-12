import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#features">Features</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
