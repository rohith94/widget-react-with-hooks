import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Search from "./components/Search/Search";

const items = [
  {
    title: "What is React .?",
    content: "React is Front end JavaScript frameWork",
  },
  {
    title: "What is VueJS .?",
    content: "VueJS is Front end JavaScript frameWork",
  },
  {
    title: "What is React ..?",
    content: "React is Front end JavaScript frameWork",
  },
];

function App() {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}

export default App;
