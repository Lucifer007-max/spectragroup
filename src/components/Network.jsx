import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, MapPin } from 'lucide-react'
import Breadcrumb from './Breadcrumb/Breadcrumb';
import { dataList, jsonData } from '../utils/data';
import { useMediaQuery } from 'react-responsive';
// Import all client logos
import client1 from '../assets/images/client/1.png';
import client2 from '../assets/images/client/2.png';
import client3 from '../assets/images/client/3.png';
import client4 from '../assets/images/client/4.png';
import client5 from '../assets/images/client/5.png';
import client6 from '../assets/images/client/6.png';
import client7 from '../assets/images/client/7.png';
import client8 from '../assets/images/client/8.png';
import client9 from '../assets/images/client/9.png';
import client10 from '../assets/images/client/10.png';
import client11 from '../assets/images/client/11.png';
import client12 from '../assets/images/client/12.png';
import client13 from '../assets/images/client/13.png';
import client14 from '../assets/images/client/14.png';
import client15 from '../assets/images/client/15.png';
import client16 from '../assets/images/client/16.png';
import client17 from '../assets/images/client/17.png';
import client18 from '../assets/images/client/18.png';
import client19 from '../assets/images/client/19.png';
import client20 from '../assets/images/client/20.png';
import client21 from '../assets/images/client/21.png';
import client22 from '../assets/images/client/22.png';
import client23 from '../assets/images/client/23.png';
import client24 from '../assets/images/client/24.png';
import client25 from '../assets/images/client/25.png';
import client26 from '../assets/images/client/26.png';
import client27 from '../assets/images/client/27.png';
import client28 from '../assets/images/client/28.png';
const NetWork = () => {
    const sourceId = "places";
    const symbolLayerId = "symbols";
    const features = [
        {
            title: "Creative and thoughtful approach",
            description: "We analyze each blogger and their audience, determine the percentage of overlap with your target audience for the required number of touches to make the ad as effective as possible.",
            color: "#FF6B6B"
        },
        {
            title: "Convenient reporting format",
            description: "Convenient reporting format for both intermediate and final results of an advertising campaign.",
            color: "#4ECDC4"
        },
        {
            title: "Thoughtful audience engagement",
            description: "Thoughtful and effective warming up of the blogger's audience for maximum engagement in advertising with your brand and product.",
            color: "#45B7D1"
        },
        {
            title: "Continuous contact",
            description: "We will ensure interaction with your target audience using all formats and tools that we will determine and agree with you: these are bloggers, digital placement, targeting by our target audience, and retargeting by look-alike audience.",
            color: "#96CEB4"
        },
        {
            title: "Strategic customer acquisition",
            description: "Providing contact with potential customers within 8-12 touches to form strong positive associations with the brand in the consumer and maximize the effectiveness of the advertising campaign.",
            color: "#4EA5D9"
        },
        {
            title: "Performance marketing",
            description: "Continuous performance marketing: control of all running processes, tracking of ongoing activities and a coordinated plan.",
            color: "#2D82B7"
        }
    ];
    const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });
    const [hoveredLocation, setHoveredLocation] = useState(null);

    // Convert lat/lng to pixel coordinates on a world map
    const latLngToPixel = (lat, lng, mapWidth, mapHeight) => {
        // World map projection (simple equirectangular)
        const x = ((lng + 180) / 360) * mapWidth;
        const y = ((90 - lat) / 180) * mapHeight;
        return { x, y };
    };

    // Array of all client logos
    const customerLogos = [
        client1, client2, client3, client4, client5, client6, client7, client8,
        client9, client10, client11, client12, client13, client14, client15, client16,
        client17, client18, client19, client20, client21, client22, client23, client24,
        client25, client26, client27, client28
    ];

    // Split logos into two rows of 14 images each
    const firstRowLogos = customerLogos.slice(0, 14);
    const secondRowLogos = customerLogos.slice(14, 28);

    return (
        <>
            <section className="relative container mx-auto px-4">

                <Breadcrumb title={'Our Network'} />
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6 py-20">
                    <div className="border-l-4 border-red-500 pl-3">
                        <motion.h2
                            className="text-4xl md:text-6xl sm:text-4xl  lg:text-5xl  font-bold tracking-tighter leading-none "
                        >
                            <motion.span
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="inline-block text-gray-400"
                            >
                                OUR
                            </motion.span>
                            <motion.span
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="inline-block ml-2 md:ml-4"
                                style={{ WebkitTextStroke: '1px black', color: 'transparent' }}
                            >
                                NETWORK
                            </motion.span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }} className="text-dark font-md leading-relaxed">
                        Since <span className="text-customOrange font-bold">2014</span>, Spectra Group has been building more than just a network of services—we
                        have been forging lasting partnerships across industries and continents. From our
                        headquarters in Dubai, our expertise spans the Middle East, Africa, Turkey, and beyond,
                        supporting companies in <span className="text-customOrange font-bold">cement, minerals, steel, oil& gas, and pharmaceuticals</span> .
                        Every connection we form is guided by a single principle: understand challenges, deliver
                        reliable support, and build lasting trust. We have learned that true operational success
                        comes from listening to customers, addressing their pain points, and evolving our solutions
                        to meet their unique needs.
                        Our global reach ensures that wherever our clients operate, Spectra Group is
                        there—providing mission-critical support, preventive maintenance, training, and compliance

                        guidance. By strategically deploying outstationed engineers across key regions, we deliver
                        rapid response and uninterrupted operations, combining local presence with global
                        expertise.
                    </motion.p>
                </motion.section>
                {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 py-10 gap-6">
                    {jsonData.features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white/10 relative backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <motion.div
                                className="text-xl md:text-2xl font-bold mb-3"
                                whileHover={{ y: -10 }}
                                style={{ color: feature.color }}
                            >
                                <img
                                    width="100%"
                                    src={`/flags/${feature.properties.id.toLowerCase()}.svg`}
                                    alt={`${feature.properties.name.countryCode} Flag`}
                                    style={{ height: '150px', objectFit: 'cover' }}
                                />

                            </motion.div>
                                <motion.div
                                    // initial={{ opacity: isSmallScreen ? 1 : 0, y: isSmallScreen ? 0 : 50 }}
                                    // whileHover={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    // className="absolute inset-0 bg-gradient-to-t from-customOrange/60 p-6 flex flex-col justify-center"
                                >
                                    <motion.h3
                                        whileHover={{ scale: 1.1 }}
                                        className="text-dark text-lg sm:text-xl font-bold text-center"
                                    >
                                        {feature.properties.name}
                                    </motion.h3>
                                </motion.div>

                            <motion.div
                                className="h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            />
                        </motion.div>
                    ))}
                </div> */}

                {/* <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 bg-purple-600 p-8">
                    {["Americas", "Asia Pacific", "Europe", "Middle East and Africa"].map(
                        (region, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-center border border-white text-white text-xl font-bold p-6"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {region}
                            </motion.div>
                        )
                    )}
                </div> */}
                <motion.div 
                    className='pb-20 relative'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                        {/* World Map Background - Using world map image */}
                        <div 
                            className="absolute inset-0 w-full h-full opacity-30"
                            style={{
                                backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                filter: 'grayscale(100%) brightness(1.1)'
                            }}
                        />
                        
                        {/* Overlay gradient for better pin visibility */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-100/20" />

                        {/* Animated connection lines */}
                        <svg 
                            viewBox="0 0 1000 500" 
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            {dataList?.map((res, index) => {
                                if (res.locationLatitude && res.locationLongitude) {
                                    const pos = latLngToPixel(res.locationLatitude, res.locationLongitude, 1000, 500);
                                    const centerPos = latLngToPixel(25, 50, 1000, 500); // Approximate center (Middle East - UAE)
                                    return (
                                        <motion.line
                                            key={`line-${index}`}
                                            x1={centerPos.x}
                                            y1={centerPos.y}
                                            x2={pos.x}
                                            y2={pos.y}
                                            stroke="#b84e4a"
                                            strokeWidth="2"
                                            strokeDasharray="8,4"
                                            opacity="0.4"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 0.4 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, delay: index * 0.15, ease: "easeInOut" }}
                                        />
                                    );
                                }
                                return null;
                            })}
                        </svg>

                        {/* Location Pins */}
                        {dataList?.map((res, index) => {
                            const { locationLatitude, locationLongitude, countryName } = res;
                            if (locationLatitude && locationLongitude) {
                                const pos = latLngToPixel(locationLatitude, locationLongitude, 1000, 500);
                                const percentageX = (pos.x / 1000) * 100;
                                const percentageY = (pos.y / 500) * 100;

                                return (
                                    <motion.div
                                        key={index}
                                        className="absolute transform -translate-x-1/2 -translate-y-full"
                                        style={{
                                            left: `${percentageX}%`,
                                            top: `${percentageY}%`,
                                        }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.5, 
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                        onHoverStart={() => setHoveredLocation(index)}
                                        onHoverEnd={() => setHoveredLocation(null)}
                                    >
                                        {/* Pulsing ring animation */}
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-customOrange/30"
                                            animate={{
                                                scale: [1, 2, 1],
                                                opacity: [0.5, 0, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                        
                                        {/* Pin icon */}
                                        <div className="relative z-10">
                                            <motion.div
                                                whileHover={{ scale: 1.2, y: -5 }}
                                                className="text-customOrange drop-shadow-lg"
                                            >
                                                <MapPin className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
                                            </motion.div>
                                        </div>

                                        {/* Country name tooltip */}
                                        {hoveredLocation === index && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-dark text-light px-4 py-2 rounded-lg shadow-xl whitespace-nowrap z-20 border border-customOrange/50"
                                            >
                                                <div className="text-sm font-bold">{countryName}</div>
                                                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-dark border-l border-t border-customOrange/50 rotate-45"></div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                );
                            }
                            return null;
                        })}

                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-white/50">
                            <p className="text-xs text-gray-600 font-semibold">Global Network</p>
                            <p className="text-xs text-gray-500">{dataList.length} Locations</p>
                        </div>
                    </div>
                </motion.div>

                {/* Customer Partnerships Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-12"
                        >
                            <div className="border-l-4 border-red-500 pl-3 inline-block mb-6">
                                <motion.h2
                                    className="text-4xl md:text-6xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-none"
                                >
                                    <motion.span
                                        initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="inline-block text-gray-400"
                                    >
                                        CUSTOMER
                                    </motion.span>
                                    <motion.span
                                        initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="inline-block ml-2 md:ml-4"
                                        style={{ WebkitTextStroke: '1px black', color: 'transparent' }}
                                    >
                                        PARTNERSHIPS
                                    </motion.span>
                                </motion.h2>
                            </div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-gray-600 leading-relaxed max-w-3xl mx-auto"
                            >
                                We are proud to work with leading organizations worldwide, building relationships that last.
                                The logos below represent some of our valued clients—each connection tells a story of trust,
                                collaboration, and shared success:
                            </motion.p>
                        </motion.div>

                        {/* Auto-scrolling Logo Carousel - Two Rows */}
                        <div className="relative overflow-hidden py-8 space-y-6">
                            {/* First Row - 14 images */}
                            <div className="relative overflow-hidden">
                                <div className="flex animate-scroll">
                                    {/* First set of logos */}
                                    <div className="flex gap-8 items-center min-w-max px-4">
                                        {firstRowLogos.map((logo, index) => (
                                            <div
                                                key={index}
                                                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-lg flex items-center justify-center border border-gray-200 hover:border-customOrange transition-all duration-300 p-4 shadow-sm hover:shadow-md"
                                            >
                                                <img 
                                                    src={logo} 
                                                    alt={`Customer Logo ${index + 1}`} 
                                                    className="max-w-full max-h-full object-contain" 
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    {/* Duplicate set for seamless loop */}
                                    <div className="flex gap-8 items-center min-w-max px-4">
                                        {firstRowLogos.map((logo, index) => (
                                            <div
                                                key={`duplicate-${index}`}
                                                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-lg flex items-center justify-center border border-gray-200 hover:border-customOrange transition-all duration-300 p-4 shadow-sm hover:shadow-md"
                                            >
                                                <img 
                                                    src={logo} 
                                                    alt={`Customer Logo ${index + 1}`} 
                                                    className="max-w-full max-h-full object-contain" 
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Second Row - 14 images (reverse direction) */}
                            <div className="relative overflow-hidden">
                                <div className="flex animate-scroll-reverse">
                                    {/* First set of logos */}
                                    <div className="flex gap-8 items-center min-w-max px-4">
                                        {secondRowLogos.map((logo, index) => (
                                            <div
                                                key={index + 14}
                                                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-lg flex items-center justify-center border border-gray-200 hover:border-customOrange transition-all duration-300 p-4 shadow-sm hover:shadow-md"
                                            >
                                                <img 
                                                    src={logo} 
                                                    alt={`Customer Logo ${index + 15}`} 
                                                    className="max-w-full max-h-full object-contain" 
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    {/* Duplicate set for seamless loop */}
                                    <div className="flex gap-8 items-center min-w-max px-4">
                                        {secondRowLogos.map((logo, index) => (
                                            <div
                                                key={`duplicate-${index + 14}`}
                                                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-lg flex items-center justify-center border border-gray-200 hover:border-customOrange transition-all duration-300 p-4 shadow-sm hover:shadow-md"
                                            >
                                                <img 
                                                    src={logo} 
                                                    alt={`Customer Logo ${index + 15}`} 
                                                    className="max-w-full max-h-full object-contain" 
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How We Make an Impact Section */}
                
            </section>
                <section className="py-16 bg-[#fef7f3]">
                    <div className="mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-12"
                        >
                            <div className="border-l-4 border-red-500 pl-3 inline-block mb-6">
                                <motion.h2
                                    className="text-4xl md:text-6xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-none"
                                >
                                    <motion.span
                                        initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="inline-block text-gray-400"
                                    >
                                        HOW WE
                                    </motion.span>
                                    <motion.span
                                        initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="inline-block ml-2 md:ml-4"
                                        style={{ WebkitTextStroke: '1px black', color: 'transparent' }}
                                    >
                                        MAKE AN IMPACT
                                    </motion.span>
                                </motion.h2>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    title: "Rapid Regional Support",
                                    description: "Our engineers stationed in strategic geographies ensure fast onsite response, minimizing downtime and keeping mission-critical systems operational."
                                },
                                {
                                    title: "Cross-Industry Expertise",
                                    description: "From cement to pharmaceuticals, we leverage hands-on technical knowledge to optimize XRF, OES, PGNAA, and lab analyzers, ensuring consistent performance."
                                },
                                {
                                    title: "Trusted Partnerships",
                                    description: "Every engagement is built on reliability, safety, and operational excellence, helping customers maximize uptime and efficiency."
                                },
                                {
                                    title: "Global Reach, Local Presence",
                                    description: "By combining regional deployment with worldwide expertise, we ensure our solutions are timely, effective, and relevant to each client's needs."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start">
                                        <CheckCircle className="w-6 h-6 text-customOrange mr-2 mt-1 flex-shrink-0" />
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed ml-8">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

        </>
    )
}

export default NetWork