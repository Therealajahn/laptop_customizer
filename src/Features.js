import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';


class Features extends React.Component{
    render(){
      const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;//for label
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.selected[feature].name}
              onChange={e => this.props.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({this.props.currency.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
            
      

    return(
        <div className="Features">
            {features}
        </div>
    )
    }
}

export default Features;