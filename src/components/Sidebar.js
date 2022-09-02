import React from "react";
import styled from "styled-components";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PieChartSharpIcon from "@mui/icons-material/PieChartSharp";
import WidgetsIcon from "@mui/icons-material/Widgets";

const Sidebar = () => {
  return (
    <SidebarStyle>
      <li className="sidebarListItem">
        <Inventory2OutlinedIcon className="icon" />
        <p1 className="icon">Inventory</p1>
      </li>
      <div>
        <li className="sidebarListItem">
          <PieChartSharpIcon className="icon" />
          <p1 className="icon">Statistics</p1>
        </li>
      </div>
      <div>
        <li className="sidebarListItem">
          <WidgetsIcon className="icon" />
          <p1 className="icon">Widgets</p1>
        </li>
      </div>
    </SidebarStyle>
  );
};

const SidebarStyle = styled.div`
  height: calc(157vh);
  width: 120px;
  padding: 0.5sem;
  border-color: lightgray;
  border-style: solid;
  border-width: 0.1px;
  border-top-right-radius: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 1px 5px 2px lightgray;

  li {
    list-style-type: none;
  }

  .icon {
    display: inline-block;
    justify-content: center;
    align-items: center;
    margin-left: 0.5em;
    margin-top: 0.5em;
  }

  .sidebarListItem {
    display: flex;
    margin-top: 2em;
  }

  p1 {
    margin-top: 1em;
  }
`;
export default Sidebar;
