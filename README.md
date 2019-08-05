<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false github} -->

# News App

<!-- code_chunk_output -->

- [News App](#news-app)
  - [Description](#description)
  - [Software Requirements](#software-requirements)
  - [Install App](#install-app)
  - [Run App](#run-app)
  - [Run tests](#run-tests)
  - [React Storybook](#react-storybook)
  - [Create React App](#create-react-app)
  - [Task Assumptions](#task-assumptions)
  - [Fulfilling User Stories](#fulfilling-user-stories)
    - [Story 1](#story-1)
    - [Story 2](#story-2)
  - [News API Endpoint](#news-api-endpoint)
  - [Changing the News API key](#changing-the-news-api-key)
  - [Redux & Redux Thunk](#redux--redux-thunk)
    - [Redux Action Flow](#redux-action-flow)
  - [Redux Dev Tools](#redux-dev-tools)
  - [React Component Design](#react-component-design)
    - [Container Component connected to Redux - App.js](#container-component-connected-to-redux---appjs)
    - [Presentation Components](#presentation-components)
  - [Styled Components](#styled-components)
  - [Responsive Design](#responsive-design)
  - [Enzyme for React Unit Testing](#enzyme-for-react-unit-testing)
  - [Error State](#error-state)
  - [Git hooks](#git-hooks)
  - [Pull Request](#pull-request)
  - [Future Enhancements](#future-enhancements)
  - [Task Feedback](#task-feedback)

<!-- /code_chunk_output -->

## Description

Created a News App that will allow you to see the Top 5 News stories from Australia, France, India, UK and USA.

## Software Requirements
This has been tested on:

* Node v10.16.0
* Chrome Browser v75

Should work on any version of Node >= 10 and most modern Web browsers.

## Install App
Clone the repository, enter the directory and install dependencies:
```
git clone git@github.com:iq2525/news-app.git
cd news-app
npm install
```
## Run App
```
npm start
```
In your browser, go to: http://localhost:3000/

## Run tests
Unit tests are written to cover the entire app.

You can run all the tests using:
```
npm test
```

## React Storybook
The components were designed and developed using [React Storybook](https://storybook.js.org/).

You can run React Storybook using:
```
npm run storybook
```

This will show you all the components used in the app and in their different states - e.g. Loading & Error states.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Task Assumptions
* The top 5 stories shown can be from any news source.
* The entire app is only required in the English language.
* The News API endpoint only has data for GB(Great Britain) and not specfically for the UK. Therefore used GB instead.
* Not sure how the Pull Request should be created.  So raised one from the 'master' to 'release' branch
## Fulfilling User Stories
### Story 1
```
When I visit the page
I want to see a list of country
So that I know which country are available
```
The app shows all available countries as a list of Buttons. So a User can quickly and easily see all available Countries.

### Story 2
```
As a user
When I select a country
I want to see the top 5 news headlines
So that I know what the is happening in the country I selected
```
The app allows the user to click a Country button that will then load the Top 5 stories for that country.

## News API Endpoint
This app uses the [News API](https://newsapi.org/) endpoint.

## Changing the News API key
The App is configured to use my News API endpoint key.

If you wish to change this, edit the following in the **'.env'** file:
```
REACT_APP_API_KEY
```

## Redux & Redux Thunk
[Redux](https://redux.js.org/) & [Redux Thunk](https://github.com/reduxjs/redux-thunk) to manage global state and async function calls

### Redux Action Flow
1. User selects a country.
2. This fires a REQUEST_STORIES action.  This sets 'isLoading=true' in Redux state.
3. A 'fetch 'async call is made to News API to get the top 5 stories.
4. If success, a FETCH_SUCCESS action is fired.
5. If error, a FETCH_ERROR action is fired.

## Redux Dev Tools
This app supports [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) for Chrome.  I recommend installing this to see the Redux global state and data flow.

## React Component Design
### Container Component connected to Redux - App.js
The App component is connected to Redux.  This passes data down to its child components.  This means we have to connect Redux only in one place.

### Presentation Components 
All other components are Presentation components.  Which only accept data passed down via props. - E.g. CountrySelectorPanel, CountryButton.

## Styled Components
React Components were styled with [Styled Components](https://www.styled-components.com/)

## Responsive Design
The App is responsive so that it works on different screen sizes.

Minimum screen width is: 320px,

## Enzyme for React Unit Testing
This App used [Enzyme](https://airbnb.io/enzyme/) for testing the React components.

## Error State
The App displays an error if it cannot connect to the News API endpoint.

## Git hooks
Using [Husky](https://github.com/typicode/husky) to set up Git hooks.

When a commit is done, the following is always run:
```
npm test
npm run eslint

```

## Pull Request
Not sure how the Pull Request should be created.  So raised one from the 'master' to 'release' branch:

Link to PR here: [Github Pull Requests](https://github.com/iq2525/news-app/pulls)

## Future Enhancements
* Support multiple languages
* Connect to the endpoint via a Proxy so that the API key is hidden.
* Add automated scripts using Cypress.

## Task Feedback
I enjoyed working on this task as it allowed you to use a variety of skills such as making async calls and styling.  

Also, the fact that the task left the User Interface up to me, meant there is lots of different to do this task.  I enjoyed using React Storybook to try out various designs.

I used a TDD approach. The area that took the longest to write tests for was the Redux Thunk async calls.  

I really like the idea of using Atomic commits. As it helped me break down my work into smaller increments.

I was unsure how you wanted me to raise the PR. So I made an assumption and raised one from the 'master' to 'release' branch.