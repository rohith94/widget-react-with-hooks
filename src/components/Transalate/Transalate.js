import React, { useState } from "react";
import Convert from "../Convert/Convert";
import DropDown from "../DropDown/DropDown";

const options = [
  { value: "hi", label: "Hindi" },
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic" },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("Hello World .!");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
      </div>
      <DropDown
        dropDownLabel={"Select the language"}
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <div>
        <Convert text={text} language={language.value} />
      </div>
    </div>
  );
};

export default Translate;
