import React from "react";
import styled from "styled-components";

import { NotificationsNone } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";

const Topbar = () => {
  return (
    <Topbarstyle>
      <div>
        <div className="container">
          <div className="wrapper">
            <span className="top-icon-badge">2</span>
            <NotificationsNone className="icons" />
            <SettingsIcon className="icons" />
          </div>
        </div>
      </div>
    </Topbarstyle>
  );
};

const Topbarstyle = styled.div`
  .container {
    display: flex;
    justify-content: left;
  }
  .wrapper {
    margin-left: auto;
  }

  .icons {
    color: black;
    justify-content: space-between;
  }

  .top-icon-badge {
    width: 15px;
    height: 15px;
    margin-left: 1em;
    margin-bottom: -0.8em;
    background-color: red;
    color: white;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
`;

export default Topbar;
