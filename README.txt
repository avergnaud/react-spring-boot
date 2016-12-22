ReactJS en ES6. Exemple de classe :

import React from 'react';

/* classe qui affiche un employé */
export default class Employee extends React.Component {
    render() {

        return (
            <tr>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.age}</td>
                <td>{this.props.employee.years}</td>
            </tr>
        );
    }
}

