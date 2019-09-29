import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { BounceLoader } from "react-spinners";
import { isLoadingSelector } from "../../redux/selectors";

const SpinnerContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const css = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = ({ isLoading }) =>
  isLoading && (
    <SpinnerContainer>
      <BounceLoader
        css={css}
        sizeUnit={"px"}
        size={100}
        color={"#01d277"}
        loading={isLoading}
      />
    </SpinnerContainer>
  );

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state)
});

export default connect(mapStateToProps)(Spinner);
