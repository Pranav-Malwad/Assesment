import React, { useState, useEffect } from "react";
import "./carasoule.css";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Carasoule = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        prevCounter === data.length - 1 ? 0 : prevCounter + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNextButtonClick = () => {
    setCounter((prevCounter) =>
      prevCounter === data.length - 1 ? 0 : prevCounter + 1
    );
  };

  const handlePreviousButtonClick = () => {
    setCounter((prevCounter) =>
      prevCounter === 0 ? data.length - 1 : prevCounter - 1
    );
  };

  const data = [img2, img3, img4];

  return (
    <div className="carasoule">
      <div>
        <button className="btn prev" onClick={handlePreviousButtonClick}>
          &lt;
        </button>
      </div>

      <div className="img-holder">
        <img src={data[counter]} alt="img" />
      </div>

      <div>
        <button className="btn next" onClick={handleNextButtonClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carasoule;
