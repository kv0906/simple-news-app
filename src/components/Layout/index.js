import React from "react";
import {
  makeStyles,
  Box,
  CssBaseline,
  Typography,
  Container
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  }
}));
export default function Layout(props) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Typography align="left" paragraph variant="h4" color="primary">
            {props.heading}
          </Typography>
          {props.children}
        </Box>
      </Container>
    </>
  );
}
