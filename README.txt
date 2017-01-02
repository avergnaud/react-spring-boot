http://localhost:8080/

curl http://localhost:8090/api/personnes

curl -X POST -H "Content-Type:application/json" -d '{ "prenom" : "Charles", "nom" : "Fourier" }' http://localhost:8090/api/personnes

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
