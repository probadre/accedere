
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";
import Head from "next/head";

export default function penetrationtesting() {
  return (
    <div>
    <Head>
            <title>Accedere - VAPT</title>
            <meta name="twitter:title" content="Penetration Testing Services | Accedere &amp; Company"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       VAPT  </h2>
                       <h5 className="text-white"> Demonstrate to your customers that you take data security requirements
                        seriously with our independent third party assessments
                       </h5>
     
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img">
                          <Image src="/ad-socl-1.jpg"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
               
                <h2 className="comon-head-main text-center"> Penetration Testing Suite of Services </h2>
                <p className="text-center col-lg-7 mx-auto"> Staying in front of industry trends, Schellman is always adding and refining our IT audit and compliance offerings: </p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/aicpasocreports/soc-reporting-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                               Application Security 
                               </h5>
                               <p> Identify vulnerabilities within software developed internally or by third parties. We assess 
                               the security of web applications, APIs, and client-side applications.
                               </p>
                            
                          </div>
                      </Link>
                    </div>
                    
                    

                    <div className="col">
                      <Link href="/services/aicpasocreports/soc2cloud">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7818296.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Network and Infrastructure Security </h5>
                               <p>Our experienced team effectively assesses your organization&apos;s
                                preparedness through phishing and vishing techniques.
                               </p> 
                          
                          </div>
                      </Link>
                    </div>


                    <div className="col">
                      <Link href="/services/aicpasocreports/soc2cloud">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7818296.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Cloud Security (link to Cloud Penetration Testing) </h5>
                               <p>Our experienced team effectively assesses your organization&apos;s
                                preparedness through phishing and vishing techniques.
                               </p> 
                          
                          </div>
                      </Link>
                    </div>

                </div> 
            </div>
         </div>

       
   

    </div>
        
    <Footer/>
    </div>
  )
}
