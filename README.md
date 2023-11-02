# React News Dashboard

A responsive React news dashboard that fetches and displays news articles from a provided API, allows users to filter by category, and enables real-time search functionality. This project is designed to replicate the functionality of a popular news app like Inshorts, with improved user interface and features

# Project Overview

The React News Dashboard is a web application that provides the following features:

- Fetches news data from a provided API.
- Displays news articles with headlines, icons, sources, and hashtags.
- Allows users to filter articles by category.
- Enables real-time search based on user input.


# Installation

In order to run the app, use the following code after initializing npm 

### `npm run dev`

# Features

## 1. Fetch News Data

- The app fetches news data from the provided API endpoint: API Endpoint.


## 2. Display News Articles

The news articles are displayed with the following information:

- Headline
- News Icon
- Source
- Hashtags


## 3. Category Filter

Implemented a category filter at the top of the dashboard.

Categories include, but are not limited to:
- Entertainment
- Sports
- Global
- Technology
- Health, etc.

Selecting a category displays news articles only from that category.

## 4. Search Filter

- Added a search filter input field at the top of the dashboard.
- Users can search for news articles using keywords.
- The displayed articles update in real-time based on the search query.

## 5. Styling

- Applied appropriate CSS styles to make the dashboard visually appealing.
- Ensured the design is responsive for both desktop and mobile devices.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
