import React, { useState, useEffect, FC } from "react";
import className from "./Latest.module.css";
import classes from "./Latest.module.css";
import axios from "axios";

import { BsBook } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../hooks";

interface Props {
  latestBooks: any;
}

const CardCarousel: FC<Props> = ({ latestBooks }: any): JSX.Element => {
  const innerWidth = window.innerWidth;
  const [multiplier, setMultiplier] = useState(
    innerWidth > 1000 ? 3 : innerWidth > 730 ? 2 : 1
  );
  const [changeIndex, setChangeIndex] = useState(0);
  const state = useAppSelector((state) => state.books);

  const loading = state.isLoading;
  const error = state.error;

  type Data = {
    id?: number;
    title?: string;
    image?: string;
    posted_by?: string;
    reviews?: number;
    rating?: number;
    ratings?: number;
    date?: string;
    category?: string;
    publisher?: string;
    author?: string;
    description?: string;
    price?: any;
    lang?: string;
  };

  const [newCard, setNewCard] = useState<Data[]>([]);
  useEffect(() => {
    function handleWindowResize() {
      const { innerWidth } = window;
      setMultiplier(innerWidth > 1000 ? 3 : innerWidth > 730 ? 2 : 1);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    // console.log(changeIndex);
    // console.log(changeIndex * 3, changeIndex * 3 + 3 - 1);

    setNewCard(
      latestBooks.slice(
        changeIndex * multiplier,
        (changeIndex + 1) * multiplier
      )
    );
  }, [changeIndex, multiplier, latestBooks]);

  useEffect(() => {
    setChangeIndex(0);
  }, [multiplier]);

  const increase = () => {
    setChangeIndex((prevState) => {
      console.log(prevState, latestBooks.length / multiplier - 1);
      if (prevState < Math.ceil(latestBooks.length / multiplier) - 1)
        return (prevState += 1);
      else return 0;
    });
  };

  const decrease = () => {
    setChangeIndex((prevState) => {
      console.log(prevState, Math.ceil(latestBooks.length / multiplier) - 1);
      if (prevState <= 0) return Math.ceil(latestBooks.length / multiplier) - 1;
      else return (prevState -= 1);
    });
  };

  return (
    <>
      <>
        <div className={className.latest_books__container}>
          <h1 className={className.latest_section__title}>Latest books</h1>
          {error && (
            <div className={classes.error_message__container}>
              <div className={classes.error_message}>ERROR OCCURED!</div>
            </div>
          )}
          {loading ? (
            <div className={classes.loading_message__container}>
              <div className={classes.loading_message}>LOADING!...</div>
            </div>
          ) : (
            <>
              <div className={className.card_carousel__container}>
                {newCard?.map((card, index) => {
                  return (
                    <div key={index} className={className.card_big__container}>
                      <div className={className.card__container}>
                        <a className={className.card__link} href="">
                          <div className={className.card_image__container}>
                            <img
                              className={className.card_img}
                              src={card.image}
                              alt=""
                            />
                          </div>
                          <div
                            className={className.card_description__container}
                          >
                            <h2 className={className.card_title}>
                              {card.title}
                            </h2>
                          </div>
                          <div className={className.read_more__container}>
                            <BsBook size={20} color={"#d61c4e"} />
                            <a
                              className={className.source_anchor}
                              target="_blank"
                            >
                              <div className={className.read_more}>
                                Read more
                              </div>
                            </a>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              {latestBooks.length > 3 && (
                <div className={className.carousel__buttons}>
                  <FaChevronLeft
                    className={className.carousel_btn}
                    onClick={decrease}
                    size={20}
                    // color={"#d61c4e"}
                    style={{ cursor: "pointer" }}
                  />
                  <FaChevronRight
                    className={className.carousel_btn}
                    onClick={increase}
                    size={20}
                    // color={"#d61c4e"}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </>
    </>
  );
};
export default CardCarousel;
