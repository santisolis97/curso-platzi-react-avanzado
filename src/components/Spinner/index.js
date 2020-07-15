import React from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import {DivSpinner} from './styles'
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;

`;
 
export class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <DivSpinner className="sweet-loading">
        <BeatLoader
          css={override}
          size={10}
          color={"#9D35B3"}
          loading={this.state.loading}
        />
      </DivSpinner>
    );
  }
}