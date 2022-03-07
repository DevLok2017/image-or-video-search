import axios from "axios";
import React, { useState } from "react";
import { Container, Divider, Header, Input } from "semantic-ui-react";
import HeaderWithIcon from "./HeaderWithIcon";
import ImageCard from "./ImageCard";
import { NavigationButtons } from "./LandingPage";
import PaginationState from "./Pagination";

const SearchImage = () => {
  const [SearchTerm, setSearchTerm] = useState<string>("");
  const [ResponseData, setResponseData] = useState<any>(undefined);
  const [ActivePage, setActivePage] = useState<string | number>(1);
  const [TotalPages, setTotalPages] = useState<string | number>(1);

  const callSearchApi = async (page: number | string) => {
    const response = await axios.get("/search/photos", {
      method: "GET",
      baseURL: "https://api.unsplash.com",
      headers: {
        Authorization: "Client-ID lJ_gSbmudUdnmXMnzwKCmJ4a8_V5nD6q5fn_dgf-ab0",
      },
      params: {
        query: SearchTerm,
        page: page,
        per_page: 12,
      },
    });
    // console.log(response.data.results);
    setResponseData(response.data.results);
    setTotalPages(response.data.total_pages);
  };

  return (
    <>
      <br />
      <Container textAlign="center">
        <Header>
          <HeaderWithIcon
            as={"h2"}
            headerText={"Image Search"}
            subheaderText={"Searches form Unsplash API"}
          />
          <NavigationButtons btnName={"Video Search"} navigateTo={"/videos"} />
        </Header>
        <Divider />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            callSearchApi(ActivePage ? ActivePage : 1);
          }}
        >
          <Input
            fluid
            action={{
              color: "teal",
              labelPosition: "left",
              icon: "searchengin",
              content: "Search",
              onClick: () => callSearchApi(ActivePage ? ActivePage : 1),
            }}
            placeholder="Write search term and press enter / click search button"
            onChange={(event, data) => {
              setSearchTerm(event.target.value);
              //   setSearchTerm(data.value);
            }}
            value={SearchTerm}
            // defaultValue="buildings"
          />
        </form>

        {ResponseData && (
          <PaginationState
            activePage={ActivePage}
            totalPages={TotalPages}
            onPageChange={(e: any, d: any) => {
              setActivePage(d.activePage);
              callSearchApi(d.activePage);
            }}
          />
        )}

        {ResponseData && <ImageCard images={ResponseData} />}
      </Container>
    </>
  );
};
export default SearchImage;
