import React, { useState } from "react";
import styled from "styled-components";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const InventoryMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <InventoryStyle>
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-item">
          <li className="sidebarListItem">
            <div className="icon">
              <Inventory2OutlinedIcon />
              <span>
                <p1>Inventory</p1>
              </span>
              <KeyboardArrowDownIcon
                className="arrow"
                onClick={() => setOpen(!open)}
              />
            </div>
          </li>
          <div className="sidebar-content">
            <ul>NFT</ul>
            <ul>Crypto Wallet</ul>
          </div>
        </div>
      </div>
    </InventoryStyle>
  );
};

const InventoryStyle = styled.div`
  .arrow {
    cursor: pointer;
    transition: transform 0.3;
    display: flex;
    margin-left: 1em;
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

export default InventoryMenu;
