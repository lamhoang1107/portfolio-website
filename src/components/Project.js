"use client"

import React, { Component, createRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ProjectContent } from "../content";

gsap.registerPlugin(ScrollTrigger)

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.sectionRef = createRef()
    this.cardRefs = Array(6).fill().map(() => createRef())
    this.state = {
      showModal: false,
      selectedProject: null,
    }
  }

  componentDidMount() {
    gsap.fromTo(
      this.sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }
    )

    this.cardRefs.forEach((ref, index) => {
      const card = ref.current
      if (!card) return
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=10",
          },
        }
      )
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.03, duration: 0.3, ease: "power2.out" })
      })
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" })
      })
      card.addEventListener("click", () => {
        this.setState({ showModal: true, selectedProject: index })
      })
    })
  }

  closeModal = () => {
    this.setState({ showModal: false, selectedProject: null })
  }

  renderModal() {
    const { showModal, selectedProject } = this.state
    if (!showModal) return null

    const content = ProjectContent[selectedProject]

    return (
      <div className="modal-overlay" onClick={this.closeModal}>
        <div className="modal-box">
          <button className="modal-close" onClick={this.closeModal}>x</button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title pb-4">{content.name}</h3>
            <div className="modal-tags flex flex-wrap gap-2 pb-4">
              {content.tech.map((tech, idx) => (
                <span key={idx} className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            {content.links && content.links.length > 0 && (
              <div className="flex flex-wrap gap-2 pb-4">
                {content.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#827E6F] text-white  rounded-md hover:bg-[#6e6a5d] hover:underline transition"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide-icon lucide lucide-external-link size-4 sm:size-6"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            <div className="modal-desc">
              {content.long_description_html && (<>
                <div className="list-disc text-white-50 py-8 ">
                  <div
                    className="text-lg [&>*]:mb-1"
                    dangerouslySetInnerHTML={{ __html: content.long_description_html }}
                  />
                </div>
              </>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${content.title} ${i + 1}`}
                  className="w-full object-contain rounded-lg max-h-96 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    console.log("ProjectContent", ProjectContent)
    return (
      <section id="projects" ref={this.sectionRef} className="app-showcase">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="font-semibold md:text-5xl text-3xl text-center">
                {"Projects"}
              </h1>
            </div>
          </div>
          <div className="showcaselayout mt-10 md:mt-20">
            <div className="first-project-wrapper">
              <div ref={this.cardRefs[0]} className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="image-wrapper bg-blue-200">
                  <img src={ProjectContent[0].img} alt={ProjectContent[0].name} />
                </div>
                <div className="text-content">
                  <h2>{ProjectContent[0].name}</h2>
                  <p className="text-white-50 md:text-lg">
                    {ProjectContent[0].short_description}
                  </p>
                </div>
              </div>
              <div ref={this.cardRefs[1]}>
                <div className="image-wrapper bg-pink-200">
                  <img src={ProjectContent[1].img} alt={ProjectContent[1].name} />
                </div>
                <div className="text-content">
                  <h2>{ProjectContent[1].name}</h2>
                  <p className="text-white-50 md:text-lg">
                  {ProjectContent[1].short_description}
                  </p>
                </div>
              </div>
            </div>

            <div className="project-list-wrapper">
              <div className="project" ref={this.cardRefs[2]}>
                <div className="image-wrapper bg-[#F3CE9C]">
                  <img src={ProjectContent[2].img} alt={ProjectContent[2].name} />
                </div>
                <h2>{ProjectContent[2].name}</h2>
                <p className="text-white-50 md:text-lg">
                  {ProjectContent[2].short_description}
                </p>
              </div>

              <div className="project" ref={this.cardRefs[3]}>
                <div className="image-wrapper bg-[#D2F5C5]">
                  <img src={ProjectContent[3].img} alt={ProjectContent[3].name}/>
                </div>
                <h2>{ProjectContent[3].name}</h2>
                <p className="text-white-50 md:text-lg">
                  {ProjectContent[3].short_description}
                </p>
              </div>
              <div className="project" ref={this.cardRefs[4]}>
                <div className="image-wrapper bg-[#CBEBF0]">
                  <img src={ProjectContent[4].img} alt={ProjectContent[4].name}/>
                </div>
                <h2>{ProjectContent[4].name}</h2>
                <p className="text-white-50 md:text-lg">
                  {ProjectContent[4].short_description}
                </p>
              </div>

            </div>
          </div>
        </div>
        {this.renderModal()}
      </section>
    )
  }
}
