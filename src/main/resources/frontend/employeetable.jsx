import React from 'react';
import Employee from './employee.jsx';
import $ from 'jquery';

export default class EmployeeTable extends React.Component {

  constructor() {
    super();
      this.state = { employees: [] }
    }


            loadEmployeesFromServer() {
                  var self = this;
                  $.ajax({
                    url: "http://localhost:8080/api/employees"
                  }).then(function (data) {
                    self.setState({employees: data._embedded.employees});
                  });
            }

        componentDidMount() {
          this.loadEmployeesFromServer();
          console.log("componentDidMount done");
        }


        render() {

          var rows = [];
          this.state.employees.forEach(function(employee) {
            rows.push(<Employee employee={employee} key={employee.id} />);
          });

                return (
                  <div className="container">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Name</th><th>Age</th><th>Years</th>
                      </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                  </table>
                </div>
                );
            }
        }
