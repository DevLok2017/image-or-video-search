import React from "react";
import "./App.css";
import HeaderWithIcon from "./components/HeaderWithIcon";
import { Divider } from "semantic-ui-react";

const App = () => {
  return (
    <div className="App">
      <header className="text-center">
        <HeaderWithIcon
          as={"h2"}
          headerText={"Images or Video Search"}
          subheaderText={"Searches form Unsplash and YouTube API"}
        />
      </header>
      <Divider />
    </div>
  );
};

export default App;
