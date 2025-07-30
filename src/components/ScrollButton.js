"use client";

import React, { Component } from 'react'

export default class ScrollButton extends Component {
  constructor(props) {
    super(props)
  }
  
  handelScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById(this.props.id);
    if (target && this.props.id) {
      const offset = window.innerHeight * 0.15; 
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  render() {
    return (
      <a
      onClick={this.handelScroll}
      className={`${this.props.className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{this.props.text}</p>
        <div className="arrow-wrapper">
          <img src="/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
    )
  }
}