import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";

function Header() {
  let header;
  document.onscroll = function () {
    if (!header) {
      header = document.querySelector(".showing");
    }
    let scroll = window.scrollY;

    if (scroll > 0) {
      header.classList.add("header_back");
    } else {
      header.classList.remove("header_back");
    }
  };

  const openBlock = () => {
    if (!header) {
      header = document.querySelector(".showing");
    }

    return header.classList.toggle("open");

    /*if(openHeader.className.includes('open')){
      return openHeader.classList.remove("open");
    }else{
      return openHeader.classList.add("open");
    }
    */
    /* <iframe
          src="https://www.facebook.com/plugins/group.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2Fayearofrunning%2F&width=280&show_metadata=false&height=239&appId"
          width="280"
          height="239"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>*/
  };

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
      <div className="facebook-rockFriends">
        <div>
          <FacebookIcon  sx={{ fontSize: 50 }} 
          color="primary"/>
        </div>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/rock.friends.warszawa/"
          data-tabs="timeline, events, messages"
          data-width="340"
          data-height="500"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/rock.friends.warszawa/"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/rock.friends.warszawa/">
              Rock Friends
            </a>
          </blockquote>
        </div>
      </div>
    </header>
  );
}

export default Header;
