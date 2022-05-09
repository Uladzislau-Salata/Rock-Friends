import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";

function Header() {
  document.onscroll = function () {
    let scroll = window.scrollY;
    var header = document.querySelector(".showing");
    if (scroll > 0) {
      header.classList.add("header_back");
    } else {
      header.classList.remove("header_back");
    }
  };

  function openBlock() {
    var openHeader = document.querySelector(".showing");
    //console.log('dfgdf');
   
    if(openHeader.className.includes('open')){
      return openHeader.classList.remove("open");
    }else{
      return openHeader.classList.add("open");
    }
    
  }

  return (
    <header id="header">
      <div className="header">
        <nav>
          <div className="menu-icon">
            <MenuIcon
              onClick={openBlock}
              fontSize="large"
              sx={{ color: grey[50] }}
            />
          </div>
          <div>
            <ul className="showing">
              <li>
                <a href="#header" id="Rock_Friends">
                  RockFriends
                </a>
              </li>

              <li>
                <a href="#menu" id="Menu">
                  Menu
                </a>
              </li>

              <li>
                <a href="#galeria" id="Galeria">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#kontact" id="Kontakt">
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
