"use client"

import IconText from "@/components/home/article";
import content from '../constant/content.json'
import Reveal from "@/components/animate/reveal";
import Footer from "@/components/footer";
import Image from "next/image";
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
          <div className="gap-4 w-full max-w-screen-xl text-white p-4 text-center">
            <div className="flex flex-col">
              <h1>Catch phrase</h1>
              <p className="text-7xl">One-stop access control</p>
              <div className="flex justify-center gap-4 mt-4">
                <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                  Learn More
                </button>
                <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                  About us
                </button>
              </div>
            </div>
          </div>

        </div>

      </section>

      <hr></hr>


      <section className="flex h-fit md:h-screen w-full bg-black px-6 md:px-12 lg:px-24 relative justify-center items-center">
        <div className="flex flex-col w-full pt-12 md:pt-24">
          {/* Top Left Logo */}
          <div className="text-white mb-16 md:mb-28">
            <h1 className="text-lg md:text-xl font-bold">Bostex</h1>
          </div>

          {/* Centered Heading with Typing Animation */}
          <div className="flex flex-col items-start text-center md:text-left">
            <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
              <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white animate-typing">
                Innovate today, Secure Tomorrow
              </span>
            </h1>
            <button className="mt-4 px-6 md:px-8 py-2 md:py-3 border border-white text-white text-xs md:text-sm font-medium hover:bg-white hover:text-black transition">
              {"Secure your future today!"}
            </button>
          </div>

          {/* Bottom Right Contact */}
          <div className="mt-8 md:mt-16 flex justify-center md:justify-end text-white px-4">
            <p className="text-xs md:text-sm text-center md:text-right">
              Really excited to get in touch with us? <br />
              Send us an email at hello@reallygreatsite.com. <br />
            </p>
          </div>
        </div>
      </section>


      <hr></hr>

      {/* services section overview */}
      <section className="flex h-fit lg:h-screen w-full bg-black bg-[url('/assets/homepage/images/1.png')] bg-cover bg-center px-6 md:px-12 lg:px-24 justify-center items-center pt-12 lg:pt-0">
        <div className="relative z-10 w-full text-white">
          <div className="flex flex-col items-center justify-center text-center space-y-6 px-4">
            <Reveal>
              <h5 className="text-lg md:text-xl lg:text-2xl font-semibold">
                {content.home.services.title.split(" ").slice(0, -3).join(" ")}{" "}
                <span className="text-blue-500">
                  {content.home.services.title.split(" ").slice(-3).join(" ")}
                </span>
              </h5>
            </Reveal>
            <Reveal>
              <p className="text-sm md:text-base leading-relaxed w-full max-w-5xl mx-auto">
                {content.home.services.description}
              </p>
            </Reveal>
          </div>
          <div className="mt-8">
            <IconText content={content.home.services.article} />
          </div>
        </div>
      </section>



      <hr></hr>

      <section className="flex h-screen w-full bg-black px-24 justify-center items-center">
        <div className="relative z-10 flex items-center w-full bg-black text-white">
          <div className="grid grid-cols-2 gap-4 w-full py-4">
            <div className="flex flex-col justify-center">
              <div className="pt-4 pr-4 pb-4 pl-0">
                <div className="pb-10">
                  <h1 className="text-xl primary">Bostex: Your Trusted Access Control Experts</h1>
                </div>
                <p className="text-sm secondary">
                  At Bostex, we specialize in delivering cutting-edge access control solutions tailored to your unique security needs. From advanced biometric systems to cloud-based management platforms, our innovative technologies ensure seamless and secure access for businesses of all sizes.
                </p>
              </div>
              <hr />
              <div className="flex justify-between pt-4">
                <p className="text-sm text-left">About Us</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/assets/homepage/videos/lockgif.gif"
                alt="Access Control GIF"
                width={300} // Set appropriate width
                height={300} // Set appropriate height
                priority // Optional: preload image for faster LCP
                unoptimized // Disable optimization for animated GIF
              />
            </div>
          </div>
        </div>
      </section>

      <hr></hr>
      <Footer></Footer>
    </>
  );
}