import React, { Component } from "react";
import { glassesArr } from "../dataGlasses";
export default class Main extends Component {
  state = {
    url: "",
    price: "",
    name: "",
    desc: "",
    display: "none",
  };
  handleChangeGlasses = (url, price, desc, name, display) => {
    this.setState({
      url: url,
      price: price,
      name: name,
      desc: desc,
      display: display,
    });
  };
  renderListGlasses = () => {
    return glassesArr.map(({ id, price, name, url, desc }) => {
      return (
        <div key={id} className="item">
          <img
            src={url}
            onClick={() => {
              this.handleChangeGlasses(url, price, desc, name, "block");
            }}
          />
        </div>
      );
    });
  };

  render() {
    let { url, price, desc, name, display } = this.state;
    return (
      <div className="main">
        <div className="main__left">
          <img
            style={{ display: `${display}` }}
            className="imgGlasses"
            src={url}
            alt=""
          />
          <div style={{ display: `${display}` }} id="a" className="content">
            <h3>{name}</h3>
            <h3>${price}</h3>
            <p>{desc}</p>
          </div>
        </div>
        <div className="main__right">
          <div className="main__right--glasses">{this.renderListGlasses()}</div>

          <button
            onClick={() => {
              this.handleChangeGlasses("", "", "", "", "none");
            }}
          >
            Reaset
          </button>
        </div>
      </div>
    );
  }
}
