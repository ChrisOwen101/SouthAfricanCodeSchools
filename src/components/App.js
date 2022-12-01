import React from "react";
import SchoolTable from "./SchoolTable";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from '../theme/muiTheme';
import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

import { GoogleProvider, GoogleDataChart } from 'react-analytics-widget'

;(function(w, d, s, g, js, fjs) {
  g = w.gapi || (w.gapi = {})
  g.analytics = {
    q: [],
    ready: function(cb) {
      this.q.push(cb)
    }
  }
  js = d.createElement(s)
  fjs = d.getElementsByTagName(s)[0]
  js.src = "https://apis.google.com/js/platform.js"
  fjs.parentNode.insertBefore(js, fjs)
  js.onload = function() {
    g.load("analytics")
  }
})(window, document, "script")

const CLIENT_ID = '309370732010-h7ipk4aqoq573voavl06qi5bgekt0mcb.apps.googleusercontent.com';

// graph 1 config
const last30days = {
  reportType: "ga",
  query: {
    dimensions: "ga:date",
    metrics: "ga:pageviews",
    "start-date": "30daysAgo",
    "end-date": "yesterday"
  },
  chart: {
    type: "LINE",
    options: {
      // options for google charts
      // https://google-developers.appspot.com/chart/interactive/docs/gallery
      title: "Last 30 days pageviews"
    }
  }
}

// graph 2 config
const last7days = {
  reportType: "ga",
  query: {
    dimensions: "ga:date",
    metrics: "ga:pageviews",
    "start-date": "7daysAgo",
    "end-date": "yesterday"
  },
  chart: {
    type: "LINE"
  }
}

// analytics views ID
const views = {
  query: {
    ids: "ga:194237076"
  }
}



const App = () => (
  <GoogleProvider clientId={CLIENT_ID}>
    <GoogleDataChart views={views} config={last30days} />
    <GoogleDataChart views={views} config={last7days} />
  </GoogleProvider>
)


// if (process.env.REACT_APP_ANALYTICS_KEY) {
//   // Initalize analytics.
//   // For debugging can add: { testMode: true }
//   ReactGA.initialize(process.env.REACT_APP_ANALYTICS_KEY);
//   ReactGA.pageview('/home');
// } else {
//   // Setup dummy functions so that no errors are triggered.
//   console.log('Analytics disabled: no key.');
//   ReactGA.event = function () {};
//   ReactGA.pageview = function () {};
// }


// // Use history to assign urls to specific app states.
// const history = createBrowserHistory();
// // Set the current location to the homepage.
// // history.push('/', { schoolSelected: 'none' });

// // Listen for changes to the current location.
// //const unlisten = history.listen((location, action) => {
// //history.listen((location, action) => {
// //  // location is an object like window.location
// //  console.log(action, location.pathname, location.state);
// //});

// const App = () => (
//   <MuiThemeProvider theme={muiTheme}>
//     <div>
//       <Grid container>
//         <Grid item xs={12}>
//           <SchoolTable history={history} />
//         </Grid>
//         <Grid item xs={3} />
//       </Grid>
//       <Footer />
//     </div>
//   </MuiThemeProvider>
// );

export default App;
