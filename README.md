# Web Thing Starter

Use this as a starting point for any [Mozilla IoT Node Thing](https://github.com/mozilla-iot/webthing-node).

Based on [Express Starter](https://github.com/meech-ward/express-starter)

## Getting Started

Run `gulp` to start nodemon and babel. Then modify the files in the `src` directory using any ESNext features.

## Gulp

Gulp is watching the src directory for any changes. When a file is created, updated, or deleted; it's counterpart is created, updated, or deleted in the dist directory. All code in the src directory is transpiled using babel, so go nuts with new unsupported js features. nodemon is watching the files in the dist directory, so this will trigger the server to restart.

I've found this solution to be one of the fastest for getting babel and nodemon working with an express app.