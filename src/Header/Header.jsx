import "./Header.css";

function Header() {
  return (
    <header id="header">
      <div className="header">
        <nav>
          <div className="menu">
            <ul className="showing">
              <li>
                <a href="#header" id="Rock_Friends">
                  RockFriends
                </a>
              </li>

              <li>
                <a href="##" id="Menu">
                  Menu
                </a>
              </li>

              <li>
                <a href="#galeria" id="Galeria">
                  Galeria
                </a>
              </li>
              <li>
                <a href="##" id="Kontakt">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="inner">
          <h2>
            <strong>
              Rock
              <br />
              Friends
            </strong>
          </h2>
          <p>
            Rock Friends — это атмосфера рок-н-ролла в самом сердце Варшавы.
            <br />
            Широкий выбор алкоголя и коктейлей, легкие закуски и много хорошей
            музыки.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
