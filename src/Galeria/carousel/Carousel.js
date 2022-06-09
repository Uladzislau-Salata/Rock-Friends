import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CancelIcon from "@mui/icons-material/Cancel";
import "./Carousel.css";

export const Carousel = ({ roadToImg, indexImg, clickClose }) => {
  //const [pages, setPages] = useState("");
  const [index, setIndex] = useState(indexImg);

  let hideLeft = document.querySelector(".arrow-left");
  let hideRight = document.querySelector(".arrow-right");

  const removeArrow = (idx) => {
    if (
      hideLeft.className.includes("hideArrow") ||
      hideRight.className.includes("hideArrow")
    ) {
      hideLeft.classList.remove("hideArrow");
      hideRight.classList.remove("hideArrow");
    }
    if ((idx) < 1) {
      hideLeft.classList.add("hideArrow");
    

    }

    if ((idx) > 12) {
      hideRight.classList.add("hideArrow");
    }
  };

  useEffect(() => {
    setIndex(indexImg);
    
    
    if(indexImg === 0){
      if (
        hideLeft.className.includes("hideArrow") ||
        hideRight.className.includes("hideArrow")
      ) {
        hideLeft.classList.remove("hideArrow");
        hideRight.classList.remove("hideArrow");
      }
    hideLeft.classList.add("hideArrow");
    }
    if(indexImg === 13){
      if (
        hideLeft.className.includes("hideArrow") ||
        hideRight.className.includes("hideArrow")
      ) {
        hideLeft.classList.remove("hideArrow");
        hideRight.classList.remove("hideArrow");
      }
      hideRight.classList.add("hideArrow");
      }
    
  }, [indexImg]);
  //const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    
    setIndex(index - 1);
    removeArrow(index - 1);
  };

  const handleRigthArrowClick = () => {
    
    setIndex(index + 1);
    removeArrow(index + 1);

    
  };

  return (
    <div>
      <div className="main-container">
        <div className="window">
          <img src={roadToImg[index]} alt="" />

          <div className="arrow">
            <div onClick={handleLeftArrowClick} className="arrow-left">
              <ArrowBackIosIcon />
            </div>

            <div onClick={handleRigthArrowClick} className="arrow-right">
              <ArrowForwardIosIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="data-number">
        <div className="lb-number">Image {index + 1} of 14</div>
        <div className="lb-closeContainer" onClick={clickClose}>
          <CancelIcon className="lb-close" />
        </div>
      </div>
    </div>
  );
};
