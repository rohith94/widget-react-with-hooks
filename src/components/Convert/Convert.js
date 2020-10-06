import React, { useEffect, useState } from "react";
import axios from "axios";

const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState();
  const [debouncedText, setDebounceText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language,
            key: KEY,
          },
        }
      );
      //   console.log(data);

      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [debouncedText, language]);
  return (
    <div>
      <div>
        <h1 className="ui header">{translated}</h1>
      </div>
    </div>
  );
};

export default Convert;
