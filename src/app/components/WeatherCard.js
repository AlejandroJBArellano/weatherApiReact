import React, { Component } from 'react'

export default class WeatherCard extends Component{
    render() {
        const {city, country, humidity, windSpeed, description, temperature} = this.props;
        const letter = description.charAt(0).toUpperCase(),
        word = description.slice(1), retorno = `${letter}${word}`;
        return <div className="card">
            {
                this.props.error &&
                <article className="message is-danger">
                    <div className="message-header">
                        <p>ERROR</p>
                        <button className="delete" aria-label="delete"></button>
                    </div>
                    <div className="message-body">
                        {this.props.error}
                    </div>
                </article>
            }
            {
                this.props.temperature ? 
                <section className="section">
                    <header className="card-header">
                        <p className="card-header-title">
                            {city}, {country}
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            <p>Humidity: {humidity}</p>
                            <p>Speed of the wind: {windSpeed}</p>
                            <p>Description: {retorno}</p>
                            <p>Temperature: {temperature}°C</p>
                        </div>
                    </div>
                </section>
                : 
                <section className="section">
                    <article className="message">
                    <div className="message-header">
                    <p>Waiting for data</p>
                    <button className="delete" aria-label="delete"></button>
                    </div>
                    <div className="message-body">
                        Inserta una ciudad y un país
                    </div>
                    </article>
                </section>
            }
        </div>
    }
}