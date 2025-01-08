"use client"

import IconText from "@/components/home/services";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import content from '../constant/content.json'
import Reveal from "@/components/animate/reveal";
import Footer from "@/components/footer";
import Image from "next/image";
import ImgText from "@/components/home/industries";
import Link from "next/link";
export default function Home() {
  return (
    <>
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

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full w-full bg-black bg-opacity-50">
          <div className="gap-4 w-full max-w-screen-xl text-white text-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">Innovate today, Secure Tomorrow</h1>

              <div className="flex justify-center gap-4 mt-4">
                {/* <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                  Learn More
                </button> */}
                <Link className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition inline-block" href="/comingsoon" passHref>
                        About Us 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-fit w-full bg-black overflow-hidden">
        {/* Rows */}
        <div className="container mx-auto pb-24 px-6 md:px-12 pt-48 md:pb-48 lg:pb-96 space-y-48">
          {/* Row 0 */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-12 text-white">
            {/* Glow Effect */}
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500 to-pink-500 blur-[150px] opacity-50 animate-circle lg:right-10 lg:top-1/2 transform lg:-translate-y-1/2"></div>
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
              <Image
                src="/assets/homepage/images/mobile-service.png"
                alt="service article"
                width={600}
                height={400}
                className="rounded-[25px] w-auto h-auto"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="px-4 md:px-10">
                <Reveal>
                  <h5 className="text-lg md:text-xl lg:text-2xl font-semibold text-center lg:text-left">
                    {content.home.services.title.split(" ").slice(0, -3).join(" ")}{" "}
                    <span className="text-blue-500">
                      {content.home.services.title.split(" ").slice(-3).join(" ")}
                    </span>
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

          {/* Row 1 */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-12">
            {/* Glow Effect */}
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500 to-teal-500 blur-[150px] opacity-50 animate-circle lg:left-10 lg:top-1/2 transform lg:-translate-y-1/2"></div>
            {/* Text Content */}
            <div className="relative z-10 flex flex-col text-white text-center lg:text-left max-w-3xl">
              <h5 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide">
                Integrated Security Management
              </h5>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                Bostex Enteprise platform run on Windows Operating System adopted the latest .NET platform, MSMQ message queue technology, multi-layer centralize data exchange architecture and SQL Database.
              </p>
            </div>
            {/* Image */}
            <Image
              src="/assets/homepage/images/services5.png"
              alt="service article"
              width={350}
              height={400}
              className="rounded-[25px] w-auto h-auto"
            />
          </div>

          {/* Row 2 */}
          <div className="relative flex flex-col lg:flex-row-reverse items-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-12">
            {/* Glow Effect */}
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500 to-pink-500 blur-[150px] opacity-50 animate-circle lg:right-10 lg:top-1/2 transform lg:-translate-y-1/2"></div>
            {/* Text Content */}
            <div className="relative z-10 flex flex-col text-white text-center lg:text-left max-w-3xl">
              <h5 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide">
                Access Control Devices
              </h5>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                Bostex Technologies International stands out in security hardware manufacturing through its commitment to precision engineering, durability, and innovation.
              </p>
            </div>
            {/* Image */}
            <Image
              src="/assets/homepage/images/services6.png"
              alt="service article"
              width={300}
              height={400}
              className="rounded-[25px] w-auto h-auto"
            />
          </div>

          {/* Row 3 */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-12">
            {/* Glow Effect */}
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[150px] opacity-50 animate-circle lg:left-10 lg:top-1/2 transform lg:-translate-y-1/2"></div>
            {/* Text Content */}
            <div className="relative z-10 flex flex-col text-white text-center lg:text-left max-w-3xl">
              <h5 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide">
                CCTV and Intrusion Detection System Integration
              </h5>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                Integrate advanced CCTV surveillance and intrusion detection systems for a unified security solution. Monitor, record, and respond to incidents in real time, enhancing situational awareness and incident management.
              </p>
            </div>
            {/* Image */}
            <Image
              src="/assets/homepage/images/services7.jpeg"
              alt="service article"
              width={350}
              height={600}
            className="rounded-[25px] w-auto h-auto"
            />
          </div>
        </div>

      </section>

      <section className="flex h-fit w-full bg-black bg-cover bg-center justify-center items-center">
        
        <div className="flex flex-col items-center text-center pb-24">
              {/* Glow Effect */}
          <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500 to-pink-500 blur-[150px] opacity-50 animate-circle lg:right-10 lg:top-1/2 transform lg:-translate-y-1/2"></div>
          <Reveal>
            <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide leading-snug">
              {content.home.industries.title}
            </h5>
          </Reveal>
          <ImgText content={content.home.industries.article}></ImgText>
      
        </div>
      </section>
<hr></hr>

<section className="grid grid-cols-1 sm:grid-cols-3  pt-24 pb-24 h-fit w-full bg-black">
  {/* Email */}
  <div className="flex flex-col items-center text-center space-y-4">
    <a href="mailto:sales@bostexintl.com" className="flex flex-col items-center space-y-4">
      <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
        <FaEnvelope className="text-black w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-white">Email Us</h3>
      <p className="text-gray-300 underline">sales@bostexintl.com</p>
    </a>
  </div>
  
  {/* Phone Number */}
  <div className="flex flex-col items-center text-center space-y-4">
    <a href="tel:+6580820023" className="flex flex-col items-center space-y-4">
      <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
        <FaPhone className="text-black w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-white">Call Us</h3>
      <p className="text-gray-300 underline">+65 8082 0023</p>
    </a>
  </div>
  
  {/* Location */}
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
</section>

      <hr></hr>
      <Footer></Footer>
    </>
  );
}