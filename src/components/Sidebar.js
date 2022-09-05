import React from "react";
import styled from "styled-components";

import StatisticsMenu from "./StatisticsMenu";
import InventoryMenu from "./InventoryMenu";
import AccountMenu from "./AccountMenu";
import SupportMenu from "./SupportMenu";

const Sidebar = () => {
  return (
    <SidebarStyle>
      <div>
        <InventoryMenu />
      </div>
      <div>
        <StatisticsMenu />
      </div>
      <div>
        <AccountMenu />
      </div>
      <div>
        <SupportMenu />
      </div>
    </SidebarStyle>
  );
};

const SidebarStyle = styled.div`
  height: calc(157.2vh);
  width: 160px;
  padding: 0.5sem;
  border-color: lightgray;
  border-style: solid;
  border-width: 0.1px;
  border-top-right-radius: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 1px 5px 2px lightgray;
`;
export default Sidebar;
