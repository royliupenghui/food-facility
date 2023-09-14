import * as data from './Mobile_Food_Facility_Permit.json';

export interface FoodFacility {
    locationid: string;
    Applicant: string;
    FacilityType: string;
    cnn: string;
    LocationDescription: string;
    Address: string;
    blocklot: string;
    block: string;
    lot: string;
    permit: string;
    Status: string;
    FoodItems: string;
    X: string;
    Y: string;
    Latitude: string;
    Longitude: string;
    Schedule: string;
    dayshours: string;
    NOISent: string;
    Approved: string;
    Received: string;
    PriorPermit: string;
    ExpirationDate: string;
    Location: string;
    "Fire Prevention Districts": string;
    "Police Districts": string;
    "Supervisor Districts": string;
    "Zip Codes": string;
    "Neighborhoods (old)": string;
}


const foodFacilities: Array<FoodFacility> = data as Array<FoodFacility>;

export const constantData = Object.freeze(foodFacilities);




