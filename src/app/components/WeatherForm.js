import React, { Component } from 'react';

export default class WeatherForm extends Component {
    render() {
        return <form className="section" onSubmit={this.props.getWeather}>
            <div className="field">
                <label className="label">City</label>
                <div className="control">
                    <input className="input" name="city" type="text" placeholder="e.g London" autoFocus/>
                </div>
            </div>
            <div className="field">
                <label className="label">Country</label>
                <div className="control">
                    <input className="input" name="country" type="text" placeholder="e.g. Spain"/>
                </div>
            </div>
            <div className="field">
                <p className="control">
                    <button className="button is-success">
                    Find
                    </button>
                </p>
            </div>
        </form>
    }
}
