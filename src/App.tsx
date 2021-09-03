import React from "react";

import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <Grid item container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item container>
        <Grid item xs={false} sm={2}></Grid>

        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>

        <Grid item xs={false} sm={2}></Grid>
      </Grid>
    </Grid>
  );
}

export default App;
