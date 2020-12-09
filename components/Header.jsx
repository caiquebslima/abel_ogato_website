import Link from 'next/link'

export default function Header() {
  return (
    <header className="header col-lg-12">
      <Link href="/">
        <h1 className="header__title">
          <a>Abel, o Gato</a>
        </h1>
      </Link>
      {/* <ul className="header__nav">
          <li>
            <Link href="/musicas/correndo-atras">
              <a>Correndo Atrás dos Sonhos</a>
            </Link>
          </li>
          <li>
            <Link href="/musicas/clareira">
              <a>Clareira</a>
            </Link>
          </li>
          <li>
            <Link href="/musicas/arena">
              <a>Arena</a>
            </Link>
          </li>
          <li>
            <Link href="/musicas/reminiscencias">
              <a>Reminiscencias</a>
            </Link>
          </li>
          <li>
            <Link href="/musicas/pterodactilo">
              <a>Pterodáctilo</a>
            </Link>
          </li>
        </ul> */}
    </header>
  )
}
