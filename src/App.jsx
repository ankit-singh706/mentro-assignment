import { useState, useEffect } from "react";
import "./App.css";
import data from "./assets/data.js";
import Rate from "./components/Ratings/Ratings";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

function App() {
  const [currentId, setCurrentId] = useState(1);
  const [user, setUser] = useState();

  useEffect(() => {
    data.map((detail) => {
      setUser(detail);
    });
  }, []);

  const forwardSliderHandler = () => {
    if (currentId >= 5) {
      setCurrentId(1);
    } else {
      setCurrentId((prev) => prev + 1);
    }
  };

  const backwardSliderHandler = () => {
    if (currentId < 1) {
      setCurrentId(1);
    } else if (currentId >= 2) {
      setCurrentId((prev) => prev - 1);
    } else {
      setCurrentId(5);
    }
  };

  return (
    <div className="main__container">
      <div className="main__text__content">
        {data.map((detail) => {
          if (currentId === detail.id)
            return (
              <>
                <div className="rating__holder">
                  <div className="rating">{detail.rating.toFixed(1)}</div>
                  <div className="rating__stars">
                    <Rate />
                  </div>
                </div>
                <div className="content__info">
                  <div className="content__name">{detail.name}</div>
                  <div className="content__desg">{detail.position}</div>
                  <div className="content__description">
                    {detail.description}
                  </div>
                </div>
                <div className="btn">Book a session</div>
              </>
            );
        })}
      </div>

      <div className="side__slider__content">
        <div className="slider">
          <div className="slider__line">
            <div className="slider__images">
              {data.map((detail) => {
                if (currentId === detail.id)
                  return (
                    <div className="slider__image">
                      <img src={detail.image} alt="" />
                    </div>
                  );
                if (currentId + 1 === detail.id)
                  return (
                    <div className="slider__image img3">
                      <img src={detail.image} alt="" />
                    </div>
                  );
                if (currentId - 1 == detail.id)
                  return (
                    <div className="slider__image img2">
                      <img src={detail.image} alt="" />
                    </div>
                  );
                if (currentId == 1)
                  return (
                    <div className="slider__image img2">
                      <img src="https://i.ibb.co/k1jJ716/Ankita.png" alt="" />
                    </div>
                  );

                if (currentId == 5)
                  return (
                    <div className="slider__image img3">
                      <img src="https://i.ibb.co/m8b9SwK/prankur.png" alt="" />
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
        <div className="slider__handles">
          <div
            className="left__handler"
            title="Forward"
            onClick={forwardSliderHandler}
          >
            <div className="arrow">
              <FaLongArrowAltUp />
            </div>
          </div>
          <div className="slider__display__picture">
            {data.map((detail) => {
              if (currentId == detail.id)
                return <img src={detail.image} alt="" />;
            })}
          </div>
          <div
            className="right__handler"
            title="Backward"
            onClick={backwardSliderHandler}
          >
            <div className="arrow">
              <FaLongArrowAltDown />
            </div>
          </div>
        </div>
        <div className="slider__display__name">
          {data.map((detail) => {
            if (currentId == detail.id) return <span>{detail.name}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
