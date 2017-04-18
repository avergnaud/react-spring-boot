
Sources React dans src/main/resources/frontend

1. Gestion des paquets node :
react-spring-boot>npm install

2. Build et exécution :
    lancer ./run.sh

3. Saisie d'une première personne :
    curl -X POST -H "Content-Type:application/json" -d '{ "prenom" : "Charles", "nom" : "Fourier" }' http://localhost:8090/api/personnes

4. Requêtes :
    http://localhost:8090/
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

********************************************************

https://facebook.github.io/react/tutorial/tutorial.html
