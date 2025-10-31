import { Eye, FlagTriangleLeft, Workflow } from "lucide-react";
import time from '../assets/images/product/247.jpg'
import ENG from "../assets/images/product/dedicated.jpg"
import Traning from "../assets/images/product/training.jpg"
import aggrement from '../assets/images/product/aggrement.jpg'
import validation from '../assets/images/product/Validation.jpg'
import Radioactive from '../assets/images/radiation-warning.png';
import {
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export const services = [

  {
    title: "Spectra Group – Empowering Industries, Shaping a Sustainable Future",
    description: `
Headquartered in Dubai, Spectra Group, through its companies Spectra Line Industrial LLC
and GeoSpectra Technical Services LLC, delivers advanced solutions in analytical
instrumentation, radiation technology, and industrial engineering across the Middle East,
Africa, and Turkey. We specialize in XRF, XRD, OES, and PGNAA analyzers, radiation
safety, isotope supply, and waste management. Committed to innovation, reliability, and
training, we empower industries to achieve precision, efficiency, and sustainable growth in
mission-critical environments.`,
    icon: <FlagTriangleLeft className="w-8 h-8" />,
    gridClass: "md:col-span-1 row-span-1",
    bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
  },
  {
    title: "Vision",
    description: "To be a globally recognized leader in providing innovative, reliable, and high-performance solutions in analytical instrumentation, radiation technology, and environmental and geological engineering. Spectra Group strives to set the benchmark for excellence in mission-critical industries, delivering every project with a commitment to sustainability, safety, and operational efficiency, while empowering industries worldwide to achieve precision and long-term growth.",
    icon: <Eye className="w-8 h-8" />,
    gridClass: "md:col-span-1 row-span-1",
    bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
  },

]



export const jsonData = {
  "type": "FeatureCollection",
  "crs": {
    "type": "name",
    "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
  },
  "features": [
    { "type": "Feature", "properties": { "id": "DZ", "name": "Algeria" }, "geometry": { "type": "Point", "coordinates": [3.0588, 36.7538] } },
    { "type": "Feature", "properties": { "id": "EG", "name": "Egypt" }, "geometry": { "type": "Point", "coordinates": [31.2357, 30.0444] } },
    { "type": "Feature", "properties": { "id": "JO", "name": "Jordan" }, "geometry": { "type": "Point", "coordinates": [35.9304, 31.9634] } },
    { "type": "Feature", "properties": { "id": "NG", "name": "Nigeria" }, "geometry": { "type": "Point", "coordinates": [9.0575, 7.4951] } },
    { "type": "Feature", "properties": { "id": "LB", "name": "Lebanon" }, "geometry": { "type": "Point", "coordinates": [35.8497, 33.8869] } },
    { "type": "Feature", "properties": { "id": "ET", "name": "Ethiopia" }, "geometry": { "type": "Point", "coordinates": [38.7369, 9.145] } },
    { "type": "Feature", "properties": { "id": "MA", "name": "Morocco" }, "geometry": { "type": "Point", "coordinates": [-7.0926, 31.7917] } },
    { "type": "Feature", "properties": { "id": "YE", "name": "Yemen" }, "geometry": { "type": "Point", "coordinates": [48.5164, 15.5521] } },
    { "type": "Feature", "properties": { "id": "OM", "name": "Oman" }, "geometry": { "type": "Point", "coordinates": [55.3137, 23.5854] } },
    { "type": "Feature", "properties": { "id": "LY", "name": "Libya" }, "geometry": { "type": "Point", "coordinates": [13.1924, 32.8797] } },
    { "type": "Feature", "properties": { "id": "PK", "name": "Pakistan" }, "geometry": { "type": "Point", "coordinates": [74.3587, 31.5204] } },
    { "type": "Feature", "properties": { "id": "SA", "name": "Saudi Arabia" }, "geometry": { "type": "Point", "coordinates": [46.6753, 24.7136] } },
    { "type": "Feature", "properties": { "id": "SN", "name": "Senegal" }, "geometry": { "type": "Point", "coordinates": [-14.6928, 14.6928] } },
    { "type": "Feature", "properties": { "id": "QA", "name": "Qatar" }, "geometry": { "type": "Point", "coordinates": [51.1839, 25.276987] } },
    { "type": "Feature", "properties": { "id": "TZ", "name": "Tanzania" }, "geometry": { "type": "Point", "coordinates": [39.2026, -6.1659] } },
    { "type": "Feature", "properties": { "id": "TN", "name": "Tunisia" }, "geometry": { "type": "Point", "coordinates": [9.5375, 33.8869] } },
    { "type": "Feature", "properties": { "id": "TR", "name": "Turkey" }, "geometry": { "type": "Point", "coordinates": [35.2433, 39.9334] } },
    { "type": "Feature", "properties": { "id": "ZA", "name": "South Africa" }, "geometry": { "type": "Point", "coordinates": [24.7135, -29.0189] } },
    { "type": "Feature", "properties": { "id": "AE", "name": "UAE" }, "geometry": { "type": "Point", "coordinates": [55.2983, 23.4241] } },
    { "type": "Feature", "properties": { "id": "IN", "name": "India" }, "geometry": { "type": "Point", "coordinates": [78.9629, 20.5937] } },
    { "type": "Feature", "properties": { "id": "ZM", "name": "Zambia" }, "geometry": { "type": "Point", "coordinates": [27.8493, -13.1339] } },
    { "type": "Feature", "properties": { "id": "TM", "name": "Turkmenistan" }, "geometry": { "type": "Point", "coordinates": [59.5880, 38.9697] } }
  ]
}


export const Gammaexperties = [
  "Comprehensive Product and Maintenance Support.",
  "Performance Evaluation and Optimization Support.",
  "Static & Dynamic Calibration Support.",
  "Process control & Integration Solution using PGNAA system to plant network.",
  "Radioactive Source Replenishment & Support.",
  "Consumable & Spares Support.",
  "Data Integration with other Lab systems & database management.",
  "Endless support to your old or new system.",
  "Expert advice and consulting on new and existing systems."
];

export const Experties = [
  "We conduct dedicated ON-SITE user training programs at plant site ON CUSTOMER SYSTEMS and provide advance Operation, maintenance and troubleshooting training specific to your PGNAA and/or X-ray analyzers.",
  "Periodically, we also conduct OFF-SITE training programs on PGNAA and X-ray analyzer systems maintenance and troubleshooting at various locations. An enquiry can be sent to us directly or thru our website.",
  "Eventually with our training programs, most customers are able to bypass expensive maintenance agreement of OEMs and can easily operate & troubleshoot the analyzer systems at much less cost and better capabilities."

]

export const Xraysexperties = [
  "Comprehensive Product and Maintenance Support.",
  "Performance Evaluation and Optimization Support.",
  "Complete Calibration Support.",
  "Process control & Integration Solution using X-ray and PGNAA system integration.",
  "Consumable & Spares Support.",
  "Data Integration with other Lab systems & database management."
];



export const dataList = [
  { "countryName": "Algeria", "locationLatitude": 36.7538, "locationLongitude": 3.0588 },
  { "countryName": "Egypt", "locationLatitude": 30.0444, "locationLongitude": 31.2357 },
  { "countryName": "Jordan", "locationLatitude": 31.9634, "locationLongitude": 35.9304 },
  { "countryName": "Nigeria", "locationLatitude": 7.4951, "locationLongitude": 9.0575 },
  { "countryName": "Lebanon", "locationLatitude": 33.8869, "locationLongitude": 35.8497 },
  { "countryName": "Ethiopia", "locationLatitude": 9.145, "locationLongitude": 38.7369 },
  { "countryName": "Morocco", "locationLatitude": 31.7917, "locationLongitude": -7.0926 },
  { "countryName": "Yemen", "locationLatitude": 15.5521, "locationLongitude": 48.5164 },
  { "countryName": "Oman", "locationLatitude": 23.5854, "locationLongitude": 55.3137 },
  { "countryName": "Libya", "locationLatitude": 32.8797, "locationLongitude": 13.1924 },
  { "countryName": "Pakistan", "locationLatitude": 31.5204, "locationLongitude": 74.3587 },
  { "countryName": "Saudi Arabia", "locationLatitude": 24.7136, "locationLongitude": 46.6753 },
  { "countryName": "Senegal", "locationLatitude": 14.6928, "locationLongitude": -14.6928 },
  { "countryName": "Qatar", "locationLatitude": 25.276987, "locationLongitude": 51.1839 },
  { "countryName": "Tanzania", "locationLatitude": -6.1659, "locationLongitude": 39.2026 },
  { "countryName": "Tunisia", "locationLatitude": 33.8869, "locationLongitude": 9.5375 },
  { "countryName": "Turkey", "locationLatitude": 39.9334, "locationLongitude": 35.2433 },
  { "countryName": "South Africa", "locationLatitude": -29.0189, "locationLongitude": 24.7135 },
  { "countryName": "UAE", "locationLatitude": 23.4241, "locationLongitude": 55.2983 },
  { "countryName": "India", "locationLatitude": 20.5937, "locationLongitude": 78.9629 },
  { "countryName": "Zambia", "locationLatitude": -13.1339, "locationLongitude": 27.8493 },
  { "countryName": "Turkmenistan", "locationLatitude": 38.9697, "locationLongitude": 59.5880 }
]


export const servicesList = [
  {
    title: "Dedicated Support Engineer",
    description:
      "A personal expert assigned to your system, providing guidance, troubleshooting, and proactive solutions tailored to your operations.",
    img: ENG,
  },
  {
    title: "24/7 Remote Support",
    description:
      "Round-the-clock remote assistance to monitor performance and resolve issues quickly, keeping your operations running smoothly.",
    img: time,
  },
  {
    title: "Onsite &amp; Offsite Training",
    description:
      "Hands-on and remote training programs for operators and technical staff to maximize system efficiency and confidence.",
    img: Traning,
  },
  {
    title: "Maintenance &amp; Support Agreements",
    description:
      "Flexible agreements covering preventive maintenance, repairs, and system optimization, ensuring long-term reliability and uptime.",
    img: aggrement,
  },
  {
    title: "Periodic System Validation &amp; Calibration",
    description:
      "Regular calibration and validation to maintain measurement accuracy, compliance, and process integrity for mission-critical operations.",
    img: validation,
  },
  {
    title: "Radioactive Source Supply",
    description:
      "Safe and reliable supply of radioactive isotopes with guidance to ensure compliance and uninterrupted system operation.",
    img: Radioactive
  },
];

export const servicesList2 = [
  {
    title: "Dedicated Support Engineer",
    description:
      "A personal expert assigned to your system, providing guidance, troubleshooting, and proactive solutions tailored to your operations.",
    img: ENG,
  },
  {
    title: "24/7 Remote Support",
    description:
      "Round-the-clock remote assistance to monitor performance and resolve issues quickly, keeping your operations running smoothly.",
    img: time,
  },
  {
    title: "Onsite & Offsite Training",
    description:
      "Hands-on and remote training programs for operators and technical staff to maximize system efficiency and confidence.",
    img: Traning,
  },
  {
    title: "Maintenance & Support Agreements",
    description:
      "Flexible agreements covering preventive maintenance, repairs, and system optimization, ensuring long-term reliability and uptime.",
    img: aggrement,
  },
  {
    title: "Periodic System Validation & Calibration",
    description:
      "Regular calibration and validation to maintain measurement accuracy, compliance, and process integrity for mission-critical operations.",
    img: validation,
  },
  {
    title: "Radioactive Source Supply",
    description:
      "Safe and reliable supply of radioactive isotopes with guidance to ensure compliance and uninterrupted system operation.",
    img: Radioactive,
  },
];

export const servicesList3 = [
  {
    title: "Personal Technical Advisor",
    description:
      "Your dedicated expert provides tailored guidance, system troubleshooting, and customized solutions aligned with your specific workflows and operational needs.",
    img: ENG,
  },
  {
    title: "Around-the-Clock Remote Support",
    description:
      "Receive continuous remote assistance for both minor issues and urgent troubleshooting, ensuring smooth and uninterrupted system performance.",
    img: time,
  },
  {
    title: "Comprehensive Training Programs",
    description:
      "Customized onsite and virtual training designed to upskill your operators, enhance efficiency, and build confidence in handling analytical systems.",
    img: Traning,
  },
  {
    title: "Service & Maintenance Plans",
    description:
      "Flexible plans covering preventive care, repairs, and performance optimization—helping you maximize reliability and instrument lifespan.",
    img: aggrement,
  },
  {
    title: "Regular System Validation & Calibration",
    description:
      "Scheduled calibration and validation to ensure every measurement remains accurate, compliant, and consistent with operational standards.",
    img: validation,
  },
  {
    title: "Reliable Spare Component Supply",
    description:
      "Genuine and compatible spare parts supplied to minimize downtime and maintain seamless lab operations focused on quality and productivity.",
    img: Radioactive,
  },
];

export const servicesList4 = [
  {
    title: "Trusted Source Supply",
    description:
      "From Cf-252 to Co-60 and As-137, we ensure secure, reliable, and timely delivery of radioactive sources—backed by strong partnerships with certified manufacturers.",
    img: ENG,
  },
  {
    title: "Comprehensive Surveys & Leak Tests",
    description:
      "We conduct precise radiation surveys and leak tests to monitor your environment, ensuring safety, compliance, and peace of mind at every stage.",
    img: time,
  },
  {
    title: "Certified Training & Knowledge Transfer",
    description:
      "Empower your team with certified hands-on and remote training programs, promoting safe handling and confident operation of radioactive materials.",
    img: Traning,
  },
  {
    title: "Regulatory Guidance Made Simple",
    description:
      "Navigate local and international radiation regulations effortlessly with our expert guidance, keeping your operations fully compliant and audit-ready.",
    img: aggrement,
  },
  {
    title: "Safe & Compliant Transportation",
    description:
      "From packaging to logistics, we ensure safe, compliant, and traceable transportation of radioactive materials from manufacturer to your facility.",
    img: validation,
  },
  {
    title: "Proactive Risk Management",
    description:
      "Through detailed audits, preventive checks, and risk assessments, we help you identify potential hazards early and maintain uninterrupted, safe operations.",
    img: Radioactive,
  },
];



export const accordionData = [
  {
    title: "What kind of support do you provide for PGNAA systems?",
    content:
      "We offer complete support, including maintenance, troubleshooting, remote and onsite service, training, calibration, validation, and radioactive source supply.",
  },
  {
    title: "Can we customize a service plan for our specific needs?",
    content:
      "Yes. We provide flexible plans, including Product Support Agreements, Time &amp; Material services, and spare parts supply tailored to your operations.",
  },
  {
    title: "How quickly can your team respond to service requests?",
    content:
      "We offer 24/7 premium support for mission-critical systems and an 8x5 standard plan for business-hour coverage—both providing timely remote and onsite assistance.",
  },
  {
    title: "Do you provide training for our operators and technical staff?",
    content:
      "Yes. We offer onsite and offsite training to ensure safe handling, efficient operation, and maximum system performance.",
  },
  {
    title: "How do you ensure accuracy and reliability of PGNAA systems?",
    content:
      "Through regular validation, calibration, preventive maintenance, and expert application support, ensuring precise measurements and smooth operations.",
  },
  {
    title: "Can you supply spare parts for PGNAA systems?",
    content:
      "Absolutely. We provide genuine and compatible spare parts, ensuring minimal downtime and continued reliable performance of your analyzers.",
  },
   {
    title: "Do you assist with system upgrades or technology enhancements?",
    content:
      "Yes. Our team offers upgrade support and retrofitting solutions, helping systems stay current with the latest technology and maintain optimal performance.",
  },
  {
    title: "How do you ensure safety and regulatory compliance?",
    content:
      "We provide radiation safety guidance, source handling protocols, and compliance support, ensuring your operations meet industry standards while maintaining safe working conditions.",
  },
];

export const accordionData2 = [
  {
    title: "What does radiation safety entail?",
    content:
      "Radiation safety is a practice to protect your plant, personnel, and environment. It involves proper handling, monitoring, and management of radioactive materials to ensure operations remain safe and compliant.",
  },
  {
    title: "Which radioactive sources do you supply?",
    content:
      "We provide Cf-252, Co-60, and As-137 sources, ensuring safe, reliable, and timely delivery through strong partnerships with leading manufacturers.",
  },
  {
    title: "Do you conduct radiation surveys and leak tests?",
    content:
      "Yes. Our team performs comprehensive surveys and leak testing to monitor radiation levels, maintain safety standards, and prevent any operational risks.",
  },
  {
    title: "Can you provide training for our staff?",
    content:
      "Absolutely. We offer onsite and remote training programs to equip operators and technical personnel with the knowledge and skills to safely handle radioactive materials and follow best practices.",
  },
  {
    title: "How do you ensure regulatory compliance?",
    content:
      "We provide guidance on local and international regulations, helping you meet all safety and legal standards while keeping your operations efficient and compliant.",
  },
  {
    title: "Do you assist with transportation of radioactive materials?",
    content:
      "Yes. Our certified team, trained in IATA Dangerous Goods Handling, ensures the safe and compliant transport of radioactive sources to your site.",
  },
  {
    title: "Are preventive checks and risk assessments part of your services?",
    content:
      "Yes. We conduct system audits, preventive inspections, and risk assessments, helping you anticipate challenges and maintain uninterrupted, safe operations.",
  },
];



export const accordionData3 = [
  {
    title: "Which types of analyzers do you support?",
    content:
      "We provide expert support for XRF, OES, and various other laboratory analyzers, ensuring precise measurements, reliable performance, and long-term stability across multiple industries.",
  },
  {
    title: "Which industries do you serve?",
    content:
      "Our services cater to a wide range of industries, including cement, minerals, steel, and pharmaceuticals—helping laboratories maintain consistent quality, regulatory compliance, and operational efficiency.",
  },
  {
    title: "What service plans are available for lab analyzers?",
    content:
      "We offer flexible service plans, including full-service agreements, Time & Material services, and spare parts supply, all tailored to your specific operational and budget requirements.",
  },
  {
    title: "How quickly can your team respond to service requests?",
    content:
      "Our support team provides 24/7 premium assistance for mission-critical systems and an 8x5 standard plan for business-hour coverage—ensuring rapid response and minimal downtime.",
  },
  {
    title: "Do you provide training for lab staff and operators?",
    content:
      "Yes. We conduct comprehensive onsite and remote training programs to enhance operator skills, strengthen system knowledge, and improve overall laboratory efficiency.",
  },
  {
    title: "How do you ensure analyzers maintain accuracy and reliability?",
    content:
      "We ensure accuracy and reliability through scheduled calibration, validation, preventive maintenance, and expert technical support—guaranteeing precise, compliant, and consistent performance.",
  },
  {
    title: "Do you support integration with LIMS?",
    content:
      "Yes. Our specialists assist with LIMS integration and data management, ensuring smooth transfer of analytical results for better traceability, automated reporting, and enhanced process control.",
  },
  {
    title: "How do you ensure minimal downtime for lab operations?",
    content:
      "By combining proactive maintenance, genuine spare parts supply, and fast remote or onsite assistance, we minimize downtime and maintain uninterrupted laboratory performance.",
  },
];



export const globeData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Algeria",
        "adm0name": "Algeria",
        "latitude": 28.0339,
        "longitude": 1.6596,
        "pop_max": 43851044
      },
      "geometry": {
        "type": "Point",
        "coordinates": [1.6596, 28.0339]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Egypt",
        "adm0name": "Egypt",
        "latitude": 26.8206,
        "longitude": 30.8025,
        "pop_max": 102334404
      },
      "geometry": {
        "type": "Point",
        "coordinates": [30.8025, 26.8206]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Jordan",
        "adm0name": "Jordan",
        "latitude": 30.5852,
        "longitude": 36.2384,
        "pop_max": 10203134
      },
      "geometry": {
        "type": "Point",
        "coordinates": [36.2384, 30.5852]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Nigeria",
        "adm0name": "Nigeria",
        "latitude": 9.082,
        "longitude": 8.6753,
        "pop_max": 206139589
      },
      "geometry": {
        "type": "Point",
        "coordinates": [8.6753, 9.082]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Lebanon",
        "adm0name": "Lebanon",
        "latitude": 33.8547,
        "longitude": 35.8623,
        "pop_max": 6825442
      },
      "geometry": {
        "type": "Point",
        "coordinates": [35.8623, 33.8547]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ethiopia",
        "adm0name": "Ethiopia",
        "latitude": 9.145,
        "longitude": 40.4897,
        "pop_max": 114963588
      },
      "geometry": {
        "type": "Point",
        "coordinates": [40.4897, 9.145]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Morocco",
        "adm0name": "Morocco",
        "latitude": 31.7917,
        "longitude": -7.0926,
        "pop_max": 36910560
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-7.0926, 31.7917]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Yemen",
        "adm0name": "Yemen",
        "latitude": 15.5527,
        "longitude": 48.5164,
        "pop_max": 29825964
      },
      "geometry": {
        "type": "Point",
        "coordinates": [48.5164, 15.5527]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Oman",
        "adm0name": "Oman",
        "latitude": 21.4735,
        "longitude": 55.9754,
        "pop_max": 5106626
      },
      "geometry": {
        "type": "Point",
        "coordinates": [55.9754, 21.4735]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Libya",
        "adm0name": "Libya",
        "latitude": 26.3351,
        "longitude": 17.2283,
        "pop_max": 6871292
      },
      "geometry": {
        "type": "Point",
        "coordinates": [17.2283, 26.3351]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pakistan",
        "adm0name": "Pakistan",
        "latitude": 30.3753,
        "longitude": 69.3451,
        "pop_max": 220892340
      },
      "geometry": {
        "type": "Point",
        "coordinates": [69.3451, 30.3753]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Saudi Arabia",
        "adm0name": "Saudi Arabia",
        "latitude": 23.8859,
        "longitude": 45.0792,
        "pop_max": 34813871
      },
      "geometry": {
        "type": "Point",
        "coordinates": [45.0792, 23.8859]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "India",
        "adm0name": "India",
        "latitude": 20.5937,
        "longitude": 78.9629,
        "pop_max": 1393409038
      },
      "geometry": {
        "type": "Point",
        "coordinates": [78.9629, 20.5937]
      }
    }
  ]
}

export const expertiesCards = [
  {
    title: "Our purpose",
    description:
      "ABB’s purpose is to enable a more sustainable and resource-efficient future with our technology leadership in electrification and automation. Our purpose is why we are in business. It expresses both what we stand for as a company and what we aspire to be in the future. Make our purpose part of your story.",
    gridClass: "md:col-span-1 row-span-1",
    bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
  },
  {
    title: "Understanding Customer Challenges",
    description:
      "We start by listening to operational gaps, from analyzer performance issues to radiation safety concerns, and create solutions that truly address real-world needs.",
    gridClass: "md:col-span-1 row-span-1",
    bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
  },
  {
    title: "Rapid Regional Support",
    description:
      "By stationing engineers in key geographies, we provide fast onsite assistance, minimizing downtime and ensuring mission-critical systems remain operational.",
    gridClass: "md:col-span-1 row-span-1",
    bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
  },
  {
    title: "Cross-Industry Expertise",
    description:
      "Serving cement, minerals, steel, oil & gas, and pharmaceuticals, we leverage hands-on experience with XRF, OES, PGNAA, and lab analyzers to optimize operations and improve efficiency.",
    gridClass: "md:col-span-1 row-span-1",
    bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
  },
  {
    title: "Continuous Learning & Service Evolution",
    description:
      "Every customer interaction informs our growth. We continuously refine training programs, preventive maintenance, and support services to enhance reliability and operational performance.",
    gridClass: "md:col-span-1 row-span-1",
    bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
  },
  {
    title: "Safety and Compliance as a Core",
    description:
      "Our approach prioritizes radiation safety, secure source handling, and regulatory compliance, empowering clients to operate with confidence, accuracy, and peace of mind.",
    gridClass: "md:col-span-1 row-span-1",
    bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
  },
]


export const portfolioItems = [
  {
    title: "Mission-Critical PGNAA Solutions",
    description:
      "We provide expert support for process analyzers, enabling real-time monitoring, precise measurements, and high uptime. Our team has extensive experience in optimizing systems for maximum performance, tailored to your operational needs.",
  },
  {
    title: "Lab Analyzer Support",
    description:
      "From XRF and OES to lab analyzers, we ensure accuracy, reliability, and consistent results. Our services include preventive maintenance, troubleshooting, spare parts supply, and system optimization, helping laboratories achieve peak performance every day.",
  },
  {
    title: "Radiation Safety & Services",
    description:
      "Safety is at the core of everything we do. Our solutions cover source supply, radiation surveys, leak tests, compliance guidance, and secure transport, allowing you to operate with confidence, regulatory compliance, and peace of mind.",
  },
  {
    title: "Training & Knowledge Transfer",
    description:
      "We empower your teams through hands-on and virtual training, covering system operation, maintenance, calibration, and radiation safety. By bridging knowledge gaps, we boost operational efficiency and reduce downtime.",
  },
  {
    title: "Regional Rapid Support",
    description:
      "With outstationed engineers across key geographies in the Middle East, Africa, and Turkey, we provide fast onsite response, minimizing downtime and keeping mission-critical systems running smoothly.",
  },
  {
    title: "Compliance & Advisory Services",
    description:
      "We guide our customers through regulatory standards, preventive maintenance schedules, and best practices, ensuring that operations remain safe, efficient, and fully compliant.",
  },
]




export const CardsList = [
  {
    title: "Speak to Our Experts",
    description:
      "Direct access to our specialists for technical guidance, troubleshooting, or operational advice.",
    icon: <ChatBubbleLeftRightIcon className="h-10 w-10 text-blue-600" />,
    action: () => {
      // trigger contact form or chat link
    },
  },
  {
    title: "Request an Onsite Visit",
    description:
      "Schedule an engineer for hands-on support, preventive maintenance, or system optimization.",
    icon: <MapPinIcon className="h-10 w-10 text-green-600" />,
    action: () => {
      // trigger booking form
    },
  },
  {
    title: "Drop Us a Message",
    description:
      "Send inquiries via online form or email for prompt, personalized responses.",
    icon: <EnvelopeIcon className="h-10 w-10 text-yellow-600" />,
    action: () => {
      // trigger contact form
    },
  },
  {
    title: "Explore Our Global Presence",
    description:
      "See where our engineers and support teams are stationed worldwide for rapid, local support.",
    icon: <GlobeAltIcon className="h-10 w-10 text-purple-600" />,
    action: () => {
      // open interactive map
    },
  },
];
