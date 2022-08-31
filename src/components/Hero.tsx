import React, { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import axios from "axios";

const HeroSection = () => {
  type Data = {
    title: any;
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<Data[]>([]);
  const handleSearch = (e: any) => {
    e.stopPropagation();

    setSearchTerm(e.target.value);
  };

  async function fetchData() {
    const req = await axios.get(
      `http://libraria-online.herokuapp.com/search?title=${searchTerm}`
    );
    console.log(req.data.products);
    const data = req.data.products;
    setData(data.reverse());
  }

  const onSearchRemove = (e: any) => {
    // console.log(e);
    e.stopPropagation();
    setData([]);
  };

  const [indexNum, setIndexNum] = useState(5);

  const handleIndex10 = (e: any) => {
    e.stopPropagation();
    setIndexNum(10);
  };
  const handleIndex5 = (e: any) => {
    e.stopPropagation();
    setIndexNum(5);
  };

  return (
    <div className={classes.hero__container} onClick={onSearchRemove}>
      <div className={classes.hero__search__container}>
        <div className={classes.hero__title}>
          What book are you looking for?
        </div>
        <div className={classes.hero__description}>
          Not sure what to read next? Explore our catalog of Public Domain Books
          with Our Editors
        </div>
        <div className={classes.searchbtn__container}>
          <div className={classes.input__container}>
            <input
              type="text"
              placeholder="Search for your book.."
              className={classes.search__input}
              value={searchTerm}
              onChange={(e) => handleSearch(e)}
            />
            {data != null && (
              <div className={classes.search_dropdown__container}>
                {data.map((arr, index) => {
                  return (
                    index < indexNum && (
                      <div className={classes.searched_title__container}>
                        <div className={classes.searched_title}>
                          {arr.title}
                        </div>
                      </div>
                    )
                  );
                })}

                {data.length > 5 && (
                  <div className={classes.searched_title__container}>
                    <div
                      className={classes.searched_title}
                      style={{ backgroundColor: "aqua", cursor: "pointer" }}
                      onClick={indexNum > 5 ? handleIndex5 : handleIndex10}
                    >
                      {indexNum === 5 ? "See more" : "See less"}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className={classes.btn__container}>
            <div className={classes.search__button} onClick={fetchData}>
              Search
            </div>
          </div>
        </div>
      </div>
      <div className={classes.hero__img__container}>
        <img
          src={
            "https://media.istockphoto.com/photos/bookshelves-and-laptops-are-placed-on-the-library-deskelearning-class-picture-id1177967778?k=20&m=1177967778&s=612x612&w=0&h=ZN9cQR6jog3wcWDsB5bUIqLRi_pLCr1Er7p6UioAQ8E="
          }
          className={classes.hero__img}
          alt="hero__img"
        ></img>
      </div>
    </div>
  );
};

export default HeroSection;
