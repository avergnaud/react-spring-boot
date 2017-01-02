import React from 'react';

/* classe qui affiche un employé */
export default class Employee extends React.Component {
    render() {

        return (
            <tr>
                <td>{this.props.employee.prenom}</td>
                <td>{this.props.employee.nom}</td>
            </tr>
        );
    }
}
