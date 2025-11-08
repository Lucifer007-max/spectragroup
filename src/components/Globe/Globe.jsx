// import React, { useEffect, useRef, useState } from "react";
// import Globe from "react-globe.gl";

// const GlobeComponent = () => {
//     const globeRef = useRef(null);
//     const [arcsData, setArcsData] = useState([]);

//     useEffect(() => {
//         const N = 20;
//         const generatedArcs = [...Array(N).keys()].map(() => ({
//             startLat: (Math.random() - 0.5) * 180,
//             startLng: (Math.random() - 0.5) * 360,
//             endLat: (Math.random() - 0.5) * 180,
//             endLng: (Math.random() - 0.5) * 360,
//             color: [
//                 ["red", "red", "red", "red"][Math.round(Math.random() * 3)],
//                 ["red", "red", "red", "red"][Math.round(Math.random() * 3)],
//             ],
//         }));
//         setArcsData(generatedArcs);
//     }, []);

//     return (
//         <div className="w-full flex justify-center items-center">
//             <Globe
//                 width={500}
//                 height={500}
//                 backgroundColor="#fff"
//                 style={{ width: "100%", height: "50vh", maxWidth: "400px", maxHeight: "400px" }}
//                 ref={globeRef}
//                 globeImageUrl="https://unpkg.com/three-globe@2.41.12/example/img/earth-day.jpg"
//                 arcsData={arcsData}
//                 arcColor={"color"}
//                 arcDashLength={() => Math.random()}
//                 arcDashGap={() => Math.random()}
//                 arcDashAnimateTime={() => Math.random() * 4000 + 500}
//             />
//         </div>
//     );
// };

// export default GlobeComponent;

import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { globeData } from "../../utils/data";
import pinImage from "../../assets/images/pin.png";

const GlobeComponent = () => {
  const [places, setPlaces] = useState(globeData?.features);
  const globeRef = useRef();

  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();
    controls.autoRotate = true;         // ✅ Enable auto-rotation
    controls.autoRotateSpeed = 0.9;     // ✅ Adjust speed (positive = clockwise)
    controls.enableZoom = false;        // Optional: disable zoom for aesthetics

    // Re-render on each frame
    globeRef.current.renderer().setAnimationLoop(() => {
      controls.update();
    });
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <Globe
        ref={globeRef}
        width={600} // Adjust width
        height={500} // Adjust height
        globeImageUrl="https://media.istockphoto.com/id/1156822258/vector/map-of-world-pink-silhouette-vector-illustration-with-gradient-on-white-background.jpg?s=612x612&w=0&k=20&c=YOZdht4PM9xOrBc5Nb9vV-1sBBcvfQzvCGjJUCnEtww="
        backgroundColor="#fff"
        pointsData={places}
        pointLat={(d) => d.properties.latitude}
        pointLng={(d) => d.properties.longitude}
        pointLabel={(d) => `
          <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          ">
            <img 
              src="${pinImage}" 
              alt="pin" 
              style="
                width: 24px;
                height: 24px;
                object-fit: contain;
              "
            />
            <span style="
              color: #333;
              font-size: 12px;
              margin-top: 4px;
              background: rgba(255, 255, 255, 0.9);
              padding: 2px 6px;
              border-radius: 4px;
              white-space: nowrap;
            ">${d.properties.name}</span>
          </div>
        `}
        pointRadius={0.5}
        pointColor={() => "transparent"}
        pointResolution={2}
        animateIn={true} // Smooth loading animation
        rotationSpeed={0.9} // Auto-rotate speed
      />
    </div>
  );
};

export default GlobeComponent;

