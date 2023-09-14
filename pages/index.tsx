import React, {useEffect, useState} from 'react';
import {constantData, FoodFacility} from "@/services/food-facility-data";

const Map: React.FC = () => {


    const [foodFacilitys, setFoodFacilitys] = useState<Array<FoodFacility>>([]);

    useEffect(() => {
        setFoodFacilitys(Array.from(constantData));
    }, [])

    return (
        <div>
            <h1>Food Truck Map</h1>
            <div id="map" style={{width: '100%', height: '400px'}}></div>
            <ul>
                {foodFacilitys && foodFacilitys.map((facility, index) => (
                    <li key={index}>
                        {facility.X} - {facility.Y}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Map;

