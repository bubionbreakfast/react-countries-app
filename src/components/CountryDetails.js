import React from 'react'

const CountryDetails = ({ children, name }) => {

        return (
            <div className="county-details">
                <h4>{children}</h4>
                <p>{name}</p>
            </div>
        )
    
}

export default CountryDetails
