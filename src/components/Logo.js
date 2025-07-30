"use client"

import React, { Component } from "react";
import { logoIconsList } from "../content"

class LogoIcon extends Component {
  render() {
    const { icon } = this.props;
    return (
      <div className="flex-none flex-center marquee-item">
        <img src={icon.imgPath} alt={icon.name} />
      </div>
    );
  }
}

class LogoShowcase extends Component {
  render() {
    return (
      <div className="relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="marquee h-42">
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((icon, index) => (
              <LogoIcon key={`first-${index}`} icon={icon} />
            ))}

            {logoIconsList.map((icon, index) => (
              <LogoIcon key={`second-${index}`} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default LogoShowcase;
