import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import HeaderWithIcon from "./HeaderWithIcon";
import { NavigationButtons } from "./LandingPage";

const SearchVideo = () => {
  return (
    <>
      <br />
      <Container textAlign="center">
        <Header>
          <HeaderWithIcon
            as={"h2"}
            headerText={"Video Search"}
            subheaderText={"Searches form Youtube API"}
          />
          <NavigationButtons btnName={"Image Search"} navigateTo={"/images"} />
        </Header>

        <Divider />
      </Container>
    </>
  );
};
export default SearchVideo;
