import React from "react";
import styled from "styled-components";

import HelpIcon from "@mui/icons-material/Help";

const SupportMenu = () => {
  return (
    <SupportStyle>
      <div>
        <li className="sidebarListItem">
          <div className="icon">
            <HelpIcon />
            <span>
              <p1>Help</p1>
            </span>
          </div>
        </li>
      </div>
    </SupportStyle>
  );
};

const SupportStyle = styled.div`
  display: flex;
  margin-right: auto;

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

export default SupportMenu;
