import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";

import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import image from "../../Assets/pexels-tahir-shaw-186980.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalContext } from "../../components/context/context";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/nilonbee">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(14, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(6, "auto"),
    backgroundColor: theme.palette.secondary.main,
  },
  box: {
    backgroundColor: "#f3e5f5",
    padding: theme.spacing(4, 2),
    borderRadius: 8,
    textAlign: "center",
    marginTop: "16vh",
  },
  form: {
    width: "80%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(6, 0, 2),
  },
  typography: {
    color: "#424242",
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const { loginWithRedirect, callProtectedApi } = useGlobalContext();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Box className={classes.box}>
            <Avatar className={classes.avatar}>
              <AcUnitRoundedIcon />
            </Avatar>
            <CssBaseline />
            <Typography
              component="h1"
              variant="h5"
              className={classes.typography}
            >
              Welcome to My Weather..
            </Typography>
            <Button
              onClick={() => callProtectedApi(loginWithRedirect())}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log-In
            </Button>
            <CssBaseline />
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
