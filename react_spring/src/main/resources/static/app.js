'use strict';
const React = require('react');
const client = require('./client');

function reloadEmployees(model){
	client({method: 'GET', path: '/api/employees'}).done(response => {
		model.setState({employees: response.entity._embedded.employees});
	});
}

class App extends React.Component{
	initEmployee;
	
	constructor(props) {
		super(props);
		this.state = {employees: [], tok : "Now" };

		
	}
	componentDidMount() {
		console.log("componentDidMount : ") ;
		reloadEmployees(this);
		
	}
	
	render() {
		return (
				
				<div>
				
					<EmployeeList tok={this.state.tok} employees={this.state.employees}/>
					<input type="button" value="Refresh" onClick={this.componentDidMount.bind(this) }  />
			</div>
		)
	}
}	
class EmployeeList extends React.Component{
	
	render() {
		var tok = this.props.tok;
		var employees = this.props.employees.map(employee =>
			<Employee tok={tok} key={employee._links.self.href} employee={employee}/>
		);
		return (
					<table>
						<tr>
							<th>Name</th>
							<th>Desc</th>
						</tr>
						{employees}
					</table>
		)
		
		
	}
}	
	
class Employee extends React.Component{
	employeeClick(){
	}
	
	render() {
		return(
				<tr>
				{/*<td onClick={this.employeeClick}>{this.props.employee.name}</td>*/}
					<EmployeeName employeeName={this.props.employee.name} />
					<td>{this.props.employee.description} {this.props.tok}</td>
					
				</tr>
				
		)
	}
}

class EmployeeName extends React.Component{
	
	render() {
		var employeeName = this.props.employeeName;
		
		var type1 = (
					<td>{employeeName} 11</td>
				);
		var type2 = (
				<td color="red">{employeeName} 22</td>
		);
		
		var nowType;
		if(employeeName=="kim"){
			console.log("kim Y");
			nowType = type1;	
		}else{
			console.log("kim N");
			nowType = type2;
		}
		
		return nowType;
	}
}


React.render(
	<App />,
	document.getElementById('react')
)
