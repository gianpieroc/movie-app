import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {BounceLoader} from "react-spinners";
import {isLoadingSelector} from "../../redux/selectors";
import {spinnerCss, SpinnerContainer} from "./Spinner.styled";

const Spinner = ({isLoading}) =>
  isLoading && (
    <SpinnerContainer data-testid="spinner-container">
      <BounceLoader
        css={spinnerCss}
        sizeUnit={"px"}
        size={100}
        color={"#01d277"}
        loading={isLoading}
      />
    </SpinnerContainer>
  );

Spinner.propTypes = {
  isLoading: PropTypes.bool
};
const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state)
});

export default connect(mapStateToProps)(Spinner);
