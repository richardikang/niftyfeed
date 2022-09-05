import React, { useState } from "react";
import styled from "styled-components";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AccountMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <AccountStyle>
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-item">
          <li className="sidebarListItem">
            <div className="icon">
              <AccountCircleIcon />
              <span>
                <p1>Account</p1>
              </span>
              <KeyboardArrowDownIcon
                className="arrow"
                onClick={() => setOpen(!open)}
              />
            </div>
          </li>
          <div className="sidebar-content">
            <ul>Update Profile</ul>
            <ul>Change Password</ul>
          </div>
        </div>
      </div>
    </AccountStyle>
  );
};

const AccountStyle = styled.div`
  .arrow {
    margin-top: 0.5em;
    cursor: pointer;
    transition: transform 0.3;
    display: flex;
    margin-left: 1.5em;
    margin-top: 0.1em;
  }

  .sidebar-item.open .arrow {
    transform: rotate(180deg);
  }

  .sidebar-content {
    height: 0;
    overflow: hidden;
  }

  .sidebar-item.open .sidebar-content {
    height: auto;
  }

  li {
    list-style-type: none;
  }

  .icon {
    display: inline-flex;
    gap: 0.3em;
    margin-right: auto;
  }

  .sidebarListItem {
    padding-top: 2em;
    padding-left: 0.4em;
  }
`;

export default AccountMenu;
