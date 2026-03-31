"use client";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { ProgressiveBlur } from "./progressive-blur";
import { TimelineContent } from "./timeline-animation";
import { useRef } from "react";
import { useContent } from "../../hooks/useContent";

const Logo = () => (
  <div className="flex flex-col items-center mb-4">
    {/* Container to crop the bottom part (CETINJE) */}
    <div className="relative overflow-hidden w-[280px] md:w-[400px] lg:w-[500px] aspect-[1280/295]">
      <img 
        src="/Photoroom_20260326_102910.png" 
        alt="EFEN IZGRADNJA" 
        className="absolute top-0 left-0 w-full h-auto drop-shadow-lg"
        referrerPolicy="no-referrer"
      />
    </div>
  </div>
);

export default function HeroSection() {
  const content = useContent('hero', {
    title: 'Gradite brže uz Vrhunski Kvalitet Materijala i Usluga.',
    subtitle: 'Sve što vam je potrebno za vaš građevinski projekat na jednom mjestu. Pouzdano. Kvalitetno. Profesionalno.'
  });
  
  const timelineRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  return (
    <main ref={timelineRef} className="relative bg-transparent">
      <div className="pt-20 pb-5 max-w-screen-2xl mx-auto min-h-[80vh] flex flex-col justify-center px-4">
        <article className="w-fit mx-auto 2xl:max-w-5xl xl:max-w-4xl max-w-2xl text-center space-y-4">
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={timelineRef}
            customVariants={revealVariants}
          >
            <Logo />
          </TimelineContent>
          <TimelineContent
            as="h1"
            animationNum={3}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="2xl:text-7xl text-white xl:text-6xl sm:text-5xl text-4xl leading-[100%] font-black drop-shadow-lg"
          >
            {content.title === 'Gradite brže uz Vrhunski Kvalitet Materijala i Usluga.' ? (
              <>
                Gradite brže uz{" "}
                <span className="font-semibold bg-gradient-to-r from-[#f05a28] to-orange-400 bg-clip-text text-transparent">
                  Vrhunski
                </span>{" "}
                Kvalitet{" "}
                <span className="font-semibold bg-gradient-to-r from-[#f05a28] to-orange-400 bg-clip-text text-transparent">
                  Materijala
                </span>{" "}
                i Usluga.
              </>
            ) : (
              content.title
            )}
          </TimelineContent>
          <TimelineContent
            as="p"
            animationNum={4}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="lg:text-xl text-gray-200 sm:text-lg text-sm max-w-2xl mx-auto drop-shadow-md font-light"
          >
            {content.subtitle}
          </TimelineContent>
          <TimelineContent
            as="div"
            animationNum={5}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-2"
          >
            <Link to="/prodaja" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-[#f05a28] hover:bg-orange-600 transition-all group shadow-lg shadow-orange-500/30">
              Pogledaj ponudu
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link to="/usluge" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all group shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 w-5 h-5"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6h0"/><path d="M14 6h0a6 6 0 0 1 6 6v3"/></svg>
              Zatraži ponudu za radove
            </Link>
          </TimelineContent>
        </article>


      </div>
    </main>
  );
}
