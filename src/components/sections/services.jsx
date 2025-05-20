import React from 'react'
import { 
    RiComputerLine,
    RiCodeSSlashLine,
    RiBrainLine,
    RiPlugLine,
    RiChromeLine,
    RiSettings4Line 
} from 'react-icons/ri'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'

const servicesList = [
    {
        id: 1,
        icon: <RiComputerLine size={65} />,
        service_name: "AI-Powered SaaS Development",
        service_description: "Building intelligent, scalable software platforms designed to accelerate your business growth."
    },
    {
        id: 2,
        icon: <RiCodeSSlashLine size={65} />,
        service_name: "Full-Stack Web Development",
        service_description: "Delivering robust, high-performance websites and applications with seamless user experiences."
    },
    {
        id: 3,
        icon: <RiBrainLine size={65} />,
        service_name: "AI Integration",
        service_description: "Harnessing the power of AI to automate workflows, optimize tasks, and enhance digital products."
    },
    {
        id: 4,
        icon: <RiPlugLine size={65} />,
        service_name: "Third-party API Integration",
        service_description: "Connecting systems and streamlining processes for maximum efficiency and productivity."
    },
    {
        id: 5,
        icon: <RiChromeLine size={65} />,
        service_name: "Chrome Extension Development",
        service_description: "Creating AI enabled custom browser tools to enhance user engagement and business capabilities."
    },
    {
        id: 6,
        icon: <RiSettings4Line size={65} />,
        service_name: "AI Powered Workflow Automation",
        service_description: "Designing smart AI-driven workflows that automate complex tasks and unlock new possibilities."
    },
]
const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Services</p>
                            <h2>Cutting-Edge Solutions That Drive Results</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesList.map(({ icon, id, service_description, service_name }) => {
                            return (
                                <div key={id} className="col-lg-4 col-md-6" style={{ marginBottom: '2rem' }}>
                                    <ZoomIn id={id}>
                                        <div className="service-item">
                                            {icon}
                                            <h4>{service_name}</h4>
                                            <p>{service_description}</p>
                                        </div>
                                    </ZoomIn>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services