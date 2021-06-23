import React, {Component, ElementType} from 'react';
import './App.scss';
import {connect} from "react-redux";
import TaskFormContainer from "./components/taskForm/container/TaskFormContainer";
import * as L from 'leaflet';
import './map/googleProvider.js';
import {Coords, LeafletEvent, popup} from "leaflet";
import {geoJson} from "./map/geoJson";

import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;



interface IApp {
    //tasks: ITaskModel[];
    //addEvent: (task: ITaskModel) => void;
}

interface IAppState {
    collapsed: boolean
}

class App extends Component<IApp, IAppState> {

    private readonly mapRef: React.RefObject<HTMLDivElement>;

    constructor(props: IApp) {
        super(props);

        this.state = {
            collapsed: false,
        };

        // @ts-ignore
        //console.log(L.GridLayer["GoogleMutant"](), "123")
        this.mapRef = React.createRef();

        // let map: google.maps.Map;
        //
        // function initMap(): void {
        //     map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        //         center: { lat: -34.397, lng: 150.644 },
        //         zoom: 8,
        //     });
        // }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    componentDidMount() {
        // console.log(this.mapRef)

        const mapopts = {
            zoomSnap: 0.25,
        };
        const map = L.map("map", mapopts).setView([0, 0], 1);


        L.gridLayer
            // @ts-ignore
            .googleMutant({
                maxZoom: 24,
                type: "roadmap",
            })
            .addTo(map);



         // @ts-ignore
        L.geoJSON().addData(geoJson).addTo(map)


        map.on('click', function (e:LeafletEvent) {

            console.log("mapClick")

        });

        // function addMarkerText(lat,long)
        // {
        //     var message = '<div id="iconprev" style="border: 1px black solid; background-color:grey;background-image:url(\''+markerIconTypes[0].options.iconUrl+'\');width:18px;height:25px;background-size: auto 25px;background-repeat:no-repeat;float:left"></div><form id="addmark" method="post" action="#"><select style="margin-left:5px" name="icon" onchange="iconpref(this.value)">';
        //     for (var i in mapIcons)
        //     {
        //         message +='<option value="'+i+'">'+mapIcons[i]+'</option>';
        //     }
        //     message = message+'</select><input type="text" name="titel" onclick="this.value=\'\'; this.onclick = function(){}" value="Title"><textarea name="desc" onclick="this.value=\'\'; this.onclick = function(){}">Description</textarea><table><tr><td><center>lat:</center><input type="text" name="mlat" value="'+Math.round(mlat(lat)*1000)/1000+'" onKeyPress="return numonly(this,event)"></td><td><center>lng:</center><input type="text" style="" name="mlon" value="'+Math.round(mlon(long)*1000)/1000+'" onKeyPress="return numonly(this,event)"></td></tr></table><input type="hidden" name="submit" value="true"><input type="submit"></form>';
        //     var ltn = {};
        //     ltn.lat = lat;
        //     ltn.lng = long;
        //     popup.setLatLng(ltn).setContent(message).openOn(map);
        //     $('#addmark').submit(function(e)
        //     {
        //         var postData = $(this).serializeArray();
        //         var lat = rlat(getAObj(postData,"mlat"));
        //         var lon = rlon(getAObj(postData,"mlon"));
        //         postData.push({"name": "lat","value":lat});
        //         postData.push({"name": "lon","value":lon});
        //
        //         var formURL = $(this).attr("action");
        //         $.ajax(
        //             {
        //                 url : formURL,
        //                 type: "POST",
        //                 data : postData,
        //                 success:function(data, textStatus, jqXHR)
        //                 {
        //                     popup._close();
        //                     var newMarker = L.marker({lat: lat, lng: lon},{icon: markerIconTypes[getAObj(postData,"icon")]});
        //                     newMarker.bindPopup("<b>"+getAObj(postData,"titel")+"</b><br><span style='font-size:8px'>lat: "+getAObj(postData,"mlat")+" - lng: "+getAObj(postData,"mlon")+"</span><br>"+getAObj(postData,"desc")+"<br><button onclick='removeMarker("+lat+","+lon+")'>Remove marker</button>");
        //                     newMarker.addTo(map);
        //                     markers.push(newMarker);
        //                 },
        //                 error: function(jqXHR, textStatus, errorThrown)
        //                 {
        //                     //if fails
        //                     alert("unable to add marker :(");
        //                 }
        //             });
        //         e.preventDefault(); //STOP default action
        //     });
        // }

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
            <Layout>
                <Sider title='Список задач' trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <TaskFormContainer/>
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <div>

                            <div className="App">
                                <div>
                                    <div id='map' ref={this.mapRef}
                                         style={{overflow: "hidden", "background" : "red"}}/>
                                </div>
                            </div>

                        </div>

                    </Content>
                </Layout>
            </Layout>

        );
    };
};

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
