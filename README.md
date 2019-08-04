<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false github} -->

#News App

<!-- code_chunk_output -->

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
- [Styled Components](#styled-components)
- [Responsive Design](#responsive-design)
- [Error State](#error-state)
- [PR](#pr)
- [Future Enhancements](#future-enhancements)
- [Task Feedback](#task-feedback)

<!-- /code_chunk_output -->

## Description

Created a News App that will allow you to see the Top 5 News stories from Australia, France, India, UK and USA.

## Software Requirements
This has been tested on:

* Node v10.16.0
* Chrome Browser v75

Should work on any version of Node >= 10 and most modern Web browsets.

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

This will show you all the components used in the app in their different states - e.g. Loading state.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Task Assumptions
* The top 5 stories shown can be from any news source.
* The entire app is only required in the English language.
* The News API endpoint only has data for GB(Great Britain) not specfically the UK. Therefore used GB instead.

## Fulfilling User Stories
### Story 1
```
When I visit the page
I want to see a list of country
So that I know which country are available
```
Shows all available countries as a list of Buttons. So a User can quickly and easily see all available Countries.

### Story 2
```
As a user
When I select a country
I want to see the top 5 news headlines
So that I know what the is happening in the country I selected
```
The app allows the user to click a Country button that will then load in Top 5 stories for that country.

## News API Endpoint
This app uses the [News API](https://newsapi.org/) endpoint.

## Changing the News API key
Edit the following in the **.env** file:
```
REACT_APP_API_KEY
```

## Redux & Redux Thunk
[Redux](https://redux.js.org/) & [Redux Thunk](https://github.com/reduxjs/redux-thunk) to manage global state and async function calls

### Redux Action Flow
1. User selects a country.
2. This fires a REQUEST_STORIES action.  This sets 'isLoading=true' in Redux state.
3. An 'fetch 'async call is made to News API to get the top 5 stories.
4. If success, a FETCH_SUCCESS action is fired.
5. If error, a FETCH_ERROR action is fired.

## Redux Dev Tools
This app supports [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) for Chrome.  I recommend installing this to see the Redux global state and data flow.

## Styled Components
React Components were styled with [Styled Components](https://www.styled-components.com/)

## Responsive Design
The App is responsive so that it works on different screen sizes.

Minimum screen width is: 320px,

## Error State
The App displays an error if it cannot connect to the News API endpoint.

## PR 

## Future Enhancements

* Add automated scripts using Cypress.

## Task Feedback
