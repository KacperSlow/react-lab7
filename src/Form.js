import React from 'react'
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0,
            PhoneNumber: "" ,
            email: "",
            Valid: true
        }
      }

    handleChangeAge =(e) =>{
        this.setState({age: e.target.value, Valid: true, email: "",  PhoneNumber: ""})
    }
    handlePhoneNumber = (e) =>{
        this.setState({PhoneNumber: e.target.value, Valid: true})
    }
    handleEmail = (e) =>{
        this.setState({email: e.target.value, Valid: true})
    }
    handleValid = (e) => {
        e.preventDefault();
        let Pattern = /^\d{9}$/
        if(this.state.age > 18)
            Pattern = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        Pattern.test(e.target.Validation.value) ?
        this.setState({Valid: true})
        :
        this.setState({Valid: false})
    }
    render(){      
            
    return(
        <div style={{border:'2px solid black', padding:'3px', marginLeft: '35%', marginRight: '40%', marginTop: '10%', position: 'relative'}}>
                <form onSubmit={this.handleValid}>
                    <p>Age:</p> <input onChange={this.handleChangeAge} type="number" name="age"></input>
                    {this.state.age < 18 ? 
                    <div><p>Parent name: </p> <input></input></div>
                    :
                    <div><p>Name:</p> <input></input></div>}                 
                    {this.state.age < 18 ? 
                    <div>
                        <p>Parent Number:</p>
                        <input onChange={this.handlePhoneNumber} name="Validation" value={this.state.PhoneNumber}></input>
                        {this.state.Valid ? null : <p><label> Incorect Phone number</label></p>}
                    </div>
                    :
                    <div>
                        <p>Email:</p>
                        <input name="Validation" onChange={this.handleEmail} value={this.state.email}></input>
                        {this.state.Valid ? null : <p><label> Incorect email </label></p>}
                    </div>}
                    <br />          
                    <button style={{position: 'absolute', right: '45%'}}>Submit</button>
                </form>
            <br />
        </div>
    )
    }
}
export default Form
