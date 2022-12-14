
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import BtmSlide from "./BtmSlide";
import { FaMinus } from "react-icons/fa";
import Head from "next/head";


function cloubpretest(){
    return(
        <>
         <Head>
          <title>Accedere - Cloud Peneteration Testing</title>
          <meta name="description" content="Accedere Cloud Security Audit Services includes Security in Cloud Computing, Kubernetes Security. Docker Security, Cloud Penetration Testing, Zero Trust Security, Container Security, Application Security and more."/>
          <meta name="keywords" content="Cloud Security, Security in Cloud Computing, Kubernetes Security,. Docker Security, Cloud Penetration Testing, Zero Trust Security, Container Security, Application Security, Cloud security,Cloud Security Alliance, Cloud Compliance auditor, VAPT Playbook,cloud application audits in usa,ISACA cloud audit tool,Cloud Vulnerability,Top Cloud Risks,Cloud Data Audit,Cloud Auditors in USA,Azure Pentest,cloud penetration testing,cloud security arcihtecture,CASB security,cloud app security,cloud computing security,cloud database security,Cloud SaaS Audit,Cloud PaaS Audit,Cloud Vulnerability Assessment,Cloud Penetration Testing,Cloud misconfigured Servers, Kunernetes for Cloud Security, Cloud CCSK, CCM 4, CCAK, SaaS Vulnerability Assessment, SaaS Penetration Testing, ISO19944 vs 27017, Cloud Pentest, PaaS Audit, SaaS VAPT, PaaS VAPT, IaaS VAPT, SecaaS audit, Cloud Security Alliance Auditor"/>
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                               
                              Cloud Peneteration Testing </h2>
                              <p className="text-white mt-4"> An ISO 9001 certification can complement other compliance 
                              efforts, such as ISO 27001,
                               and utilizes the same management system foundation.
                              </p>

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1">
                                    <Image src="/soc-2.jpg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0">
                            
                            <div className="col">
                                    <figure className="comon-sub-main2">
                                        <Image src="/pexels-christina-morillo-1181216.jpg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main "> 
                                 
                                Why ISO 9001? </h2>

                                <p className="mt-4"> The ISO 9001 standard is focused on quality and an organization&apos;s 
                                approach to the design, planning, implementation, and monitoring 
                                of its products and services where consistency and quality are a must.</p>

                                <p className="mt-2"> It is a valuable tool not only for any organization,
                                 specifically for SaaS and Cloud Solution providers, where customers not only 
                                 expect but demand a high level of consistency and reliability from their service providers 
                                to address customer expectations in relation to service delivery.</p>

                             

                            </div>
                            
                            
                        </div>
                        

                        
                    </div>
                </div>

                <div className="para-grap-div mt-5">
                    <div className="container">
                          <h2 className="comon-head-main mt-5 mt-lg-0 text-center"> Our Process </h2>
                            <p className="col-lg-9 mx-auto d-block text-center"> We begin each project with your end goals in mind and to provide preparation for future key project activities. Effective communication and timely coordination of project planning activities are 
                            central to our methodology with our clients.

                            </p>
                            <p> As one of the only US firms accredited by ANAB and UKAS accreditation bodies
                             to perform certification assessments against ISO 27001. When you engage with us,
                              you will receive a dedicated team that is certified and has 
                            exclusive experience in information technology and audit.</p>
                      
                            <BtmSlide/>
                       

                        
                    </div>
                </div>

            
          </div>
          <Footer/>
        </>
    );
}
export default cloubpretest;