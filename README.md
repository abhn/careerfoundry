# CareerFoundry
A simple landing page made with ReactJS and Semantic UI components.

### Features
- Mobile responsive, tested up to 320px min-width
- Modular layout, can be easily integrated with other React code.
- Separation of concerns; services and API related functions are separated out. Smart (data) components minimized as a basic optimization


### Next Steps
These would be on my agenda if more time would be permitted.

#### Immediate
- Add validations to data to prevent breakage in case of bad data (incorrect data format from backend, client's network errors etc)
- More meaningful unit tests to prevent breaking of features on addition of code.
- UI and components testing.

#### Later
- Automating test runner on PR raise with Travis
- Set up Codecov and maintain high coverage of code with tests.
- If codebase grows, separate the Styled Components in `./src/landing-page/common-styles.js` as per their respective components.
- Set up Redux and cache the Course information once it comes on the frontend.
- If the site grows, set up `staging` branch to serve as a point of testing before actually pushing code to master.

### Installation Instructions
- Clone this repository
- Install npm packages: `npm install`
- Create a `.env` file in the project root and add a line to it: `REACT_APP_IPSTACK_API_KEY=<IPSTACK_API_KEY>` replacing with your API key.
- Run the local server with `npm start`
- Run the tests with `npm test`