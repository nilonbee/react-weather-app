import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  progressCircle: {
    top: 0,
    bottom: 0,
    margin: "auto",
    position: "absolute",
    left: 0,
    right: 0,
  },
});

export default function LoadingSkeleton() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progressCircle} color="inherit" />
    </div>
  );
}
