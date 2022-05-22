import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Carousel.css";

export const Carousel = ({ roadToImg, indexImg }) => {
  //const [pages, setPages] = useState("");
  const [index, setIndex] = useState(indexImg);

  useEffect(() => {
    setIndex(indexImg);
  }, [indexImg]);
  //const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setIndex(index - 1);
  };

  const handleRigthArrowClick = () => {
    setIndex(index + 1);
  };

  return (
    <div className="main-container">
      <div className="arrow-left">
        <ArrowBackIosIcon className="arrow" onClick={handleLeftArrowClick} />
      </div>
      <div className="window">
        <img src={roadToImg[index]} alt="" />
      </div>
      <div>
        <ArrowForwardIosIcon
          className="arrow"
          onClick={handleRigthArrowClick}
        />
      </div>
    </div>
  );
};
