"use client";

import React, { Component } from 'react'
import { PersonalInfo } from "../content";

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [
        {
          name: "About",
          link: "#banner",
        },
        {
          name: "Experience",
          link: "#experience",
        },
        {
          name: "Projects",
          link: "#projects",
        },
      ],
      scrolled: false
    }
  }

  handleScroll = () => {
    const isScrolled = window.scrollY > 10
    if (this.state.scrolled !== isScrolled) {
      this.setState({ scrolled: isScrolled })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }


  render() {
    let { links, scrolled } = this.state
    return (
      <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
          <a href="#banner" className="logo">
            .HoangLam
          </a>
          <nav className="desktop">
            <ul>
              {links.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={PersonalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110 h-full flex items-center"
            >
              <span className="sr-only">LinkedIn</span>
              <div
                className="transition-transform duration-200 group-hover:scale-105"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ fill: "#fff" }}
                >
                  <path
                    d="M71.25,0h-52.5C8.39625,0,0,8.39625,0,18.75v52.5C0,81.60375,8.39625,90,18.75,90h52.5C81.6075,90,90,81.60375,90,71.25v-52.5C90,8.39625,81.6075,0,71.25,0ZM30,71.25h-11.25v-41.25L30,30v41.25ZM24.375,25.245c-3.6225,0-6.5625-2.9625-6.5625-6.615s2.94-6.615,6.5625-6.615s6.5625,2.9625,6.5625,6.615-2.93625,6.615-6.5625,6.615ZM75,71.25h-11.25v-21.015c0-12.63-15-11.67375-15,0v21.015h-11.25v-41.25h11.25v6.61875C53.985,26.92125,75,26.205,75,45.90375L75,71.25Z"
                    transform="translate(5 5.090562)"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </a>
            <a
              href={PersonalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110 h-full flex items-center"
            >
              <span className="sr-only">GitHub</span>
              <div
                className="transition-transform duration-200 group-hover:scale-105"
                style={{ width: "2.5rem" }}
              >
                <svg
                  viewBox="0 0 350 350"
                  style={{ fill: "#fff" }}
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M112.960508,237.331573c1.237319-9.73313,5.203479-16.47098,9.414652-20.213549-33.196295-3.494494-68.122999-16.470981-68.122999-74.37055c0-16.47098,5.941582-29.946679,15.356234-40.427099-1.485396-3.742569-6.688874-19.218185,1.488458-39.930948c0,0,12.63352-3.993707,41.119426,15.472553c12.19583-3.299515,24.773192-4.978003,37.407468-4.992134c12.63352,0,25.512053,1.748778,37.404406,4.992134c28.488969-19.46626,41.122488-15.472553,41.122488-15.472553c8.177333,20.712763,2.970791,36.188379,1.485396,39.930948c9.662728,10.48042,15.359297,23.956119,15.359297,40.427099c0,57.899569-34.926705,70.624918-68.371076,74.37055c5.451555,4.740996,10.155818,13.723775,10.155818,27.949826c0,20.213549-.245013,36.436454-.245013,41.425526c0,3.993707,2.725777,8.737766,10.155818,7.240126c59.452577-19.968537,102.308537-76.367403,102.308537-142.998613C299.244432,67.378499,232.113738,0,149.623747,0C66.88568,0,0,67.378499,0,150.734889c0,66.63121,42.855961,123.033139,102.308537,142.99555c7.433104,1.500703,10.155818-3.243356,10.155818-7.234001c0-3.494493-.245013-15.472553-.245013-27.952888"
                    transform="translate(27.016058 27.499656)"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </a>
            <a href={PersonalInfo.resume} target='_blank' className="contact-btn group">
              <div className="inner">
                <span>Resume</span>
              </div>
            </a>
          </div>
        </div>
      </header>
    )
  }
}