import React from 'react'
import Tooltip from '../components/Tooltip';
import styled from "styled-components"

import MenuIcon from '@mui/icons-material/Menu';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PieChartSharpIcon from '@mui/icons-material/PieChartSharp';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const TooltipTarget = styled.span``;

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <div className="menu-icon">
                                    <li className="sidebarListItem">
                                        <MenuIcon className="sidebar-icon"/>
                                    </li>
                        </div>
                        <Tooltip text="Inventory" position="right" background="FFFFFF" overflow="visible">
                            <TooltipTarget  className="inventory-tooltip">
                                <li className="sidebarListItem">
                                <Inventory2OutlinedIcon className="inventory-icon"/>
                                </li>
                            </TooltipTarget>
                        </Tooltip>
                        <div>
                            <Tooltip text="Statistics" position="right" background="FFFFFF">
                                <TooltipTarget  className="inventory-tooltip">
                                    <li className="sidebarListItem">
                                        <PieChartSharpIcon className="statistics-icon"/>
                                    </li>
                                </TooltipTarget>
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip text="Widgets" position="right" background="FFFFFF">
                                <TooltipTarget  className="inventory-tooltip">
                                    <li className="sidebarListItem">
                                        <WidgetsIcon className="widgets-icon"/>
                                    </li>
                                </TooltipTarget>
                            </Tooltip>
                        </div>
                        <div>
                            <div className="exit-icon">
                                <Tooltip text="Logout" position="right" background="FFFFFF">
                                    <TooltipTarget  className="inventory-tooltip">
                                        <li className="sidebarListItem">
                                            <MeetingRoomIcon className="meetingroom-icon"/>
                                        </li>
                                    </TooltipTarget>
                                </Tooltip>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sidebar