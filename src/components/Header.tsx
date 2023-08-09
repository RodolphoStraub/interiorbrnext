import Link from 'next/link'

function Header() {
  return (
    <div className="header">
      <ul className="bar">
        <li>
          <Link className="interiorBr" href="/">
            InteriorBr
          </Link>
        </li>
        <li>
          <Link className="sobre" href="/sobre">
            Sobre
          </Link>
        </li>
        <li>
          <Link className="trabalhos" href="/trabalho">
            Trabalhos
          </Link>
        </li>
        <li>
          <Link className="processo" href="/#Processo">
            Processo
          </Link>
        </li>
        <li>
          <Link className="opinioes" href="/#Opinioes">
            Opiniões
          </Link>
        </li>
        <li>
          <Link className="contato" href="/#Contato">
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
