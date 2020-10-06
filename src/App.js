import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import DropDown from "./components/DropDown/DropDown";
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
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <DropDown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
        dropDownLabel={"Select the Colour"}
      /> */}
      <Translate />
    </div>
  );
}

export default App;
