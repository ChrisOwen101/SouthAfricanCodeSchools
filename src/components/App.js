import React from "react";
import SimpleAppBar from "./AppBar";
import SchoolTable from "./SchoolTable";
import SideBar from "./SideBar";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";

const App = () => (
  <div>
    <SimpleAppBar />
    <Grid container>
      <Grid item xs={9}>
        <SchoolTable />
      </Grid>
      <Grid item xs={3}>
        <SideBar />
      </Grid>
    </Grid>
    <Footer />
  </div>
);

export default App;
