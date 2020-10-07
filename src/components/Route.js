import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      console.log("location changed");
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      //removing eventlistner if component is unmounted
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  //   useEffect(() => {}, [currentPath]);
  return currentPath === path ? children : null;
};

export default Route;
