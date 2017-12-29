# Jukeify

Example app to test out the new Spotify Web Playback API.

# Install

Install.

```
$ yarn
```

Set evironment variables.

```
$ cp .env.example .env
$ atom .env
```

```
PORT=3001
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
```

`PORT`: port to run the API server on. Leave it as 3001 for development.

`SPOTIFY_CLIENT_ID`: the client ID of the app you registered on the Spotify SDK
dashboard.

`SPOTIFY_CLIENT_SECRET`: the client secret of the app you registered on the Spotify SDK
dashboard.

`PROTOCOL`: set to `http` or `https` depending on which one you're using on your
server.

`HOSTNAME`: the server where you're hosting the app. E.g. `localhost:3000`,
`<your-app-name>.glitch.me`, `<your-website>.com`.

Run.

```
$ yarn start
```

## Production Build

```
$ NODE_ENV=production yarn start
```

## Test

Test everything

```
$ yarn test
```

Lint the code

```
$ yarn run lint:force
```

# Technical info

## Development Environment - Proxy
The development server actually runs two separate servers at the same time -- it
runs `react-scripts start` to run the react app on port 3000, and runs `nodemon`
on port 3001. `nodemon` and `react-scripts` allow for automatic building and
reloading of your code, making development super easy and fast.

The react server has been configured to forward any requests to `/api` to port
3001 -- effectively proxying any requests to the API server. This means that,
from the react app's and the browser's perspectives, everything's running on the
same server. This makes things a whole lot less complicated for dev purposes.

## Production environment - static app
When you run `yarn start` in production, it will first build the react app, and
then only run the main API server. It will serve the static react app files,
meaning that you get the same experience as with the development environment,
without the automatic rebuilding and reloading.
