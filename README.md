# React Native Multiplatform Demo with Mars Rover API

This project is a basic interface to browse the [NASA Mars Rover API](https://api.nasa.gov/) using [Expo](https://docs.expo.dev/workflow/expo-cli/), which enables a React Application to be bootstrapped with basic UI, designed for compilation and deployment to web, iOS, and Android.

#### React Functionality Used
- Navigation
- Context 
- Effects
- TypeScript support

#### *Why do this in React Native, why not with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)?*

The scope of this project made this a good candidate for this tooling and I wanted an excuse to use it, since I haven't gotten to the "Native" part of React in my day-job yet.

The React Native ecosystem has fantastic tooling for multi-platform development. Expo in particular has a great dev environment, with hot-reloading on web & mobile platforms in dev mode.

The use of web technology beyond browsers I feel really benefits developer experience, and users benefit extended choice in app selection. Targeting desktop platforms is possible too - see [React Native for Mac/Windows](https://microsoft.github.io/react-native-windows/).

In this case here with Expo, the basic UI elements are already provided for rapid bootstrapping *and* it then compiles to near-native mobile apps (some dependencies run on the JS thread). It's really cool!

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
- Proper typings, particularly for the Mars rover tab elements.
- Resiliency against API changes. For example, runtime type-checks. The four current rovers are currently hard-coded also for app boot. It would also be nice to query the API and *then* render tabs based on the Rovers returned, in case the rovers change.
- Better abstraction, error-handling, and organization of API requests.
- App state improvements. For example, the single app-level store could be split into a top-level store for rover selection, and then per-rover stores for rover settings.
- Lots of UI refinement. This project was created with React Native stock UI elements.