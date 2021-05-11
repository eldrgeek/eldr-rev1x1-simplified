import * as React from "react";
import Front from "./Front";
import Photobooth from "./Photobooth";
import { useQueryState } from "use-location-state";
import { setInvite } from "./firebase";
const Main = () => {
  const [page, setPageName] = React.useState("main");
  const [inviter] = useQueryState("invite", "");
  setInvite(inviter);
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
