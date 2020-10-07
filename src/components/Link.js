import React from "react";

const Link = ({ href, className, children }) => {
  const onClickLink = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    //Eveent to notify about navigation change
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <div>
      <a onClick={onClickLink} className={className} href={href}>
        {children}
      </a>
    </div>
  );
};

export default Link;
