import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";



function Header() {
  let header;
  
  
  const [isScriptLoaded, setisScriptLoaded] = useState(false);
  //Подключение facebook SDK
 const url1 = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0&appId=5238127952917299&autoLogAppEvents=1';
     
 async function fetchAsync() {

  const sdkJs = document.createElement("script");

  sdkJs.src = url1;
  sdkJs.async = true;
  sdkJs.defer = true;
  sdkJs.crossorigin = "anonymous";
  sdkJs.nonce = "bZt35TIA";
  sdkJs.onload = () => { 
    setisScriptLoaded(true)
  };
  document.head.appendChild(sdkJs);


  // const response = await import(url1);
  // console.log(response);
 
  /*return new Promise(resolve => {(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));    
});*/
 }
 if(isScriptLoaded !== true){
 fetchAsync();
 }
  //---------------------------

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

    /* 
   подключение facebook sdk
   <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0&appId=5238127952917299&autoLogAppEvents=1"
      nonce="bZt35TIA"
    ></script>*/

   
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
      {isScriptLoaded ? 
      <div className="facebook-rockFriends" >
        <FacebookIcon sx={{ fontSize: 50 }} color="primary" />

        <div
          className="fb-page"
          data-href="https://www.facebook.com/rock.friends.warszawa/"
          data-tabs="timeline, events, messages"
          data-width="350"
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
      : <h2>Loading</h2>}

      
    </header>
  );
}

export default Header;
