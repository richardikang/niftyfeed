import React, { useState } from "react";
import styled from "styled-components";

import PieChartSharpIcon from "@mui/icons-material/PieChartSharp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StatisticsMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <StatisticsStyle>
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-item">
          <li className="sidebarListItem">
            <div className="icon" onClick={() => setOpen(!open)}>
              <PieChartSharpIcon />
              <p1>Statistics</p1>
              <KeyboardArrowDownIcon className="arrow" />
            </div>
          </li>
          <div className="sidebar-content">
            <ul>Line Graph</ul>
            <ul>Bar Graph</ul>
            <ul>Donut Chart</ul>
          </div>
        </div>
      </div>
    </StatisticsStyle>
  );
};

const StatisticsStyle = styled.div`
  .arrow {
    margin-top: 0.5em;
    transition: transform 0.3;
    display: flex;
    margin-left: 1.3em;
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
    cursor: pointer;
  }

  .sidebarListItem {
    padding-top: 2em;
    padding-left: 0.4em;
  }
`;

export default StatisticsMenu;
