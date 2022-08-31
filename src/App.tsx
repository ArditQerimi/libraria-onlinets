import { useState, useEffect, useLayoutEffect } from "react";
import classes from "./App.module.css";

import axios from "axios";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useAppDispatch, useAppSelector } from "./hooks";
// import { GET_BOOKS, POST_BOOKS } from "./redux/types/types";
import { getBooksFetch } from "./redux/slice/books";
import { fetchBooksRequest } from "./redux/actions/actions";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
function App() {
  // const rowsOfBooks = (state: RootState) => state.books;
  // const rows = useSelector(rowsOfBooks);

  const rows = useAppSelector((state) => state.books);
  // console.log(rows.books)

  // const rows = useSelector((state) => state.books);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBooksRequest());
  }, []);

  // console.log(rows);
  const [edit, setEdit] = useState(false);

  const [book, setBook] = useState([]);
  const [cards, setCards] = useState([]);

  type Book = {
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

  const [latestBooks, setLatestBooks] = useState<Book[]>([]);

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [category, setCategory] = useState();
  const [publisher, setPublisher] = useState("");
  const [description, setDescription] = useState("");
  const [lang, setLang] = useState("");
  const [price, setPrice] = useState("");

  const categories = [
    {
      id: 1,
      category: [
        {
          id: 1,
          title: "Science",
        },
        {
          id: 2,
          title: "Religion",
        },
        {
          id: 3,
          title: "Fiction",
        },
        {
          id: 4,
          title: "Adventure",
        },
        {
          id: 5,
          title: "Fantasy",
        },
      ],
    },
    {
      id: 2,
      category: [
        {
          id: 6,
          title: "Classics",
        },
        {
          id: 7,
          title: "Comic",
        },
        {
          id: 8,
          title: "Horror",
        },
        {
          id: 9,
          title: "Action",
        },
        {
          id: 10,
          title: "Mystery",
        },
      ],
    },
  ];

  const handleAuthor = (e: any) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e: any) => {
    setCategory(e.target.value);
  };

  const handleImg = (e: any) => {
    setImg(e.target.value);
  };
  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e: any) => {
    setDescription(e.target.value);
  };

  const handlePublisher = (e: any) => {
    setPublisher(e.target.value);
  };

  const handleLang = (e: any) => {
    setLang(e.target.value);
  };

  const handlePrice = (e: any) => {
    setPrice(e.target.value);
  };

  // const handleSubmit = () => {

  // };

  const onNewCard = () => {
    const newBookObj = {
      id: Math.random(),
      title: title,
      image: img,
      posted_by: "Ardit Qerimi",
      reviews: 42,
      rating: 4.8,
      ratings: 493,
      date: "13/08/2022",
      category: category,
      publisher: publisher,
      author: author,
      description: description,
      price: price,
      lang: lang,
    };

    console.log(newBookObj);

    setLatestBooks([...latestBooks, newBookObj]);

    // axios
    //   .post("http://localhost:8080/", {
    //     id: Math.random(),
    //     title: title,
    //     image: img,
    //     posted_by: "Ardit Qerimi",
    //     reviews: 42,
    //     rating: 4.8,
    //     ratings: 493,
    //     date: "13/08/2022",
    //     category: category,
    //     publisher: publisher,
    //     author: author,
    //     description: description,
    //     price: price,
    //     lang: lang,
    //   })
    //   .then((res) => console.log(res.data));
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const req = await axios.get("http://localhost:8080/");
  //     setCards(req.data.books);
  //     setLatestBooks(req.data.books);
  //   }
  //   fetchData();
  // }, []);
  // console.log(latestBooks);
  return (
    <div className={classes.app}>
      <Navigation />
      <Main
        latestBooks={rows?.books}
        onNewCard={onNewCard}
        lang={lang}
        price={price}
        categories={categories}
        handleLang={handleLang}
        handlePrice={handlePrice}
      />
    </div>
  );
}

export default App;
