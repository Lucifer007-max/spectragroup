import React from 'react'
import Service from './Service/Service';
import { accordionData2, servicesList4 } from '../utils/data';

export default function XRayservice() {
    const data = `Radiation Services – Safety, Expertise, and Reliability You Can Trust
                At Spectra Group, we understand that radiation safety is not just a guideline—it’s a practice.
                Every procedure, every source, every transport must be handled with precision, care, and
                expertise to keep your plant, personnel, and environment safe and protected. That’s why
                industries across the Middle East, Africa, and Turkey rely on us to ensure safe, compliant,
                and uninterrupted operations.

                Over the years, we have supported 150+ customers, providing key radioactive sources such
                as Cf-252, Co-60, and As-137. By maintaining strong relationships with leading
                manufacturers, we ensure secure, reliable, and timely supply, so your operations remain
                seamless.
                Our services go beyond supply. We deliver comprehensive radiation solutions, including
                radiation surveys, leak tests, operator training, regulatory compliance guidance, and
                transportation support. Every service is backed by our certified team, affiliated with FNAR
                and trained in IATA Dangerous Goods Handling, giving you the confidence that safety is
                always prioritized.
                We also provide preventive audits, risk assessments, and operational support, helping you
                anticipate challenges and mitigate risks before they arise. Whether it’s a complex industrial
                application or a mission-critical operation, we ensure radiation safety is seamless, proactive,
                and reliable.
                At Spectra Group, our mission is simple: we make radiation safety and management worry-
                free. By combining technical expertise, certified personnel, trusted manufacturer
                partnerships, and a culture of safety, we empower our clients to focus on growth, innovation,
                and operational excellence, while we take care of the critical details that keep their systems
                and teams safe.`;

    const pageTitle = `Radiation Services`;
    const TagLine = `Comprehensive Solutions for Precision Analysis`;
    return (
        <Service title={'Radiation Services'} content={data} pageTitle={pageTitle} TagLine={TagLine} accordion={accordionData2}  service={servicesList4}/>
    )
}


