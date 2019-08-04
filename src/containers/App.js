import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TopStoriesPanel from "../components/TopStoriesPanel";
import CountrySelectorPanel from "../components/CountrySelectorPanel";
import { COUNTRIES, LOADING_TEXT, ERROR_TEXT } from "../constants/app";
import {
  COLOUR_RED,
  COLOUR_WHITE,
  COLOUR_BLACK,
  COLOUR_LIGHT_GREY,
  BREAKPOINTS
} from "../constants/styling";
import { fetchStories } from "../actions/actions";
import PropTypes from "prop-types";

const Container = styled.section`
  margin: auto;
  min-width: ${BREAKPOINTS.small}
  max-width: ${BREAKPOINTS.large}
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
`;
Container.displayName = "Container";

const Content = styled.section`
  width: 100%;
  margin-bottom: 5px;
`;
Content.displayName = "Content";

const StatusBar = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  color: ${props =>
    props.isLoading
      ? COLOUR_BLACK
      : props.isError
      ? COLOUR_WHITE
      : COLOUR_BLACK};
  background-color: ${props =>
    props.isLoading
      ? COLOUR_LIGHT_GREY
      : props.isError
      ? COLOUR_RED
      : COLOUR_WHITE};
  height: 35px;
  margin-top: 5px;
`;
StatusBar.displayName = "StatusBar";

export const App = ({ stories, isLoading, isError, fetchStories }) => {
  let statusText = "";

  if (isLoading) {
    statusText = LOADING_TEXT;
  } else if (isError) {
    statusText = ERROR_TEXT;
  }

  return (
    <Container>
      <header>
        <h1>News App</h1>
      </header>

      <Content>
        <CountrySelectorPanel
          isLoading={isLoading}
          countries={COUNTRIES}
          isError={isError}
          fetchStories={fetchStories}
        />

        <StatusBar isLoading={isLoading} isError={isError}>
          {statusText}
        </StatusBar>

        {stories && <TopStoriesPanel stories={stories} />}
      </Content>

      <footer>
        <div>
          Powered by <a href="https://newsapi.org/">NewsAPI.org</a>
        </div>
      </footer>
    </Container>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      urlToImage: PropTypes.string
    })
  ),
  fetchStories: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { stories, isLoading, isError } = state;
  return {
    stories,
    isLoading,
    isError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStories: countryCode => dispatch(fetchStories(countryCode))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
