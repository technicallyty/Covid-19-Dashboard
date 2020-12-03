import React from "react";
import { useState, useEffect } from "react";
import ReactGlobe from "react-globe";

function Globe() {
  const [markers, setMarkers] = useState([]);

  const options = {
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 2000,
    focusEasingFunction: ["Linear", "None"],
    markerTooltipRenderer: (marker) => `${marker.city} (${marker.value})`,
  };

  async function fetchCountries() {
    const response = await fetch(
      "https://corona.lmao.ninja/v2/countries?yesterday&sort"
    );
    const countries = await response.json();
    var markers2 = [];
    for (var i = 0; i < 220; i++) {
      var color = "red";
      if (countries[i].active < 1000000 && countries[i].active > 500000) {
        color = "yellow";
      }
      else if (countries[i].active < 500000) {
        color = "blue";
      }
      else if (countries[i].active === 0) {
        color = "green";
      }
      markers2.push({
        id: "marker" + i,
        city: countries[i].country,
        color: color,
        coordinates: [
          countries[i].countryInfo.lat,
          countries[i].countryInfo.long,
        ],
        value: countries[i].active,
      });
    }
    setMarkers(markers2);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <ReactGlobe
      height="100vh"
      markers={markers}
      options={options}
      onClickMarker={(marker, markerObject, event) =>
        console.log(marker, markerObject, event)
      }
      onMouseOutMarker={(marker, markerObject, event) =>
        console.log(marker, markerObject, event)
      }
      onGlobeTextureLoaded={() => console.log("globe loaded")}
      onMouseOverMarker={(marker, markerObject, event) =>
        console.log(marker, markerObject, event)
      }
    />
  );
}

export default Globe;
