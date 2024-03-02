import React from 'react'
import "./Home.css";
const Manufacturing = () => {
    return (
        <div className=''>
            <section className="innerBanner">
                <picture>
                    <img
                        className="responsive-image"
                        src="https://ajantapharma.com/assets/frontend/images/inner_banner/business_areas.jpg"
                        alt="Business Areas"
                        style={{ maxWidth: '100%' }}
                    />

                </picture>

                <div className="container">
                    <div className="innerpageTitle">
                        <div className="row h-100">
                            <div className="col-md-6 align-self-center aos-init aos-animate" >
                                <h1 data-aos="fade-right">Manufacturing</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className='Manufacturing-head'>   
         <h1 className='manufacturing-heading'>Manufacturing</h1>
     </div> */}

            <div className="container-fluid p-5 hero-header  mt-4">
                <div >
                    <div className=" g-5 align-items-center slider-img">
                        <div className=" " >
                            <div className="">
                                <img width="1200px" style={{ borderRadius: "15px 50px", boxShadow: "-5px -5px 9px rgba(184, 184, 184, 0.45) 5px 5px 9px rgba(78, 88, 104, 0.3)" }} className="img-fluid" src="https://img.freepik.com/premium-photo/genetic-research-biotech-science-concept_43780-6220.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
                            </div>
                        </div>
                        <div

                        >
                            {/* <div className="home-head rounded-pill  px-3 mb-3">
                Business Area
              </div> */}
                            <h1 className="Manu-about"> HealWell Pharmaceuticals: Redefining Healthcare Through Trailblazing R&D</h1>
                            <p className="Manu-para">"HealWell Pharmaceuticals is at the forefront of medical innovation, with our pioneering R&D team leading the charge. Our research focuses on developing innovative therapies and treatments that challenge the status quo, ensuring patients receive the best care possible. By combining cutting-edge science with a patient-centered approach, we're changing the face of healthcare. Join us in our journey to revolutionize the way we treat and manage diseases, delivering hope and better health for all."</p>


                        </div>
                    </div>
                </div>
            </div>
            
            <div className=" p-5">
                <div style={{ background: "#AFEEEE", paddingLeft: "20px", paddingTop: "30px", paddingBottom: "30px", borderLeft: "4px solid green" }}>
                    <div className="  wow fadeIn p-2" data-wow-delay="0.5s" style={{ fontSize: "19px", fontWeight: "500" }}>
                    Harnessing cutting-edge technology and unparalleled expertise, our pharma manufacturing facilities are at the forefront of healthcare innovation. From small molecule synthesis to biologics production, every step is meticulously planned and executed to ensure the highest standards of safety, efficacy, and sustainability. Explore the next generation of pharmaceutical manufacturing solutions that are shaping the future of healthcare.
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Manufacturing