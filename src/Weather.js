import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div className="Weather">
        <h1>Berlin</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img src="" alt="" className="float-left" />
              <div className="float-left">
                <span className="temperature">5</span>
                <span className="unit">ºC</span>
              </div>
            </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
        </div>
      </div>
    );
}
