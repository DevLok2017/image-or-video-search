import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import HeaderWithIcon from "./HeaderWithIcon";

const LandingPage = () => {
  let navigate = useNavigate();

  return (
    <>
      <br />
      <Container textAlign="center">
        <Header>
          <HeaderWithIcon
            as={"h2"}
            headerText={"Images or Video Search"}
            subheaderText={"Searches form Unsplash and YouTube API"}
          />
        </Header>

        <Divider />

        <Segment
          padded
          raised
          size="massive"
          className="d-flex justify-content-center mx-auto my-5 w-75"
        >
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column verticalAlign="middle">
              <Button
                content="Search Images"
                primary
                onClick={() => navigate("/images")}
              />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Button
                content="Search Videos"
                secondary
                onClick={() => navigate("/videos")}
              />
            </Grid.Column>
          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>
      </Container>
    </>
  );
};
export default LandingPage;

interface NavigationButtonsProps {
  btnName: string;
  navigateTo: string;
}

export const NavigationButtons = (props: NavigationButtonsProps) => {
  let navigate = useNavigate();

  return (
    <div style={{ position: "absolute", top: 10, right: 10 }}>
      <Button
        content={props.btnName}
        floated="right"
        onClick={() => navigate(props.navigateTo)}
      />
      <Button
        basic
        content="Home"
        icon="home"
        labelPosition="left"
        color="teal"
        floated="right"
        onClick={() => navigate("/")}
      />
    </div>
  );
};
