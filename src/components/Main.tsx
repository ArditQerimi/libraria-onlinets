import React, { useState, useEffect, FC } from "react";
// import Latest from "./Latest";
import Hero from "./Hero";
// import Inputs from "./Inputs";
import axios from "axios";
import Latest from "./Latest";
import Books from "./Books";
import Inputs from "./Inputs";

interface Props {
  latestBooks: any;
  onNewCard: any;
  categories: any;
  lang: any;
  price: any;
  handleLang: any;
  handlePrice: any;
}

const Main: FC<Props> = ({
  latestBooks,
  onNewCard,
  categories,
  lang,
  price,
  handlePrice,
  handleLang,
}: any): JSX.Element => {

  return (
    <div>
      <Hero />
      <Latest latestBooks={latestBooks.slice(-9).reverse()} />
      <Books
        latestBooks={latestBooks.slice(0).reverse()}
        categories={categories}
        price={price}
        lang={lang}
        handleLang={handleLang}
        handlePrice={handlePrice}
      />
      <Inputs />
    </div>
  );
};

export default Main;
