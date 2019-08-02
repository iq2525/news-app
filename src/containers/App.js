import React from "react";
import styled from "styled-components";
import TopStoriesPanel from "../components/TopStoriesPanel";
import CountrySelectorPanel from "../components/CountrySelectorPanel";
import { countries } from "../constants/app";

const Content = styled.section`
  width: 100%;
  padding: 10px;
`;
Content.displayName = "Content";

const App = ({ stories, isLoading, isError }) => {
  return (
    <div>
      <header>
        <h1>News App</h1>
      </header>

      <CountrySelectorPanel
        isLoading={isLoading}
        countries={countries}
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

export default App;