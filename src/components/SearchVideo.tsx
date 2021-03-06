import React, { useState } from "react";
import { Container, Divider, Header, Input } from "semantic-ui-react";
import HeaderWithIcon from "./HeaderWithIcon";
import { NavigationButtons } from "./LandingPage";

const SearchVideo = () => {
  const [SearchTerm, setSearchTerm] = useState<string>("");
  // const [ResponseData, setResponseData] = useState<any>(undefined);

  // const callSearchApi = async () => {
  //   const response = await axios.get("/search/photos", {
  //     method: "GET",
  //     baseURL: "https://api.unsplash.com",
  //     headers: {
  //       Authorization: "Client-ID lJ_gSbmudUdnmXMnzwKCmJ4a8_V5nD6q5fn_dgf-ab0",
  //     },
  //     params: { query: SearchTerm, page: 1, per_page: 12 },
  //   });
  //   // console.log(response.data.results);
  //   setResponseData(response.data.results);
  // };
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

        <form
          onSubmit={(event) => {
            event.preventDefault();
            // callSearchApi();
          }}
        >
          <Input
            fluid
            action={{
              color: "teal",
              labelPosition: "left",
              icon: "searchengin",
              content: "Search",
              // onClick: () => callSearchApi(),
            }}
            placeholder="Search..."
            onChange={(event, data) => {
              setSearchTerm(event.target.value);
              //   setSearchTerm(data.value);
            }}
            value={SearchTerm}
            // defaultValue="buildings"
          />
        </form>
        <div>
          <h3>CURRENTLY UNDER PROGRES</h3>
        </div>
      </Container>
    </>
  );
};
export default SearchVideo;
