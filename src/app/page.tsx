"use client"

import IconText from "@/components/home/services";
import content from '../constant/content.json'
import Reveal from "@/components/animate/reveal";
import Footer from "@/components/footer";
import Image from "next/image";
import ButtonLink from "@/components/shared/buttons/primary";
import InfiniteScroll from "@/components/home/infiniteScrolling";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const GA_TRACKING_ID = "G-45BY3HC1DS";

export default function Home() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const [backgroundPosition, setBackgroundPosition] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;

        const scrollRatio = Math.min(
          Math.max((windowHeight - sectionTop) / sectionHeight, 0),
          1
        );

        if (scrollRatio >= 1) {
          setIsLocked(true);
          setBackgroundPosition(100);
        } else if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
          setIsLocked(false);
          const newBackgroundPosition = scrollRatio * 100;
          setBackgroundPosition(newBackgroundPosition);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const rows: { items: { word: string; image: string }[]; direction: "left" | "right" }[] = [
    {
      items: content.home.industries.row1,
      direction: "left",
    },
    {
      items: content.home.industries.row2,
      direction: "right",
    },

  ];



  return (
    <>

<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
/>
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
    `,
  }}
/>;
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/homepage/videos/bg-home2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full w-full">
          <div className="gap-4 w-full max-w-screen-xl text-white text-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
                Innovate Today, Secure Tomorrow
              </h1>
              <div className="flex justify-center gap-4 mt-4">
                <ButtonLink href="/comingsoon">About Us</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative h-fit w-full bg-black overflow-hidden">
        {/* Rows */}
        <div className="container mx-auto pb-24 px-6 md:px-12 pt-40 space-y-48">
          {/* Row 0 */}
          <div className="relative flex flex-col lg:flex-row items-start lg:items-start space-y-6 lg:space-y-0 lg:space-x-12 text-white">
            {/* Glow Effect */}
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500 to-teal-500 blur-[150px] opacity-50 animate-circle lg:right-10 lg:top-1/2 transform lg:-translate-y-1/2"></div>
            <div className="hidden lg:block">
              <Image
                src="/assets/homepage/images/svg1.png"
                alt="service article"
                width={600}
                height={800}
                className="rounded-[25px] w-auto h-auto"
              />
            </div>


            <div className="block lg:hidden">
              {/* <Image
                src="/assets/homepage/images/mobile-service.png"
                alt="service article"
                width={600}
                height={800}
                className="rounded-[25px] w-auto h-auto"
              /> */}
            </div>
            <div className="flex flex-col w-full">
              <div className="px-4 md:px-10">
                <Reveal>
                  <h5 className="text-lg md:text-xl lg:text-2xl font-semibold text-center lg:text-left">
                    {content.home.services.title
                      .split(" ")
                      .map((word, idx) => {
                        // Highlight the 2nd (index === 1) and 4th (index === 3) words
                        if (idx === 1 || idx === 3) {
                          return (
                            <span key={idx} className="text-blue-500">
                              {word}{" "}
                            </span>
                          );
                        }
                        // Regular text for everything else
                        return <span key={idx}>{word} </span>;
                      })}
                  </h5>

                </Reveal>
                <Reveal>
                  <p className="text-sm md:text-base leading-relaxed w-full max-w-3xl mx-auto lg:mx-0 lg:text-left">
                    {content.home.services.description}
                  </p>
                </Reveal>
              </div>
              <div className="flex justify-center lg:justify-start mt-4">
                <IconText content={content.home.services.article} />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section
        ref={sectionRef}
        className="relative w-full bg-cover bg-center bg-black"
        style={{
          // backgroundImage: "url('/assets/homepage/images/123.png')", // Replace with your background image
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: `center ${isLocked ? "100%" : `${backgroundPosition}%`}`,
        }}
      >


        <div className="container mx-auto pb-48 px-6 md:px-12 pt-48 space-y-48">
          {/* Row 1 */}
          <div className="relative flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 text-white">
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-teal-500 to-blue-500 blur-[150px] opacity-50 animate-circle lg:left-10 lg:top-1/2 transform lg:-translate-y-1/2"></div>
            <div className="relative z-10 flex flex-col text-white text-center lg:text-left max-w-3xl">
              <h5 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide">
                One Core Application Suite To Rule It All
              </h5>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                <span className="text-blue-500">B</span>osTex{" "}
                <span className="text-blue-500">E</span>nterprise{" "}
                <span className="text-blue-500">P</span>latform for{" "}
                <span className="text-blue-500">S</span>ecurity (BTEPS) provide
                comprehensive physical security solution designed with advanced
                threat detection, prevention, and response capabilities.
              </p>
            </div>
            <Image
              src="/assets/homepage/images/services5.png"
              alt="service article"
              width={350}
              height={400}
              className="rounded-[25px] w-auto h-auto"
            />
          </div>

          {/* Row 2 */}
          <div className="relative flex flex-col lg:flex-row-reverse items-center space-y-6 lg:space-y-0 lg:space-x-12">
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500 to-teal-500 blur-[150px] opacity-50 animate-circle lg:right-10 lg:top-1/2 transform lg:-translate-y-1/2"></div>
            <div className="relative z-10 flex flex-col text-white text-center lg:text-left max-w-3xl">
              <h5 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide">
                Quality PACS Hardware and Software
              </h5>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                Bostex Technologies stands out in physical security products
                through its high-quality manufacturing and unwavering commitment
                in engineering, durability, and innovation.
              </p>
            </div>
            <Image
              src="/assets/homepage/images/services6.png"
              alt="service article"
              width={300}
              height={400}
              className="rounded-[25px] w-auto h-auto"
            />
          </div>

          {/* Row 3 */}
          <div className="relative flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 text-white">
            {/* padding Align with the other rows */}
            <div className="absolute w-[300px] h-[300px] hidden"></div>
            <div className="relative z-10 flex flex-col text-white text-center lg:text-left max-w-3xl">
              <h5 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide">
                Integration with 3rd Party Video Surveillance System and Intrusion
                Detection System
              </h5>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                Integrate CCTV surveillance system and intrusion detection system
                for a unified security solution. Monitor, record, and respond to
                incidents in real time, enhancing situational awareness and
                incident management.
              </p>
            </div>
            <Image
              src="/assets/homepage/images/services5.png"
              alt="service article"
              width={350}
              height={400}
              className="rounded-[25px] w-auto h-auto"
            />
          </div>

        </div>
      </section>



      <section className="flex h-fit w-full bg-black bg-cover bg-center justify-center items-center">
        {/* <div className="flex flex-col items-center text-center pb-24">

          <Reveal>
            <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide leading-snug p-6">
              {content.home.industries.title}
            </h5>
          </Reveal>
          <ImgText content={content.home.industries.article}></ImgText>

        </div> */}

        <InfiniteScroll rows={rows} />
      </section>

      {/* 
      <section id="contact" className="grid grid-cols-1 sm:grid-cols-3  pt-24 pb-24 h-fit w-full bg-black">
    
        <div className="flex flex-col items-center text-center space-y-4">
          <a href="mailto:sales@bostexintl.com" className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <FaEnvelope className="text-black w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-white">Email Us</h3>
            <p className="text-gray-300 underline">sales@bostexintl.com</p>
            <p className="text-gray-300 underline">helpdesk@bostexintl.com</p>
          </a>
        </div>

      
        <div className="flex flex-col items-center text-center space-y-4">
          <a href="tel:+6580820023" className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <FaPhone className="text-black w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-white">Call Us</h3>
            <p className="text-gray-300 underline">+65 6844 5675</p>
          </a>
        </div>

   
        <div className="flex flex-col items-center text-center space-y-4">
          <a
            href="https://www.google.com/maps?q=514+Chai+Chee+Ln,+%2303-04,+Singapore+469029"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <FaMapMarkerAlt className="text-black w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-white">Visit Us</h3>
            <p className="text-gray-300 underline">514 Chai Chee Ln, #03-04, Singapore 469029</p>
          </a>
        </div>
      </section> */}

      <Footer></Footer>
    </>
  );
}