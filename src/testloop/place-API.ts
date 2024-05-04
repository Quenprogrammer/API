import axios from 'axios';

interface Location {
    lat: number;
    lng: number;
}

interface Place {
    formatted_address: string;
    geometry: {
        location: Location;
    };
    name: string;
    place_id: string;
}

interface ApiResponse {
    candidates: Place[];
    status: string;
}

export async function getPlaceInfo(city:string, district:string): Promise<{ lat: number; lng: number; place_id: string }|null> {
    const input: string = `${district} ${city}`;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address,name,geometry,place_id&input=${encodeURIComponent(input)}&inputtype=textquery&key=AIzaSyBrDgzY-kGH-Pip_MgSQDy9Vs-fhJdBwU0`;

    try {
        const response = await axios.get<ApiResponse>(apiUrl);
        const place = response.data.candidates[0];
        if (place) {
            const { lat, lng } = place.geometry.location;
            const place_id = place.place_id;
            return { lat, lng, place_id };
        } else {
           return null;
        }
    } catch (error) {
        return null;

    }
}