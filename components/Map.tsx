import React from 'react';
import {MultiMarker, TMap} from '@map-component/react-tmap';
import {FoodFacility} from "@/services/food-facility-data";
import {NextPage} from "next";

const styles = {
    pushCartStyle: {
        width: 2,
        height: 3,
        src:
            'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png',
    },
    truckStyle: {
        width: 4,
        height: 6,
        src:
            'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/marker_blue.png',
    },
};

interface MapProps {
    foodFacilities: Array<FoodFacility>;
}

const buildMarker = (foodFacilitys: Array<FoodFacility>) => foodFacilitys.map((foodFacility, index) => ({
    position: {
        lat: foodFacility.Latitude,
        lng: foodFacility.Longitude
    },
    id: foodFacility.locationid,
    styleId: foodFacility.FacilityType === 'Push Cart' ? 'pushCartStyle' : 'truckStyle',
    // content: foodFacility.Applicant,
    properties: {
        title: 'marker1',
    },
}))

const MyMap: NextPage<MapProps> = ({foodFacilities}) => {
    return (
        <TMap
            mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ"
            zoom={3}
            control={{
                rotate: {
                    position: 'TOP_RIGHT',
                },
            }}
            version={'1'}>
            <MultiMarker enableCollision={true} geometries={buildMarker(foodFacilities)} styles={styles} id={'1'}/>
        </TMap>
    );
};

export default MyMap
