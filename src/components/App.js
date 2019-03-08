import React from "react";
import SimpleAppBar from "./AppBar";
import SchoolTable from "./SchoolTable";
import Grid from "@material-ui/core/Grid";

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
  </div>
);

export default App;
