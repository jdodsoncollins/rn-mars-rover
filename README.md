# React Native Multiplatform Demo with Mars Rover API

This project is a basic interface to browse the [NASA Mars Rover API](https://api.nasa.gov/) using [Expo](https://docs.expo.dev/workflow/expo-cli/), which enables a React Application to be bootstrapped with basic UI, designed for compilation and deployment to web, iOS, and Android.

#### Features Used
- Navigation
- Context 
- Effects
- TypeScript support
- Fetch
- [React Native Elements](https://reactnativeelements.com/) components

#### *Why do this in React Native, why not with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)?*

React Native can work on web too! [Twitter is a promenent example](https://giuseppegurgone.com/twitter-html/). 

The scope of this project made this a good candidate for this tooling and I wanted an excuse to use it, since I haven't gotten to use the "Native" part of React in my day-job as much as I'd like. Outside of the build & UI layer, all other typical React patterns are just as applicable here. Trying RN when already familiar with React is not a big leap and more like using an extremely opinionated UI library on top of React.

The React Native ecosystem has fantastic tooling for multi-platform development, especially so in the past year. Expo in particular has a great dev environment, with hot-reloading on web & mobile platforms in dev mode.

The use of web technology beyond browsers I feel really benefits developer experience, and users benefit extended choice in app selection. Targeting desktop platforms is possible too - see [React Native for Mac/Windows](https://microsoft.github.io/react-native-windows/).

### **Prerequisites**
- Node 16 (Node 17 may show errors. [Node Version Manager](https://github.com/nvm-sh/nvm) is highly recommended)
- Yarn
1. From project root directory, run `yarn`
2. run `cp .env_sample .env` to popilate your env file. *For demo purposes, my own free NASA API key is already present though I'd never do this in a normal environment. With great power comes great responsibility.*

### **Installation instructions for dev**
1. `npx expo start`
2. Then browse to the local-host webpage and choose your platform. You should see a terminal output prompting you to press `w` for web, and so on.
   
For mobile development, you'll also want the Expo App for [iOS](https://apps.apple.com/us/app/expo-go/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

### **Installation instructions for building**
1. `npx expo web` or `npx expo ios` or `npx expo android` 

If you choose to target iOS or Android for building, respective development applications for each platform need to already be installed.

### **Areas of improvement**
This project was intentionally timeboxed. Given more time, I'd focus on the following for improvement
- Useful unit tests! 
- Environment variables are tricky in this React Native project and I don't have time to invetigate a good solution. I see them intermittenly fail, so I have hardcoded them in `fetch.ts` as a fallback, to guard against this for others running the project.
- Proper typings, particularly for the Mars rover tab elements.
- Resiliency against API changes. For example, runtime type-checks. The four current rovers are currently hard-coded also for app boot. It would also be nice to query the API and *then* render tabs based on the Rovers returned, in case the rovers change.
- Better abstraction, error-handling, and organization of API requests.
- App state improvements. For example, the single app-level store could be split into a top-level store for rover selection, and then per-rover stores for rover settings.
- Lots of UI refinement. I have a good working knowledge of CSS and UI best practices, and this project incorporates no custom styling of mine, beyond basic component placement.