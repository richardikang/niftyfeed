import React, {useState, useCallback, useEffect} from 'react';
import ImageMapper from 'react-image-mapper';

const Demo = () => {
    const [query, setQuery] = useState(1);

    const [mapAreas, setMapAreas] = useState ({
        name:"demo-map",
        areas: [
            {shape: "rect", coords:[-3,962,269,1309]}
        ]
    });

    const handleUpdateMapArea = useCallback(
        evt => 
            updateMapArea([evt.nativeEvent.layerX, evt.nativeEvent.layerY, 10]),
        []
    );

    useEffect(() => {
        setQuery(Math.random());
    }, [mapAreas]);

    const updateMapArea = (id, coords) => {
        console.log(coords);
        const areas = mapAreas.areas.map(item =>
            item.id === id ? {...item, coords} : item
        );
        setMapAreas({
            name: mapAreas.name,
            areas
        });
    };
    return (
        <div>
            <ImageMapper
            src={"/assets/images/Dashboard.png"}
            onImageClick={handleUpdateMapArea}
            map={mapAreas}
            className={"Demo"}
            alt={"Dashboard"} 
            />
        </div>
    );
}

export default Demo;