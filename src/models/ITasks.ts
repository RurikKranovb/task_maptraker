import * as geojson from "geojson";


// export interface ITaskGeoDataModel {
//     geoJson: geojson.Feature;
// }

export interface ITaskModel {
    title: string;
    id: string;
    complete: boolean;
    geoJson: geojson.Feature;
}
