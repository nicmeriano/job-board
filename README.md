## Job Board

Find entry level software positions posted on [Github Jobs](https://jobs.github.com/).

This project uses [Create React App v3](https://github.com/facebookincubator/create-react-app) and [netlify-lambda v1](https://github.com/netlify/netlify-lambda) together in a [Netlify Dev](https://github.com/netlify/netlify-dev-plugin) workflow.

## Project Setup

**Source**:  `src/lambda` is specified and can be changed in the `package.json` script: `"build:lambda": "netlify-lambda build src/lambda"`.

**Dist**: Each JavaScript file in there will be built for Netlify Function deployment in `/built-lambda`, specified in [`netlify.toml`](https://www.netlify.com/docs/netlify-toml-reference/).

## Babel/webpack compilation

All functions (inside `src/lambda`) are compiled with webpack using Babel, so you can use modern JavaScript, import npm modules, etc., without any extra setup.

## Local Development

Get things fired up by cloning the repo and doing the following

```bash
# Make sure you have the [Netlify CLI](https://github.com/netlify/cli) installed
npm i -g netlify-cli 
# install all dependencies
npm install 
## done every time you start up this project
ntl dev ## nice shortcut for `netlify dev`, starts up create-react-app AND a local Node.js server for your Netlify functions
```

This fires up [Netlify Dev](https://github.com/netlify/netlify-dev-plugin/), which:

- Detects that you are running a `create-react-app` project and runs the npm script that contains `react-scripts start`, which in this project is the `start` script
- Detects that you use `netlify-lambda` as a [function builder](https://github.com/netlify/netlify-dev-plugin/#function-builders-function-builder-detection-and-relationship-with-netlify-lambda), and runs the npm script that contains `netlify-lambda build`, which in this project is the `build:lambda` script.

You can view the project locally via Netlify Dev, via `localhost:8888`.

## Deployment

During deployment, this project is configured, inside `netlify.toml` to run the build `command`: `npm run build`.

For more information, visit [here](https://github.com/netlify/create-react-app-lambda)
