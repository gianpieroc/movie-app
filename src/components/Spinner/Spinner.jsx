import React from "react";
import { connect } from "react-redux";
import { BounceLoader } from "react-spinners";
import { isLoadingSelector } from "../../redux/selectors";

const css = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = ({ isLoading }) => (
  <BounceLoader
    css={css}
    sizeUnit={"px"}
    size={100}
    color={"#123abc"}
    loading={true}
  />
);

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state)
});

export default connect(mapStateToProps)(Spinner);
