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

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Globe from "react-globe.gl";
import { dataList } from "../../utils/data";

const GlobeComponent = () => {
  const globeRef = useRef();
  const [hoveredPin, setHoveredPin] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  // Detect mobile device and inject styles
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Inject global styles for mobile label visibility
    const styleId = 'globe-pin-mobile-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @media (max-width: 768px), (hover: none) {
          [class^="pin-label-"] {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) scale(1) !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      const style = document.getElementById(styleId);
      if (style) {
        style.remove();
      }
    };
  }, []);

  // Convert dataList to the format needed by react-globe.gl with indices
  // Include hover state in the data to force re-render when it changes
  const places = useMemo(() => {
    return dataList.map((item, index) => ({
      lat: item.locationLatitude,
      lng: item.locationLongitude,
      name: item.countryName,
      index: index,
      hovered: hoveredPin === index,
      isMobile: isMobile,
    }));
  }, [hoveredPin, isMobile]);

  // Create attractive pin icon SVG with hover support
  const createPinIcon = useCallback((countryName, index) => {
    const pinId = `pin-${countryName.replace(/\s+/g, '-').toLowerCase()}-${index}`;
    const isHovered = hoveredPin === index;
    const showLabel = isMobile || isHovered;
    
    return `
      <div 
        class="globe-pin-${index}"
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transform-origin: bottom center;
          pointer-events: auto;
          transition: transform 0.2s ease;
        "
      >
        <svg 
          width="40" 
          height="48" 
          viewBox="0 0 40 48" 
          style="
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
            z-index: 10;
            position: relative;
            transition: transform 0.2s ease;
            transform: ${isHovered ? 'scale(1.15)' : 'scale(1)'};
          "
        >
          <defs>
            <linearGradient id="${pinId}-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#DB4D4D;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#B84E4A;stop-opacity:1" />
            </linearGradient>
          </defs>
          <ellipse cx="20" cy="46" rx="12" ry="4" fill="rgba(0, 0, 0, 0.3)" opacity="0.7" />
          <path 
            d="M20 2 C12 2, 6 8, 6 16 C6 22, 20 42, 20 42 C20 42, 34 22, 34 16 C34 8, 28 2, 20 2 Z" 
            fill="url(#${pinId}-grad)"
            stroke="#ffffff"
            stroke-width="2.5"
          />
          <ellipse cx="20" cy="12" rx="7" ry="5" fill="rgba(255, 255, 255, 0.6)" />
          <circle cx="20" cy="12" r="3" fill="#ffffff" />
        </svg>
        <div 
          class="pin-label-${index}"
          data-pin-index="${index}"
          style="
            margin-top: 8px;
            padding: 6px 12px;
            background: rgba(255, 255, 255, 0.98);
            border: 2px solid rgba(219, 77, 77, 0.4);
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
            font-size: 11px;
            font-weight: 700;
            color: #DB4D4D;
            white-space: nowrap;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            opacity: ${showLabel ? '1' : '0'};
            visibility: ${showLabel ? 'visible' : 'hidden'};
            transform: ${showLabel ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.9)'};
            transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s ease;
            pointer-events: none;
            max-width: 150px;
            text-align: center;
          "
        >${countryName}</div>
      </div>
    `;
  }, [hoveredPin, isMobile]);

  // Control auto-rotation based on hover state
  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.9;
    controls.enableZoom = false;

    // Re-render on each frame
    globeRef.current.renderer().setAnimationLoop(() => {
      controls.update();
    });
  }, [autoRotate]);

  // Update auto-rotation when hovering
  useEffect(() => {
    setAutoRotate(hoveredPin === null);
  }, [hoveredPin]);

  // Create HTML elements with hover support
  const createHtmlElement = useCallback((d) => {
    const index = d.index;
    const el = document.createElement('div');
    el.innerHTML = createPinIcon(d.name, index);
    el.style.pointerEvents = 'auto';
    el.style.cursor = 'pointer';
    
    // Add hover event listeners
    const handleMouseEnter = (e) => {
      e.stopPropagation();
      setHoveredPin(index);
    };
    
    const handleMouseLeave = (e) => {
      e.stopPropagation();
      setHoveredPin(null);
    };
    
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
    
    // For touch devices (mobile) - show label on tap
    if (d.isMobile) {
      el.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        setHoveredPin(index);
        // Hide after 3 seconds on mobile
        setTimeout(() => setHoveredPin(null), 3000);
      });
    }
    
    return el;
  }, [createPinIcon]);

  return (
    <div className="w-full flex justify-center items-center">
      <Globe
        ref={globeRef}
        width={600}
        height={500}
        globeImageUrl="https://media.istockphoto.com/id/1156822258/vector/map-of-world-pink-silhouette-vector-illustration-with-gradient-on-white-background.jpg?s=612x612&w=0&k=20&c=YOZdht4PM9xOrBc5Nb9vV-1sBBcvfQzvCGjJUCnEtww="
        backgroundColor="rgba(0, 0, 0, 0.02)"
        htmlElementsData={places}
        htmlLat="lat"
        htmlLng="lng"
        htmlElement={createHtmlElement}
        animateIn={true}
        rotationSpeed={autoRotate ? 0.9 : 0}
      />
    </div>
  );
};

export default GlobeComponent;

