import React, {Component} from 'react'

class CountrySelector extends Component {
constructor(props){
    super(props)
    this.state = {
        name: "",
    }
    this.handleCountryChange = this.handleCountryChange.bind(this);
}

handleCountryChange(event){
    event.preventDefault();
    this.setState({name: event.target.value});
    this.props.onCountrySelect(event.target.value)
}



render(){
    const countryNodes = this.props.countries.map(( country, index) => {
        const {name} = country
        return (
            <option value={name} key={index}>{name}</option>
        )
    })
    return(
        <select name="country" onChange={this.handleCountryChange}>
            {countryNodes}>
    
        </select>
    )
    
}

}

export default CountrySelector;
