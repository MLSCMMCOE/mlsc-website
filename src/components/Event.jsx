import React from 'react';
import '../styles/eventcard.css';

export default function Event({ head, desc, img, linkname, link }) {
  return (
    <div className="eventcard">
      <div className="card-front">
        <div className="card-photo">
          <img src={img} alt={head} className="card-img" />
        </div>
        <div className="card-title">
          {head} <br />
          <span>{desc}</span>
        </div>
      </div>
      <div className="card-back">
        <div className="card-socials">
          <div className="btn bg-color-primary-blue color-white">
            <a style={{ textDecoration: "none", color: "black", color: "white" }} href={link}>
              {linkname}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
