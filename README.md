# CareerFoundry
A simple landing page made with ReactJS and Semantic UI components.

### Features
- Mobile responsive, tested up to 320px min-width
- Modular layout, can be easily integrated with other React code.
- Separation of concerns; services and API related functions are separated out. Smart (data) components minimized as a basic optimization
- Automatic currency detection through IP based geolocation.

### Next Steps
These would be on my agenda if more time would be permitted.

#### Immediate
- Add validations to data to prevent breakage in case of bad data (incorrect data format from backend, client's network errors etc)
- More meaningful unit tests to prevent breaking of features on addition of code.
- UI and components testing.
- Loader for when a dropdown is selected but API hasn't returned  because of slower network on client's end.

#### Later
- Automating test runner on PR raise with Travis
- Set up Codecov and maintain high coverage of code with tests.
- If codebase grows, separate the Styled Components in `./src/landing-page/common-styles.js` as per their respective components.
- Set up Redux and cache the Course information once it comes on the frontend.
- If the site grows, set up `staging` branch to serve as a point of testing before actually pushing code to master.

### Known Bugs
- When the dropdown is open, horizontal scroll creeps in. It vanishes when the dropdown is closed again.

### Installation Instructions
- Clone this repository
- Install npm packages: `npm install`
- Create a `.env` file in the project root and add a line to it: `REACT_APP_IPSTACK_API_KEY=<IPSTACK_API_KEY>` replacing with your API key.
- Run the local server with `npm start`
- Run the tests with `npm test`

### Directory Structrue
- `/src/landing-page`: Main app
- `/src/services`: Services and vanilla JS functions (API, GeoIP location)
- `/src/tests`: Various tests

### Important Files
- `/src/config-vars`: URLs and other constants used throughout the app
- `/src/landing-page/index.js`: Container component which links all the children components and services their data needs
- `/src/landing-page/components/*`: Dumb components rendered by landing-page.
- `src/landing-page/common-styles.js`: Common CSS (styled-components) used by all the components.