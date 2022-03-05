import React from "react";
import { Icon, Label } from "semantic-ui-react";

interface SpinnerProps {
  loadingText: string;
}

const Spinner = (props: SpinnerProps) => {
  return (
    <div>
      <Icon loading name="spinner" />
      <Label>{props.loadingText}</Label>
    </div>
  );
};

Spinner.defaultProps = {
  loadingText: "Loading ...",
};

export default Spinner;
