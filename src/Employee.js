import React from 'react'
class Employee extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
       return(
        <div>
            {
                this.props.employees.map((employee) => {                    
                return (
                    employee.isActive ===true ?
                        <div key={employee.id}>
                            <div style={{ color:'Green', marginLeft: '20px'}}>                                
                                <p>{employee.name} -  {employee.age}</p>   
                            </div>
                        </div>
                        :
                        <div key={employee.id}>
                            <div style={{ color: 'Red', marginLeft: '20px'}}>                                
                                <p>{employee.name} -  {employee.age}</p>   
                            </div>
                        </div>
                    )
                })
            }
        </div>
       )        
    }
}
export default Employee