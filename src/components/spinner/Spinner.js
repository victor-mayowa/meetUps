import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 100px auto;
  /* border-color: #77002E; */
  /* text-align:center; */
`;

const Spinner = () => {
  return (
    <>
      <ClipLoader color={"77002E"} css={override} size={70} />
    </>
  );
};
export default Spinner;
