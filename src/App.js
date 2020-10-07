import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import DropDown from "./components/DropDown/DropDown";
import Header from "./components/Header/Header";
import Route from "./components/Route";
import Search from "./components/Search/Search";
import Translate from "./components/Transalate/Transalate";

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

const options = [
  { value: "red", label: "The colour red" },
  { value: "green", label: "The shade of Green" },
  { value: "blue", label: "Shade of Blue" },
];
function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
          dropDownLabel={"Select the Colour"}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/">
        <Accordion items={items} />
      </Route>
    </div>
  );
}

export default App;
