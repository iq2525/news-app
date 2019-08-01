import React from "react";
import styled from "styled-components";
import TopStoriesPanel from "../components/TopStoriesPanel";
import CountrySelectorPanel from "../components/CountrySelectorPanel";

const Content = styled.section`
  width: 100%;
  padding: 10px;
`;
Content.displayName = "Content";

const countries = [
  {
    name: "Australia",
    code: "au"
  },
  {
    name: "France",
    code: "fr"
  },
  {
    name: "India",
    code: "in"
  },
  {
    name: "UK",
    code: "au"
  },
  {
    name: "USA",
    code: "au"
  }
];

const App = ({ stories, isLoading, isError }) => {
  return (
    <div>
      <header>
        <h1>News App</h1>
      </header>

      <CountrySelectorPanel isLoading countries={countries} />
      <TopStoriesPanel stories isLoading isError />

      <footer />
    </div>
  );
};

export default App;
