import React from 'react';
import Employee from './employee.jsx';
import $ from 'jquery';

/* classe qui représente un ensemble d'employés */
export default class EmployeeTable extends React.Component {

    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

    /* appelé par componentDidMount : charge les employés en ajax */
    loadEmployeesFromServer() {
        let self = this;
        $.ajax({url: "http://localhost:8090/api/personnes"}).then(function(data) {
            self.setState({employees: data._embedded.personnes});
        });
    }

    componentDidMount() {
        this.loadEmployeesFromServer();
        console.log("componentDidMount done");
    }

    render() {
        let rows = [];
        this.state.employees.forEach(function(employee) {
            rows.push(<Employee employee={employee} key={employee.id}/>);
        });

        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Prenom</th>
                            <th>Nom</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}
