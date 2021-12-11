import React from 'react'
import './services.scss'

const Services = () => {
    return (
        <div className="services" id="services">
            <h2 className="title" data-aos="fade-up">My Services</h2>
            <div className="serv-content" >
                <div className="card" data-aos="fade-right">
                    <div className="box">
                        <div className="text">Web Designing</div>
                        <p> Providing custom web design services use to convey your intended business message clearly and with an impact. All websites are developed as <span>mobile responsive</span> to ensure seamless viewing experience across device.Avail our responsive web design services to build a distinct website and significantly increase your business potential online.
                        </p>
                    </div>
                </div>
                <div className="card" data-aos="fade-up">
                    <div className="box">
                        <div className="text">Advertising</div>
                        <p>In today's rapidly changing world, choosing the <span>perfect combination of advertising services</span> for your product or service is becoming increasingly challenging. Let me help you put together an advertising campaign that will cut through the clutter and target your audience carefully and thoughtfully.</p>
                    </div>
                </div>
                <div className="card" data-aos="fade-left">
                    <div className="box">
                        <div className="text">App Designing</div>
                        <p>Looking for effective design solutions? I create <span>simple, clean, and attractive</span> mobile app designs for business. My research-based approach allows me to generate the most effective solutions for your specific business needs. I define business goals and align stakeholder expectations for the product.</p>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Services
