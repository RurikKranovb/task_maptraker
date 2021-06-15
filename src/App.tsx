import React, {Component, ElementType} from 'react';
import './App.scss';
import {connect} from "react-redux";
import TaskFormContainer from "./components/taskForm/container/TaskFormContainer";
import * as L from 'leaflet';

interface IApp {
    //tasks: ITaskModel[];
    //addEvent: (task: ITaskModel) => void;
}


class App extends Component<IApp> {

    private readonly mapRef: React.RefObject<HTMLDivElement>;


    constructor(props: IApp) {
        super(props);

        this.mapRef = React.createRef();

    }


    componentDidMount() {
        // console.log(this.mapRef)
        const map = L.map('map');

        map.setView([55.7422, 37.5719], 11);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution:'&copy; <a href=&quot;https://osm.org/copyright&quot;>OpenStreetMap</a> contributors ,' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(map);

        // var geojsonFeature = {
        //     "type": "Feature",
        //     "properties": {
        //         "name": "Coors Field",
        //         "amenity": "Baseball Stadium",
        //         "popupContent": "This is where the Rockies play!"
        //     },
        //     "geometry": {
        //         "type": "Point",
        //         "coordinates": [-104.99404, 39.75621]
        //     }
        // };
    };

    render() {

        return (
            <div>

                <div className="App">
                    <ul>
                        <h1>Список задач</h1>
                        <div><TaskFormContainer/></div>
                        <div id='map' style={{overflow: "hidden"}}/>
                    </ul>
                </div>

            </div>
        );
    };
}

const mapStateToProps = (state : any) => {
    return {
        // tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // addEvent: (task: ITaskModel) => dispatch(addTask(task)),
    };
};

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default ConnectedApp;
