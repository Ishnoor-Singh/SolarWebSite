import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import * as constants from "../constants";
import { withStyles, fade } from "@material-ui/core/styles";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Default, Mobile, Desktop } from "../constants";
//know about logged in user
import { UserContext, UserProvider } from "../../context/UserContext";

const StyledButton = withStyles({
  root: {
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: constants.HOME_PAGE_LIGHT_TEXT_COLOR,
    miHeight: 48,
    padding: "10px 10px 10px 10px",
    fontSize: "20px",
    fontFamily: "Futura",
    fontWeight: 500,
    minWidth: "7em",
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    "&:hover": {
      backgroundColor: fade(constants.HOME_PAGE_YELLOW, 0.9),
      color: fade(constants.HOME_PAGE_DARK_TEXT_COLOR, 1),
    },
  },
})(Button);

function TopBar(props) {
  const { userData, setUserData } = useContext(UserContext);
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  const uploadButton = () => {
    if (userData && userData.user) {
      return (
        <StyledButton
          style={{ order: 6 }}
          onClick={() => props.history.push({ pathname: "/upload" })}
        >
          Upload
        </StyledButton>
      );
    }
  };

  return (
    <Router>
      <div>
        <AppBar
          position="fixed"
          style={{ backgroundColor: constants.HOME_PAGE_DARK_COLOR }}
        >
          <Toolbar
            style={{
              //overflow: 'scroll',
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Mobile>
              <Box
                style={{
                  display: "flex",
                  overflowX: "scroll",
                }}
              >
                <StyledButton
                  style={{
                    order: 1,
                  }}
                  onClick={() => props.history.push({ pathname: "/" })}
                >
                  Home
                </StyledButton>
                <StyledButton
                  style={{
                    order: 2,
                  }}
                  onClick={() =>
                    props.history.push({
                      pathname: "/programs",
                    })
                  }
                >
                  Programs
                </StyledButton>
                <StyledButton
                  style={{
                    order: 3,
                  }}
                  onClick={() =>
                    props.history.push({
                      pathname: "/sponsors",
                    })
                  }
                >
                  Sponsors
                </StyledButton>
                <StyledButton
                  style={{
                    order: 4,
                  }}
                  onClick={() =>
                    props.history.push({
                      pathname: "/team",
                    })
                  }
                >
                  Meet The Team
                </StyledButton>
                {uploadButton()}
              </Box>
            </Mobile>
            <Desktop>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                  width: "100%",
                }}
              >
                <StyledButton
                  style={{
                    order: 1,
                  }}
                  onClick={() => props.history.push({ pathname: "/" })}
                >
                  Home
                </StyledButton>
                <StyledButton
                  style={{
                    order: 2,
                  }}
                  onClick={() =>
                    props.history.push({
                      pathname: "/programs",
                    })
                  }
                >
                  Programs
                </StyledButton>
                <StyledButton
                  style={{
                    order: 3,
                  }}
                  onClick={() =>
                    props.history.push({
                      pathname: "/sponsors",
                    })
                  }
                >
                  Sponsors
                </StyledButton>
                <StyledButton
                  style={{
                    order: 4,
                  }}
                  onClick={() =>
                    props.history.push({
                      pathname: "/team",
                    })
                  }
                >
                  Meet the Team
                </StyledButton>
                <StyledButton
                  style={{
                    order: 5,
                  }}
                  onClick={() =>
                    props.history.push({
                      pathname: "/login",
                    })
                  }
                >
                  Login
                </StyledButton>
                <StyledButton
                  style={{
                    order: 6,
                  }}
                  onClick={logout}
                >
                  Log Out
                </StyledButton>
                {uploadButton()}
              </Box>
            </Desktop>
            <Default>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                  width: "100%",
                }}
              >
                <StyledButton
                  style={{
                    order: 1,
                  }}
                  onClick={() => props.history.push({ pathname: "/" })}
                >
                  Home
                </StyledButton>
                <StyledButton
                  style={{
                    order: 2,
                  }}
                  onClick={() =>
                    props.history.push({
                      pathname: "/programs",
                    })
                  }
                >
                  Programs
                </StyledButton>
                <StyledButton
                  style={{
                    order: 3,
                  }}
                >
                  Sponsor
                </StyledButton>
                <StyledButton
                  style={{
                    order: 4,
                  }}
                  onClick={() =>
                    props.history.push({
                      pathname: "/team",
                    })
                  }
                >
                  Meet The Team
                </StyledButton>
                {uploadButton()}
              </Box>
            </Default>
          </Toolbar>
        </AppBar>
        <Mobile>
          <div style={{ height: "63px" }}></div>
        </Mobile>
        <Default>
          <div style={{ height: "63px" }}></div>
        </Default>
        <Desktop>
          <div style={{ height: "63px" }}></div>
        </Desktop>
      </div>
    </Router>
  );
}

const inboxLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/projects" {...props} />
));

export default TopBar;
