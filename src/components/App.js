import React from "react";
import SchoolTable from "./SchoolTable";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from '../theme/muiTheme';

const App = () => (
  <MuiThemeProvider theme={muiTheme}>
    <div>
      <Grid container>
        <Grid item xs={12}>
          <SchoolTable />
        </Grid>
        <Grid item xs={3} />
      </Grid>
      <Footer />
    </div>
  </MuiThemeProvider>
);

export default App;
