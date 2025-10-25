import React from 'react';
import Service from './Service/Service'
import { accordionData, servicesList } from '../utils/data';

export default function PGNAAService() {

  const data = `At Spectra Group, we know that every minute counts in mission-critical operations.
Our PGNAA service team has supported industries across the Middle East, Africa,
and Turkey, ensuring that their analyzers deliver reliable, continuous, and accurate
performance.
Through tailored Product Support Agreements, Time &amp; Material services, and Spare
Parts Supply, we help customers keep their systems running smoothly. Our hands-on
support, preventive maintenance, and rapid troubleshooting have enabled clients to
achieve more than 99% uptime, ensuring uninterrupted operations and consistent
process control.
We pride ourselves on being more than a service provider—we are a partner. By
anticipating challenges, providing expert guidance, and training operators, we
empower our customers to focus on productivity, safety, and operational excellence,
while we take care of the systems that make it all possible.`;

  const pageTitle = `Process Analyzers Support & Services`;
  const TagLine = `Prompt Gamma Neutron Activation Analysis (PGNAA)`;
  return (
    <Service title={'Process Analyzers'} content={data} pageTitle={pageTitle} TagLine={TagLine} accordion={accordionData} service={servicesList}/>
  )
}