import React from "react";
import Link from "../Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordian
      </Link>
      <Link href="/list" className="item">
        Wiki Search
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
      <Link href="/dropdown" className="item">
        DropDown
      </Link>
    </div>
  );
};

export default Header;
