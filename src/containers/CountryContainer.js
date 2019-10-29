import React, { Component } from 'react'
import CountryDetails from '../components/CountryDetails'
import CountrySelector from '../components/CountrySelector'

 class CountryContainer extends Component {
     

    constructor(props){
        super(props);
        this.state = {
            countries: [],
            data: null,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(countries => this.setState({ countries }))
    }

    render() {
        const { countries } = this.state;
        return (
            <div className="country-container">
                <h2>Countries</h2>
                <CountrySelector onCountrySelect={this.handleCountrySelect}></CountrySelector>
                <CountryDetails countries={this.state.countries} ></CountryDetails>

            </div>
        )
    }
}

export default CountryContainer;
