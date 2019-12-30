# Debouncing with React Middleware

This repository accompanies the blog post, [Debouncing with Redux Middleware](https://typeofnan.dev/debouncing-with-redux-middleware/).

## Introduction

A common conundrum in today’s front-end framework world is knowing when and how to take certain asynchronous actions, such as persisting data to a backend. If we’re using a state management library like Redux, we might be further confused as to where without our Redux code we might put this logic.

## Exploring the Content of this Repository

This repository simple contains the `debounceMiddleware.js` file containing our middleware function. To incorporate this into an existing Redux app, you can use `applyMiddleware`. For example:

```javascript
const store = createStore(reducer, applyMiddleware(debounceMiddleware));
```
