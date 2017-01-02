Build et exécution :
lancer ./run.sh

Saisie d'une première personne [TODO à faire en React] :
curl -X POST -H "Content-Type:application/json" -d '{ "prenom" : "Charles", "nom" : "Fourier" }' http://localhost:8090/api/personnes

http://localhost:8080/
http://localhost:8090/api/personnes

********************************************************

ReactJS en ES6. Exemple de classe :

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
