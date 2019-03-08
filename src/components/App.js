import React from "react";
import SimpleAppBar from "./AppBar";
import SchoolTable from "./SchoolTable";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";

const style = {
  padding: "20px 20px 20px 20px"
};

const App = () => (
  <div>
    <SimpleAppBar />
    <Grid container>
      <Grid item xs={9}>
        <SchoolTable style={style} />
      </Grid>
    </Grid>
    <Footer />
  </div>
);

export default App;
