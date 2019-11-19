import React from 'react'
import Employee from './Employee'
class Companies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };        
    }
    componentDidMount() {
        fetch('http://localhost:3000/employees')
        .then(response => response.json())
        .then(response => {
        this.setState({ employees: response})
        })
    }
    render() {
        return (
            <div> 
                <h1>Employees:</h1>               
                <Employee employees={this.state.employees}/>
            </div>          
        )
    }
}

export default Companies