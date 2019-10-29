import React, {Component} from 'react'

class CountrySelector extends Component {
constructor(props){
    super(props)
    this.state = {
        name: "",
    }
    this.handleCountrySelect = this.handleCountrySelect.bind(this);
}

handleCountrySelect(event){
    event.preventDefault();
    const name = this.state.name;
    this.props.onCountrySelect({name: name});
    this.setState({name: ''});
}

render(){
    return(
        <select>
        <option value={this.state.name}></option>
        <option placeholder="select your country"></option>
         {/* <option value={this.state.name} */}
        <option onChange={this.handleCountrySelect}></option>
        </select>
    )
}

}

export default CountrySelector;
