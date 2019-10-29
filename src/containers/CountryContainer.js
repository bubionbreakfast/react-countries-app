import React, { Component } from 'react'
import CountryDetails from '../components/CountryDetails'
import CountrySelector from '../components/CountrySelector'

 class CountryContainer extends Component {
     

    constructor(props){
        super(props);
        this.state = {
            countries: [],
            data: null,
            countryName: ''
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleCountrySelect = this.handleCountrySelect.bind(this);
    }

    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(countries => this.setState({ countries }))
    }

    handleCountrySelect(countryName){
        this.setState({countryName: countryName})
    }

    render() {
        const { countries } = this.state;
        return (
            <div className="country-container">
                <h2>Countries</h2>
                <CountrySelector countries={this.state.countries} onCountrySelect={this.handleCountrySelect}></CountrySelector>
                <CountryDetails countries={this.state.countries} ></CountryDetails>


            </div>
        )
    }
}

export default CountryContainer;
