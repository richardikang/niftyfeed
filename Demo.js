import React, { useState } from 'react';

import styled from "styled-components"

import Header from '../components/Header';

const Tooltip = styled.div((props) => {
    const { top, left } = props
    return`
        position: absolute;
        z-index: 10;
        top: ${top}px;
        left: ${left}px;
        
        color: white;
        border-radius: 8px;
        padding: 8px;

        &:after {

        }
        `
})

const Demo = () => {
    const [tooltipData, setTooltipData] = useState(null)

    const handleTooltip = (e) => {
        e.preventDefault()
        const title = e.target.title
        const coords = e.target.coords
        const alt = e.target.alt

        const top = coords.split(",").pop()
        const left = coords.split(",").slice(2, 3)[0]

        if (title && coords && alt) {
            const data = {
                title,
                left,
                top,
                children: <p>{alt}</p>
            }

            setTooltipData(data)
        }
    }

    return (
        <div className="Demo-Background">
            <Header />
                <div className="Demo">
                    {tooltipData && <Tooltip {...tooltipData} />}

                    <img src="/assets/images/Dashboard.png" alt="Dashboard" usemap="#image-map" />

                    <map
                        name="image-map"
                        onMouseOver={handleTooltip}
                        onMouseOut={() => setTooltipData(null)}
                    >
                     <area
                        alt=""
                        title="Inventory"
                        href=""
                        coords="3,192,53,263"
                        shape="rect"
                     />
                     <area
                        alt=" "
                        title="User Statistics"
                        href=""
                        coords="51,361,1,301"
                        shape="rect"
                     />
                     <area
                        alt=""
                        title="Widgets"
                        href=""
                        coords="0,397,53,454"
                        shape="rect"
                     />
                     <area
                        alt=""
                        title="Logout"
                        href=""
                        coords="1,860,52,944"
                        shape="rect"
                     />
                     <area
                        alt=""
                        title="Split view"
                        href=""
                        coords="1,15,54,68"
                        shape="rect"
                     />
                     <area
                        alt=""
                        title="Track your NFT via email and/or text"
                        href=""
                        coords="289,331,444,371"
                        shape="rect"
                     />
                     <area
                        alt=""
                        title="Conversion rate between the monetary value and cryptocurrency"
                        href=""
                        coords="371,501,587,548"
                        shape="rect"
                     />
                     <area
                        alt=""
                        title="Add more widgets"
                        href=""
                        coords="477,227,556,293"
                        shape="rect"
                     />
                    </map>
                </div>
            </div>
            
    )
}
       

export default Demo;