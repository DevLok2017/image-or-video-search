import React from "react";
import { Header, Icon } from "semantic-ui-react";

interface HeaderWithIconProps {
  as: string;
  headerText: string;
  subheaderText: string;
}

const HeaderWithIcon = (props: HeaderWithIconProps) => {
  return (
    <>
      <div>
        <Icon
          loading
          circular
          inverted
          size="big"
          color="teal"
          name="search"
          className="mt-2"
        />
      </div>

      <Header as={props.as} icon className="my-2">
        {props.headerText}
        <Header.Subheader>{props.subheaderText}</Header.Subheader>
      </Header>
    </>
  );
};

HeaderWithIcon.defaultProps = {
  as: "h2",
  headerText: "Header Text",
  subheaderText: "Subheader Text",
};

export default HeaderWithIcon;
