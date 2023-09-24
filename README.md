# Dependencies

## Expo

npx create-expo-app rate-repository-app --template expo-template-blank@sdk-46

## react-native-web, react-dom and expo/webpack-config

npx expo install react-native-web@~0.18.7 react-dom@18.2.0 @expo/webpack-config@^0.17.0

## Fix vulnerabilities

npx npm-check-updates -u
npm install

## ESlint

npm install --save-dev eslint @babel/eslint-parser eslint-plugin-react eslint-plugin-react-native

```json
.eslintrc

{
    "plugins": ["react", "react-native"],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "@babel/eslint-parser",
    "env": {
        "react-native/react-native": true
    },
    "rules": {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off"
    }
}
```

## Add `lint` script to _package.json_ file

```json
{
  // ...
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "eslint ./src/**/*.{js,jsx} App.js --no-error-on-unmatched-pattern"  },
  // ...
}
```

## react-devtools

npm install react-devtools

## react-router-native

npm install react-router-native

## Formik

npm install formik

## Yup

npm install yup

## Dotenv

npm install dotenv

```ENV=development```

Import the library in the ```app.config.js``` file

```javascript
import 'dotenv/config';
export default {
   name: 'pura-vida-app',
   // rest of the configuration...
   extra: {
     env: process.env.ENV,
   },
};
```

## AsyncStorage

npx expo install @react-native-async-storage/async-storage

## Jest

npm install --save-dev jest jest-expo eslint-plugin-jest

Configuration of jest in the ```package.json``` file

```json
{
  // ...
  "scripts": {
    // other scripts...

    "test": "jest"
  },

  "jest": {
    "preset": "jest-expo",
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    },
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-router-native)"
    ]
  },
  // ...
}
```

Include jest plugin in the ```.eslintrc``` file

```json
"extends": ["eslint:recommended", "plugin:react/recommended", "plugin:jest/recommended"],
```

## React testing library

npm install --save-dev --legacy-peer-deps react-test-renderer@18.2.0 @testing-library/react-native @testing-library/jest-native

Create a file ```setupTests.js``` in the root directory with this content:

```javascript
import '@testing-library/jest-native/extend-expect';
```

Configure this file as a setup file in the Jest's configuration in the ```package.json``` file

```json
{
  // ...
  "jest": {
    "preset": "jest-expo",
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    },
    "transformIgnorePatterns": [
      "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*|react-router-native)"
    ],
    "setupFilesAfterEnv": ["<rootDir>/setupTests.js"]  }
  // ...
}
```

## Date-fns

npm install date-fns --save

## [React Native Paper](https://callstack.github.io/react-native-paper/)

npm install react-native-paper

Additionaly for ```iOS``` platform there is a requirement to link the native parts of the library

npx pod-install

If you're on a vanilla React Native project, you also need to install and link [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).

npm install react-native-vector-icons

The library has specified dedicated steps for each platform. Please follow their [installation guide](https://github.com/oblador/react-native-vector-icons#installation) in order to properly use icon fonts.

### Usage of React Native Paper

```javascript
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
```

### Customization

You can provide a custom theme to customize the colors, typescales etc. with the ```Provider``` component. Check the [Material Design 3 default theme](https://github.com/callstack/react-native-paper/blob/main/src/styles/themes/v3/LightTheme.tsx) to see what customization options are supported.