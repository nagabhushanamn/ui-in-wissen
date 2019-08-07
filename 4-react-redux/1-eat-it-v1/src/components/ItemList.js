import React, { Component } from 'react';
import Item from './Item';

import { loadItems } from '../actions/items'
 
import store from '../store'

class ItemList extends Component {
  state = {
    items: []
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      let items = store.getState().items;
      this.setState({ items });
    })
    setTimeout(() => {
      let action = loadItems('food', 100)
      store.dispatch(action)
    }, 0);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  renderItems() {
    const { items } = this.state;
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <Item value={item} />
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default ItemList;