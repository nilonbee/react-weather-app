import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

import { useGlobalContext } from "../context/context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    fill: "white !important",
    listStyle: "none",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    color: alpha(theme.palette.text.primary, 0.75),

    marginLeft: 0,
    minWidth: 300,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },minWidth: 90,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const { handleOnChange, loadOptions, search } = useGlobalContext();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to={"/"}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <ExitToAppOutlinedIcon className={classes.link} />
            </IconButton>
          </Link>

          <Typography className={classes.title} variant="h6" noWrap>
            Log-Out
          </Typography>
          <AsyncPaginate
            placeholder="Search for city to know Weather"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            className={classes.search}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
