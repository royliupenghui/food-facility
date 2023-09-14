import React, {useEffect, useState} from 'react';
import {constantData, FoodFacility} from "@/services/food-facility-data";
import Map from "@/components/Map";

const App: React.FC = () => {
    const [foodFacilitys, setFoodFacilitys] = useState<Array<FoodFacility>>([]);
    const [selectedFacilityType, setSelectedFacilityType] = useState<string>('');
    const [facilityTypes, setFacilityTypes] = useState<string[]>([]);


    useEffect(() => {
        setFoodFacilitys(Array.from(constantData));
    }, []);

    useEffect(() => {
        const types = Array.from(new Set(foodFacilitys.map(facility => facility.FacilityType))).filter(type => type !== '');
        setFacilityTypes(types);
    }, [foodFacilitys]);

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFacilityType(event.target.value);
    };

    const filteredFacilities = selectedFacilityType
        ? foodFacilitys.filter(facility => facility.FacilityType === selectedFacilityType)
        : foodFacilitys;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Food Truck Map</h1>
            <div className="mb-4">
                <label htmlFor="type" className="mr-2">Select Facility Type:</label>
                <select className="p-2 border border-gray-300 rounded" id="type" value={selectedFacilityType}
                        onChange={handleTypeChange}>
                    <option className="text-gray-800" value="">All</option>
                    {facilityTypes.map(type => (
                        <option className="text-gray-800" key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
            <div id="map">
                <Map foodFacilities={filteredFacilities}/>
            </div>
        </div>
    );
}

export default App;
