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
  - [As a user](#as-a-user)
- [News API Endpoint](#news-api-endpoint)
- [No UK data](#no-uk-data)
- [Changing the API key](#changing-the-api-key)
- [Redux & Redux Thunk](#redux--redux-thunk)
  - [Redux Action Flow](#redux-action-flow)
- [Redux Dev Tools](#redux-dev-tools)
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
* The News API endpoint used only has data for GB(Great Britain) not specfically the UK. Therefore used GB instead.

## Fulfilling User Stories
### As a user
When I visit the page
I want to see a list of country
So that I know which country are available

* Shows all available countries as a list of Buttons. So a User can see all the Available countries

## News API Endpoint

## No UK data

## Changing the API key

## Redux & Redux Thunk

### Redux Action Flow

## Redux Dev Tools

## Responsive Design

## Error State




## PR 

## Future Enhancements

* Add automated scripts using Cypress.

## Task Feedback