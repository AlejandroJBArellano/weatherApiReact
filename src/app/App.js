import React, { Component } from "react";

//components
import WeatherCard from "./components/WeatherCard";
import WeatherForm from "./components/WeatherForm";

//key
import { WEATHER_KEY } from "./keys";

export default class App extends Component {

    state = {
        temperature: "",
        description: "",
        humidity: "",
        windSpeed: "",
        city: "",
        country: "",
        error: ""
    }

    getWeather = async e => {
        e.preventDefault()
        const { city, country } = e.target.elements, cityValue = city.value, countryValue = country.value;
        
        if(cityValue && countryValue) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`),
            data = await response.json();
            console.log(`${city}, ${country}, ${countryValue}, ${cityValue}`);
            console.log(data)
    
            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                city: data.name,
                country:data.sys.country,
                error: null
            })
        } else {
            this.setState({error: "Please set a Country"})
        }
    }

    render() {
        return <section className="container">
            <WeatherForm getWeather={this.getWeather}/>
            <WeatherCard {... this.state}/>
        </section>
    }
}