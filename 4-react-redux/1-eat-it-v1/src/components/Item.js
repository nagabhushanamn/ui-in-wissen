import React, { Component } from 'react';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm_v2';

import { loadReviews, addNewReview } from '../actions/reviews'
import { buy } from '../actions/cart'
import store from '../store'

class Item extends Component {
    state = {
        currentTab: 1,
        qty: 0,
        reviews: []
    }

    componentDidMount() {
        let { value: item } = this.props;
        let { id } = item;
 
        let cartLine = store.getState().cart[id] || {}
        let { qty } = cartLine;
        qty = qty || 0
        this.setState({ qty });

        this.unsubscribe = store.subscribe(() => {
            let reviews = store.getState().reviews[id] || []
            let cartLine = store.getState().cart[id] || {}
            let { qty } = cartLine;
            qty = qty || 0
            this.setState({ reviews, qty });
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    addNewReview(e) {
        let { review } = e;
        let { value: item } = this.props;
        let { id } = item;
        let action = addNewReview(id, review)
        store.dispatch(action)
    }
    handleBuy() {
        let { value: item } = this.props;
        let action = buy(item)
        store.dispatch(action)
    }
    renderBuyBtn(item) {
        if (item.canBuy) {
            return (
                <button onClick={e => this.handleBuy()} className="btn btn-sm btn-dark">buy</button>
            )
        }
    }
    changeTab(e, tabIndex) {
        e.preventDefault()
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let { value: item } = this.props;
                let { id } = item;
                let action = loadReviews(id);
                store.dispatch(action)
            }
        }) // async
    }
    renderReviews() {
        const { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
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
                    <div>
                        {this.renderReviews()}
                        <ReviewForm onSubmit={e => this.addNewReview(e)} />
                    </div>
                )
            default:
                return;
        }
    }
    render() {
        let { currentTab, qty } = this.state
        const { value: item } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-3">
                        <img src={`${item.imgPath}`} className="img-fluid" alt={item.name} />
                    </div>
                    <div className="col-9 col-sm-9 col-md-9">
                        <h5>{item.name}</h5>
                        <h6>&#8377;{item.price}.00</h6>
                        {this.renderBuyBtn(item)}
                        &nbsp;<span className="badge badge-warning">{qty}</span>
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
        );
    }
}

export default Item;