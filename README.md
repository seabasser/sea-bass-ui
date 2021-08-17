# Sea Bass UI

## Requirements

This projects requires node 14+

## Running the project

1. `git clone git@github.com:seabasser/sea-bass-ui.git`
2. `yarn install`
3. `yarn start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

---
### Starting

`yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

`yarn start:prod`

Builds the app in production mode and serves it.

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.


---

### Testing

`yarn test`

Runs the React Testing Library tests. All tests will be found in a `__tests__` folder with a file named `foo.test.tsx`.

Options:
* `yarn test -u` will update the snapshots

---

### Linting

`yarn lint`

Runs the linter, will output any errors in the log.

Options:

* `yarn lint:fix` will fix any/all linting errors that eslint can fix automatically.

---

### Deploy

`yarn deploy`

Will run the linter, fix any errors, and then run the build. This is useful for CI/CD tooling before deploying to prod.

---

## Additional READMEs

Many folders have additional README's in them on usage. Take a look around!
