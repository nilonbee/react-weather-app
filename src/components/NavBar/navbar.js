import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

import { useGlobalContext } from "../context/context";
import { FullscreenExitOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  avatar: {
    margin: "auto !important",
    width: theme.spacing(4),
    height: theme.spacing(4),
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
  card: {
    display: "flex",
    flexDirection: "column",
    margin: "0 1px !important",
    padding: 1,
    backgroundColor: "inherit !important",
    height: theme.spacing(6),
  },
  name: {
    color: alpha(theme.palette.common.white, 1),
    fontSize: 12,
    wrhiteSpace: 'normal',
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    color: alpha(theme.palette.text.primary, 0.75),
    minWidth: 430,
    [theme.breakpoints.up("sm")]: {
      margin: "auto !important",
      marginLeft: theme.spacing(1),
      width: "auto",
     
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        margin: "auto !important",
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
  },
  inputRoot: {
    color: "inherit",
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const { handleOnChange, loadOptions, search, user, isAuthenticated } =
    useGlobalContext();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
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
          <AsyncPaginate
            placeholder="Search for city to know Weather"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            className={classes.search}
          />
          <Card className={classes.card}>
            <Avatar
              alt="user name"
              src={user?.picture}
              className={classes.avatar}
            />
            <Typography className={classes.name}>{user?.name}</Typography>
          </Card>
        </Toolbar>
      </AppBar>
    </div>
  );
}
