import React, { Component } from 'react';
import './App.css';
import Features from './Features.js';

class Customize extends React.Component{
    render(){
        
        
        return(
            <form className="main__form">
            <h2>Customize your laptop</h2>
                <Features 
                features = {this.props.features} 
                currency={ this.props.currency } 
                selected={this.props.selected}
                updateFeature = {this.props.updateFeature}/>
            </form>
        )
    }
}

export default Customize;