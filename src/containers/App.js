import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TopStoriesPanel from "../components/TopStoriesPanel";
import CountrySelectorPanel from "../components/CountrySelectorPanel";
import { COUNTRIES } from "../constants/app";

const Content = styled.section`
  width: 100%;
  padding: 10px;
`;
Content.displayName = "Content";

export const App = ({ stories, isLoading, isError }) => {
  return (
    <div>
      <header>
        <h1>News App</h1>
      </header>

      <CountrySelectorPanel
        isLoading={isLoading}
        countries={COUNTRIES}
        isError={isError}
      />
      {stories && (
        <TopStoriesPanel
          stories={stories}
          isLoading={isLoading}
          isError={isError}
        />
      )}

      <footer />
    </div>
  );
};

const mapStateToProps = state => {
  const { stories, isLoading, isError } = state;
  return {
    stories,
    isLoading,
    isError
  };
};

export default connect(mapStateToProps)(App);
