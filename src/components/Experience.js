"use client"

import React, { Component, createRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExperienceContent } from "../content";

gsap.registerPlugin(ScrollTrigger)

export default class Experience extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    // gsap.utils.toArray(".timeline-card").forEach((card) => {
    //   gsap.from(card, {
    //     xPercent: -100,
    //     opacity: 0,
    //     transformOrigin: "left left",
    //     duration: 1,
    //     ease: "power2.inOut",
    //     scrollTrigger: {
    //       trigger: card,
    //       start: "top 50%",
    //     },
    //   });
    // });

    gsap.utils.toArray(".timeline").forEach((timeline) => {
      gsap.to(timeline, {
        transformOrigin: "bottom bottom",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: timeline,
          start: "top 50%",
          end: "70% center",
          onUpdate: (self) => {
            gsap.to(timeline, {
              scaleY: 1 - self.progress,
            });
          },
        },
      });
    });
    // Animate expText
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }

  render() {
    return (
      <section
        id="experience"
        className="flex-center md:mt-20 mt-20 section-padding xl:px-0"
      >
        <div className="w-full h-full  lg:px-20 md:px-10 px-5">
          <div className="flex flex-col items-center gap-5">
            <div>
              <h1 className="font-semibold md:text-5xl text-3xl text-center">
                {"Work Experience"}
              </h1>
            </div>
          </div>
          <div className="mt-20 relative">
            <div className="relative z-50 xl:space-y-32 space-y-10">
              {ExperienceContent.map((card) => (
                <div key={card.title} className="exp-card-wrapper timeline-card">
                  <div className="w-full">
                    <div className="flex items-start">
                      <div className="timeline-wrapper">
                        <div className="timeline" />
                        <div className="gradient-line w-1 h-full" />
                      </div>
                      <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                        <div className="timeline-logo">
                          <img className="rounded-full w-12" src={card.logoPath} alt="logo" />
                        </div>
                        <div>
                          <h1 className="font-semibold text-3xl">{card.title}</h1>
                          <p className="my-5 text-white-50">
                            {card.date}
                          </p>
                          {card.responsibilities && (<>
                            {/* <p className="text-[#839CB5] italic">
                              Responsibilities
                            </p> */}
                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                              {card.responsibilities.map((responsibility, index) => (
                                <li
                                  key={index}
                                  className="text-lg"
                                  dangerouslySetInnerHTML={{ __html: responsibility }}
                                />
                              ))}
                            </ul>
                          </>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
