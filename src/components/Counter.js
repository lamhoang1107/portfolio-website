"use client"

import React, { Component, createRef } from "react"
import CountUp from "react-countup"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CounterItems } from "../content"

gsap.registerPlugin(ScrollTrigger)

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { startCount: false }
    this.counterRef = createRef()
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {

        const items = gsap.utils.toArray(".counter-item");

        items.forEach((item, index) => {
          ScrollTrigger.create({
            trigger: item,
            start: "top+=30% bottom",
            onEnter: () => {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              });

              if (!this.state.startCount) {
                this.setState({ startCount: true });
              }
            },
            once: true,
          });
        });
      })
    }
  }

  render() {
    const { startCount } = this.state

    return (
      <div
        id="counter"
        ref={this.counterRef}
        className="padding-x-lg xl:mt-0 mt-18"
      >
        <div
          className={`mx-auto grid gap-7 ${CounterItems.length === 1
              ? 'grid-cols-1'
              : CounterItems.length === 2
                ? 'md:grid-cols-2'
                : CounterItems.length === 3
                  ? 'md:grid-cols-2 xl:grid-cols-3'
                  : 'md:grid-cols-2 xl:grid-cols-4'
            }`}
        >
          {CounterItems.map((item, index) => (
            <div
              key={index}
              className="counter-item bg-zinc-900 rounded-lg p-10 flex flex-col justify-center opacity-0 transition-all duration-700"
            >
              <div className="counter-number text-white-50 text-5xl font-bold mb-2">
                {startCount ? (
                  <CountUp
                    key={`start-${index}`}
                    delay={1}
                    start={0}
                    end={item.value}
                    duration={6.75}
                    suffix={item.suffix}
                  />
                ) : (
                  <span>0{item.suffix}</span>
                )}
              </div>
              <div className="text-white-50 text-lg">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
