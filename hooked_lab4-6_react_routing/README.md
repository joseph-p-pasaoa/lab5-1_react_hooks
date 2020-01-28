# Fetching Cats and Dogs

We've already used the [Dog API](https://dog.ceo/dog-api/) to get the image of a single, completely random dog. However, today we're doing something a little different. Today, we are creating a full-fledged app to fulfill all of your pet-image-searching desires: both cats and dogs.

Use the [Cat API](https://thecatapi.com/) for you cat-fetching needs.

This app, naturally, will have _routes_.

## Part 1: Route Structure and How This App Is Different

For the most part we have been **centralizing state** (usually in App) and passing it down to child components via props. That's good! However, this app is a little different.

We are making the conscious decision that we **don't want** to centralize state. Instead of one big app, our app is going to be more like a couple of tiny apps inside different routes.

These apps will be:

- **Random dog image** `/dog/random` - We've done this one before. Load a random dog image. Include a button that loads a new random image when clicked.

- **Multiple random dogs** `/dog/random/:num` - This will render the number of random dog images requested for in the `num` URL parameter. No button required.

- **Random dog by breed** `/dog/:breed` - This will render a dog image of the specified breed.

- **Random cat image** `/cat/random`.  Load a random cat image. Include a button that loads a new random image when clicked.

- **Multiple random cats** `/cat/random/:num` - This will render the number of random cat images requested for in the `num` URL parameter. No button required.

### Bonus

- **Random amounts of both cats and dogs** `/all/random`. Load a random number(between 1 and 10) of cats AND dogs. (e.g 4 cats and 5 dogs).

### Final Notes
These routes will each **keep their own state**. They don't have to interact with each other, because (theoretically) a user looking for a picture of a bulldog does not need to see a picture of a random dog.

**If we are making this decision well in advance as a deliberate architectural move, it's fine to not have a centralized state.** We should just keep in mind that, should we try to add more granular functionality after the fact, we may be in for a bad time.

---

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
