import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Курс по программированию</h1>
            <div>
              <Link href="/" className="mr-4">Главная</Link>
              <Link href="/about">О курсе</Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-blue-600 text-white p-4 text-center">
          <p>© 2025 Курс по программированию</p>
        </footer>
      </body>
    </html>
  );
}