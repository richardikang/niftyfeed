import React, { useMemo } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const Slider = ({ data }) => {

    const slides = useMemo(() => {
        const hasImageArray = data.assets.filter(i => i.image_url !== '')

        return hasImageArray.map((i) => (
            <div onClick={() => window.location.href = i.permalink} style={{ cursor: 'pointer' }}>
                <img src={i.image_url} onClick={i.image_url} alt='IMG' />
                <p>{i.name}</p>
                <p2>{i.top_bid}</p2>
            </div>
        ))

    }, [data])

    return (
        <ScrollMenu>
            <Carousel>
                {slides}
            </Carousel>
        </ScrollMenu>
    );
}

export default Slider;
