import React from 'react'
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0
        }
      }

    handleChangeName =(e) =>{
        this.setState({age: e.target.value})
    }
    render(){  
            
    return(
        <div style={{border:'2px solid black', padding:'3px', marginLeft: '35%', marginRight: '40%', marginTop: '10%'}}>
                <form>
                    <p>Age: <input onChange={this.handleChangeName} type="number" name="age"></input></p>
                    {this.state.age < 18 ? <p>Parent name: <input></input></p> : <p>Name: <input></input></p>}                 
                    {this.state.age < 18 ? <p>Parent Number: <input></input></p> : <p>Email: <input></input></p>}          
                    <button style={{position: 'absolute', right: '45%'}} type="button">Submit</button>
                </form>
            <br />
        </div>
    )
    }
}
export default Form
