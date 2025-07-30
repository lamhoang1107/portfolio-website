"use client";

import React, { Component } from 'react'
import { gsap } from "gsap"

import ScrollButton from "./ScrollButton.js"
import Counter from "@/components/Counter";
import LogoShowcase from "@/components/Logo";
import { PersonalInfo } from "../content";

const words = [
  { text: "Ideas", imgPath: "/ideas.svg" },
  { text: "Concepts", imgPath: "/concepts.svg" },
  { text: "Designs", imgPath: "/designs.svg" },
  { text: "Code", imgPath: "/code.svg" },
  { text: "Ideas", imgPath: "/ideas.svg" },
  { text: "Concepts", imgPath: "/concepts.svg" },
  { text: "Designs", imgPath: "/designs.svg" },
  { text: "Code", imgPath: "/code.svg" },
];

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    gsap.fromTo(
      ".banner-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    )
  }

  render() {
    return (
      <section id="banner" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
          <img src="/background.png" alt="" />
        </div>

        <div className="banner-layout">
          {/* LEFT */}
          <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
              <div className="banner-text">
                <h1>
                  Shaping
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word, index) => (
                        <span
                          key={index}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt="person"
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>into Real Projects</h1>
                <h1>that Deliver Results</h1>
              </div>

              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Hi, I’m Hoang Lam, a developer based in Viet Nam with a passion for code.
              </p>
              <ScrollButton
                text="View my projects"
                className="md:w-80 w-60 h-full"
                id="projects"
              />
            </div>
          </header>

          {/* RIGHT */}
          <figure className="hidden lg:block">
            <div className="relative banner-ava-layout fade-avatar-bg">
              <img
                src="/animateava.png"
                alt="logo"
                className="w-full h-full object-cover rounded-full z-10 relative"
              />
            </div>
          </figure>
        </div>

        <LogoShowcase />
        <Counter />
      </section>)
  }
}