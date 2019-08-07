

import React, { Component } from 'react';
import classNames from 'classnames';

class App extends Component {
  state = {
    currentTab: 1,
    items: [
      {
        id: 1,
        name: 'Veg',
        price: 100.00,
        canBuy: true,
        imgPath: 'images/veg.png',
        description: 'veg is always yummy & healthy'
      },
      {
        id: 2,
        name: 'NonVeg',
        price: 80.00,
        canBuy: true,
        imgPath: 'images/non-veg.png',
        description: 'non-veg is yummy but not healthy'
      }
    ]
  }
  constructor(props) {
    super(props)
    console.log("App :: constructor()");
  }
  renderBuyBtn(item) {
    if (item.canBuy) {
      return (<button className="btn btn-sm btn-dark">buy</button>)
    }
  }
  changeTab(e, tabIndex) {
    e.preventDefault()
    this.setState({ currentTab: tabIndex })
  }
  renderTabPanel(item) {
    const { currentTab } = this.state;
    switch (currentTab) {
      case 1:
        return (
          <div>{item.description}</div>
        );
      case 2:
        return (
          <div>Not Yet</div>
        )
      case 3:
        return (
          <div>None Yet</div>
        )
      default:
        return;
    }
  }
  renderItems() {
    const { items, currentTab } = this.state;
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={item.imgPath} className="img-fluid" alt={item.name} />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{item.name}</h5>
              <h6>&#8377;{item.price}.00</h6>
              {this.renderBuyBtn(item)}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 1)} className={`nav-link ${currentTab === 1 ? 'active' : ''}`} href="/">Description</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 2)} className={classNames('nav-link', { active: currentTab === 2 })} href="/">Ingre..</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 3)} className={classNames('nav-link', { active: currentTab === 3 })} href="/">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(item)}
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    console.log("App :: render()");
    return (
      <div>
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat-IT</a>
        </nav>
        <hr />
        <hr />

        <div className="container">
          {this.renderItems()}
        </div>

      </div>
    );
  }
}

export default App;

