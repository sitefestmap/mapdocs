
import { createSignal } from "solid-js";
import MapGL, { Viewport, Source, Layer } from "solid-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css'


export function SolidDemo() {
    const [viewport, setViewport] = createSignal({
        center: [-122.45, 37.78],
        zoom: 11,
    } as Viewport);

    return (
        <MapGL
            options={{
                accessToken: 'pk.eyJ1IjoibWF0dGhpYXN3ZXN0b24iLCJhIjoiY2xlNHIya255MDJqaTNwbXY5NjUzdWgzYSJ9.af8OJ3gOuIiOvKkYllihGQ',
                style: "mb:light",
            }}
            viewport={viewport()}
            onViewportChange={(evt: Event) => setViewport(evt)}
        >
            <Source
                source={{
                type: "geojson",
                data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
                }}
            >
                <Layer
                    style={{
                        type: "circle",
                        source: "earthquakes",
                        paint: {
                        "circle-radius": 8,
                        "circle-color": "red",
                        },
                    }}
                />
            </Source>
        </MapGL>
    );
};

//render(() => <App />, document.getElementById("app")!);