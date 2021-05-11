import * as React from "react";
import Front from "./Front";
import Photobooth from "./Photobooth";

const Main = () => {
  const [page, setPageName] = React.useState("main");
  const setPage = (name) => {
    setTimeout(() => window.scrollTo(0, 0), 400);
    setPageName(name);
  };
  switch (page) {
    case "main":
      return <Front setPage={setPage} bg="black" color="white" />;
    case "photobooth":
      return <Photobooth setPage={setPage} />;
    default:
      return "no page specified";
  }
};

export default Main;
