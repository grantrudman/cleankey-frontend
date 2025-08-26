import ArrowIcon from "@/assets/arrow-right.svg";
import Key from "@/assets/key.png";
import Image from 'next/image';

export const Hero = () => {
  return (
    <section id="home-section" className="pt-20 pb-40 md:pt-24 md:pb-32 md:pb-10 bg-[radial-gradient(ellipse_200%_100%__at_bottom_left,_#5DCCB7_0%,_#FCFCFA_100%)] scroll-mt-[70px]">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px] md:pl-8">
            <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0D4D62] text-transparent bg-clip-text md:bg-clip-text leading-[1.2] mt-4">Rental Cleaning Made Easy</h1>
            <p className="text-xl text-[#0D4D62] tracking-tight mt-6">
              Same-day turns - no cancellations, no no-shows. Transform your short-term rental into a guest magnet with professional cleaning that&#39;s completed within 4 hours of checkout, every single time.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <a href="#quote-section" className="btn btn-primary">
                Get a Free Quote
              </a>
              <a href="#services-section" className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5"/>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-20 md:mt-0 md:flex-1 relative">
            <Image src={Key} alt="Key" className="w-[50%] h-[50%] rotate-12 md:w-[70%] md:h-[70%] lg:w-[35%] lg:h-[35%]" />
          </div>
        </div>
      </div>
    </section>
  );
};