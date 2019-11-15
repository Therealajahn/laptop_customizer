import React, { Component } from 'react';
import './App.css';
import Summary from './Summary.js';

class Cart extends React.Component{
    render(){
        
        return(
            <section className="main__summary">
            <h2>Your cart</h2>
            <Summary 
            currency={ this.props.currency }
            total={ this.props.total }
            selected={this.props.selected}/>
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.currency.format(this.props.total)}
              </div>
            </div>
          </section>
        )
    }
}

export default Cart;