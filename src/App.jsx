import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookFilter from "./components/BookFilter";
import BookList from "./components/BookList";
import fantasyBooks from "./books/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <main>
        <Welcome />
        <BookFilter />
        <BookList books={fantasyBooks} />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
