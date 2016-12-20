import React from 'react';
import {render} from 'react-dom';
import EmployeeTable from './employeetable.jsx';
import Employee from './employee.jsx';

/* Point d'entrée front */
render(
    <EmployeeTable/>, document.getElementById('app'));
